import { StringManagment } from "./libraryStringManagment.js";

(function()
{
    let stringManagment;
    const objectStringManagment = {};
    objectStringManagment.buttons;
    objectStringManagment.tabs;

    window.addEventListener('DOMContentLoaded', () =>
    {
        objectStringManagment.buttons = document.querySelectorAll(".button");
        objectStringManagment.tabs = document.querySelectorAll(".tab");

        stringManagment = new StringManagment(objectStringManagment);

        for (let i = 0; i < objectStringManagment.buttons.length; i++)
        {
            objectStringManagment.buttons[i].addEventListener('click', () =>
            {
                stringManagment.tabSwitching(i);
            });
        }
    });
})

()