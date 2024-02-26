navEl = document.querySelector("nav")

// closing and opening of nav bar with scrolling
prevpos = 0
show = false
window.onscroll = (()=> {
    curpos = window.scrollY
    if(show){
        window.scrollTo(0,curpos)
    }
    if (curpos > "300" && !show){
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
// window.scrollTo(document.querySelector("#home"))
//
const close = document.querySelector(".close")
const mainCont = document.querySelector(".main-container")
const footer = document.querySelector("footer")
const open = document.querySelector('.ham-menu')
const nav = document.querySelector('.nav')

open.addEventListener('click',()=>{
    nav.classList.remove('hide')
    show = true
    close.classList.remove('none')
    close.style.display = 'block'
    open.classList.add('none')
    nav.addEventListener('click',()=>{
        nav.classList.add('hide')
        show = false
        open.classList.remove('none')
        close.style.display = 'none'
        close.classList.add('none')
    })
})

close.addEventListener("click",()=>{
    nav.classList.add('hide')
    show = false
    open.classList.remove('none')
    close.style.display = 'none'
    close.classList.add('none')
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

//dynamically loading projects

// {
//     "Title": "",
//     "images": [],
//     "link": "",
//     "desc" : "",
//     "technologies": [],
// }

const projectsContainer = document.querySelector(".projectsContainer")
const projectsDiv = document.querySelector(".projects")
const projectsObj = [
    {"Title": "WeChat - Web App",
    "images": ["assets/wechat.png"],
    "link": "https://github.com/Shamim-Basha/WeChat", 
    "source":"",
    "desc" : "Developed a real-time webchat application using Django WebSocket technology to enhance user interactions and communication. This webchat app offers seamless, instant messaging capabilities, making it easy for users to engage in real-time conversations.",
    "technologies": ["HTML","Django","WebSocket"]},

    {"Title": "Path Finding Visualizer",
    "images": ["assets/path-finder.png"],
    "link": "https://github.com/Shamim-Basha/path_searching_visualizer", 
    "source":"",
    "desc" : "I developed a Python-based Path Searching Visualizer using the Pygame library, which enables users to explore and visualize pathfinding algorithms such as BFS, DFS, Greedy Best-First Search, and A* Search.",
    "technologies": ["Python","Pygame"]},

    {"Title": "Kanban Board - Web App",
    "images": ["assets/kanban-board.png"],
    "link": "https://github.com/Shamim-Basha/kanban-board", 
    "source":"https://shamim-basha.github.io/kanban-board/",
    "desc" : "I created a web-based Kanban Board application, leveraging local storage to provide users with a flexible and efficient task management solution with drag and drop feature.",
    "technologies": ["HTML","CSS","JavaScript","Local Storage"]},

    {"Title": "Movie Browser - Mobile App",
    "images": ["assets/movie-browser-1.png","assets/movie-browser-2.png"],
    "link": "https://github.com/Shamim-Basha/rn-movie-browser", 
    "source":"",
    "desc" : "I designed and developed a mobile app using React Native that offers a seamless movie browsing experience. This app provides users with the ability to explore a vast collection of movies, view detailed information.",
    "technologies": ["React-Native","Expo.io"]},

    {"Title": "Study Buddy",
    "images": ["assets/study-buddy.png"],
    "link": "https://github.com/me50/Shamim-Basha/tree/cs50/problems/2023/x/project", 
    "source":"",
    "desc" : "Developed a web app to help students to organize all their works in the same place and secure with username and password.Where user can add todos, notes, flash-cards, pomodoro-timer and forum to help each other.",
    "technologies": ["HTML","Flask","Bootstrap","Sqlite"]},

    {"Title": "Tic-Tac-Toe AI",
    "images": ["assets/tic-tac-toe.png"],
    "link": "https://github.com/Shamim-Basha/Tic-Tac-Toe-AI", 
    "source":"",
    "desc" : "Engineered a captivating Tic-Tac-Toe application using Python and Pygame, fusing a classic game with advanced AI powered by the Minimax algorithm. The application engages players in a strategic battle, providing an interactive Pygame interface for gameplay.",
    "technologies": ["Python","Pygame"]},

    {"Title": "E-commerce Web App",
    "images": ["assets/e-commerce.png"],
    "link": "https://github.com/me50/Shamim-Basha/tree/web50/projects/2020/x/commerce", 
    "source":"",
    "desc" : "Designed and developed an e-commerce auction site, enabling users to create listings, place bids, and manage their watchlist. Seamlessly implemented features such as category navigation and a user-friendly admin interface for easy site management.",
    "technologies": ["HTML","Django","Bootstrap","Sqlite"]},

    {"Title": "Pomodoro Timer - Mobile App",
    "images": ["assets/pomodoro-1.png","assets/pomodoro-2.png"],
    "link": "https://github.com/Shamim-Basha/rn-pomodoro-", 
    "source":"",
    "desc" : "Developed revolutionizing time management and productivity mobile app. This enables users to harness the Pomodoro Technique for heightened focus and task management, contributing to improved efficiency and goal attainment.",
    "technologies": ["React-Native","Expo.io"]},
]

projectsObj.forEach((project,idx)=>{
    createProjectDiv(project,idx)
})
const more_btn = document.createElement("button")
more_btn.classList = "more-btn"
more_btn.id = "1"
more_btn.innerHTML = `Show more <i class="fa-solid fa-chevron-down"></i>`
more_btn.onclick = ()=>{
    if (more_btn.id == 1){
        more_btn.id = 0
        more_btn.innerHTML = `Show less <i class="fa-solid fa-chevron-up"></i>`
        document.querySelectorAll(".p-hide").forEach(p=>{
            p.style.display = "flex"
        })

    }else{
        more_btn.id = 1
        more_btn.innerHTML = `Show more <i class="fa-solid fa-chevron-down"></i>`
        document.querySelectorAll(".p-hide").forEach(p=>{
            p.style.display = "none"
        })
        scrollIntoView(more_btn)
    }
}
projectsDiv.appendChild(more_btn)

function createProjectDiv(project,idx){
    const Pdiv = document.createElement("div")
    Pdiv.className = "project flex sm anim-bottom"
    if(idx>4){
        Pdiv.classList.add("p-hide")
        Pdiv.style.display = "none"
}
    Pdiv.style.alignItems = "flex-start"

    const ImgDiv = document.createElement("div")
    ImgDiv.classList = "project-image"
    project.images.forEach(image=>{
        const img = document.createElement("img")
        img.src = image
        ImgDiv.appendChild(img)
    })
    Pdiv.appendChild(ImgDiv)

    const descDiv = document.createElement("div")
    descDiv.classList = "project-desc"
    descDiv.innerHTML = `<div class="project-title"><h2><a target="_blank" href=${project.link}>${project.Title}</a> 
    ${project.source? `<a class="ex-a" href={project.source}><i class="fa-solid fa-arrow-up-right-from-square external-link" style="padding-left: .5rem;"></i></a>` : ""}
    </h2></div>
    <p>${[project.desc]}</p>`
    const techDiv = document.createElement("div")
    techDiv.classList = "technologies"
    project.technologies.forEach(tech=>{
        const tDiv = document.createElement("div")
        tDiv.classList = "tech"
        tDiv.innerText = tech
        techDiv.appendChild(tDiv)
    })
    descDiv.appendChild(techDiv)
    Pdiv.appendChild(descDiv)
    projectsContainer.appendChild(Pdiv)
}

//
const noel = document.querySelectorAll(".no")
const width = window.screen.width
noel.forEach(el=>{
    console.log(el.classList);
    if (width > 1200){
        el.classList.add("anim-bottom")
        // console.log(noel.classList);
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

