🌐 Available Languages:  
- 🇬🇧 [English](README.md)  
- 🇧🇩 [বাংলায় পড়ুন](README.bn.md)
  
# **🔹 বাংলা ফাস্ট-রিডিং বুকমার্কলেট**  

## **এটি কি?**  
**এটি** একটি ব্রাউজার **বুকমার্ক**লেট যা **আ**পনার **ব্রাউজা**রের **লে**খা **সহ**জে **পড়া**র জন্য **এক**টি **পদ্**ধতি **প্র**য়োগ করে। **এ**টি **শ**ব্দের **গুরু**ত্বপূর্ণ **অং**শ **হাই**লাইট **ক**রে, যা **পড়া**র **গ**তি **এ**বং **বো**ঝার **ক্**ষমতা **বা**ড়ায়, এবং **অতি**রিক্ত কোন **ব্রাউ**জার **এক্স**টেনশন **ইন**স্টল **করা**র **প্রয়ো**জন হয় **না**।  

**ফুটনোট**: আপনার কি উপরের লেখাটিটি পড়তে সহজ মনে হয়েছে? 

## **👀 ফাস্ট-রিডিং কী?**  
**ফাস্ট-রিডিং** হল একটি **পাঠের কৌশল**, যা টেক্সট বোঝার ক্ষমতা এবং পড়ার গতি বাড়ায়, শব্দের গুরুত্বপূর্ণ অংশগুলো **গাঢ় (bold)** করে দেখানোর মাধ্যমে। আপনার **ব্রেইন স্বয়ংক্রিয়ভাবে একটি শব্দের বাকি অংশটুকু পূরণ করতে পারে**, ফলে পড়ার গতি ও স্বাচ্ছন্দ্য বাড়ে।  

🧠 **এটি কীভাবে সাহায্য করে?**  
✔️ **পড়ার গতি বাড়ায়** – মস্তিষ্ক দ্রুত শব্দ চিনতে পারে।  
✔️ **চোখের চাপ কমায়** – সহজে ট্র্যাক করা যায়।  
✔️ **মনোযোগ বৃদ্ধি করে** – ADHD, ডিসলেক্সিয়ার সমস্যা যাদের রয়েছে তাদেরকে ফোকাস রাখতে সাহায্য করে এবং পড়ার ক্লান্তি দূর করতে সাহায্য করে।  

বেশিরভাগ **ফাস্ট-রিডিং টুল** শুধুমাত্র **ইংরেজি বা ল্যাটিন স্ক্রিপ্টে** কাজ করে, কিন্তু এই **বুকমার্কলেটটি বাংলার জন্য তৈরি করা হয়েছে!**  তবে এটি ইংরেজীও সাপোর্ট করে।


এটি **একটি লাইটওয়েট, অনুমতি-মুক্ত বুকমার্কলেট** বানিয়েছি, যা **শুধু যখন দরকার তখনই চালাতে পারবেন!**  
✔️ ক্লিক করলেই টেক্সট সহজে পড়ার উপযোগী হবে
✔️ ইনস্টলেশনের ঝামেলা নেই
✔️ ট্র্যাকিং নেই
✔️ নিরাপত্তা ঝুঁকি নেই
✔️ আপনার সকল পেজের এক্সেস দিয়ে রাখার কোন দরকার নেই।

এটি **বাংলা ও ইংরেজি উভয় ভাষায়** ভালোভাবে কাজ করে! 

# কিভাবে ব্যবহার করবেন  
## ধাপ ১: আপনার ব্রাউজারে একটি নতুন বুকমার্ক এড করুন  
- ব্রাউজারের সার্চ বারের ডান পাশে থাকা `Bookmark` এর (star *)` আইকনে ক্লিক করুন। [_আপনি যেকোনো পেজ বুকমার্ক করতে পারেন, আমরা পরে এটি এডিট করবো_]  
- বুকমার্কের নাম দিন **`Read-Well`**  
- Folder dropdown থেকে `Bookmark Bar` সিলেক্ট করুন 
- `Done` ক্লিক করুন  

## ধাপ ২:  
নিচের টেক্সটি/ কোডটি কপি করুনঃ

`javascript:(()=>{let e=(e,t)=>{void 0!=t.nextSibling?t.parentNode.insertBefore(e,t.nextSibling):t.parentNode.appendChild(e)},t="undefined"!=typeof Intl&&void 0!==Intl.Segmenter,n=(e,n)=>{if(t){let r=new Intl.Segmenter(n,{granularity:"word"});return[...r.segment(e)].map(e=>e.segment)}return e.match(/\S+|\s+/g)||[]},r=(e,n)=>{if(t){let r=new Intl.Segmenter(n,{granularity:"grapheme"});return[...r.segment(e)].map(e=>e.segment)}return e.split("")},i=t=>{for(var i=0;void 0!=t.childNodes[i];i++)if("#text"==t.childNodes[i].nodeName&&0!=t.childNodes[i].textContent.trim().length){var l=t.childNodes[i],o=0;let a=n(t.childNodes[i].textContent,"bn");a.forEach(t=>{if(0===t.trim().length){var n=document.createTextNode(t);e(n,l),o++,l=n;return}let i=r(t,"bn"),a=Math.ceil(i.length/2);0===a&&(a=1);let d=document.createElement("b");if(d.innerHTML=i.slice(0,a).join(""),d.classList.add("readingHelper"),e(d,l),o++,l=d,i.length>a){var n=document.createTextNode(i.slice(a).join(""));e(n,l),o++,l=n}}),t.removeChild(t.childNodes[i]),i+=o-1}};var l={B:!0,META:!0,LINK:!0,SCRIPT:!0,STYLE:!0};let o=e=>{if(null!=e&&void 0!=e.body){var t=e.body.getElementsByClassName("readingHelper");if(t.length>0)for(var n=t.length-1;void 0!=t[n];n--){var r=t[n],a=t[n].nextSibling,d=t[n].parentNode,g=r.innerHTML+(a?a.textContent:"");g=g.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"),r.replaceWith(document.createTextNode(g)),a&&a.remove(),d.normalize()}else for(var m=e.body.getElementsByTagName("*"),n=0;void 0!=m[n];n++)if(!l[m[n].nodeName]&&1==m[n].nodeType){if("IFRAME"==m[n].nodeName)o(m[n].contentDocument);else{if(0==m[n].childNodes.length)continue;i(m[n])}}}};o(document)})();`

## ধাপ ৩:  
- আপনার ব্রাউজারের **বুকমার্ক বার** থেকে **Read-Well** বুকমার্কটি খুঁজে নিন, মাউসের রাইট বাটন ক্লিক করুন এবং **Edit সিলেক্ট করুন**।  
- আগে কপি করা কোড/লেখাটি **URL বক্সে পেস্ট করুন**।  
- **Save চাপুন**।  

## ধাপ ৪:  
- এখন, যখনই কোনো ব্রাউজার পেজের টেক্সট **ফাস্ট-রিডিং ফরম্যাটে** রূপান্তর করতে চান, আপনার ব্রাউজারের বুকমার্ক বার থেকে **Read-Well** বুকমার্কে ক্লিক করুন।  
- এটি **স্বয়ংক্রিয়ভাবে ওই পেজের টেক্সট ফাস্ট-রিডিং ফরম্যাটে রূপান্তর করবে**।  
- **দুইবার ক্লিক করলে** পেজের লেখা আবার **স্বাভাবিক অবস্থায় ফিরে যাবে**।  

ফিডব্যাক দিতে চাইলে- https://www.facebook.com/nafiuladnan or https://www.linkedin.com/in/nafiul-adnan/

