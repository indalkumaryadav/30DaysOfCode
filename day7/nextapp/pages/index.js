import Image from "next/image";
import fetch from "isomorphic-fetch";

export default function Home({ todo }) {
  console.log(todo);
  return (
    <>
      <h1>Homem Page</h1>
      <ul>
        {/* {todo.map((item) => {
          return <li>{item.title}</li>;
        })} */}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/comment/", {
    headers: {
      Authentication: `${"Bea rer "}` + localStorage.getItem("access"),
    },
  });
  const todo = await res.json();

  return {
    props: {
      todo,
    },
  };
};
