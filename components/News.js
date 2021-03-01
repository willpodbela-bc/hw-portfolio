export default function News(news){
    return `
    <section id="news">
        <h3>News</h3>
        <div class="search">
            <input type="search" name="news" placeholder="Search News...">
        </div>
        <div class="row news-list">
            ${renderNewsItems(news)}
        </div>
    </section>`
}

export function handleNewsFilter(data){
    document.querySelector(".search input[name='news']").addEventListener("input", (event)=>{
        const filteredNews = data.news.filter(newsItem => {
            return newsItem.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        document.querySelector(".news-list").innerHTML = renderNewsItems(filteredNews)
    })
}

function renderNewsItems(news){
    const newsLimit = 3
    news = news.slice(0, newsLimit)
    return `
    <div class="col-8">
        ${renderNewsTitles(news)}
    </div>
    <div class="col-4">
        ${renderNewsDates(news)}
    </div>`
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