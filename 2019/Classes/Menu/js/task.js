class Menu
{
    constructor(object)
    {
        this.widthScreen = object.widthScreen;
        this.time = object.time;
        this.timePanelMenu = object.timePanelMenu;
        this.marginTop = object.marginTop;
        this.header = object.header;
        this.blockMargin = object.blockMargin;
        this.blockFixedMenu = object.blockFixedMenu;
        this.mediaScreen = object.mediaScreen;
        this.mediaScreenMobile = object.mediaScreenMobile;
        this.burger = object.burger;
        this.burgerLineTop = object.burgerLineTop;
        this.burgerLineCenter = object.burgerLineCenter;
        this.burgerLineBottom = object.burgerLineBottom;
        this.menuBlock = object.menuBlock;
        this.menuUl = object.menuUl;
        this.menuHeight = object.menuHeight;
        this.menuFixed = object.menuFixed;
        this.scrollFixedMenu = object.scrollFixedMenu;
    }

    changePosition(header, blockMargin)
    {
        this.header = header;
        this.blockMargin = blockMargin;
        this.header.style.position = "static";
        this.blockMargin.style.marginTop = 0;
    }

    autoHeight(menuBlock)
    {
        this.menuBlock = menuBlock;
        this.menuBlock.style.height = "auto";
    }

    minimalHeight()
    {
        this.menuBlock.style.height = 0;
    }

    closeMenu(menuHeight)
    {
        this.menuHeight = menuHeight;
        this.burgerLineTop.style.transform = "rotate(0deg) translate(0px, 0px)";
        this.burgerLineCenter.style.opacity = "1";
        this.burgerLineBottom.style.transform = "rotate(0deg) translate(0px, 0px)";
        this.menuBlock.style.height = this.menuHeight + "px";
        this.menuFixed.style.display = "none";
        setTimeout(this.minimalHeight, 0);
    }

    scrollMenu()
    {
        if (this.mediaScreen.matches)
        {
            if (window.pageYOffset >= this.scrollFixedMenu)
            {
                this.header.style.top = 0;
                this.header.style.position = "fixed";
                this.blockMargin.style.marginTop = this.marginTop + "px";
            }
            else if (this.header.style.top === "0px" && window.pageYOffset < this.scrollFixedMenu)
            {
                this.header.style.top = "-" + this.marginTop + "px";
                setTimeout(this.changePosition, this.timePanelMenu, this.header, this.blockMargin);
            }
        }
    }

    resizeMenu()
    {
        this.mediaScreenMobile = window.matchMedia('all and (max-width: ' + this.widthScreen + 'px)');

        if (this.mediaScreenMobile.matches)
        {
            this.header.style.top = 0;
            this.header.style.position = "fixed";
        }
        else
        {
            this.header.style.position = "static";
        }
    }

    openCloseMenu()
    {
        this.menuHeight = this.menuUl.offsetHeight;

        if (this.menuBlock.offsetHeight === 0)
        {
            this.burgerLineTop.style.transform = "rotate(45deg) translate(9px, 9px)";
            this.burgerLineCenter.style.opacity = "0";
            this.burgerLineBottom.style.transform = "rotate(-45deg) translate(8px, -8px)";
            this.menuBlock.style.height = this.menuHeight + "px";
            this.menuFixed.style.display = "flex";
            setTimeout(this.autoHeight, this.time, this.menuBlock);
        }
        else if (this.menuBlock.style.height === "auto")
        {
            this.closeMenu(this.menuHeight);
        }
    }

    clickBlockFixed()
    {
        this.menuHeight = this.menuUl.offsetHeight;

        if (this.menuBlock.style.height === "auto")
        {
            this.closeMenu(this.menuHeight);
        }
    }
}

(function () {
    let menu;
    const objectMenu = {};
    objectMenu.widthScreen = 1025;
    objectMenu.time = 500;
    objectMenu.timePanelMenu = 300;
    objectMenu.marginTop = 85;
    objectMenu.header;
    objectMenu.blockMargin;
    objectMenu.blockFixedMenu;
    objectMenu.mediaScreen;
    objectMenu.mediaScreenMobile;
    objectMenu.burger;
    objectMenu.burgerLineTop;
    objectMenu.burgerLineCenter;
    objectMenu.burgerLineBottom;
    objectMenu.menuBlock;
    objectMenu.menuUl;
    objectMenu.menuHeight;
    objectMenu.menuFixed;
    objectMenu.scrollFixedMenu;

    window.addEventListener('DOMContentLoaded', () =>
    {
        objectMenu.mediaScreen = window.matchMedia('all and (min-width: ' + objectMenu.widthScreen + 'px)');
        objectMenu.menuFixed = document.querySelector(".block-menu-fixed");
        objectMenu.header = document.querySelector(".header");
        objectMenu.blockMargin = document.querySelector(".main");
        objectMenu.blockFixedMenu = document.querySelector(".fixed-menu");
        objectMenu.burger = document.querySelector(".header-blocks-burger");
        objectMenu.burgerLineTop = document.querySelector(".header-blocks-burger-top");
        objectMenu.burgerLineCenter = document.querySelector(".header-blocks-burger-center");
        objectMenu.burgerLineBottom = document.querySelector(".header-blocks-burger-bottom");
        objectMenu.menuBlock = document.querySelector(".header-div-ul");
        objectMenu.menuUl = document.querySelector(".header-ul");
        objectMenu.scrollFixedMenu = objectMenu.blockFixedMenu.getBoundingClientRect().bottom + window.pageYOffset;

        menu = new Menu(objectMenu);

        window.addEventListener('scroll', () =>
        {
            menu.scrollMenu();
        });

        window.addEventListener('resize', () =>
        {
            menu.resizeMenu();
        });

        objectMenu.burger.addEventListener('click', () =>
        {
            menu.openCloseMenu();
        });

        objectMenu.menuFixed.addEventListener('click', () =>
        {
            menu.clickBlockFixed();
        });
    });
})

()