import { usePost } from "@/services/queries";

const Posts = () => {
  const { data, size, setSize } = usePost();

  return (
    <div>
      <h1>Posts</h1>
      {data &&
        data.map((nestedArray, index) => (
          <div key={index}>
            {nestedArray.map((item) => (
              <div key={item.id}>
                <h2>
                  {item.id} {item.title}
                </h2>
              </div>
            ))}
          </div>
        ))}
      <button onClick={() => setSize(size + 1)}>Load More..</button>
    </div>
  );
};

export default Posts;
