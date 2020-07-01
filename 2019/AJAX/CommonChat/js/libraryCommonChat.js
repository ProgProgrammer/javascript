export { FormSubmition };

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
        const numberOfLines = 4;
        let string = "";
        let array = [];
        let countText = 0;
        let countHeading = 1;
        let text = 0;
        let date = 0;
        let numberLine = 0;
        let scrollingValue;
        let textLine;
        console.log(this.textInput);
        if (this.textInput !== undefined)
        {
            this.textInput[0] = encodeURIComponent(this.textInput[0]);
            this.textInput[1] = encodeURIComponent(this.textInput[1]);
            this.textInput[2] = encodeURIComponent(this.textInput[2]);
            array[0] = this.textInput[0];
            array[1] = this.textInput[1];
            array[2] = this.textInput[2];
            if (this.textInput[3] !== undefined)
            {
                this.textInput[3] = encodeURIComponent(this.textInput[3]);
                array[3] = this.textInput[3];
                array[3] = array[3].replace('%0A', '');
            }
        }
        console.log(array);
        this.xhr = new XMLHttpRequest();
        this.xhr.open("POST", "form2.php", true);
        this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        this.xhr.onreadystatechange = () =>
        {
            if (this.xhr.readyState === 4 && this.xhr.status === 200)
            {
                this.textLines = JSON.parse(this.xhr.responseText);
                console.log(this.textLines.length);
                if (this.textLines.length > 0)
                {
                    for (let i = 0; i < this.textLines.length; i++)
                    {
                        countText++;
                        text = countHeading + 1;
                        date = countHeading + 2;
                        numberLine = countHeading + 3;
                        if (countText % text === 0 && countText !== numberLine)
                        {
                            textLine = this.textLines[i].replace(/&lt;div&gt;/gi, '<div>');
                            textLine = textLine.replace(/&lt;\/div&gt;/gi, '</div>');
                            textLine = textLine.replace(/&amp;nbsp;/gi, ' ');
                            textLine = textLine.replace(/&lt;br&gt;/gi, '');
                            string += '<div class="text-p">' + textLine + '</div>';
                        }
                        else if (countText % date === 0)
                        {
                            textLine = this.textLines[i].replace(/&lt;div&gt;/gi, '<div>');
                            textLine = textLine.replace(/&lt;\/div&gt;/gi, '</div>');
                            textLine = textLine.replace(/&amp;nbsp;/gi, ' ');
                            textLine = textLine.replace(/&lt;br&gt;/gi, '');
                            string += '<div class="text-p date">' + textLine + '</div>';
                        }
                        else if (countText % numberLine === 0)
                        {
                            //console.log(this.textLines[i]);
                            textLine = this.textLines[i].replace(/&lt;div&gt;/gi, '<div>');
                            textLine = textLine.replace(/&lt;\/div&gt;/gi, '</div>');
                            textLine = textLine.replace(/&amp;nbsp;/gi, ' ');
                            textLine = textLine.replace(/&lt;br&gt;/gi, '');
                            string += '<input type="hidden" class="input-hidden" value="' + textLine + '">';
                        }
                        else
                        {
                            textLine = this.textLines[i].replace(/&lt;div&gt;/gi, '<div>');
                            textLine = textLine.replace(/&lt;\/div&gt;/gi, '</div>');
                            textLine = textLine.replace(/&amp;nbsp;/gi, ' ');
                            textLine = textLine.replace(/&lt;br&gt;/gi, '');
                            string += '<div class="text-heading">' + textLine + '</div>';
                        }
                        if (countText % numberOfLines === 0)
                        {
                            countHeading += numberOfLines;
                        }
                    }

                    scrollingValue = this.text.clientHeight - this.windowChat.scrollTop - this.windowChat.clientHeight;
                    //console.log(scrollingValue);
                    this.text.insertAdjacentHTML('beforeend', string);

                    if (scrollingValue <= 1)
                    {
                        this.scrollChat();
                    }
                }
            }
        }
        //console.log(JSON.stringify(array));
        this.xhr.send("form_input=" + JSON.stringify(array));
    }

    scrollProcessing(scrollValue)
    {
        this.scrollValue = scrollValue;
        if (this.noscroll === this.scrollValue)
        {
            this.arrow.style.display = "flex";
            console.log(this.arrow.style.display);
        }
        /*else if (this.scroll === this.scrollValue)
        {
            this.scrollChat();
        }*/
    }
}