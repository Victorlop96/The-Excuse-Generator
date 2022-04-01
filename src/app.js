/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var aleatorio1 = Math.floor(Math.random() * 4);
  var aleatorio2 = Math.floor(Math.random() * 4);
  var aleatorio3 = Math.floor(Math.random() * 3);
  var aleatorio4 = Math.floor(Math.random() * 5);

  document.getElementById(
    "excuse"
  ).innerHTML = `${who[aleatorio1]} ${action[aleatorio2]} ${what[aleatorio3]} ${when[aleatorio4]}`;
  console.log("Hello Rigo from the console!");
};
