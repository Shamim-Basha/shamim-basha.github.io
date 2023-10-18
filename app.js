navEl = document.querySelector("nav")

// closing and opening of nav bar with scrolling
prevpos = 0
window.onscroll = (()=> {
    curpos = window.scrollY
    if (curpos > "300"){
        if (curpos < prevpos){
            navEl.style.top = "0"
        }else{
            navEl.style.top = "-90px"
        } 
    }else{
        navEl.style.top = "0"
    }
    prevpos = curpos
})

//
onmousemove = (e)=>{
    if (e.screenY < 300){
        navEl.style.top = "0"
    }
}
//
// window.scrollTo(0,0)
window.scrollTo(document.querySelector("#home"))
//
const hamopen = document.querySelector(".ham-menu")
const hamitem = document.querySelector(".ham-items")
const close = document.querySelector(".close")
const mainCont = document.querySelector(".main-container")
const footer = document.querySelector("footer")
const hamli = document.querySelectorAll(".ham-li")

hamli.forEach(ham =>{
    ham.addEventListener("click",()=>{
        hamitem.style.display = "none"
        mainCont.style.height = "unset"
        mainCont.style.overflowY = "unset"
        footer.style.display = "flex"
        hamitem.style.transform = "translateX(100vw)"
    })
})
hamitem.style.transform = "translateX(100vw)"

close.addEventListener("click",()=>{
    hamitem.style.transform = "translateX(100vw)"
    mainCont.style.height = "unset"
    mainCont.style.overflowY = "unset"
    footer.style.display = "flex"
    hamitem.style.display = "none"
})

hamopen.addEventListener("click",()=>{
    mainCont.style.height = "100vh"
    mainCont.style.overflowY = "hidden"
    footer.style.display = "none"
    hamitem.style.display = "unset"
    hamitem.style.transform = "translateX(0)"
})

//contact form
formel = document.querySelector("form")
// Name = nameinput.value()
formel.addEventListener("submit",e=>{
    e.preventDefault()
    sender_name = formel.querySelector("#username").value
    sender_email = formel.querySelector("#email").value
    message = formel.querySelector("#message").value
    if (sender_name && sender_email && message){
        Email.send({
            // SecureToken : "bff90d55-0fe9-44a5-ac4a-a19a0c5099c0",
            Host : "smtp.elasticemail.com",
            Username : "shamimbasha13@gmail.com",
            Password : "079DF4B05D5034B8630E58F3F2EF3166A408",
            To : 'shamimbasha13@icloud.com',
            From : "shamimbasha13@gmail.com",
            Subject : "From your Website...",
            Body : 
                "From<br> Email :"+ sender_email
                +"<br>Name : "+ sender_name
                +"<br> <br>"+message
        }).then(
          message => {
            console.log(message)
            if (message == "OK"){
                formel.querySelector("#username").value = ""
                formel.querySelector("#email").value = ""
                formel.querySelector("#message").value = ""
                alert("Thank you for the message !")
            }else{
                alert("something went wrong!!")
            }
        }
        );
    }
})

//
const dark = "#0d0d0d"
const light = "#faf9f9"

const rootel = document.querySelector(":root")
// rootel.style.setProperty("--primary-color",light)
// rootel.style.setProperty("--secondary-color",dark)

//change color on scroll
const Delements = document.querySelectorAll(".dark")
const Lelements = document.querySelectorAll(".light")
const innerHeight = 0.5 * window.screen.height
document.addEventListener("scroll",()=>{
    Delements.forEach(el => {
        var Top = el.getBoundingClientRect().top
        var Bottom = el.getBoundingClientRect().bottom
        // console.log(Top,innerHeight);
        if ((Top < (0.5*innerHeight)) && (Bottom> innerHeight)){
            rootel.style.setProperty("--primary-color",light)
            rootel.style.setProperty("--secondary-color",dark)
            document.querySelector(".logo-img").style.filter = "brightness(100)"
            document.querySelector("body").style.backgroundColor = dark
        }
    Lelements.forEach(el =>{
        var Top = el.getBoundingClientRect().top
        var Bottom = el.getBoundingClientRect().bottom
        if ((Top < (innerHeight)) && Bottom> (innerHeight)){
            // console.log("lihggt");
            // console.log(el.className);
            rootel.style.setProperty("--primary-color",dark)
            rootel.style.setProperty("--secondary-color",light)
            document.querySelector(".logo-img").style.filter = "brightness(0)"
            document.querySelector("body").style.backgroundColor = light
        }
    })
    })
})


//
const noel = document.querySelectorAll(".no")
const width = window.screen.width
noel.forEach(el=>{
    console.log(el.classList);
    if (width > 1200){
        el.classList.add("anim-bottom")
        console.log(noel.classList);
    }else{
        if(el.classList.contains("anim-bottom")){
            el.classList.remove("anim-bottom")
        }
    } 
})
//
const anLeft = document.querySelectorAll(".anim-left")
anLeft.forEach(el =>{
    gsap.from(el,{
        scrollTrigger:{
            trigger:el,
            start:" center 40%",
            end:" center",
            toggleActions:"play",
        },
        x:-100,
        opacity:0,
        // duration :1
    })
})

const anBottom = document.querySelectorAll(".anim-bottom")

anBottom.forEach(el =>{
    gsap.from(el,{
        scrollTrigger:{
            trigger:el,
            start:" center 40%",
            end:" center",
            toggleActions:"play",
        },
        y:50,
        opacity:0,
        // duration :1
    })
})

//
gsap.from(".out",{
    y:70,
    opacity:0,
    stagger:.25,
    delay:3,
})

//smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
