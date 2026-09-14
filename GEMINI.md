# GEMINI.md - Project Overview: my-web-page

This project is a personal website and blog built with **React 18**, **Webpack 5**, and **Firebase**. It follows a standard React architecture with custom build configurations and a suite of UI libraries.

## Project Overview

- **Purpose:** Personal web page, blog, and portfolio showcase.
- **Frontend Architecture:** React (Functional Components) with `react-router-dom` (v6) for declarative routing.
- **UI Libraries:**
  - **Material-UI (MUI v5):** Used for advanced components and icons.
  - **React Bootstrap (v2):** Used for layout and standard UI elements.
  - **FontAwesome (v6):** Used for additional iconography.
  - **Sass:** Used for component-specific styling (`.scss`).
- **Backend/Infrastructure:**
  - **Firebase Hosting:** Web content delivery.
  - **Firebase Firestore:** NoSQL database for blog posts and project data.
  - **Firebase Storage:** Asset management (images, documents).
  - **Firebase Cloud Functions:** Node.js-based serverless functions for backend logic.
- **Build System:** Custom Webpack configuration (`webpack.config.js`) using Babel for transpilation.

## Directory Structure

- `src/`: Main source code directory.
  - `components/`: Reusable UI components (Cards, Header, etc.).
  - `containers/`: Main application container (`App.jsx`) and routing logic.
  - `hooks/`: Custom React hooks (e.g., `useWindowPosition.js`).
  - `pages/`: Page-level components (Home, Blog, etc.).
  - `services/`: API and Firebase service configurations (`firebase-config.js`, `ProjectsService.js`).
  - `styles/`: Global and component-specific SCSS/CSS files.
- `functions/`: Firebase Cloud Functions source code (Node.js 12).
- `public/`: Static assets and the main `index.html` template.
- `dist/`: Output directory for production builds (managed by Webpack).

## Building and Running

### Development
To start the development server with Hot Module Replacement:
```powershell
npm start
```
- **Port:** 8080 (defined in `webpack.config.js`).
- **URL:** http://localhost:8080

### Production Build
To create an optimized production build in the `dist/` directory:
```powershell
npm run build
```

### Firebase Commands
- **Deploy everything:** `firebase deploy`
- **Deploy only functions:** `firebase deploy --only functions`
- **Functions Emulators:** `cd functions && npm run serve`

### Testing
- **Current status:** No tests are currently implemented.
- **Command:** `npm test` (placeholder).

## Development Conventions

- **Code Style:** ESLint with **Airbnb** configuration.
- **Path Aliases:** `@` is configured in Webpack to point to the `src/` directory.
- **Styling:** Prefer Sass (`.scss`) for component-specific styles and CSS for global styles.
- **Routing:** Use `react-router-dom` (v6) within `src/containers/App.jsx`.
- **Firebase:** Centralized configuration in `src/services/firebase-config.js`. Use `firebase/firestore` and `firebase/storage` for data and asset management.
- **PEP 8 (Python):** If adding Python scripts or services, strictly adhere to PEP 8 as per global instructions.

## Key Files

- `package.json`: Project dependencies and scripts.
- `webpack.config.js`: Detailed Webpack configuration for dev and prod.
- `src/index.js`: Main entry point.
- `src/containers/App.jsx`: Main routing configuration.
- `src/services/firebase-config.js`: Firebase app initialization.
- `firestore.rules`: Security rules for the Firestore database.
- `functions/index.js`: Entry point for Firebase Cloud Functions.
