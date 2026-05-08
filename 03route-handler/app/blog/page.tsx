interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data: Post[] = await res.json();

  return (
    <div> 
    <h1>Blog Page</h1>
    <div>
        {data.map((curElem) => (
          <div key={curElem.id}>
            <h3>{curElem.title}</h3>
            <p>{curElem.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
 
