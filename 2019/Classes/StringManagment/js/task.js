import { StringManagment } from "./libraryStringManagment.js";


class AdditionalApertunity extends StringManagment
{
    constructor(object)
    {
        super(object);
        this.ellipsisWindow;
        this.ellipsisWindows;
        this.blockEditor;
        this.blockPreview;
    }

    closeWindows(ellipsisWindows)
    {
        this.ellipsisWindows = ellipsisWindows;
        for(let i = 0; i < this.ellipsisWindows.length; i++)
        {
            if (this.ellipsisWindows[i].style.display === "flex")
            {
                this.ellipsisWindows[i].style.display = "none";
            }
        }
    }

    openCloseWindow(ellipsisWindow, ellipsisWindows)
    {
        this.ellipsisWindow = ellipsisWindow;
        this.ellipsisWindows = ellipsisWindows;

        if (this.ellipsisWindow.style.display !== "flex")
        {
            if (this.ellipsisWindows !== undefined)
            {
                this.closeWindows(this.ellipsisWindows);
            }
            this.ellipsisWindow.style.display = "flex";
        }
        else
        {
            this.ellipsisWindow.style.display = "none";
        }
    }

    movingBlockTop(editorBlock, previewBlock, ellipsisWindow)
    {
        this.blockEditor = editorBlock;
        this.blockPreview = previewBlock;
        this.ellipsisWindow = ellipsisWindow;
        this.openCloseWindow(this.ellipsisWindow);
        this.cloneBlock = this.blockEditor.cloneNode(true);
        this.columnEditor.prepend(this.cloneBlock);
        this.cloneBlock = this.blockPreview.cloneNode(true);
        this.columnPreview.prepend(this.cloneBlock);
        super.removeString(this.blockEditor, this.blockPreview);
    }

    movingBlockBottom(editorBlock, previewBlock, ellipsisWindow)
    {
        this.blockEditor = editorBlock;
        this.blockPreview = previewBlock;
        this.ellipsisWindow = ellipsisWindow;
        this.openCloseWindow(this.ellipsisWindow);
        super.copyString(this.blockEditor, this.blockPreview, "noTime")
        super.removeString(this.blockEditor, this.blockPreview);
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
    objectAdditionalApertunity.ellipsisWindows;
    objectAdditionalApertunity.triangle;
    objectAdditionalApertunity.movingTop;
    objectAdditionalApertunity.movingBottom;

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
            objectAdditionalApertunity.copy = document.querySelectorAll(".copy");
            objectAdditionalApertunity.delete = document.querySelectorAll(".delete");
            for (let a = 0; a < objectAdditionalApertunity.copy.length; a++)
            {
                objectAdditionalApertunity.copy[a].onclick = () =>
                {
                    additionalApertunity.copyString(objectAdditionalApertunity.editorBlock[a], objectAdditionalApertunity.previewBlock[a]);
                    copyBlock();
                    deleteBlock();
                    openCloseWindow();
                    movingBlocks();
                };
            }
        }

        const deleteBlock = () =>
        {
            objectAdditionalApertunity.editorBlock = document.querySelectorAll(".preview-block");
            objectAdditionalApertunity.previewBlock = document.querySelectorAll(".editor-block");
            objectAdditionalApertunity.copy = document.querySelectorAll(".copy");
            objectAdditionalApertunity.delete = document.querySelectorAll(".delete");
            for (let b = 0; b < objectAdditionalApertunity.delete.length; b++)
            {
                objectAdditionalApertunity.delete[b].onclick = () =>
                {
                    additionalApertunity.removeString(objectAdditionalApertunity.editorBlock[b], objectAdditionalApertunity.previewBlock[b]);
                    copyBlock();
                    deleteBlock();
                    openCloseWindow();
                    movingBlocks();
                };
            }
        }

        const openCloseWindow = () =>
        {
            objectAdditionalApertunity.ellipsisButtons = document.querySelectorAll(".editor-block-right-button");
            objectAdditionalApertunity.ellipsisWindows = document.querySelectorAll(".editor-block-right-window");
            objectAdditionalApertunity.triangle = document.querySelectorAll(".editor-block-right-window-block");
            for (let c = 0; c < objectAdditionalApertunity.ellipsisButtons.length; c++)
            {
                objectAdditionalApertunity.ellipsisButtons[c].onclick = () =>
                {
                    additionalApertunity.openCloseWindow(objectAdditionalApertunity.ellipsisWindows[c], objectAdditionalApertunity.ellipsisWindows);
                }
            }

            for (let d = 0; d < objectAdditionalApertunity.triangle.length; d++)
            {
                objectAdditionalApertunity.triangle[d].onclick = ()=>
                {
                    additionalApertunity.openCloseWindow(objectAdditionalApertunity.ellipsisWindows[d], objectAdditionalApertunity.ellipsisWindows);
                }
            }
        }

        const movingBlocks = () =>
        {
            objectAdditionalApertunity.movingTop = document.querySelectorAll(".top");
            objectAdditionalApertunity.movingBottom = document.querySelectorAll(".bottom");
            objectAdditionalApertunity.editorBlock = document.querySelectorAll(".preview-block");
            objectAdditionalApertunity.previewBlock = document.querySelectorAll(".editor-block");
            objectAdditionalApertunity.ellipsisWindows = document.querySelectorAll(".editor-block-right-window");
            for (let e = 0; e < objectAdditionalApertunity.movingTop.length; e++)
            {
                objectAdditionalApertunity.movingTop[e].onclick = ()=>
                {
                    additionalApertunity.movingBlockTop(objectAdditionalApertunity.editorBlock[e], objectAdditionalApertunity.previewBlock[e], objectAdditionalApertunity.ellipsisWindows[e]);
                    copyBlock();
                    deleteBlock();
                    openCloseWindow();
                    movingBlocks();
                }
            }

            for (let f = 0; f < objectAdditionalApertunity.movingBottom.length; f++)
            {
                objectAdditionalApertunity.movingBottom[f].onclick = ()=>
                {
                    additionalApertunity.movingBlockBottom(objectAdditionalApertunity.editorBlock[f], objectAdditionalApertunity.previewBlock[f], objectAdditionalApertunity.ellipsisWindows[f]);
                    copyBlock();
                    deleteBlock();
                    openCloseWindow();
                    movingBlocks();
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
            movingBlocks();
        });

        copyBlock();
        deleteBlock();
        openCloseWindow();
        movingBlocks();
    });
})

()