import { useState, useEffect } from "react";
import {
  Box,
  HStack,
  VStack,
  Button,
  Heading,
  Text,
  Image,
  Badge,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
//files

const Display = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=56cfe5f5&t=" + props.input
      );
      const value = await response.json();
      setData(value);
    };
    console.log(data);
    getAPI();
  }, [props.input, setData]);
  const { Ratings } = data;

  return (
    <VStack className="display" height="100vh">
      <HStack padding="20px">
        <Image
          defaultValue="Movie/Series Poster"
          borderRadius="15px"
          src={data.Poster}
          height="300px"
          width="280px"
        />
        <VStack padding="0px 20px">
          <Button leftIcon={<AddIcon />}>Add to wishlist</Button>
          <Heading as="h2" defaultValue="Movie/Series Title">
            {data.Title}
          </Heading>
          <Badge variant="outline" padding="0px 6px">
            {data.Rated}
          </Badge>
          <Text>
            {data.Year}, {data.Genre}, {data.Runtime}
          </Text>
          <Text>{data.Actors}</Text>
        </VStack>
      </HStack>
      <Box textAlign="left" padding="20px 220px">
        {data.Plot}
      </Box>
      <HStack margin="10px 0px" padding="20px">
        <Box textAlign="center" padding="10px 40px">
          <h1 as="h6">{Ratings?.[0].Value}</h1>
          <Text>General Ratings</Text>
        </Box>
        <Box textAlign="center" padding="10px 40px">
          <h2 as="h6">
            {Ratings?.[1] === undefined ? "n/a" : Ratings?.[1].Value}
          </h2>
          <Text>Rotten Tomatoes</Text>
        </Box>
        <Box textAlign="center" padding="10px 40px">
          <h2 as="small">
            {Ratings?.[2] === undefined ? "n/a" : Ratings?.[2].Value}
          </h2>
          <Text>Metacritic</Text>
        </Box>
      </HStack>
    </VStack>
  );
};
export default Display;
