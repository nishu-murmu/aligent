import { useState } from "react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import {
  Input,
  Button,
  HStack,
  Heading,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
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
      <InputGroup>
        <InputLeftElement
          color="white"
          children={<SearchIcon />}
        ></InputLeftElement>
        <Input
          placeholder="Search your movies/series"
          variant="flushed"
          textColor="white"
          fontSize="20px"
          htmlSize={20}
          width="auto"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
      </InputGroup>
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
