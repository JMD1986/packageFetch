import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        test
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
