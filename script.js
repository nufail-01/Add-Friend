// Select status text and button
let isstatus = document.querySelector("h5");
let btn = document.querySelector("#add");

let check = 0;

// Toggle friend status on button click
btn.addEventListener("click", function () {
    if (check == 0) {
        isstatus.innerHTML = "Friends";
        isstatus.style.color = "green";
        btn.innerHTML = "Unfriend";
        check = 1;
    } else {
        isstatus.innerHTML = "Stranger";
        isstatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;
    }
});