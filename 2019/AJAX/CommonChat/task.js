class FormSubmition
{
    constructor(object)
    {
        this.text = object.text;
        this.formInput = object.formInput;
        this.borderColorError;
        this.borderColor;
        this.textInput;
        this.xhr;
        this.textLine;
    }

    checkForm(colorError, color)
    {
        this.borderColorError = colorError;
        this.borderColor = color;

        if (this.formInput.style.borderColor === this.borderColorError)
        {
            this.formInput.style.borderColor = this.borderColor;
        }
    }

    formProcessing(textInput)
    {
        this.textInput = textInput;
        let string = "";
        let arrayText = [];
        this.textInput = encodeURIComponent(this.textInput);
        arrayText[0] = this.textInput;
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
                    string += '<p class="text-p">' + this.textLine[i] + '</p>';
                }

                this.text.innerHTML = string;
            }
        }
        this.xhr.send("form_input=" + JSON.stringify(arrayText));
    }
}

(function()
{
    let formSubmition;
    objectForm = {};
    objectForm.text;
    objectForm.form;
    objectForm.formInput;
    objectForm.formInputText;

    window.addEventListener("DOMContentLoaded", () =>
    {
        objectForm.text = document.querySelector(".text");
        objectForm.form = document.forms.form;
        objectForm.formInput = objectForm.form.form_input;

        formSubmition = new FormSubmition(objectForm);

        objectForm.form.onsubmit = (event) =>
        {
            event.preventDefault();
            formSubmition.checkForm("red", "black");
            if (objectForm.formInput.value !== "")
            {
                objectForm.formInputText = objectForm.formInput.value;
                formSubmition.formProcessing(objectForm.formInputText);
                objectForm.formInput.value = "";
            }
            else
            {
                objectForm.formInput.style.borderColor = "red";
            }
        }

        setInterval(() => formSubmition.formProcessing(), 500, "");
    });
})

()