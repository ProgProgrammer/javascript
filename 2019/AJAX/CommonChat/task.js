class FormSubmition
{
    constructor(object)
    {
        this.windowChat = object.windowChat;
        this.text = object.text;
        this.formInput = object.formInput;
        this.formText = object.formText;
        this.arrow = object.arrow;
        this.borderColorError;
        this.borderColor;
        this.textInput = [];
        this.xhr;
        this.textLine;
        this.noscroll = object.noscroll;
        //this.scroll = object.scroll;
        this.scrollValue;
    }

    checkForm(colorError, color)
    {
        this.borderColorError = colorError;
        this.borderColor = color;

        if (this.formInput.style.borderColor === this.borderColorError)
        {
            this.formInput.style.borderColor = this.borderColor;
        }
        if (this.formText.style.borderColor === this.borderColorError)
        {
            this.formText.style.borderColor = this.borderColor;
        }
    }

    scrollChat()
    {
        let scrollingValue;
        scrollingValue = this.text.clientHeight - this.windowChat.scrollTop;
        this.windowChat.scrollBy(0, scrollingValue);
        this.arrow.style.display = "none";
    }

    formProcessing(textInput)
    {
        this.textInput = textInput;
        let string = "";
        let array = [];
        let countText = 0;
        let scrollingValue;
        console.log(this.textInput);
        if (this.textInput !== undefined)
        {
            this.textInput[0] = encodeURIComponent(this.textInput[0]);
            this.textInput[1] = encodeURIComponent(this.textInput[1]);
            array[0] = this.textInput[0];
            array[1] = this.textInput[1];
        }
        console.log(array);
        this.xhr = new XMLHttpRequest();
        this.xhr.open("POST", "form.php", true);
        this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        this.xhr.onreadystatechange = () =>
        {
            if (this.xhr.readyState === 4 && this.xhr.status === 200)
            {
                this.textLine = JSON.parse(this.xhr.responseText);

                for (let i = 0; i < this.textLine.length; i++)
                {
                    countText++;
                    if (countText % 2 === 0)
                    {
                        string += '<p class="text-p">' + this.textLine[i] + '</p>';
                    }
                    else
                    {
                        string += '<p class="text-main">' + this.textLine[i] + '</p>';
                    }
                }

                scrollingValue = objectForm.text.clientHeight - objectForm.windowChat.scrollTop - objectForm.windowChat.clientHeight;

                this.text.innerHTML = string;

                if (scrollingValue <= 0)
                {
                    this.scrollChat();
                }
            }
        }
        console.log(JSON.stringify(array));
        this.xhr.send("form_input=" + JSON.stringify(array));
    }

    scrollProcessing(scrollValue)
    {
        this.scrollValue = scrollValue;
        if (this.noscroll === this.scrollValue)
        {
            this.arrow.style.display = "flex";
        }
        /*else if (this.scroll === this.scrollValue)
        {
            this.scrollChat();
        }*/
    }
}

(function()
{
    let formSubmition;
    let arrayText = [];
    let scrollingValue;
    let topArrow;
    const error = "red";
    const noError = "black";
    objectForm = {};
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
        objectForm.formText = objectForm.form.form_text;
        objectForm.arrow = document.querySelector(".arrow");

        formSubmition = new FormSubmition(objectForm);

        objectForm.form.onsubmit = (event) =>
        {
            event.preventDefault();
            formSubmition.checkForm(error, noError);
            if (objectForm.formText.value !== "")
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
                arrayText[1] = objectForm.formText.value;
                formSubmition.formProcessing(arrayText);
                formSubmition.scrollChat();
                console.log(arrayText);
                objectForm.formText.value = "";
            }
            else
            {
                if (objectForm.formName === undefined)
                {
                    objectForm.formInput.style.borderColor = "red";
                }
                if (objectForm.formText.value === "")
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

            if (scrollingValue > 0)
            {
                formSubmition.scrollProcessing(objectForm.noscroll);
            }

            topArrow = objectForm.windowChat.scrollTop + objectForm.windowChat.clientHeight - (objectForm.arrow.clientHeight + 10);
            objectForm.arrow.style.top = topArrow + "px";
        });

        formSubmition.scrollProcessing(objectForm.noscroll);
        setInterval(() => formSubmition.formProcessing(), 500, [undefined, undefined]);
    });
})

()