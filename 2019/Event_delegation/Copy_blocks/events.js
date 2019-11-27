const accordions = document.querySelector(".accrodions");

accordions.addEventListener("click", function (event) {
    const blocks = accordions.getElementsByClassName("blocks");
    const target = event.target;
    console.log(target.classList.contains("block-center"));
    if (target.classList.contains("block-center") || target.parentNode.classList.contains("block-center")) {
        if (target.classList.contains("copy") || target.parentNode.classList.contains("copy")) {
            const clone_block = blocks[0].cloneNode(true);
            accordions.append(clone_block);
        } else if (target.classList.contains("delete") || target.parentNode.classList.contains("delete")) {
            const block = target.closest(".blocks");
            block.remove();
        }
    }
});
