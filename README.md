# Nigerian Recipe Finder

A simple React app that lets users search for Nigerian recipes (using TheMealDB) and view details like ingredients and instructions. The app is being built step by step as part of the ALX Frontend Capstone project.

## Tech
- React (Vite)
- Tailwind CSS
- React Router
- TheMealDB API

---

## Project Progress

### Day 1
- Initialized Vite + React project
- Installed and configured Tailwind CSS
- Verified Tailwind setup with a test heading

**Commit:**
```bash
git add .
git commit -m "Initialize Vite React project and setup Tailwind CSS"

### Day 2
- Created basic project structure (`components`, `pages`)
- Added `Header`, `Footer`, and `Navbar` components
- Implemented simple layout with `Layout.jsx`
git add .
git commit -m "Setup project structure with Header, Navbar, Footer, and Layout"


### Day 3
- Installed and configured **React Router**
- Added routes: Home, About, Services, Contact
- Set up layout wrapping all pages with shared Header, Navbar, and Footer
git add .
git commit -m "Add React Router with Home, About, Services, Contact pages"

### Day 4
- Created `Home` page with a hero section
- Added placeholder for featured recipes
- Improved UI styling using Tailwind grid and responsive utilities
git add .
git commit -m "Create Home page with hero and placeholder for featured recipes"

### Day 5
- Integrated TheMealDB API
- Implemented `RecipeList` component to display fetched recipes
- Added `RecipeDetails` page to show full recipe info (ingredients, instructions)
git add .
git commit -m "Integrate TheMealDB API, RecipeList, and RecipeDetails page"

### Day 6
- Created `SearchBar` component
- Implemented live search functionality (query TheMealDB API by user input)
- Display filtered recipes dynamically in `RecipeList`
git add .
git commit -m "Add SearchBar with live search and dynamic RecipeList updates"

### Day 7
- Added **Favorites** page
- Implemented functionality to save/remove favorite recipes
- Display user’s favorite recipes in a dedicated page
git add .
git commit -m "Add Favorites page and basic favorite recipe functionality"

### Day 8
- Improved navigation (Home, Recipes, Favorites, Add Recipe, About, Contact)
- Added `Add Recipe` page with a form for users to submit their own recipes
- Enhanced overall UI/UX consistency across pages
git add .
git commit -m "Add Recipe page with basic form for manual recipe entry"

###  Day 9 – Implement Recipe Details Page (Capstone Part 3: Continue Building)
- Created `RecipeDetail.jsx` page inside `src/pages/`.
- Added React Router dynamic route `/recipe/:id`.
- Connected `RecipeCard` → `RecipeDetail` with a `Link` button ("View Details").
- Used TheMealDB API to fetch single recipe details by `idMeal`.
- Displayed recipe image, title, category, area, instructions, and ingredients in a clean layout.
- Added simple "Back to Recipes" navigation.

**Files Created/Updated:**
- `src/pages/RecipeDetail.jsx`
- `src/pages/RecipeList.jsx` (added link to details)
- `src/App.jsx` (updated Routes)

**Commit:**
```bash
git add .
git commit -m "Implement Recipe Details page with React Router and dynamic params"
