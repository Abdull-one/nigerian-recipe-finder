# Nigerian Recipe Finder

A simple React app that lets users search for Nigerian recipes (using TheMealDB) and view details like ingredients and instructions. The app is being built step by step as part of the ALX Frontend Capstone project.

## Tech
- React (Vite)
- Tailwind CSS
- React Router
- TheMealDB API
- Zustand (for state management, upcoming)

---

## Project Progress

### Day 1
- Initialized Vite + React project
- Installed and configured Tailwind CSS
- Verified Tailwind setup with a test heading

### Day 2
- Created basic project structure (`components`, `pages`)
- Added `Header`, `Footer`, and `Navbar` components
- Implemented simple layout with `Layout.jsx`

### Day 3
- Installed and configured **React Router**
- Added routes: Home, About, Services, Contact
- Set up layout wrapping all pages with shared Header, Navbar, and Footer

### Day 4
- Created `Home` page with a hero section
- Added placeholder for featured recipes
- Improved UI styling using Tailwind grid and responsive utilities

### Day 5
- Integrated TheMealDB API
- Implemented `RecipeList` component to display fetched recipes
- Added `RecipeDetails` page to show full recipe info (ingredients, instructions)

### Day 6
- Created `SearchBar` component
- Implemented live search functionality (query TheMealDB API by user input)
- Display filtered recipes dynamically in `RecipeList`

---

## Next Steps
- Add Zustand for global state management
- Implement Favorites & Recommendations
- Improve UI/UX with animations and better recipe cards
- Deploy app to Vercel
