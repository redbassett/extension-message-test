"use strict";

let listenerScript = document.createElement('script');
listenerScript.textContent = "window.addEventListener('instagramProcessEvent',function(ev){console.log('New event: ' + ev);},false);console.log('installed');";
(document.head||document.documentElement).appendChild(listenerScript);
listenerScript.remove();

setTimeout(function(){
	console.log('Sending message…');
	window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
},5000);
