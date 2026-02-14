import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-white shadow p-4 flex gap-4">
          <Link to="/" className="text-blue-600 font-semibold">Home</Link>
        </nav>

        {/* Routes */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
