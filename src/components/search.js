import { useState } from "react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import { Input, Button, HStack, Heading } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

//files
import WishListItem from "./wishlist-item";

const Search = (props) => {
  const [input, setInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Button
        float="right"
        onClick={onOpen}
        leftIcon={<AddIcon />}
        marginLeft="200px"
      >
        Wishlist
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Watch List</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom="20px">
            <Heading as="h4" size="md">
              Movies List
            </Heading>
            <WishListItem />
            <Heading as="h4" size="md">
              Series List
            </Heading>
            <WishListItem />
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  );
};
export default Search;
