main();

function main() {
    const groups_Buttons = document.querySelectorAll(".group-buttons");
    const input_Text = document.querySelector(".input");
    const texts = document.querySelectorAll(".form-texts-text");
    const button_Style = document.querySelector(".button-style");
    const window_Absolute = document.querySelector(".form-column-input-text");
    const window_Absolute_Text = window_Absolute.querySelector(".form-column-input-text-p");
    const object_Buttons = {};
    object_Buttons.buttons_Top = "";
    object_Buttons.buttons_Bottom = "";

    for (let i = 0; i < groups_Buttons.length; i++) {
        groups_Buttons[i].addEventListener('click', function () {
            const buttons = groups_Buttons[i].querySelectorAll(".button");
            for (let a = 0; a < buttons.length; a++) {
                if (buttons[a] == event.target) {
                    if (checkPartButtons(object_Buttons, groups_Buttons, i, buttons, a, window_Absolute_Text, input_Text) === false) {
                        return;
                    } else {
                        buttons[a].style.background = "red";
                        borderNone();
                        groups_Buttons[i].classList.add("background-red");
                        console.log(object_Buttons.buttons_Top);
                        console.log(object_Buttons.buttons_Bottom);
                    }
                }
            }
        });
    }

    button_Style.addEventListener('click', function () {
        const link_Href = document.querySelector("link");
        if (link_Href.getAttribute('href') == "style.css") {
            link_Href.setAttribute('href', 'style2.css');
            button_Style.style.backgroundColor = 'red';
        } else {
            link_Href.setAttribute('href', 'style.css');
            button_Style.style.backgroundColor = 'buttonface';
        }
    });

    input_Text.oninput = function () {
        checkAllButtons(object_Buttons, groups_Buttons, window_Absolute, window_Absolute_Text, input_Text);
    }
}

function checkAllButtons(object_Buttons, groups_Buttons, window_Absolute, window_Absolute_Text, input_Text) {

    if (object_Buttons.buttons_Top == "" && object_Buttons.buttons_Bottom == "") {

        if (object_Buttons.buttons_Top == "") {
            const buttons_Group_Top = document.querySelector(".form-column");
            buttons_Group_Top.classList.add("border-red");
            window_Absolute.style.display = "flex";
            window_Absolute_Text.style.display = "flex";
            input_Text.style.borderColor = "red";
        }

        if (object_Buttons.buttons_Bottom == "") {
            const buttons_Group_Bottom = document.querySelector(".form-buttons-input");
            buttons_Group_Bottom.classList.add("border-red");
            window_Absolute.style.display = "flex";
            window_Absolute_Text.style.display = "flex";
            input_Text.style.borderColor = "red";
        }
    } else {
        borderNone();
    }
}

function checkPartButtons(object_Buttons, groups_Buttons, i, buttons, a, window_Absolute_Text, input_Text) {
    if (groups_Buttons[0].classList.contains("background-red") && i == 1) {
        console.log("hello");
        return false;
    } else if (groups_Buttons[1].classList.contains("background-red") && i == 0) {
        console.log("good");
        return false;
    } else {
        for (let c = 0; c < groups_Buttons.length; c++) {
            if (groups_Buttons[c].classList.contains("border-red")) {
                groups_Buttons[c].classList.remove("border-red");
            }
        }
        for (let b = 0; b < buttons.length; b++) {
            if (buttons[b].style.background == "red" && b !== a) {
                buttons[b].style.background = "buttonface";
            }
        }
        if (i == 0) {
            if (a == 0) {
                object_Buttons.buttons_Top = "insert-tags";
            } else if (a == 1) {
                object_Buttons.buttons_Top = "insert-no-tags";
            } else if (a == 2) {
                object_Buttons.buttons_Top = "replacement-tags";
            } else if (a == 3) {
                object_Buttons.buttons_Top = "replacement-no-tags";
            }

            checkWindowAbsolute(i, window_Absolute_Text, input_Text);
        } else if (i == 1) {
            if (a == 0) {
                object_Buttons.buttons_Bottom = "before-begin";
            } else if (a == 1) {
                object_Buttons.buttons_Bottom = "after-begin";
            } else if (a == 2) {
                object_Buttons.buttons_Bottom = "before-end";
            } else if (a == 3) {
                object_Buttons.buttons_Bottom = "after-end";
            }

            checkWindowAbsolute(i, window_Absolute_Text, input_Text);
        }
    }
}

function checkWindowAbsolute(i, window_Absolute_Text, input_Text) {
    if (window_Absolute_Text.style.display == "flex") {
        document.querySelector(".form-column-input-text").style.display = "none";
        window_Absolute_Text.style.display = "none";
        input_Text.style.borderColor = "black";
    }
}

function borderNone() {
    const buttons = document.querySelectorAll(".button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].style.borderColor == "red") {
            buttons[i].style.borderColor == "black";
            console.log(i);
        }
    }
}
