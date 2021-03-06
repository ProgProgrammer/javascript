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
        this.textInput = encodeURIComponent(this.textInput);
        this.xhr = new XMLHttpRequest();
        this.xhr.open("POST", "form.php", true);
        this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        this.xhr.onreadystatechange = () =>
        {
            if (this.xhr.readyState === 4 && this.xhr.status === 200)
            {
                this.text.textContent = this.xhr.responseText;
            }
        }
        this.xhr.send("form_input=" + this.textInput);
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
            }
            else
            {
                objectForm.formInput.style.borderColor = "red";
            }
        }
    });
})

()