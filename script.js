const users = [
    {
        name: "himanshu kumawat",
        work: "Frontend Engineer",
        work_Detail: ["React", "UI animations", "component optimization"],
        Image: "https://i.pinimg.com/1200x/be/b2/b9/beb2b9667934b504724d4c5b989d9e76.jpg"

    },
    {
        name: "Ethan Walker",
        work: "Backend Developer",
        work_Detail: ["Node.js", "microservices, database schemas", "API security"],
        Image: "https://i.pinimg.com/736x/50/1d/f1/501df15ed64623ab3b8054eb2b9bb0d0.jpg"
    },
    {
        name: "Noah Mitchell",
        work: "Cloud DevOps Engineer",
        work_Detail: ["Kubernetes", "CI/CD pipelines", "cloud automation"],
        Image: "https://i.pinimg.com/736x/e1/4a/83/e14a8371f954ca9c153ba39cb4af9b87.jpg"
    },
    {
        name: "Oliver Bennett",
        work: "AI/ML Engineer",
        work_Detail: ["ML models", "Python pipelines", "AI training"],
        Image: "https://i.pinimg.com/736x/ed/97/17/ed97179b1a21251a1b4f3c2f03cd9273.jpg"
    },
    {
        name: "Mason Brooks",
        work: "Cyber Security Analyst",
        work_Detail: ["Threat analysis", "penetration testing", "security audits"],
        Image: "https://i.pinimg.com/736x/05/78/4a/05784abd5bd891b2c6b777e99cef3645.jpg"
    },
    {
        name: "Lucas Harrington",
        work: "Full-Stack Developer",
        work_Detail: ["React+Node.js apps", "API integration", "database architecture"],
        Image: "https://i.pinimg.com/1200x/cb/f8/3d/cbf83da3300e950728f01841055c4a96.jpg"
    },
]

let sum = ""

users.forEach(function (elam) {


    sum = sum + ` <div id="card">
            <img src="${elam.Image}" alt="">
            <h1>${elam.name}</h1>
            <h2>${elam.work}</h2>

            
            <div id="work">
                <button></button>
                <button></button>
                <button></button>
            </div>

            <div id="icons">
                <i class="ri-linkedin-box-fill"></i>
                <i class="ri-twitter-fill"></i>
                <i class="ri-instagram-fill"></i>
                <i class="ri-github-fill"></i>
            </div>
        </div>`
})
let main = document.querySelector("main")

main.innerHTML=sum;


let iconarr = document.querySelectorAll("#icons i")

iconarr.forEach(function(elam){
elam.addEventListener("mouseenter",function(){ 
    let name ="";
    if(icon.classList.contains("ri-github-fill")){
        name.innerHTML="linkedin"
    }
})
});
