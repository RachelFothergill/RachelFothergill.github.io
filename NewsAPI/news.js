const apiKey = '64zj2XYOYFsPCY0lkBmLERys4Ve1PzmYVEQsaq2_Pj8';
const apiUrl = 'https://api.newscatcherapi.com/v2/search?q=Technology';

fetch(apiUrl, {
  headers: {
    'x-api-key': apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    const articles = data.articles.slice(0, 5);
    const newsList = document.getElementById('news-list');
    articles.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h2>${article.title}</h2>
        <a href="${article.link}" target="_blank">Read More</a>
      `;
      newsList.appendChild(li);
    });
  })
  .catch(error => {
    console.log(error);
  });