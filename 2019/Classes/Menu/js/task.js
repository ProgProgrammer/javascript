import { Menu } from './libraryMenu.js';

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