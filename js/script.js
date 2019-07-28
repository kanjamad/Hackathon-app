console.log("hi");

function classToggle() {
    this.classList.toggle('like1');
    this.classList.toggle('like2');
}
document.querySelector('#love').addEventListener('click', classToggle);
document.querySelector('#love2').addEventListener('click', classToggle);

// slide
