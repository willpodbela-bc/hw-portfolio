export default function About(about){
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
    </section>`
}