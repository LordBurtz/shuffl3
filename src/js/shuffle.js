class pupil {
  name;
  constructor(name) {
    this.name = name;
  }
}

let flip = true;
let list_names = [];

let clicky = function () {
  var text = flip ? "Hello World!" : "Hallo Welt!";
  flip = !flip;
  document.getElementById("title_text").innerHTML = text;
};

let appendUL = function (ul, content) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(content));
  li.setAttribute("class", "name-li")
  document.getElementById(ul).appendChild(li);
};

const deleteLI = function (elem) {
  elem.closest("li").remove();
  if (document.getElementById("names").childNodes.length <= 0) {
    document.getElementById("names-box-div").setAttribute("style", "border-style: none")
  }
};

let appendAndButton = function (ul, content) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(content));
  var btn = document.createElement("button");
  btn.setAttribute("onClick", "deleteLI(this)");
  btn.textContent = "delete";
  li.appendChild(btn);
  li.setAttribute("class", "name-li");
  document.getElementById(ul).appendChild(li);
};

let submitName = function () {
  if (document.getElementById("fname".value) == "") {
    return;
  }
  document.getElementById("names-box-div").setAttribute("style", "border-style: solid")
  var name = document.getElementById("fname").value;
  document.getElementById("fname").value = "";
  appendAndButton("names", name);
  list_names.push(new pupil(name));
};

const rand = (length) => {
  return Math.floor(Math.random() * length);
};

let generate = function () {
  var bak = list_names;

  document.getElementById("leftover").innerHTML = "";
  document.getElementById("combs").innerHTML = "";
  document.getElementById("comb-box").setAttribute("style", "border-style: none");

  list_names = document.getElementById("names").getElementsByTagName("li");
  var ne = [];
  for (let i = 0; i < list_names.length; i++) {
    ne.push(new pupil(list_names[i].firstChild.nodeValue));
  }
  list_names = ne;
  if (list_names.length % 2 == 1) {
    var random = rand(list_names.length);
    var leftover = list_names[random];
    document.getElementById("leftover").innerHTML =
      "Leftover: " + leftover.name;
    list_names = list_names.filter((item) => {
      return item != leftover;
    });
  }
  while (list_names.length >= 2) {
    document.getElementById("comb-box").setAttribute("style", "border-style: solid");
    var a = list_names[rand(list_names.length)];
    list_names = list_names.filter((item) => {
      return item != a;
    });
    var b = list_names[rand(list_names.length)];
    list_names = list_names.filter((item) => {
      return item != b;
    });

    appendUL("combs", a.name + " and " + b.name);
  }
  list_names = bak;
  
  document.getElementById('combinations_text').scrollIntoView({behavior: "smooth"});
};
