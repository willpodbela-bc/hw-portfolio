export default function Projects(projects){
    return `
    <section id="projects">
        <h3>Projects</h3>
        <div class="filter">
            <label>
                <input type="radio" name="filter" value="all" checked>
                All
            </label>
            <label>
                <input type="radio" name="filter" value="react">
                React
            </label>
            <label>
                <input type="radio" name="filter" value="freelance">
                Freelance
            </label>
            <label>
                <input type="radio" name="filter" value="course-work">
                Course Work
            </label>
        </div>
        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
    </section>
    `
}

export function handleProjectFilter(data){
    document.querySelectorAll(".filter input[name='filter']").forEach(cond=>cond.addEventListener("change", function(event){
        const filteredProjects = data.projects.filter(projectsItem => {
            return projectsItem.tags.map(tag => tag.toLowerCase().replace(" ", "-")).includes(event.target.value)
        })
        if(filteredProjects.length > 0){
            document.querySelector(".project-list").innerHTML = renderProjectItems(filteredProjects)
        }else{
            document.querySelector(".project-list").innerHTML = renderProjectItems(data.projects)
        }
    }))
}

function renderProjectItems(projects){
    return projects.map(d=>`
        <p><a href="?project=${d.id}">${d.title}</a></p>
        <div class="flex">
            ${renderProjectTags(d.tags)}
        </div>
    `).join("")
}

function renderProjectTags(tags){
    return tags.map(tag=>`
        <div class="project-tag">
            <p class="${tag.toLowerCase().replace(" ", "-")} tag-text">${tag}</p>
        </div>
    `).join("")
}