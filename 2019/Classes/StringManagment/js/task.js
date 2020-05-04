import { StringManagment } from "./libraryStringManagment.js";

(function()
{
    let stringManagment;
    const objectStringManagment = {};
    objectStringManagment.buttons;
    objectStringManagment.tabs;
    let addButton;
    objectStringManagment.input;
    objectStringManagment.addBlock;
    objectStringManagment.stringsEditor;
    objectStringManagment.stringsEditorText;
    objectStringManagment.stringsPreview;
    objectStringManagment.stringsPreviewText;
    objectStringManagment.stringsPreviewDate;
    objectStringManagment.stringsPreviewTime;

    window.addEventListener('DOMContentLoaded', () =>
    {
        objectStringManagment.buttons = document.querySelectorAll(".button");
        objectStringManagment.tabs = document.querySelectorAll(".tab");
        addButton = document.querySelector(".preview-adding-button");
        objectStringManagment.input = document.querySelector(".preview-adding-input");
        objectStringManagment.columnEditor = document.querySelector(".preview-column");
        objectStringManagment.editorBlock = document.querySelector(".preview-block");
        objectStringManagment.stringsEditorText = objectStringManagment.editorBlock.querySelector(".text");
        objectStringManagment.columnPreview = document.querySelector(".editor-column");
        objectStringManagment.previewBlock = document.querySelector(".editor-block");
        objectStringManagment.stringsPreviewText = objectStringManagment.previewBlock.querySelector(".text");
        objectStringManagment.stringsPreviewDate = document.querySelector(".date");
        objectStringManagment.stringsPreviewTime = document.querySelector(".time");

        stringManagment = new StringManagment(objectStringManagment);

        for (let i = 0; i < objectStringManagment.buttons.length; i++)
        {
            objectStringManagment.buttons[i].addEventListener('click', () =>
            {
                stringManagment.tabSwitching(i);
            });
        }

        addButton.addEventListener("click", () =>
        {
            stringManagment.addString(objectStringManagment.editorBlock, objectStringManagment.previewBlock);
        });
    });
})

()