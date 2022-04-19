import { HStack, Box, Image, Heading } from "@chakra-ui/react";

const ListItem = () => {
  return (
    <HStack>
      <Image
        borderRadius="15px"
        src={require("../styles/nishu.jpg")}
        height="120px"
        width="100px"
      />
      <Heading as="h4" padding="0px 10px">
        This is a heading
      </Heading>
      <Box fontSize="sm" align="left">
        2022
      </Box>
    </HStack>
  );
};

export default ListItem;
