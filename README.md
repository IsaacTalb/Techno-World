# 📰 Techno-World News Website with NewsAPI Integration  

This is a dynamic and responsive news website that uses the **NewsAPI** to fetch and display the latest news headlines.  
The backend is built using **Node.js** and **Express**, while the frontend uses **HTML**, **JavaScript**, and **Tailwind CSS** for a sleek and modern design.

---

## ⚙️ Features  
- **Real-Time News:** Fetches top news articles dynamically from NewsAPI.  
- **Category-Based News:** Supports filtering news by categories like technology, business, and more.  
- **Responsive Design:** Built with Tailwind CSS for mobile-friendly responsiveness.  
- **Clean UI:** Display images, titles, descriptions, and clickable links to full articles.

---

## 🛠 Installation and Setup  

### 1. Clone the Repository  
```bash
git clone https://github.com/IsaacTalb/Techno-World.git
cd Techno-World
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure NewsAPI
Make sure you have your NewsAPI key.
Replace the placeholder key with your key in index.js or in your .env:
```bash
const newsapi = new NewsAPI('Your_NEWSAPI_KEY');

(or)

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
```

### 4. Run the Application
Start the Node.js Server;
```bash
node index.js
```

Visit the website at http://localhost:3000 .

## Project structure
```bash
Techno-World/
│
├── public/                # Frontend files (HTML, CSS)
│   ├── index.html         # Main HTML page
│   └── style.css          # Tailwind CSS styles
│
├── index.js               # Main Node.js server file
├── package.json           # Project configuration and dependencies
└── README.md              # Project documentation

```

## API Used
This project uses the NewsAPI to fetch real-time news articles.


## License
This project is licensed under the MIT license.