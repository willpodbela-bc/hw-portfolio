import Navbar from "./Navbar.js"

export default function ProjectPage(project){
    document.querySelector(".container").innerHTML = `
        ${Navbar("project")}
        <h1><a href="${project.link}">${project.title}</a></h1>
        <ul>
            ${renderProjectDescription(project.description)}
        </ul>
    `
}

function renderProjectDescription(description){
    return description.map(bullet=>`
        <li>${bullet}</li>
    `).join("")
}