window.onload = function() {

  var products = [];

  /*---------------
   *---- 模板 -----
  products.push({
    id: '',
    index: ['', ''],
    dt:   '',
    ddp:  '\
      <img src="图片"/><br />\
      <a href="链接" target="_blank">Source Code</a>&nbsp;⇐&nbsp;&nbsp;\
      描述<br />\
      ',
  });
  -----------------*/

  products.push({
    id: '',
    index: ['My Vocabulary', 'https://github.com/hexh250786313/MyVocabulary.github.io'],
    dt:   '这是一个用来记录英语单词信息的JAVA程序',
    ddp:  '\
      <img src="http://pic.yupoo.com/sinaweibo4907754196_v/e364ee9a/23b024e2.png"/><br />\
      <a href="https://github.com/hexh250786313/MyVocabulary.github.io" target="_blank">Source Code</a>&nbsp;⇐&nbsp;&nbsp;\
      这是一个用来记录英语单词信息的JAVA程序。非常地簡陋。有最基本的讀取、添加和刪除功能，利用XML文檔進行儲存。<br />\
      ',
  });

  products.push({
    id: '',
    index: ['ToDoListViewer', 'https://github.com/hexh250786313/ToDoListViewer'],
    dt:   '这是一个用来显示备忘事项的JAVA程序',
    ddp:  '\
      <img src="http://pic.yupoo.com/sinaweibo4907754196_v/917796ab/6efd2750.png"/><br />\
      <a href="https://github.com/hexh250786313/ToDoListViewer" target="_blank">Source Code</a>&nbsp;⇐&nbsp;&nbsp;\
      这是一个用来显示备忘事项的JAVA程序。查看ToDo清單，隨時整理工作條目。<br />\
      ',
  });

  products.forEach(function(product, i, a) {
                   var len = a.length;
                   var els = this;
                   return createProduct(product, i, len, els);
                 }, getElements("products", "index_t"));//每次给createProducts方法传递一个数组，getElements方法返回一个包含所需元素（products和index_t）的对象，
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

//新建一个product，每次接收一个product对象，每个product有id、index、dt、ddp四个属性
function createProduct(product, i, len, els) {
  //创建元素对象
  var dt = document.createElement("dt");
  var dd = document.createElement("dd");
  var p = document.createElement("p");
  var span = document.createElement("span");

  //设置dt部分
  dt.id = "no_" + (len - i);//id设置倒序，即最新的product编号越靠后
  if(i < 1) dt.className = "lb_new";//第一个更新才有new的logo
  dt.innerHTML = '<a href="#top" class="top">▲Top</a>';
  dt.appendChild(document.createTextNode(product.dt));

  //设置dd部分
  p.innerHTML = product.ddp;
  span.innerHTML = product.index[0] + "<br /><br />";
  dd.appendChild(span);
  dd.appendChild(p);
  
  //把dt和dd放进dl（products）中
  els["products"].appendChild(dt);
  els["products"].appendChild(dd);

  //设置索引栏
  //创建表格元素
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  var td = document.createElement("td");
  var th_a = document.createElement("a");
  var td_a = document.createElement("a");

  //设置th部分
  th_a.href = "#no_" + (len - i);
  th_a.innerText = product.index[0];
  th.appendChild(th_a);

  //td部分
  td_a.href = product.index[1];
  td_a.target = "_blank";
  td_a.innerText = "page";
  td.appendChild(td_a);

  //把th和td放进tr中
  tr.appendChild(th);
  tr.appendChild(td);

  //把tr放入index
  els["index_t"].appendChild(tr);
}