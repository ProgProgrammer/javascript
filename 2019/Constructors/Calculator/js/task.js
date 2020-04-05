import { Calculator } from './libraryCalculator.js';

(function()
{
    let calculator;
    let buttons;
    let buttonValue;
    let elementFocus;
    let mainFocus;

    window.addEventListener('DOMContentLoaded', () =>
    {
        console.log("Hello");
        buttons = document.querySelectorAll(".main-blocks-buttons-button");
        mainFocus = document.querySelector(".input-hidden");
        elementFocus = document.querySelector(".main-blocks-input");
        calculator = new Calculator();

        for (let i = 0; i < buttons.length; i++)
        {
            buttons[i].addEventListener('click', () =>
            {
                buttonValue = buttons[i].dataset.name;
                console.log(buttonValue);
                if (buttonValue === "clear-all")
                {
                    calculator.clearAllButton();
                }
                else if (buttonValue === "clear")
                {
                    calculator.clearButton();
                }
                else if (buttonValue === "delete")
                {
                    calculator.deleteButton();
                }
                else if (buttonValue === "+/-")
                {
                    calculator.signChangeButton();
                }
                else
                {
                    calculator.inputValue(buttonValue);
                }
                if (buttonValue === "=")
                {
                    calculator.calculateValue();
                }
            });
        }

        const buttonBackground = (button) =>
        {
            button.style.backgroundColor = "";
        }

        const clickEffect = (button, buttons) =>
        {
            for (let i = 0; i < buttons.length; i++)
            {
                buttonValue = buttons[i].dataset.name;
                if (buttonValue === button)
                {
                    buttons[i].style.backgroundColor = "#bfbfbf";
                    setTimeout(buttonBackground, 60, buttons[i]);
                }
            }
        }

        window.addEventListener('keydown', (event) =>
        {
            calculator.focusDelete(elementFocus, mainFocus);
            console.log(event.key);
            if (event.key === "Enter")
            {
                elementFocus = document.querySelectorAll(".main-blocks-buttons-button");
                calculator.focusDelete(elementFocus, mainFocus);
                return;
            }

            if (event.key === "delete" || event.key === "Backspace")
            {
                clickEffect("delete", buttons);
                calculator.deleteButton(event.key);
            }
            else if (event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" ||
                event.key === "4" || event.key === "5" || event.key === "6" ||
                event.key === "7" || event.key === "8" || event.key === "9" ||
                event.key === "+" || event.key === "-" || event.key === "*" ||
                event.key === "/" || event.key === "." || event.key === "=")
            {
                if (event.key === "=")
                {
                    clickEffect(event.key, buttons);
                    buttonValue = "=";
                    calculator.inputValue(buttonValue);
                }
                else
                {
                    clickEffect(event.key, buttons);
                    calculator.inputValue(event.key);
                }
            }
            if (event.key === "=")
            {
                clickEffect(event.key, buttons);
                calculator.calculateValue();
            }
        });
    });
})

()