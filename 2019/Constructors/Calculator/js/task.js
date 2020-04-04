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
                    calculator.clearAllButton(buttonValue);
                }
                else if (buttonValue === "clear")
                {
                    calculator.clearButton(buttonValue);
                }
                else if (buttonValue === "delete")
                {
                    calculator.deleteButton(buttonValue);
                }
                else if (buttonValue === "+/-")
                {
                    calculator.signChangeButton(buttonValue);
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

        window.addEventListener('keydown', (event) =>
        {
            calculator.focusDelete(elementFocus, mainFocus);

            if (event.key === "delete" || event.key === "Backspace")
            {
                calculator.clickEffect("delete", buttons);
                calculator.deleteButton(event.key);
            }
            else if (event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" ||
                event.key === "4" || event.key === "5" || event.key === "6" ||
                event.key === "7" || event.key === "8" || event.key === "9" ||
                event.key === "+" || event.key === "-" || event.key === "*" ||
                event.key === "/" || event.key === "." || event.key === "=" || event.key === "Enter")
            {
                if (event.key === "=")
                {
                    calculator.clickEffect(event.key, buttons);
                    buttonValue = "=";
                    calculator.inputValue(buttonValue);
                }
                else
                {
                    calculator.clickEffect(event.key, buttons);
                    calculator.inputValue(event.key);
                }
            }
            if (event.key === "=")
            {
                calculator.clickEffect(event.key, buttons);
                calculator.calculateValue();
            }
        });
    });
})

()