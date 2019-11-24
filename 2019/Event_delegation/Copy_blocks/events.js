const accordions = document.querySelector(".accrodions");

accordions.addEventListener("click", function (event) {
    const target = event.target;
    const parent_main = target.parentNode;
    const block = parent_main.cloneNode(true);
    accordions.append(block);
});
