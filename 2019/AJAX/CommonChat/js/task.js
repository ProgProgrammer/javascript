import { FormSubmition } from "./libraryCommonChat.js";

(function()
{
    let formSubmition;
    let arrayText = [];
    let scrollingValue;
    let topArrow;
    const error = "red";
    const noError = "black";
    const objectForm = {};
    objectForm.windowChat;
    objectForm.text;
    objectForm.form;
    objectForm.formName;
    objectForm.formInput;
    objectForm.formText;
    objectForm.arrow;
    objectForm.noscroll = "noscroll";
    //objectForm.scroll = "scroll";

    window.addEventListener("DOMContentLoaded", () =>
    {
        objectForm.windowChat = document.querySelector(".row-window");
        objectForm.text = document.querySelector(".text");
        objectForm.form = document.forms.form;
        objectForm.formInput = objectForm.form.form_input;
        objectForm.formText = document.querySelector(".input.textarea");
        objectForm.arrow = document.querySelector(".arrow");
        objectForm.button = document.querySelector(".button");

        formSubmition = new FormSubmition(objectForm);

        objectForm.form.addEventListener('keydown', (event) =>
        {
            if (event.code === "Enter" && event.ctrlKey)
            {
                objectForm.button.click();
            }
        });

        objectForm.form.onsubmit = (event) =>
        {
            event.preventDefault();
            formSubmition.checkForm(error, noError);
            if (objectForm.formText.innerHTML !== "")
            {
                if (objectForm.formInput.value !== "")
                {
                    objectForm.formName = objectForm.formInput.value;
                    objectForm.formInput.style.display = "none";
                    objectForm.formText.style.marginTop = 0;
                }
                else if (objectForm.formInput.style.display !== "none")
                {
                    objectForm.formInput.style.borderColor = "red";
                    return;
                }

                if (objectForm.formName === undefined)
                {
                    arrayText[0] = objectForm.formInput.value;
                }
                else
                {
                    arrayText[0] = objectForm.formName;
                }
                arrayText[1] = objectForm.formText.innerHTML;
                arrayText[2] = new Date().toLocaleString();
                console.log(arrayText[1]);
                console.log(arrayText[2]);
                formSubmition.formProcessing(arrayText);
                scrollingValue = objectForm.text.clientHeight - objectForm.windowChat.scrollTop - objectForm.windowChat.clientHeight;
                console.log(scrollingValue);

                if (scrollingValue <= 1)
                {
                    formSubmition.scrollChat();
                }
                console.log(arrayText);
                objectForm.formText.innerText = "";
            }
            else
            {
                if (objectForm.formName === undefined)
                {
                    objectForm.formInput.style.borderColor = "red";
                }
                if (objectForm.formText.innerHTML === "")
                {
                    objectForm.formText.style.borderColor = "red";
                }
            }
        }

        objectForm.arrow.addEventListener('click', () =>
        {
            formSubmition.scrollChat();
        });

        objectForm.windowChat.addEventListener('scroll', () =>
        {
            scrollingValue = objectForm.text.clientHeight - objectForm.windowChat.scrollTop - objectForm.windowChat.clientHeight;

            if (scrollingValue > 1)
            {
                formSubmition.scrollProcessing(objectForm.noscroll);
            }
            else
            {
                objectForm.arrow.style.display = "none";
            }

            topArrow = objectForm.windowChat.scrollTop + objectForm.windowChat.clientHeight - (objectForm.arrow.clientHeight + 10);
            objectForm.arrow.style.top = topArrow + "px";
        });

        window.addEventListener('resize', () =>
        {
            scrollingValue = objectForm.text.clientHeight - objectForm.windowChat.scrollTop - objectForm.windowChat.clientHeight;

            if (scrollingValue > 0)
            {
                formSubmition.scrollProcessing(objectForm.noscroll);
            }

            topArrow = objectForm.windowChat.scrollTop + objectForm.windowChat.clientHeight - (objectForm.arrow.clientHeight + 10);
            objectForm.arrow.style.top = topArrow + "px";
        });

        formSubmition.scrollProcessing(objectForm.noscroll);
        setInterval(() => formSubmition.formProcessing(), 500);
    });
})

()