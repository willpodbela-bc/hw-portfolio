import Navbar from "./Navbar.js"
import About from "./About.js"
import News, {handleNewsFilter} from "./News.js"
import Projects, {handleProjectFilter} from "./Projects.js"

export default function MainPage(data){

    document.querySelector(".container").innerHTML = `
        ${Navbar("main", Object.keys(data))}
        ${About(data.about)}
        ${News(data.news)}
        ${Projects(data.projects)}
    `

    handleNewsFilter(data)
    handleProjectFilter(data)
}