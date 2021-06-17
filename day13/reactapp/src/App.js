import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoData, getTodo } from "./redux/features/todoSlice";

const App = () => {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const todo = useSelector((state) => state.todo.data);
  const loading = useSelector((state) => state.todo.loading);
  const error = useSelector((state) => state.todo.error);
  console.log(error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);
  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{post?.length}</h1>
      {loading && <h1>Loading..</h1>}
      {/* {error && <h1>Error..</h1>} */}
      {todo?.map((item, index) => (
        <li key={index}>{item?.name}</li>
      ))}

      <button
        onClick={() => {
          dispatch(getTodo());
        }}
      >
        fetch API Result
      </button>
    </div>
  );
};

export default App;
