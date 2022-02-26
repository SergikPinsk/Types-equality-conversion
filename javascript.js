var search = document.getElementById("greenplanet");
search.innerHTML = "Red Alert: hit by phaser fire!";
console.log(search.innerHTML);
search.setAttribute("class","redtext");
var getAtrEl = search.getAttribute("id");
 if (getAtrEl == null) {
     console.log("О я думаю что здесь нету такого атрибута ID");
 } else {
     console.log("Я не вижу изображения в Консоли ");
    console.log(" Но мне сказали что это выглядит именно так " + getAtrEl);
 }




var sergo;
console.log(sergo);


 преобразование , типы данных 

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = { "abcde": 123 };
var test8 = ["abcdef", 123];
function test9() { return "abcdef" };
var test10 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);



function lieDetectorTest() {
    var lies = 0;
    var stolenDiamond = { };
    if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++;
    }
    var car = {
    keysInPocket: null
    };
    if (car.keysInPocket) {
    console.log("Uh oh, guess you stole the car!");
    lies++;
    }
    if (car.emptyGasTank) {
    console.log("You drove the car after you stole it!");
    lies++;
    }
    var foundYouAtTheCrimeScene = [ ];
    if (foundYouAtTheCrimeScene) {
    console.log("A sure sign of guilt");
    lies++;
    }
    if (foundYouAtTheCrimeScene[0]) {
    console.log("Caught with a stolen item!");
    lies++;
    }
    var yourName = " ";
    if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
    }
    return lies;
   }
   var numberOfLies = lieDetectorTest();
   console.log("You told " + numberOfLies + " lies!");
   if (numberOfLies >= 3) {
    console.log("Guilty as charged");
   }

Методы 

 var str = "Ехал Грека  через реку."
 var index = str.indexOf("через");
 console.log("Наша первая позиция будет начинаться с  Индекса " + index);

function validate(phoneNumber) {
  if (phoneNumber.length !== 8) {
      return false;
  }  
   for (var i = 0; i < phoneNumber.length; i++) {
       if(i === 3) {
           if (phoneNumber.charAt(i) !== "-") {
               return false;
           }
       } else if (isNaN(phoneNumber.charAt(i))) {
           return false;
       }
   } 
   return true;
};
console.log(validate(375-6577));

