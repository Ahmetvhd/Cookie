// let x = document.querySelector(".cookie-header button");
// let doneBtn = document.querySelector("#orange")
// let closeBtn = document.querySelector("#close-btn")

let cookieCard = document.querySelector("section")
let buttons = document.querySelectorAll("button")
let content = document.querySelector(".content")

function backGround() {

    if (cookieCard.classList.contains("active")) {

        content.classList.add("blur")

    } else {
        content.classList.remove("blur")
    }
}

backGround()

buttons.forEach((btn,index) => {

    btn.addEventListener("click", () => {

        cookieCard.classList.remove("active");
         
        backGround()
    })
});


// window.addEventListener("click", (olay) => {
    

//     if (cookieCard.classList.contains("active") && !cookieCard.contains(olay.target)) {

//         cookieCard.classList.remove("active");
//         backGround();
//     }
// });



// x.addEventListener("click", () => {

//     cookieCard.classList.remove("active")

//     backGround()
// })

// doneBtn.addEventListener("click", () => {

//     cookieCard.classList.remove("active")

//     backGround()
// })

// closeBtn.addEventListener("click", () => {

//     cookieCard.classList.remove("active")

//     backGround()
// })