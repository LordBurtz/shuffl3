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
  document.getElementById(ul).appendChild(li);
};

const deleteLI = function (elem) {
  elem.closest("li").remove();
};

let appendAndButton = function (ul, content) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(content));
  var btn = document.createElement("button");
  btn.setAttribute("onClick", "deleteLI(this)");
  btn.textContent = "delete";
  li.appendChild(btn);
  document.getElementById(ul).appendChild(li);
};

let submitName = function () {
  if (document.getElementById("fname".value) == "") {
    return;
  }
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
