javascript: void (() => {
  /* Insert one Node after another Node */
  const insertAfter = (newNode, existingNode) => {
    if (existingNode.nextSibling != undefined)
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    else existingNode.parentNode.appendChild(newNode);
  };

  /* Check if Intl.Segmenter is available */
  const supportsSegmenter = typeof Intl !== "undefined" && typeof Intl.Segmenter !== "undefined";

  /* Function to split text into words */
  const splitIntoWords = (text, lang) => {
    if (supportsSegmenter) {
      const segmenter = new Intl.Segmenter(lang, { granularity: "word" });
      return [...segmenter.segment(text)].map(seg => seg.segment);
    }
    /* Fallback: Use regex for basic word splitting */
    return text.match(/\S+|\s+/g) || [];
  };

  /* Function to split words into graphemes (characters) */
  const splitIntoGraphemes = (word, lang) => {
    if (supportsSegmenter) {
      const graphemeSegmenter = new Intl.Segmenter(lang, { granularity: "grapheme" });
      return [...graphemeSegmenter.segment(word)].map(seg => seg.segment);
    }
    /* Fallback: Treat each character as a separate grapheme */
    return word.split("");
  };

  /* Process all children of a Node */
  const HalfBold = (parentElement) => {
    for (var i = 0; parentElement.childNodes[i] != undefined; i++) {
      if (
        parentElement.childNodes[i].nodeName == "#text" &&
        parentElement.childNodes[i].textContent.trim().length != 0
      ) {
        var recentNode = parentElement.childNodes[i];
        var newNodeCount = 0;

        /* Split text into words */
        const words = splitIntoWords(parentElement.childNodes[i].textContent, "bn");

        words.forEach(word => {
          if (word.trim().length === 0) {
            var textNode = document.createTextNode(word);
            insertAfter(textNode, recentNode);
            newNodeCount++;
            recentNode = textNode;
            return;
          }

          /* Split word into characters (graphemes) */
          const characters = splitIntoGraphemes(word, "bn");

          /* Determine split point */
          let boldLength = Math.ceil(characters.length / 2);
          if (boldLength === 0) boldLength = 1;

          /* Apply bold */
          const bold = document.createElement("b");
          bold.innerHTML = characters.slice(0, boldLength).join("");
          bold.classList.add("readingHelper");
          insertAfter(bold, recentNode);
          newNodeCount++;
          recentNode = bold;

          /* Add remaining text */
          if (characters.length > boldLength) {
            var textNode = document.createTextNode(characters.slice(boldLength).join(""));
            insertAfter(textNode, recentNode);
            newNodeCount++;
            recentNode = textNode;
          }
        });

        /* Remove the original text element */
        parentElement.removeChild(parentElement.childNodes[i]);
        i += newNodeCount - 1;
      }
    }
  };

  /* Prevent processing certain nodes */
  var ignoreTags = {
    B: true,
    META: true,
    LINK: true,
    SCRIPT: true,
    STYLE: true,
  };

  const processDocumentBody = (element) => {
    if (element == null) return;
    if (element.body == undefined) return;

    var existingHelperElements = element.body.getElementsByClassName("readingHelper");

    if (existingHelperElements.length > 0) {
      /* Restore original text */
      for (var i = existingHelperElements.length - 1; existingHelperElements[i] != undefined; i--) {
        var start = existingHelperElements[i];
        var end = existingHelperElements[i].nextSibling;
        var parent = existingHelperElements[i].parentNode;
        var plain = start.innerHTML + (end ? end.textContent : "");

        plain = plain.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        start.replaceWith(document.createTextNode(plain));
        if (end) end.remove();
        parent.normalize();
      }
    } else {
      /* Process all elements */
      var collection = element.body.getElementsByTagName("*");
      for (var i = 0; collection[i] != undefined; i++) {
        if (ignoreTags[collection[i].nodeName]) continue;
        if (collection[i].nodeType != 1) continue;
        if (collection[i].nodeName == "IFRAME") {
          processDocumentBody(collection[i].contentDocument);
        } else {
          if (collection[i].childNodes.length == 0) continue;
          HalfBold(collection[i]);
        }
      }
    }
  };

  processDocumentBody(document);
})();
