import React from "react";
import {
  Flex,
  Link,
  Text,
  Stack,
  Collapse,
  Button,
  Box,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

const Footer = () => {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Box>
      <Button
        _focus={{border: "none"}}
        alignSelf="center"
        bgColor="#f7f7f7"
        borderRadius="5px 5px 0px 0px"
        css={{
          "&": {
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            margin: "0 auto",
          },
        }}
        fontWeight="sm"
        w="150px"
        onClick={onToggle}
      >
        Más información <Icon as={isOpen ? IoIosArrowDown : IoIosArrowUp} ml={1} />
      </Button>

      <Collapse animateOpacity in={isOpen}>
        <Box bg="#f7f7f7" color="white" mt="-1" p="40px">
          <h2 style={{textAlign: "center"}}>
            <Link>
              <a href="https://github.com/TomasLaus/">TomasLaus</a>
            </Link>
          </h2>
          <Text color="black" textAlign="center">
            This is not associated with Mercado Libre.
          </Text>
        </Box>
      </Collapse>

      <Stack backgroundColor="white">
        <Flex
          alignItems="center"
          color="blackAlpha.800"
          direction="row"
          display="block"
          marginLeft="350px"
          py={2}
        >
          <Stack direction="row" fontSize="sm" spacing={5}>
            <Text>Trabajá con nosotros</Text>
            <Text>Términos y condiciones</Text>
            <Text>Cómo cuidamos tu privacidad</Text>
            <Text>Información al usuario financiero</Text>
            <Text>Ayuda</Text>
            <Text>Defensa del Consumidor</Text>
            <Link
              isExternal
              alignItems="flex-end"
              colorScheme="secondary"
              href="https://github.com/TomasLaus"
            >
              TomasLaus
            </Link>
          </Stack>

          <Stack color="blackAlpha.500" direction="row" display="block" fontSize="sm">
            <Text>
              Tomás Laus. <br /> Argentina. This is not associated with Mercado Libre.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;
