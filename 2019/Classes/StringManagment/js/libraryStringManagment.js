export { StringManagment };

class StringManagment
{
    constructor(object)
    {
        this.buttonId;
        this.buttons = object.buttons;
        this.tabs = object.tabs;
        this.input = object.input;
        this.blockEditor;
        this.blockPreview;
        this.cloneBlock;
        this.columnEditor = object.columnEditor;
        this.stringsEditorText = object.stringsEditorText;
        this.columnPreview = object.columnPreview;
        this.stringsPreviewText = object.stringsPreviewText;
        this.stringsPreviewDate = object.stringsPreviewDate;
        this.stringsPreviewTime = object.stringsPreviewTime;
        this.date;
        this.elementDate;
        this.variableDate;
        this.day;
        this.month;
        this.year;
        this.hours;
        this.minutes;
    }

    openCloseTabs()
    {
        for (this.i = 0; this.i < this.tabs.length; this.i++)
        {
            this.buttons[this.i].style.background = "transparent";
            this.tabs[this.i].style.display = "none";
        }
    }

    tabSwitching(id)
    {
        this.buttonId = id;
        this.openCloseTabs();
        this.buttons[this.buttonId].style.background = "buttonface";
        this.tabs[this.buttonId].style.display = "flex";
    }

    getDate(numberDate, number)
    {
        this.elementDate = numberDate;
        this.number = number;

        if (this.elementDate < 10) {
            if (this.number === 1) {
                this.elementDate += 1;
            }
            return "0" + this.elementDate;
        } else {
            if (this.number === 1) {
                this.elementDate += 1;
            }
            return this.elementDate;
        }
    }

    addDateTime(id)
    {
        this.buttonId = id;
        this.date = new Date();
        this.variableDate = this.date.getDate();
        this.day = this.getDate(this.variableDate);
        this.variableDate = this.date.getMonth();
        this.month = this.getDate(this.variableDate, 1);
        this.year = this.date.getFullYear();
        this.year = String(this.year);
        this.year = this.year.substr(2, 2);
        this.variableDate = this.date.getHours();
        this.hours = this.getDate(this.variableDate);
        this.variableDate = this.date.getMinutes();
        this.minutes = this.getDate(this.variableDate);

        if (this.buttonId === true)
        {
            this.stringsPreviewDate = document.querySelectorAll(".date");
            this.stringsPreviewTime = document.querySelectorAll(".time");
            this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML = this.day;
            this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML += ".";
            this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML += this.month;
            this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML += ".";
            this.stringsPreviewDate[this.stringsPreviewDate.length - 2].innerHTML += this.year;
            this.stringsPreviewTime[this.stringsPreviewTime.length - 2].innerHTML = this.hours;
            this.stringsPreviewTime[this.stringsPreviewTime.length - 2].innerHTML += ":";
            this.stringsPreviewTime[this.stringsPreviewTime.length - 2].innerHTML += this.minutes;
        }
        else
        {
            this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML = this.day;
            this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML += ".";
            this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML += this.month;
            this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML += ".";
            this.stringsPreviewDate[this.stringsPreviewDate.length - 1].innerHTML += this.year;
            this.stringsPreviewTime[this.stringsPreviewTime.length - 1].innerHTML = this.hours;
            this.stringsPreviewTime[this.stringsPreviewTime.length - 1].innerHTML += ":";
            this.stringsPreviewTime[this.stringsPreviewTime.length - 1].innerHTML += this.minutes;
        }
    }

    addString(editorBlock, previewBlock)
    {
        this.blockEditor = editorBlock;
        this.blockPreview = previewBlock;
        if (this.input.value !== "")
        {
            this.stringsEditorText.innerHTML = this.input.value;
            this.stringsPreviewText.innerHTML = this.input.value;
            this.addDateTime();
            this.cloneBlock = this.blockEditor.cloneNode(true);
            this.columnEditor.append(this.cloneBlock);
            this.cloneBlock = this.blockPreview.cloneNode(true);
            this.columnPreview.append(this.cloneBlock);
        }
        else
        {
            return;
        }
    }

    copyString(editorBlock, previewBlock)
    {
        this.buttonId = true;
        this.blockEditor = editorBlock;
        this.blockPreview = previewBlock;
        this.cloneBlock = this.blockEditor.cloneNode(true);
        this.columnEditor.append(this.cloneBlock);
        this.cloneBlock = this.blockPreview.cloneNode(true);
        this.columnPreview.append(this.cloneBlock);
        this.addDateTime(this.buttonId);
    }

    removeString(editorBlock, previewBlock)
    {
        this.blockEditor = editorBlock;
        this.blockPreview = previewBlock;
        this.blockEditor.remove();
        this.blockPreview.remove();
    }
}