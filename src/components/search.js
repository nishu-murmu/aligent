import { useState } from "react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import { Input, Button, HStack } from "@chakra-ui/react";

const Search = (props) => {
  const [input, setInput] = useState("");

  props.onSubmitHandler(input);
  return (
    <HStack
      justifyContent="center"
      padding="40px"
      borderBottom="1px solid grey"
      className="display"
    >
      <Input
        placeholder="Enter your keywords"
        variant="flushed"
        textColor="white"
        fontSize="20px"
        htmlSize={20}
        width="auto"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <Button leftIcon={<SearchIcon />}>Search</Button>
      <Button float="right" leftIcon={<AddIcon />} marginLeft="200px">
        Wishlist
      </Button>
    </HStack>
  );
};
export default Search;
