import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
// import axios from "axios";

// const fetchPosts = async () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((r) => r.data.slice(0, 10));
// };

// const postsQueryOptions = {
//   queryKey: ["posts"],
//   queryFn: () => fetchPosts(),
// };

const HomePage = () => {
//   const posts = Route.useLoaderData();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">
        Tanstack Router Auth Example
      </h1>
      <p>
        This is an example of how to use Tanstack Router with authentication.
      </p>

      <div className=" mt-6">
        <ul className="py-2 flex gap-2 flex-col">
          <li>
            <Link
              to="/login"
              className="hover:text-blue-600  flex items-center gap-2"
            >
              <ArrowRight />
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="hover:text-blue-600  flex items-center gap-2"
            >
              <ArrowRight />
              Profile
            </Link>
          </li>
        </ul>
      </div>

      <h3>Welcome Home!</h3>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </main>
  );
};

export const Route = createFileRoute("/")({
//   loader: ({ context: { queryClient } }) =>
//     queryClient.ensureQueryData(postsQueryOptions),
  component: HomePage,
});
