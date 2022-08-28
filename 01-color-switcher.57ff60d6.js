const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body;t.addEventListener("click",(()=>{setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3);t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(timerId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.57ff60d6.js.map
