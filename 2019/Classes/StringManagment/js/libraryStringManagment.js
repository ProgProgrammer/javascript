export { StringManagment };

class StringManagment
{
    constructor(object)
    {
        this.buttonId;
        this.buttons = object.buttons;
        this.tabs = object.tabs;
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
}