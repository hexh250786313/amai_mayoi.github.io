window.onload = function() {

  var topics = [];

  /*---------------
   *---- 模板 -----
  topics.push({
    id: '',
    index: '',
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
    index: '',
    date: '2019/04/04',
    dt:   '關於三月的二三事',
    ddp:  '\
      <img src = "http://pic.yupoo.com/sinaweibo4907754196_v/88e3a69f/039bc23d.jpg" style = "width: 600px;"/><br />\
      <br />\
      <br />\
      現在來看，整個三月最有意思的反而是月初可以沉溺在HTML的那幾天<br />\
      不知道有沒有任何研究表明人只要陷入無目的的生活狀態就會變得容易忠於本性。我以前一直以爲自己更喜歡玩游戲，但是自三月以來，我似乎更熱愛在論壇上跟人瞎扯<br />\
      就像克里斯塔普斯.波爾津吉斯在ACL損傷的當天晚上就跟鄰居的女人纏綿到一起，並在幹活的過程中不斷辱駡對方“婊子”、“奴隸”一樣<br />\
      對於無法把控的人生，我們總得找個能宣泄的地方<br />\
      <br />\
      當然，這個網站上綫的那天我就説過要把這個三月獻給JavaScript<br />\
      於是我只得强忍著生活的噁心感和日均三通的騷擾電話，去讀那本去年買的JS教程<br />\
      而今天則是第一次把JS用在了這個網站上。也算是小有所成<br />\
      但這並不足以掩蓋在大學生活最後幾個月裏，周圍快速變化的人、事、物給我帶來的壓迫感<br />\
      <br />\
      無論是寢室朋友們逐漸把生活重心往社會上移，還是學校仿佛趕人似的畢業要求以及8號宿舍樓施工的電鑽聲<br />\
      都像是生活在不斷地“kick my ass”，我的節奏變快了，這是一種我極討厭但又無法不遵從的節奏<br />\
      説得更通俗一點，也許這就是所謂的“我們突然長大了”<br />\
      <br />\
      看論壇是我的習慣，而我也一直很在意自己的網絡形象，但是這個月下來<br />\
      我似乎已經不太對他人對我發的帖抱有何種看法而顯得過分執著<br />\
      不過當然，我依然會努力地讓大家都感到愉悅<br />\
      這讓我想起了詹姆斯<br />\
      如果把今年勒布朗.詹姆斯的處境提前一年，去年的我一定會因爲他的事情而多擁有更多的樂子<br />\
      但是今年的我似乎對他有了不一樣的看法。我依然討厭他的精緻，但在我想象他面對過一切、經歷過的一切之後，剩下的只有肅然起敬的想法<br />\
      <br />\
      我本想更多地講講剛退役的波什、馬努<br />\
      但是仔細想想，對我而言，聯盟那些還在努力地為夢想、家人奮鬥的球員會更吸引人<br />\
      於是在評論德里克.羅斯的時候，我會想起他作爲替補登場取得的那50分和他的眼淚<br />\
      而不會過多在意他場下那些風流史<br />\
      我希望自己也能像羅斯、卡特一樣始終熱愛自己的事業<br />\
      <br />\
      我們無法得知波爾津吉斯自己有沒有預料到一年後他會面對鄰居女人的强奸控告，也無法得知獨行俠交易得到波爾津吉斯是出於何種想法<br />\
      但是這件終究會淹沒在NBA歷史長河的小事或多或少地教訓了我們，面對生活的不如意<br />\
      我們最應該做的，也許是咬著牙，繼續堅持<br />\
      如勒布朗在去年東決G2賽后一個人坐在技術統計台無聲的抵抗，如羅斯一次又一次被上帝撂倒，又一次又一次地衝擊籃下<br />\
      <br />\
      我想讓自己跑起來，快到挫折把我擊倒之前抵達我想去的終點<br />\
      ',
  });

  topics.push({
    id: '',
    index: ['利用GitHub Page搭建自己的Blog', 'post/2017-05-15.html'],
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
    index: '',
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

  topics.forEach(function(topic, i, a) {
                   var len = a.length;
                   var els = this;
                   return createTopic(topic, i, len, els);
                 }, getElements("topics", "index_t"));//每次给createTopics方法传递一个数组，getElements方法返回一个包含所需元素（topics和index_t）的对象，
                                                    //该对象将作为匿名函数的上下文，即在匿名函数中可以用this调用这个对象
  
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
function createTopic(topic, i, len, els) {
  //创建元素对象
  var dt = document.createElement("dt");
  var dd = document.createElement("dd");
  var p = document.createElement("p");
  var datespan = document.createElement("span");

  //设置dt部分
  dt.id = "no_" + (len - i);//id设置倒序，即最新的topic编号越靠后
  if(i < 2) dt.className = "lb_new";//前两个更新才有new的logo
  dt.innerHTML = '<a href="#top" class="top">▲Top</a>';
  datespan.innerText = topic.date;
  dt.appendChild(datespan);
  dt.appendChild(document.createTextNode(topic.dt));

  //设置dd部分
  p.innerHTML = topic.ddp;
  dd.appendChild(p);
  
  //把dt和dd放进dl（topics）中
  els["topics"].appendChild(dt);
  els["topics"].appendChild(dd);

  //检测是否需要为该topic设置索引
  //若需要，则在左栏的index_t中建立索引
  if(!topic.index) return;
  else {
    //创建表格元素
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    var td = document.createElement("td");
    var th_a = document.createElement("a");
    var td_a = document.createElement("a");

    //设置th部分
    th_a.href = "#no_" + (len - i);
    th_a.innerText = topic.index[0];
    th.appendChild(th_a);

    //td部分
    td_a.href = topic.index[1];
    td_a.target = "_blank";
    td_a.innerText = "page";
    td.appendChild(td_a);

    //把th和td放进tr中
    tr.appendChild(th);
    tr.appendChild(td);

    //把tr放入index
    els["index_t"].appendChild(tr);
  }
}