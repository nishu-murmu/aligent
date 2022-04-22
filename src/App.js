import { Fragment, useState } from "react";
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

  return (
    <Fragment>
      <Search onSubmitHandler={inputHandler} />
      <HStack>
        <SearchList input={input} />
        <Display input={input} />
      </HStack>
    </Fragment>
  );
}

export default App;
