import { StringManagment } from "./libraryStringManagment.js";


class AdditionalApertunity extends StringManagment
{
    constructor(object)
    {
        super(object);
        this.ellipsisButton;
        this.ellipsiswindows;
    }

    openCloseWindow(ellipsiswindows)
    {
        this.ellipsiswindows = ellipsiswindows;

        if (this.ellipsiswindows.style.display !== "flex")
        {
            this.ellipsiswindows.style.display = "flex";
        }
        else
        {
            this.ellipsiswindows.style.display = "none";
        }
    }
}

(function()
{
    let additionalApertunity;
    const objectAdditionalApertunity = {};
    objectAdditionalApertunity.buttons;
    objectAdditionalApertunity.tabs;
    let addButton;
    objectAdditionalApertunity.input;
    objectAdditionalApertunity.columnEditor;
    objectAdditionalApertunity.stringsEditorText;
    objectAdditionalApertunity.columnPreview;
    objectAdditionalApertunity.stringsPreviewText;
    objectAdditionalApertunity.stringsPreviewDate;
    objectAdditionalApertunity.stringsPreviewTime;
    objectAdditionalApertunity.copy;
    objectAdditionalApertunity.delete;
    objectAdditionalApertunity.ellipsisButtons;
    objectAdditionalApertunity.ellipsiswindows;

    window.addEventListener('DOMContentLoaded', () =>
    {
        objectAdditionalApertunity.buttons = document.querySelectorAll(".button");
        objectAdditionalApertunity.tabs = document.querySelectorAll(".tab");
        addButton = document.querySelector(".preview-adding-button");
        objectAdditionalApertunity.input = document.querySelector(".preview-adding-input");
        objectAdditionalApertunity.columnEditor = document.querySelector(".preview-column");
        objectAdditionalApertunity.editorBlock = document.querySelectorAll(".preview-block");
        objectAdditionalApertunity.stringsEditorText = objectAdditionalApertunity.editorBlock[objectAdditionalApertunity.editorBlock.length - 1].querySelector(".text");
        objectAdditionalApertunity.columnPreview = document.querySelector(".editor-column");
        objectAdditionalApertunity.previewBlock = document.querySelectorAll(".editor-block");
        objectAdditionalApertunity.stringsPreviewText = objectAdditionalApertunity.previewBlock[objectAdditionalApertunity.previewBlock.length - 1].querySelector(".text");
        objectAdditionalApertunity.stringsPreviewDate = document.querySelectorAll(".date");
        objectAdditionalApertunity.stringsPreviewTime = document.querySelectorAll(".time");
        objectAdditionalApertunity.copy = document.querySelectorAll(".copy");
        objectAdditionalApertunity.delete = document.querySelectorAll(".delete");
        objectAdditionalApertunity.ellipsisButtons = document.querySelectorAll(".editor-block-right-button");
        objectAdditionalApertunity.ellipsiswindows = document.querySelectorAll(".editor-block-right-window");

        additionalApertunity = new AdditionalApertunity(objectAdditionalApertunity);

        for (let i = 0; i < objectAdditionalApertunity.buttons.length; i++)
        {
            objectAdditionalApertunity.buttons[i].addEventListener('click', () =>
            {
                additionalApertunity.tabSwitching(i);
            });
        }

        const copyBlock = () =>
        {
            objectAdditionalApertunity.editorBlock = document.querySelectorAll(".preview-block");
            objectAdditionalApertunity.previewBlock = document.querySelectorAll(".editor-block");
            for (let a = 0; a < objectAdditionalApertunity.copy.length; a++)
            {
                objectAdditionalApertunity.copy[a].onclick = () =>
                {
                    additionalApertunity.copyString(objectAdditionalApertunity.editorBlock[a], objectAdditionalApertunity.previewBlock[a]);
                    objectAdditionalApertunity.copy = document.querySelectorAll(".copy");
                    objectAdditionalApertunity.delete = document.querySelectorAll(".delete");
                    copyBlock();
                    deleteBlock();
                    openCloseWindow();
                };
            }
        }

        const deleteBlock = () =>
        {
            objectAdditionalApertunity.editorBlock = document.querySelectorAll(".preview-block");
            objectAdditionalApertunity.previewBlock = document.querySelectorAll(".editor-block");
            for (let b = 0; b < objectAdditionalApertunity.delete.length; b++)
            {
                objectAdditionalApertunity.delete[b].onclick = () =>
                {
                    additionalApertunity.removeString(objectAdditionalApertunity.editorBlock[b], objectAdditionalApertunity.previewBlock[b]);
                    objectAdditionalApertunity.copy = document.querySelectorAll(".copy");
                    objectAdditionalApertunity.delete = document.querySelectorAll(".delete");
                    copyBlock();
                    deleteBlock();
                    openCloseWindow();
                };
            }
        }

        const openCloseWindow = () =>
        {
            objectAdditionalApertunity.ellipsisButtons = document.querySelectorAll(".editor-block-right-button");
            objectAdditionalApertunity.ellipsiswindows = document.querySelectorAll(".editor-block-right-window");
            for (let c = 0; c < objectAdditionalApertunity.ellipsisButtons.length; c++)
            {
                objectAdditionalApertunity.ellipsisButtons[c].onclick = () =>
                {
                    additionalApertunity.openCloseWindow(objectAdditionalApertunity.ellipsiswindows[c]);
                }
            }
        }

        addButton.addEventListener("click", () =>
        {
            additionalApertunity.addString(objectAdditionalApertunity.editorBlock[objectAdditionalApertunity.editorBlock.length - 1], objectAdditionalApertunity.previewBlock[objectAdditionalApertunity.previewBlock.length - 1]);
            objectAdditionalApertunity.copy = document.querySelectorAll(".copy");
            objectAdditionalApertunity.delete = document.querySelectorAll(".delete");
            copyBlock();
            deleteBlock();
            openCloseWindow();
        });

        copyBlock();
        deleteBlock();
        openCloseWindow();
    });
})

()