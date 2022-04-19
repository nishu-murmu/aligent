import { Fragment, useState, useEffect } from "react";
import { HStack } from "@chakra-ui/react";

//files
import Display from "./components/display";
import Search from "./components/search";
import SearchList from "./components/search-list";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const inputHandler = (enteredInput) => {
    setInput(enteredInput);
  };
  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=56cfe5f5&t=" + input)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <Fragment>
      <Search onSubmitHandler={inputHandler} />
      <HStack>
        <SearchList />
        <Display />
      </HStack>
    </Fragment>
  );
}

export default App;
