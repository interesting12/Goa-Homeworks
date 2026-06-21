const apiKey = 'YOUR_API_KEY';

async function fetchLatestNews() {
    const newsContainer = document.getElementById('newsContainer');
    const loadingMessage = document.getElementById('loadingMessage');
    
    try {
        loadingMessage.style.display = 'none';
        
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        const articles = data.articles;
        
        displayNews(articles);
    } catch (error) {
        newsContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('newsContainer');
    
    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No news articles available.</p>';
        return;
    }

    articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        
        newsCard.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description ? article.description : 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        
        newsContainer.appendChild(newsCard);
    });
}

window.onload = fetchLatestNews;
