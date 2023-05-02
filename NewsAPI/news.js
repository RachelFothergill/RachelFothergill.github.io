//API News javascript

//My personal api key
const apiKey = '64zj2XYOYFsPCY0lkBmLERys4Ve1PzmYVEQsaq2_Pj8';
const apiUrl = `https://api.newscatcherapi.com/v2/search?q=business%20ideas%20in%20tech&lang=en`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles.slice(0, 5);
    const newsList = document.getElementById('news-list');
    articles.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h2>${article.title}</h2>
        <a href="${article.url}" target="_blank">Read More</a>
      `;
      newsList.appendChild(li);
    });
  })
  .catch(error => {
    console.log(error);
  });
