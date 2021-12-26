import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/Searchbar";
import { getUser } from "./store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUser());
  });

  return (
    <div className="App">
      <Searchbar />
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  );
}

export default App;
