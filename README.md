# Kodigo Music App

A Spotify-inspired music streaming frontend application built with **React** and **Vite**. Kodigo Music App lets you browse popular artists, albums, and playlists through a clean, modern UI.

## Features

- **Home page** – Browse featured artists (e.g. Bad Bunny, Karol G, Feid), popular albums, and curated playlists displayed in a carousel layout.
- **Player page** – View album/playlist details and track listings.
- **Authentication UI** – Login and Sign-up forms with client-side validation powered by React Hook Form.
- **Navigation** – Search bar and quick access buttons to log in or register.
- **Global state** – Context API manages user session, form type, and playback state across the app.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI components |
| [Vite](https://vitejs.dev/) + SWC | Build tool & fast dev server |
| [React Router DOM 6](https://reactrouter.com/) | Client-side routing |
| [React Hook Form 7](https://react-hook-form.com/) | Form management & validation |
| [Bootstrap](https://getbootstrap.com/) | Responsive styling |
| [gh-pages](https://github.com/tschaub/gh-pages) | GitHub Pages deployment |

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/DENISGUERRA777/Kodigo-Music-App.git
cd Kodigo-Music-App

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

The app is also live at: <https://denisguerra777.github.io/Kodigo-Music-App/>

## Project Structure

```
src/
├── assets/
│   └── context/
│       └── UserContext.jsx   # Global state (user, form type, play state)
└── pages/
    ├── home/
    │   ├── components/       # NavBar, Biblioteca, Carrusel, ArtistCard, GenericCard, FilaComponent, PlayList
    │   ├── Home.jsx
    │   └── Player.jsx
    └── session/
        ├── components/       # LoginForm, RegisterForm
        └── Session.jsx
```

## License

This project was created as part of the Kodigo Full-Stack Bootcamp.
