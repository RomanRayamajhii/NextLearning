interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
   next : {
    revalidate : 10
   }
  });
  const data: Post[] = await res.json();

  return (
    <div> 
    <h1>Blog Page</h1>
    <div>
        <h1>time : {new Date().toLocaleTimeString()}</h1>
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
 