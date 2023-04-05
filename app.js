window.addEventListener("load" ,() => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loader-hidden")

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})


let project = setInterval(projectDone, 10)
let clients = setInterval(happyClient, 10)
let idea = setInterval(creativeIdea, 10)
let count1 = 1
let count2 = 1
let count3 = 1

function projectDone() {
    count1 ++
    document.querySelector('#number1').innerHTML = count1
    if (count1==90) {
    clearInterval(project)        
    }
}

function happyClient() {
    count2 ++
    document.querySelector('#number2').innerHTML = count2
    if (count2==89) {
    clearInterval(clients)        
    }
}

function creativeIdea() {
    count3 ++
    document.querySelector('#number3').innerHTML = count3
    if (count3==1000) {
    clearInterval(idea)        
    }
}

const navLinks = document.querySelector('.navlinks')
const menuBtn = document.querySelector('i.fa-bars')

menuBtn.addEventListener ('click', function() {
    navLinks.classList.toggle("active")
})

