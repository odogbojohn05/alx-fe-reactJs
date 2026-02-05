# Copilot Instructions for ALX Frontend React.js Monorepo

## Codebase Overview
This is a monorepo containing multiple React + Vite learning projects. Each directory under root (`alx-react-app`, `alx-react-app-new`, `alx-react-app-props`, `github-user-search`, `my-company`, `recipe-sharing-app`) is an independent Vite+React project with its own `package.json`, build config, and dependencies.

## Key Architecture Patterns

### State Management Approaches
- **Zustand** (recipe-sharing-app): Used for global state with simple, action-based stores. See [recipeStore.js](../recipe-sharing-app/src/components/recipeStore.js) - provides recipes, favorites, and recommendations with immutable updates.
- **React Context** (alx-react-app-props): Manual context creation via [UserContext.js](../alx-react-app-props/UserContext.js) with Provider pattern for passing data down component tree.
- **Local useState** (github-user-search): Form state and async data stored in component state with loading/error handling.

### API Integration
- **axios-based service layer** (github-user-search): External API calls isolated in [githubService.js](../github-user-search/src/services/githubService.js). Pattern: export async functions, handle errors with try/catch, return response data.
- Always handle loading and error states separately in components.

### Routing
- **react-router-dom**: Used in recipe-sharing-app (v6) and alx-react-app (v7). Route handlers wrap components and extract params via `useParams()` hook.

### Component Structure
- **Functional components** with hooks (useState, useParams, custom hooks).
- **Inline styles** for basic styling (common pattern across projects).
- Props destructuring at component level.
- Event handlers follow pattern: `handle{Action}` (e.g., `handleSubmit`, `handleClick`).

## Build & Development Workflow

### All Projects Use
- **Vite** (v7.2.4+) for bundling and dev server
- **React** (v19.2.0+) with Fast Refresh enabled
- **ESLint** with React Hooks plugin (flat config format)

### Commands
Every project supports (from its own directory):
```bash
npm run dev      # Start dev server on http://localhost:5173 (default)
npm run build    # Production build to dist/
npm run preview  # Preview built app
npm run lint     # Check code (recipe-sharing-app only)
```

### Important Notes
- **No TypeScript**: All projects use `.jsx`/`.js` (not `.ts`/`.tsx`).
- **ESLint rule**: `varsIgnorePattern: '^[A-Z_]'` - unused capital-letter vars (React components, constants) don't trigger errors.
- Some projects have Tailwind CSS dependencies configured but not fully integrated - check `tailwindcss` in devDependencies if needed.

## Project-Specific Conventions

### Form Handling
- Use controlled inputs with `useState` (value + onChange handler)
- Validate before submission, clear on success
- Manage loading/error state during async operations

### Data Flow with Zustand (recipe-sharing-app)
```javascript
// Subscribe to entire state or slice it
const recipes = useRecipeStore((state) => state.recipes);
const addRecipe = useRecipeStore((state) => state.addRecipe);

// All state updates are immutable: spread arrays/objects, never mutate directly
```

### Context Usage (alx-react-app-props)
- Create context without initial value: `createContext(null)`
- Wrap component tree with Provider, pass data as `value`
- Consume with `useContext(UserContext)` in child components

## Common Development Patterns

### Error Handling
Async operations pattern:
```javascript
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

// Before fetch
setLoading(true);
setError("");

// In try/catch/finally
try {
  // fetch data
} catch (err) {
  setError("User-friendly message");
} finally {
  setLoading(false);
}
```

### Component ID Generation
Use `Date.now()` for simple ID generation in list items (seen in AddRecipeForm).

## File Structure Pattern
Each project follows:
```
src/
  main.jsx          # Entry point
  App.jsx           # Root component
  App.css           # Global styles
  components/       # Reusable components
  services/         # API calls, utilities (if needed)
```

## When Modifying Code

1. **Add features**: Check if state management is Zustand (immutable updates) or useState (imperative)
2. **Fix async bugs**: Verify loading/error state cleanup in finally blocks
3. **Add forms**: Follow controlled component pattern with clear, descriptive state names
4. **Update dependencies**: Note that each project is independent - changes to one don't affect others
5. **ESLint violations**: Prefix unused vars with capital letter if they're exports, otherwise remove

## External Dependencies to Know
- **axios**: HTTP client (github-user-search)
- **zustand**: State management (recipe-sharing-app)
- **react-router-dom**: Client-side routing (recipe-sharing-app v6, alx-react-app v7)
- **tailwindcss**: CSS framework (configured but not always active)
