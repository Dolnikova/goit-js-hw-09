const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;t.addEventListener("click",(()=>{timerId=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(timerId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.6c4cbb49.js.map
