# Restaurant Webpage

This is a responsive **Restaurant Webpage** project built as part of [The Odin Project](https://www.theodinproject.com/) Webpack curriculum.
The project demonstrates building a multi-page-like experience with **JavaScript module organization**, dynamic content loading, and reusable UI components.

## 🔗 Live Demo

[View on GitHub Pages](https://Faizulmd13.github.io/restaurant)

## 📂 Features

- Dynamic content loading using JavaScript modules for **Home, Menu, About, and Reserve pages**
- Navigation bar with active buttons
- Responsive layout and styling using **CSS**
- Menu section with categorized items and prices
- Reservation form with styled inputs and buttons
- Smooth hover effects and interactive buttons

## 🚀 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6 Modules)**
- **Webpack** (for bundling and modular architecture)

---

### 📘 Project Goal

The aim of this project was to practice:

- Structuring a project with **Webpack** and modular JavaScript
- Dynamically updating page content without reloading
- Creating reusable components for a clean, maintainable codebase
- Styling a modern and responsive restaurant webpage

---

### 🗂 Project Structure

```
restaurant/
│
├─ src/
│  ├─ index.js          # Entry point, sets up navigation and loads modules
│  ├─ template.html     # HTML template
│  ├─ styles.css        # Global styles
│  ├─ home.js           # Loads Home page content
│  ├─ menu.js           # Loads Menu page content
│  ├─ about.js          # Loads About page content
│  └─ reserves.js       # Loads Reservation page content
│
├─ dist/                # Webpack output (built site)
├─ package.json         # Project metadata and scripts
└─ webpack.config.js    # Webpack configuration
```

---

### 📦 How to Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/Faizulmd13/restaurant.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development build:

   ```bash
   npx webpack --mode development
   ```

4. Open `dist/index.html` in a browser to view locally.

---

### 📘 Project Goal

The aim of this project was to practice:

- Structuring a project with **Webpack** and modular JavaScript
- Dynamically updating page content without reloading
- Creating reusable components for a clean, maintainable codebase
- Styling a modern and responsive restaurant webpage
