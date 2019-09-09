window.onload = function() {
  var clipboard = new ClipboardJS(document.getElementById("btn"));
                
  clipboard.on('success', function(e) {
    console.log(e);
    alert("郵箱地址已拷貝到剪貼板！");
  });
                
  clipboard.on('error', function(e) {
    console.log(e);
    alert("拷貝失敗，請手動輸入郵箱地址：250786313@qq.com");
  });
}
