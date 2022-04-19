import { Box, List } from "@chakra-ui/react";

//files
import ListItem from "./list-item";
import "../styles/search-list.css";

const SearchList = (props) => {
  return (
    <Box
      width="1200px"
      height="100vh"
      borderRight="1px solid grey"
      padding="20px 20px"
      className="search-list"
    >
      <Box className="results" fontSize="20px" padding="10px">
        results
      </Box>
      <List marginTop="40px">
        <ListItem />
      </List>
    </Box>
  );
};
export default SearchList;
