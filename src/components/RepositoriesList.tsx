/* eslint-disable no-restricted-globals */
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux/";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector(
    (state: any) => state.repositories
  );
  console.log(data);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    searchRepositories(term) as any;
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input title="searchform" onChange={(e) => setTerm(e.target.value)} />
        <button>search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
