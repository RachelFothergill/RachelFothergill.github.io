const apiKey = 'e3ba8c76007e4316bc3827cd4915a2a4';
const apiUrl = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`;

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
