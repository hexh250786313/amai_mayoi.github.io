window.onload = function() {

  var topics = [];
  var products = [];
  var els = getElements("topics", "btn", "new", "products");

  /*---------------
   *---- 模板 -----
  topics.push({
    id: '',
    date: '',
    dt:   '',
    ddp:  '\
      <br />\
      <br />\
      <br />\
      <br />\
      <br />\
      <br />\
      ',
  });
  -----------------*/

  topics.push({
    id: '',
    date: '2019/04/04',
    dt:   '關於三月的二三事',
    ddp:  '\
      現在來看，整個三月最有意思的反而是月初可以沉溺在HTML的那幾天<br />\
      不知道有沒有任何研究表明人只要陷入無目的的生活狀態就會變得容易忠於本性。我以前一直以爲自己更喜歡玩游戲，但是自三月以來，我似乎更熱愛在論壇上跟人瞎扯<br />\
      就像克里斯塔普斯.波爾津吉斯在ACL損傷的當天晚上就跟鄰居的女人纏綿到一起，並在幹活的過程中不斷辱駡對方“婊子”、“奴隸”一樣<br />\
      對於無法把控的人生，我們總得找個能宣泄的地方... <a href = "topics.html#sidebar">更多</a><br />\
      ',
  });

  topics.push({
    id: '',
    date: '2019/03/08',
    dt:   '一篇2017年寫的GitHub Page使用方法',
    ddp:  '\
      <a href="post/2017-05-15.html" target="_blank">利用GitHub Page搭建自己的Blog</a><br />\
      這是一篇2017年時寫的GitHub Page攻略，重新書寫格式以及修改以後作爲第一篇發佈貼了上來了。<br />\
      <br />\
      本來是作爲給小白也能看懂的攻略而寫的，但是發現沒有web基礎的話還是非常難懂的，所以本攻略還是推薦有一定web設計理論基礎的同學食用。<br />\
      ',
  });
  
  topics.push({
    id: '',
    date: '2019/03/07',
    dt:   '網站的全部展示頁面都已經完成啦！',
    ddp:  '\
      今天是2019/03/07，歷時一周，總算把剩下那幾個頁面都肝完了。<br />\
      <br />\
      那麽本網站就正式投入使用了，以後會時不時會有日誌的更新。另外我在以前的博客中寫過的部分日誌也會在未來幾天重新書寫格式然後貼到這裏來。<br />\
      <br />\
      而關於本站的全部簡介說明我都在網頁右上角“關於我”那個鏈接裏書寫好了，請務必先粗略瀏覽。<a href="about_me.html">關於我</a> ⇐ 或者請點擊這裏<br />\
      ',
  });

  topics.push({
    id: '',
    date: '',
    dt:   '今後活躍的地方',
    ddp:  '\
      <br /><span style = "margin-left: 40px;"></span>\
      繼續啃JS，這是個很難熬的時期，但也給了我富裕的時間去學更多\
      <br />',
  });

  /**--------------
   * ---模板-------
  products.push({
    dt:  '',
    p_t: '',
    ddp:  '\
      <br />\
      \
      ',
  });
   --------------*/
  
  products.push({
    dt:  'HTML設計',
    p_t: '我的個人博客&nbsp;<img src="img/tama.ico" style="width: 20px; vertical-align: -5px;"/></p_t>',
    ddp: '\
      <br />\
      <a href="https://github.com/hexh250786313/amai_mayoi.github.io" target="_blank">Source Code</a>&nbsp;⇐<br />\
      就是本網站的源代碼，用的還只是非常low的HTML設計（連更新頁都是HTML寫的），等我JS學好了就重新設計一下。\
      ',
  });

  products.push({
    dt:  'JAVA',
    p_t: 'My Vocabulary',
    ddp:  '\
      <br />\
      <a href="https://github.com/hexh250786313/MyVocabulary.github.io" target="_blank">Source Code</a>&nbsp;⇐<br />\
      这是一个用来记录英语单词信息的JAVA程序。\
      ',
  });

  products.push({
    dt:  '未定',
    p_t: '無',
    ddp:  '\
      <br />\
      \
      ',
  });

  els["new"].innerText = "\
2019/04/05\n\
對網頁文檔進行重構\n\
在主要文檔上使用了JS進行内容更新\n\
\n\
2019/03/09\n\
為網站添加了標籤頁的小圖標\n\
是綾里家祖傳的綠色小勾玉\n\
雖然看起來很像個數字的９\n\
\n\
2019/03/07\n\
網站的佈局均已全部施工完畢！\n\
\n\
2019/02/26\n\
看到了某本子畫師的博客很喜歡\n\
一邊借鑒一邊以真宵為主題設計了本網站\n\
  ";

  topics.forEach(function(topic, i, a) {
                   var len = a.length;
                   var topics = this;
                   return createTopic(topic, i, len, topics);
                 }, els["topics"]);//每次给createTopics方法传递topics，getElements方法返回一个包含所需元素（topics）的对象，
                                   //该对象将作为匿名函数的上下文，即在匿名函数中可以用this调用这个对象
  
  products.forEach(function(prdc, i) {
                     var products = this;
                     return createPrdc(prdc, i, products);
                   }, els["products"]);//products在HTML中是一个div标签，里面有h2、dl、dt、dd和p

  //设置邮箱拷贝功能
  clip(els["btn"]);
  
}

