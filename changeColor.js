var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

var currentActiveBox = null;

document.getElementById("button1").addEventListener("click", function (e) {
    toggle(box1);
    e.preventDefault();
});

document.getElementById("button2").addEventListener("click", function (e) {
    toggle(box2);
    e.preventDefault();
});

document.getElementById("button3").addEventListener("click", function (e) {
    toggle(box3);
    e.preventDefault();
});
document.getElementById("button4").addEventListener("click", function (e) {
    toggle(box4);
    e.preventDefault();
});
document.getElementById("button5").addEventListener("click", function (e) {
    toggle(box5);
    e.preventDefault();
});
document.getElementById("button6").addEventListener("click", function (e) {
    toggle(box6);
    e.preventDefault();
});
document.getElementById("button7").addEventListener("click", function (e) {
    toggle(box7);
    e.preventDefault();
});

function toggle(targetBox) {
    if (currentActiveBox === targetBox) {
        // If the same box is clicked again, trigger the "up" animation
        targetBox.classList.remove("animation");
        targetBox.style.top = '-700px';
        targetBox.classList.add("up-animation");
        currentActiveBox = null;
    } else {
        // If a different box is clicked, trigger the "down" animation
        if (currentActiveBox) {
            currentActiveBox.classList.remove("animation");
            currentActiveBox.style.top = '-700px';
            currentActiveBox.classList.add("up-animation");
        }

        targetBox.classList.add("animation");
        targetBox.classList.remove("up-animation");
        currentActiveBox = targetBox;
    }
}