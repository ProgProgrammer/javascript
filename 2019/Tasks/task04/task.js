window.onload = main;

function main() {
    let tab = document.querySelectorAll(".tab");

    init();

    function init() {
        let tabBody = document.querySelectorAll(".tab-body");
        const number = 1;
        cycle(number, tabBody);
    }

    tab.forEach((element) => {
        element.onclick = showTabs;
    });

    function showTabs() {
        const data = this.getAttribute("data");
        const tabBody = document.querySelectorAll(".tab-body");
        const number = 0;
        cycle(number, tabBody, data);
        document.querySelector(`.tab-body[data="${data}"]`).style.display = "block";
        document.querySelector(`.tab[data="${data}"]`).classList.add("active");
    }

    function cycle(number, tabBody, data) {
        for (let i = number; i < tabBody.length; i++) {
            tabBody[i].style.display = "none";
            if (number != 1) {
                tab[i].classList.remove("active");
            }
        }
    }
}