import { Heading, IconButton, HStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const WishListItem = () => {
  return (
    <HStack spacing="125px">
      <Heading size="sm">This is heading</Heading>
      <IconButton size="sm" icon={<CloseIcon />}></IconButton>
    </HStack>
  );
};

export default WishListItem;
