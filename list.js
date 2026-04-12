window["document"]['getElementById']("bsj")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly93eC5ndGx5c2MuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMzQ1MjMyNzUmdG9wSWQ9MTU5NTY3NA"), '_blank')
});
window["document"]['getElementById']("st")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTI2NTcxNTImc2VsZlBsYW5JZD0yMDcyMTA4"), '_blank')
});
window["document"]['getElementById']("cf")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnB0PThDOTA5QUZCLUZCMkYtNjREQy1GNjY1LTNGNjczQ0M2MkY1RA"), '_blank')
});
window["document"]['getElementById']("wd")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9vbmtyY3kuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAyMCZ0b3BJZD0zODAyNzcyNw"), '_blank')
});
window["document"]['getElementById']("xy")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9hbGl1YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU3JnRvcElkPTQxNTE3NzQxNjYzODQ2MTE"), '_blank')
});
window["document"]['getElementById']("gjr")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly90ei53eGdqcjUuY2MvYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIzMDQmdG9wSWQ9MTc3NDEwNQ"), '_blank')
});
window["document"]['getElementById']("jl")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MzAxNzI0MCZzZWxmUGxhbklkPTI1ODU2OTE"), '_blank')
});
window["document"]['getElementById']("sj")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly94anZ1ZWIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAxMCZ0b3BJZD0yNDkxNzc1Njc1NjE0ODY1"), '_blank')
});
window["document"]['getElementById']("xsd")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD00NjczNCZzZWxmUGxhbklkPTE3MzgwNw=="), '_blank')
});
window["document"]['getElementById']("df")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTEzODA2DQ=="), '_blank')
});
window["document"]['getElementById']("hy")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9uY2djYS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDYyJnRvcElkPTEzNzMzJnNlbGZQbGFuSWQ9MTEzNw=="), '_blank')
});
window["document"]['getElementById']("hyn")['innerHTML'] = ("汇赢国际");
window["document"]['getElementById']("bsjn")['innerHTML'] = ("保时捷");
window["document"]['getElementById']("stn")['innerHTML'] = ("胜天国际");
window["document"]['getElementById']("cfn")['innerHTML'] = ("超凡国际");
window["document"]['getElementById']("wdn")['innerHTML'] = ("问鼎娱乐");
window["document"]['getElementById']("xyn")['innerHTML'] = ("星耀国际");
window["document"]['getElementById']("gjrn")['innerHTML'] = ("国际人");
window["document"]['getElementById']("jln")['innerHTML'] = ("超凡国际");
window["document"]['getElementById']("sjn")['innerHTML'] = ("赏金国际");
window["document"]['getElementById']("xsdn")['innerHTML'] = ("新时代");
window["document"]['getElementById']("dfn")['innerHTML'] = ("巅峰国际");

window["document"]['getElementById']("3")['innerHTML'] = ("FIFA World Cup 2026™<br>官方合作广告商");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "MF88.MY";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问MF88！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}