//获取Element对象，返回属性是Element的对象
function getElements(/*ids...*/) {
  var elements = {};
  for(var i = 0; i < arguments.length; i++) {
    var id = arguments[i];
    var elt = document.getElementById(id);
    if(elt == null)
      throw new Error("找不到id: " + id);
    elements[id] = elt;
  }
  return elements;
}

//新建一个topic，每次接收一个topic对象，每个topic有id、index、date、dt、ddp三个属性
function createTopic(topic, i, len, topics) {
  //创建元素对象
  var dt = document.createElement("dt");
  var dd = document.createElement("dd");
  var p = document.createElement("p");
  var datespan = document.createElement("span");

  //设置dt部分
  dt.id = "no_" + (len - i);//id设置倒序，即最新的topic编号越靠后
  if(i < 2) dt.className = "lb_new";//前两个更新才有new的logo
  datespan.innerText = topic.date;
  dt.appendChild(datespan);
  dt.appendChild(document.createTextNode(topic.dt));

  //设置dd部分
  p.innerHTML = topic.ddp;
  dd.appendChild(p);
  
  //把dt和dd放进dl（topics）中
  topics.appendChild(dt);
  topics.appendChild(dd);
}

//新建一个product，每次接收一个product对象，每个product有dt、、p_t、ddp三个属性
function createPrdc(prdc, i, products) {
  //创建元素对象
  var h2 = document.createElement("h2");
  var dl = document.createElement("dl");
  var dt = document.createElement("dt");
  var dd = document.createElement("dd");
  var p_t = document.createElement("p_t");
  var p = document.createElement("p");

  //三个元素分别对应新作品展示、过去作品和未来计划三个部分
  //所以此处有条件分支
  //第一个是新作品展示
  if(i == 0) {
    h2.innerText = "作業報告";
    dt.innerText = prdc.dt;
    p_t.innerHTML = prdc.p_t;
    p.innerHTML = prdc.ddp;

    dd.appendChild(p_t);
    dd.appendChild(p);
    dl.appendChild(dt);
    dl.appendChild(dd);
    products.appendChild(h2);
    products.appendChild(dl);
  }

  //第二个是过去作品展示
  if(i == 1) {
    h2.innerText = "以前的作業情報";
    dt.innerText = prdc.dt;
    p_t.innerHTML = prdc.p_t;
    p.innerHTML = prdc.ddp;

    dd.appendChild(p_t);
    dd.appendChild(p);
    dl.appendChild(dt);
    dl.appendChild(dd);
    products.appendChild(h2);
    products.appendChild(dl);
  }

  //第三个是正在开发的作品
  if(i == 2) {
    h2.innerText = "正在開發的作品情報";
    dt.innerText = prdc.dt;
    p_t.innerHTML = prdc.p_t;
    p.innerHTML = prdc.ddp;

    dd.appendChild(p_t);
    dd.appendChild(p);
    dl.appendChild(dt);
    dl.appendChild(dd);
    products.appendChild(h2);
    products.appendChild(dl);
  }

}

//把元素变为剪贴板
function clip(btn) {
  var clipboard = new ClipboardJS(btn);
                
  clipboard.on('success', function(e) {
    console.log(e);
    alert("郵箱地址已拷貝到剪貼板！");
  });
                
  clipboard.on('error', function(e) {
    console.log(e);
    alert("拷貝失敗，請手動輸入郵箱地址：250786313@qq.com");
  });
}