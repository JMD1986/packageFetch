/* eslint-disable no-restricted-globals */
import React from "react";
import { useState } from "react";
import { useSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);
  //   console.log(data);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    searchRepositories(term) as any;
  };
  const checkState = () => {
    console.log(data);
    console.log(error);
    console.log(loading);
  };
  function ResultsList() {
    const list = data.map((data) => {
      return <li key={data}>{data}</li>;
    });
    //@ts-ignore
    return <ol>{list}</ol>;
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          title="searchform"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>search</button>
        <button onClick={checkState}>search</button>

        {error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
        {!error && !loading && <ResultsList />}
      </form>
    </div>
  );
};

export default RepositoriesList;
