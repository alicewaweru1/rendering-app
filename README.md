# 🎬 Movie Manager

A modern, interactive movie management application built with React and Vite. Easily add, edit, search, rate, and manage your favorite movies with persistent local storage.

## ✨ Features

- **Add Movies**: Create new movie entries with custom titles and genres
- **Search Functionality**: Quickly search through your movie collection by title
- **Edit Movies**: Update movie information at any time
- **Rating System**: Rate movies on a 5-star scale
- **Favorites**: Mark your favorite movies with a ⭐ indicator
- **Delete Movies**: Remove movies from your collection
- **Persistent Storage**: All movies are automatically saved to browser's localStorage
- **Responsive Design**: Clean, modern UI that works across devices
- **Loading State**: Smooth loading experience with a 1.5-second loading animation

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.5
- **Build Tool**: Vite 8.0.10
- **Styling**: CSS
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: Browser localStorage
- **Development**: ESLint for code quality

## 📦 Installation

1. Clone or download the project directory
2. Navigate to the project folder:
   ```bash
   cd my-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

### Development Mode
Run the development server with hot module reloading:
```bash
npm run dev
```

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Check code quality with ESLint:
```bash
npm run lint
```

## 📂 Project Structure

```
my-app/
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # React entry point
│   ├── movieitem.jsx     # Individual movie card component
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/               # Public files
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
└── index.html            # HTML entry point
```

## 🎯 Components Overview

### App.jsx
Main component that manages:
- Movie list state with localStorage persistence
- Search filtering
- Add/Edit/Delete operations
- Rating and favorite toggle functionality
- Loading state

### MovieItem.jsx
Reusable movie card component displaying:
- Movie title with favorite indicator
- Genre information
- Interactive 5-star rating system
- Action buttons (Favorite, Edit, Remove)

## 💾 Data Structure

Each movie object contains:
```javascript
{
  id: number,           // Unique identifier (timestamp-based)
  title: string,        // Movie title
  genre: string,        // Movie genre
  favorite: boolean,    // Favorite status
  rating: number        // 1-5 star rating
}
```

## 🎨 Features in Detail

- **Search**: Real-time search that filters movies by title (case-insensitive)
- **Edit**: Click "Edit" to modify a movie's title and genre
- **Rate**: Click individual stars to set a 1-5 rating
- **Favorite**: Toggle favorite status to mark important movies
- **Auto-save**: All changes are automatically saved to localStorage

## 📝 Notes

- Movies are stored in the browser's localStorage and persist between sessions
- The app includes a 1.5-second loading animation on initial load
- Supports multiple genres: Sci-Fi and others
- IDs are generated using JavaScript timestamps to ensure uniqueness
