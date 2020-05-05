import { StringManagment } from "./libraryStringManagment.js";

(function()
{
    let stringManagment;
    const objectStringManagment = {};
    objectStringManagment.buttons;
    objectStringManagment.tabs;
    let addButton;
    objectStringManagment.input;
    objectStringManagment.columnEditor;
    objectStringManagment.stringsEditorText;
    objectStringManagment.columnPreview;
    objectStringManagment.stringsPreviewText;
    objectStringManagment.stringsPreviewDate;
    objectStringManagment.stringsPreviewTime;
    objectStringManagment.copy;
    objectStringManagment.delete;

    window.addEventListener('DOMContentLoaded', () =>
    {
        objectStringManagment.buttons = document.querySelectorAll(".button");
        objectStringManagment.tabs = document.querySelectorAll(".tab");
        addButton = document.querySelector(".preview-adding-button");
        objectStringManagment.input = document.querySelector(".preview-adding-input");
        objectStringManagment.columnEditor = document.querySelector(".preview-column");
        objectStringManagment.editorBlock = document.querySelectorAll(".preview-block");
        objectStringManagment.stringsEditorText = objectStringManagment.editorBlock[objectStringManagment.editorBlock.length - 1].querySelector(".text");
        objectStringManagment.columnPreview = document.querySelector(".editor-column");
        objectStringManagment.previewBlock = document.querySelectorAll(".editor-block");
        objectStringManagment.stringsPreviewText = objectStringManagment.previewBlock[objectStringManagment.previewBlock.length - 1].querySelector(".text");
        objectStringManagment.stringsPreviewDate = document.querySelectorAll(".date");
        objectStringManagment.stringsPreviewTime = document.querySelectorAll(".time");
        objectStringManagment.copy = document.querySelectorAll(".copy");
        objectStringManagment.delete = document.querySelectorAll(".delete");

        stringManagment = new StringManagment(objectStringManagment);

        for (let i = 0; i < objectStringManagment.buttons.length; i++)
        {
            objectStringManagment.buttons[i].addEventListener('click', () =>
            {
                stringManagment.tabSwitching(i);
            });
        }

        const copyBlock = () =>
        {
            objectStringManagment.editorBlock = document.querySelectorAll(".preview-block");
            objectStringManagment.previewBlock = document.querySelectorAll(".editor-block");
            for (let a = 0; a < objectStringManagment.copy.length; a++)
            {
                objectStringManagment.copy[a].onclick = () =>
                {
                    stringManagment.copyString(objectStringManagment.editorBlock[a], objectStringManagment.previewBlock[a]);
                    objectStringManagment.copy = document.querySelectorAll(".copy");
                    objectStringManagment.delete = document.querySelectorAll(".delete");
                    copyBlock();
                    deleteBlock();
                };
            }
        }

        const deleteBlock = () =>
        {
            objectStringManagment.editorBlock = document.querySelectorAll(".preview-block");
            objectStringManagment.previewBlock = document.querySelectorAll(".editor-block");
            for (let b = 0; b < objectStringManagment.delete.length; b++)
            {
                objectStringManagment.delete[b].onclick = () =>
                {
                    stringManagment.removeString(objectStringManagment.editorBlock[b], objectStringManagment.previewBlock[b]);
                    objectStringManagment.copy = document.querySelectorAll(".copy");
                    objectStringManagment.delete = document.querySelectorAll(".delete");
                    copyBlock();
                    deleteBlock();
                    return false;
                };
            }
        }

        addButton.addEventListener("click", () =>
        {
            stringManagment.addString(objectStringManagment.editorBlock[objectStringManagment.editorBlock.length - 1], objectStringManagment.previewBlock[objectStringManagment.previewBlock.length - 1]);
            objectStringManagment.copy = document.querySelectorAll(".copy");
            objectStringManagment.delete = document.querySelectorAll(".delete");
            copyBlock();
            deleteBlock();
        });

        copyBlock();
        deleteBlock();
    });
})

()