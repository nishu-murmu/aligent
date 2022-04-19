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
import "../styles/display.css";

const Display = () => {
  return (
    <VStack className="display" height="100vh">
      <HStack padding="20px">
        <Image
          borderRadius="15px"
          src={require("../styles/nishu.jpg")}
          height="300px"
          width="250px"
        />
        <VStack padding="0px 20px">
          <Button leftIcon={<AddIcon />}>Add to wishlist</Button>
          <Heading as="h2">Nishu Murmu</Heading>
          <Badge variant="outline" padding="0px 6px">
            PG
          </Badge>
          <Text>2001, Action, Romance, Sci-fi, 130min</Text>
          <Text>Amos Murmu, Ruth Murmu, Nicodemus Murmu</Text>
        </VStack>
      </HStack>
      <Box textAlign="left" padding="20px 220px">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Box>
      <HStack margin="10px 0px" padding="20px">
        <Box textAlign="center" padding="10px 40px">
          <h1 as="h6">8.5/10</h1>
          <Text>General Ratings</Text>
        </Box>
        <Box textAlign="center" padding="10px 40px">
          <h2 as="h6">91%</h2>
          <Text>Rotten Tomatoes</Text>
        </Box>
        <Box textAlign="center" padding="10px 40px">
          <h2 as="small">75/100</h2>
          <Text>Metacritic</Text>
        </Box>
      </HStack>
    </VStack>
  );
};
export default Display;
