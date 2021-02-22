fetch('assets/data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const params = new URLSearchParams(window.location.search)
        const id = params.get("project")
        if(id !== null){ 
            if(id === "engineears"){
                renderProjectPage(data.projects[0])
            }else if(id === "therotation"){
                renderProjectPage(data.projects[1])
            }else if(id === "8bitmultiplier"){
                renderProjectPage(data.projects[2])
            }
        }else{
            renderMainPage(data);
        }
    });

function renderNavbar(page, items){
    //TODO: fix "undefined" bug
    if(page === "project"){
        return `
        <li>
            <a href=".">Go Back</a>
        </li>
        `;
    }else{
        items.map(d=>`
            <li>
                <a href="#${d}">${d}</a>
            </li>
        `).join('');
    }
}

function renderMainPage(data){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
}

function renderAbout(about){
    return `
    <section>
        <h1 class="animate__animated animate__infinite animate__bounce animate__delay-2s">${about.name}</h1>
        <div>
            <img class="profile" src="${about.photo}">
        </div>
        <p><b>${about.title}</b></p>
        <p>${about.email}</p>
    </section>
    <br>
    <section id="about">
        <h3>About</h3>
        <p>${about.bio}</p>
    </section>`;
}

function renderNews(news){
    return `
    <section id="news">
        <h3>News</h3>
        <div class="row">
            <div class="col-8">
                ${renderNewsTitles(news)}
            </div>
            <div class="col-4">
                ${renderNewsDates(news)}
            </div>
        </div>
    </section>`;
}

function renderNewsTitles(news){
    return news.map(item=>`
        <p>${item.title}</p>
    `)
}

function renderNewsDates(news){
    return news.map(item=>`
        <p>${item.date}</p>
    `)
}

function renderProjects(projects){
    return `
    <section id="projects">
        <h3>Projects</h3>
        ${renderProjectItems(projects)}
    </section>
    `;
}

function renderProjectItems(projects){
    return projects.map(d=>`
        <p><a href="?project=${d.id}">${d.title}</a></p>
        <div class="flex">
            ${renderProjectTags(d.tags)}
        </div>
    `).join('');
}

function renderProjectTags(tags){
    return tags.map(tag=>`
        <div class="project-tag">
            <p class="${tag.toLowerCase().replace(" ", "-")} tag-text">${tag}</p>
        </div>
    `).join('');
}

function renderProjectPage(project){
    console.log(project)
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('project')}
        <h1><a href="${project.link}">${project.title}</a></h1>
        <ul>
            ${renderProjectDescription(project.description)}
        </ul>
    `;
}

function renderProjectDescription(description){
    return description.map(bullet=>`
        <li>${bullet}</li>
    `).join('');
}