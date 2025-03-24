const express = require('express');
const NewsAPI = require('newsapi');
const path = require('path');
require('dotenv').config(); // Load environment variables from a .env file

const app = express();
const port = 3000;

// Use the API key from the environment variable
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// Serve static files (CSS, JavaScript)
app.use(express.static('public'));

// Endpoint to fetch top headlines
app.get('/news', async (req, res) => {
  try {
    const response = await newsapi.v2.topHeadlines({
      category: 'technology',
      language: 'en',
      country: 'us',
    });
    res.json(response.articles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching news');
  }
});

// Serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
