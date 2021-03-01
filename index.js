import MainPage from "./components/MainPage.js"
import ProjectPage from "./components/ProjectPage.js"
fetch("assets/data.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("project")
        if(id !== null){ 
            if(id === "engineears"){
                ProjectPage(data.projects[0])
            }else if(id === "therotation"){
                ProjectPage(data.projects[1])
            }else if(id === "8bitmultiplier"){
                ProjectPage(data.projects[2])
            }
        }else{
            MainPage(data)
        }
    })
