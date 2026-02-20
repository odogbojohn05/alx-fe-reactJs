import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          React Query Demo
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
