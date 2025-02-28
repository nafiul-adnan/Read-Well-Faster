🌐 Available Languages:  
- 🇬🇧 [English](README.md)  
- 🇧🇩 [বাংলায় পড়ুন](README.bn.md)
  
# **🔹 Bengali Bionic Reading Bookmarklet**  

## **What is this?**  
**Th**is is a **bookm**arklet **th**at **ma**kes **Engl**ish **a**nd **Ben**gali  **te**xt **eas**ier **to** **re**ad by **app**lying **Bionic Reading**. It **highl**ights **par**ts of **wor**ds **t**o **impr**ove **reada**bility and **sp**eed, **with**out **requ**iring a **brow**ser **exten**sion.  

**Footnote**: The above section was written in bionic format, did you find it easier to read? And the rest of the section is not written in Bionic just to let you feel how easy it is to read using bionic! 

## **👀 What is Bionic Reading?**  
**Bionic Reading** is a reading method that enhances **text comprehension and speed** by making the most important parts of words bold. Your brain can then **fill in the rest**, making reading feel faster and smoother.  

🧠 **How does it help?**  
✔️ **Increases reading speed** – Your brain processes words faster.  
✔️ **Reduces eye strain** – Easier tracking of words.  
✔️ **Improves focus** – Helps people with ADHD, dyslexia, and reading fatigue.  
- Read this [Bionic Article in Bionic format](https://www.brighthr.com/ie/blog/healthy-minds/bionic-reading-and-adhd-effective-ways-to-support-your-staff/) to learn more.
  
Most Bionic Reading tools only work for **English or Latin scripts**, but this **bookmarklet brings it to Bengali!**  


## **🤔 Why did I code for this Although there are some English Extensions availale?**  
I don't feel safe installing browser extensions that request excessive permissions like "Read and change all your data on all websites." Most **Bionic Reading** solutions require full browser access, which feels unnecessary for a simple text-processing task.  Also, I didn't find any good resources that supports Bengali text well. 

So, I coded this **lightweight, permission-free bookmarklet** that you can run **only when you need it**! Just click, and it enhances the text instantly. No installations, no tracking, no security risks.  
It works well in Both Bengali and English. 


## **💡 Features**  
✔️ Works on **any webpage**  
✔️ **No installations** or permissions required  
✔️ Uses **Intl.Segmenter** for proper Bengali word breaking  
✔️ **Reversible** – Click again to restore the original text  

# How to use it
## You can also Watch this [video to setup](https://drive.google.com/file/d/11gaVCh6ZoZwWt2_FzFEgRV5Uv6-wLGMG/view?usp=drive_link) 
## Step 1: Add a new bookmark in your browser,
- Click the `Bookmark (star *)` icon on the right side of your browser's top search bar. [_You can bookmark any page, we'll edit that later anyway_]
- Name the bookmark as `Read-Well`
- Select the `Bookmark Bar` for the Folder dropdown
- Click Done

## Step 2:
### Option 1 (if you're used to with github)
- Click the `readWell_helper.js` file above, or click [here](https://github.com/nafiul-adnan/Read-Well-Bionic/blob/main/readWell_helper.js)
- Click the `Copy Raw file` button to copy the javascript minified code. 

### Alternatively, you can just copy the below text:
`javascript:(()=>{let e=(e,t)=>{void 0!=t.nextSibling?t.parentNode.insertBefore(e,t.nextSibling):t.parentNode.appendChild(e)},t="undefined"!=typeof Intl&&void 0!==Intl.Segmenter,n=(e,n)=>{if(t){let r=new Intl.Segmenter(n,{granularity:"word"});return[...r.segment(e)].map(e=>e.segment)}return e.match(/\S+|\s+/g)||[]},r=(e,n)=>{if(t){let r=new Intl.Segmenter(n,{granularity:"grapheme"});return[...r.segment(e)].map(e=>e.segment)}return e.split("")},i=t=>{for(var i=0;void 0!=t.childNodes[i];i++)if("#text"==t.childNodes[i].nodeName&&0!=t.childNodes[i].textContent.trim().length){var l=t.childNodes[i],o=0;let a=n(t.childNodes[i].textContent,"bn");a.forEach(t=>{if(0===t.trim().length){var n=document.createTextNode(t);e(n,l),o++,l=n;return}let i=r(t,"bn"),a=Math.ceil(i.length/2);0===a&&(a=1);let d=document.createElement("b");if(d.innerHTML=i.slice(0,a).join(""),d.classList.add("readingHelper"),e(d,l),o++,l=d,i.length>a){var n=document.createTextNode(i.slice(a).join(""));e(n,l),o++,l=n}}),t.removeChild(t.childNodes[i]),i+=o-1}};var l={B:!0,META:!0,LINK:!0,SCRIPT:!0,STYLE:!0};let o=e=>{if(null!=e&&void 0!=e.body){var t=e.body.getElementsByClassName("readingHelper");if(t.length>0)for(var n=t.length-1;void 0!=t[n];n--){var r=t[n],a=t[n].nextSibling,d=t[n].parentNode,g=r.innerHTML+(a?a.textContent:"");g=g.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"),r.replaceWith(document.createTextNode(g)),a&&a.remove(),d.normalize()}else for(var m=e.body.getElementsByTagName("*"),n=0;void 0!=m[n];n++)if(!l[m[n].nodeName]&&1==m[n].nodeType){if("IFRAME"==m[n].nodeName)o(m[n].contentDocument);else{if(0==m[n].childNodes.length)continue;i(m[n])}}}};o(document)})();`


## Step 3:
- Find the `Read-Well` bookmark on your browser's bookmark bar, right click and select **Edit**
- Paste the previously copied code/text in the **URL box**.
- Press **Save** 

## Step 4:
- Now whenever you need to convert a page's text to Bionic, Just click the `Read-Well` bookmark option and it'll convert the page to bionic.
- Click the `Read-Well` bookmark option twice and it'll reverse the page to normal.
- This code also supports both Bangla and English text conversation.


For feedback: https://www.facebook.com/nafiuladnan or https://www.linkedin.com/in/nafiul-adnan/
