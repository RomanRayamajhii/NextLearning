import { Suspense } from "react";
import { Author } from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Page() {
   
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });

  const data: Post[] = await res.json();
  const filteredPosts = data.filter((post) => post.id % 10 === 1);

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Blog Page</h1>

      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">
          time : {new Date().toLocaleTimeString()}
        </h1>

        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="p-6 shadow-xl bg-gray-900 text-white rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-2 capitalize">{post.title}</h3>
              <p className="mb-4">{post.body}</p>

              <Suspense
                fallback={
                  <div className="animate-bounce" >
Loading...
                  </div>
                }
              >
                <Author userId={post.userId} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

