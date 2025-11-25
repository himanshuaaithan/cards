const users = [
    {
        name: "himanshu kumawat",
        work: "Frontend Engineer",
        b1: "React",
        b2: "UI Design",
        b3: "Animations",
        Image: "https://i.pinimg.com/1200x/be/b2/b9/beb2b9667934b504724d4c5b989d9e76.jpg"

    },
    {
        name: "Ethan Walker",
        work: "Backend Developer",
        b1: "Node.js",
        b2: "Databases",
        b3: "API Security",
        Image: "https://i.pinimg.com/736x/50/1d/f1/501df15ed64623ab3b8054eb2b9bb0d0.jpg"
    },
    {
        name: "Noah Mitchell",
        work: "Cloud DevOps Engineer",
        b1: "Kubernetes",
        b2: "CI/CD",
        b3: "Automation",
        Image: "https://i.pinimg.com/736x/e1/4a/83/e14a8371f954ca9c153ba39cb4af9b87.jpg"
    },
    {
        name: "Oliver Bennett",
        work: "AI/ML Engineer",
        b1: "ML Models",
        b2: "Python",
        b3: "Training",
        Image: "https://i.pinimg.com/736x/ed/97/17/ed97179b1a21251a1b4f3c2f03cd9273.jpg"
    },
    {
        name: "Mason Brooks",
        work: "Cyber Security Analyst",
        b1: "Threats",
        b2: "Pentest",
        b3: "Audits",
        Image: "https://i.pinimg.com/736x/05/78/4a/05784abd5bd891b2c6b777e99cef3645.jpg"
    },
    {
        name: "Lucas Harrington",
        work: "Full-Stack Developer",
        b1: "React",
        b2: "Node.js",
        b3: "DB Design",
        Image: "https://i.pinimg.com/1200x/cb/f8/3d/cbf83da3300e950728f01841055c4a96.jpg"
    },
    {
    name: "Ava Thompson",
    work: "Frontend Engineer",
    b1: "Vue.js",
    b2: "Tailwind CSS",
    b3: "UI Motion",
    Image: "https://i.pinimg.com/736x/63/26/04/632604808f521043009c311f18b97dd1.jpg"
},
{
    name: "James Carter",
    work: "Backend Developer",
    b1: "Node.js",
    b2: "MongoDB",
    b3: "API Security",
    Image: "https://i.pinimg.com/736x/dd/96/0f/dd960fad5f39a6dc5c86ed516ed8eced.jpg"
},
{
    name: "Sophia Martinez",
    work: "UI/UX Designer",
    b1: "Figma",
    b2: "Prototypes",
    b3: "Design Systems",
    Image: "https://i.pinimg.com/736x/4c/a7/9a/4ca79a3eef1f0bc69eadf348326c757d.jpg"
},

]

let sum = ""

users.forEach(function (elem) {


    sum = sum + `  <div id="card">
            <img src="${elem.Image}" alt="">
            <h1>${elem.name} </h1>
            <h2>${elem.work}</h2>

            <div id="work">
                <button>${elem.b1}</button>
                <button>${elem.b2}</button>
                <button>${elem.b3}</button>
            </div>

            <div id="icons">
                <div class="i">
                    <i class="ri-linkedin-box-fill"></i>
                    <p>linkedin</p>
                </div>
                <div class="i">
                    <i class="ri-twitter-fill"></i>
                     <p>twitter</p>
                </div>
                <div class="i">
                    <i class="ri-instagram-fill"></i>
                      <p>instagram</p>
                </div>
                <div class="i">
                    <i class="ri-github-fill"></i>
                    <p>github</p>
                </div>

            </div>
        </div>`
})
let main = document.querySelector("main")

main.innerHTML = sum;

let icon = document.querySelectorAll("#icons .i")

icon.forEach(function (elem) {
    console.log(elem)
    let p = elem.querySelector("p");
    elem.addEventListener("mouseenter", function () {
        p.style.opacity = 1
    })
    elem.addEventListener("mouseleave", () => {
        p.style.opacity = "0";
    });
})
