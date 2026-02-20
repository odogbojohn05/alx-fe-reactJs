import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60,          
    cacheTime: 1000 * 60 * 5,      
    refetchOnWindowFocus: true,    
    keepPreviousData: true,        
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full max-w-lg">
      <button
        onClick={() => refetch()}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-2 rounded bg-white shadow">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
