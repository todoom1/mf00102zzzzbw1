(function() {
    var secretApps = [
{img: './png/lhgj.jpg', name: '领航国际', xurl: 'aHR0cHM6Ly9yc2VzcmEuaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDY0JnB0PTgxRjQ2NjYzLTVEOTktRDlCMC04RTExLTIyQkQ0RDVGMkUyMw=='},
{img: './png/hygj.jpg', name: '汇赢国际', xurl: 'aHR0cHM6Ly9uY2djYS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDYyJnRvcElkPTEzNzMzJnNlbGZQbGFuSWQ9MTEzNw=='},
{img: './png/bsj.jpg', name: '保时捷', xurl: 'aHR0cHM6Ly93eC5ndGx5c2MuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMzQ1MjMyNzUmdG9wSWQ9MTU5NTY3NA'},
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTI2NTcxNTImc2VsZlBsYW5JZD0yMDcyMTA4'},
{img: './png/cfgj.jpg', name: '超凡国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnB0PThDOTA5QUZCLUZCMkYtNjREQy1GNjY1LTNGNjczQ0M2MkY1RA'},
{img: './svg/wd.svg', name: '问鼎娱乐', xurl: 'aHR0cHM6Ly9vbmtyY3kuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAyMCZ0b3BJZD0zODAyNzcyNw'},
{img: './png/xygj.jpg', name: '星耀国际', xurl: 'aHR0cHM6Ly9hbGl1YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU3JnRvcElkPTQxNTE3NzQxNjYzODQ2MTE'},
{img: './png/gjr.jpg', name: '国际人', xurl: 'aHR0cHM6Ly90ei53eGdqcjUuY2MvYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIzMDQmdG9wSWQ9MTc3NDEwNQ'},
{img: './png/jlgj.jpg', name: '君临国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MzAxNzI0MCZzZWxmUGxhbklkPTI1ODU2OTE'},
{img: './png/sjgj.png', name: '赏金国际', xurl: 'aHR0cHM6Ly94anZ1ZWIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAxMCZ0b3BJZD0yNDkxNzc1Njc1NjE0ODY1'},
{img: './png/xsd.jpg', name: '新时代', xurl: 'aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD00NjczNCZzZWxmUGxhbklkPTE3MzgwNw=='},
{img: './png/dfgj.jpg', name: '巅峰国际', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTEzODA2DQ=='}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026美加墨世界杯<br>-查看赛事赛程-");
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
