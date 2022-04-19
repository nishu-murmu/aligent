import { useState } from "react";
import { HStack, Box, Image, Heading } from "@chakra-ui/react";

const ListItem = (props) => {
  const [data, setData] = useState([]);

  const getAPI = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=56cfe5f5&t=" + props.input
    );
    const value = await response.json();
    setData(value);
  };
  getAPI();

  return (
    <HStack>
      <Image
        borderRadius="15px"
        src={data.Poster}
        height="120px"
        width="110px"
      />
      <Heading as="h4" padding="0px 10px">
        {data.Title}
      </Heading>
      <Box fontSize="sm" align="left">
        {data.Year}
      </Box>
    </HStack>
  );
};

export default ListItem;
