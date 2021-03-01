export default function Navbar(page, items){
    if(page === "project"){
        return `
        <li>
            <a href=".">Go Back</a>
        </li>
        `
    }else{
        return `
        <br><br><br>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li>
                    <a href="#news">
                        News <i class="fas fa-newspaper"></i>
                    </a>
                </li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>`
    }
}