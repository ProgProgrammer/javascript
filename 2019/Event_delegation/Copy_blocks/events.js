const accordions = document.querySelector(".accrodions");

accordions.addEventListener("click", function (event) {
    const blocks = accordions.getElementsByClassName("blocks");
    const target = event.target;
    console.log(target.classList.contains("block-center"));
    if (target.classList.contains("block-center")) {
        const clone_block = blocks[0].cloneNode(true);
        accordions.append(clone_block);
    }
});
