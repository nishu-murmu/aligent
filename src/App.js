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

  // useEffect(() => {
  // const getAPI = async () => {
  //   const response = await fetch(
  //     "http://www.omdbapi.com/?apikey=56cfe5f5&t=" + input
  //   );
  //   const data = await response.json();
  //   console.log(data.Poster);
  // };
  // getAPI();
  // });

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
