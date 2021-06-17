import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchTodoData, getTodo } from "./redux/features/todoSlice";

const App = () => {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const todo = useSelector((state) => state.todo);
  console.log("todo", todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoData());
  });
  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{post?.length}</h1>

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
