var location2 = 2;
var location3 = 3;
var location4 = 4;

var location0 = 0;
var location1 = 1;
var location5 = 5;
var location6 = 6;

var coordinate;
//var check;
var numberOfShots = 0;
var hits = 0;
var sunk = false;

var cell1 = document.querySelector("#cell1");
var cell2 = document.querySelector("#cell2");
var cell3 = document.querySelector("#cell3");
var cell4 = document.querySelector("#cell4");
var cell5 = document.querySelector("#cell5");
var cell6 = document.querySelector("#cell6");
var cell7 = document.querySelector("#cell7");

var button = document.querySelector(".window_site_button");
var window_site = document.querySelector(".window_site");

button.onclick = function () {
    
    window_site.classList.add("window_site_off");
    alert("Добро пожаловать в игру \"Морской бой\"!");
    
    while (sunk == false) {
        coordinate = +prompt("Прошу Вас ввести число-координату предполагаемого расположение корабля (с 0 по 6 клетку). Корабль находится в трех клетках.");

        if (coordinate < 0 || coordinate > 6) {
            alert("Введенное вами число выходит за пределы игрового поля.");
        } else {
            numberOfShots = numberOfShots + 1;

            if (coordinate == location2 || coordinate == location3 || coordinate == location4) {
                hits = hits + 1;
                alert("Вы попали " + hits + " раз!");
                
                if (coordinate == location2) {
                    cell3.classList.add("background_red");
                } else if (coordinate == location3) {
                    cell4.classList.add("background_red");
                } else if (coordinate == location4) {
                    cell5.classList.add("background_red");
                }

                if (hits == 3) {
                    sunk = true;
                }

            } else if (coordinate == location0) {
                cell1.classList.add("background_black");
                alert("Вы промахнулись.");
            } else if (coordinate == location1) {
                cell2.classList.add("background_black");
                alert("Вы промахнулись.");
            } else if (coordinate == location5) {
                cell6.classList.add("background_black");
                alert("Вы промахнулись.");
            } else if (coordinate == location6) {
                cell7.classList.add("background_black");
                alert("Вы промахнулись.");
            }
        }
    }

    if (numberOfShots >= 5) {
        alert("Вы потопили вражеский корабль! Вами было произведено " + numberOfShots + " выстрелов и вы попали " + hits + " раза. Точность попаданий составляет " + (300/numberOfShots) + "%.");

    } else {
        alert("Вы потопили вражеский корабль! Вами было произведено " + numberOfShots + " выстрела и вы попали " + hits + " раза. Точность попаданий составляет " + (300/numberOfShots) + "%.");
    }
}
