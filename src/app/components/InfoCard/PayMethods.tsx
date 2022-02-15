import React from "react";
import {HStack, Icon, Stack, Text, Heading, Link, Image} from "@chakra-ui/react";
import {FaCcMastercard} from "react-icons/fa";
import {RiMastercardLine} from "react-icons/ri";
import {IoCashOutline} from "react-icons/io5";
import {SiVisa, SiAmericanexpress, SiMastercard, SiCashapp} from "react-icons/si";

import mcredito from "../../../assets/mcredito.png";
import pagofacil from "../../../assets/pagofacil.png";
import rapipago from "../../../assets/rapipago.png";

type PayMethodProps = {
  title: string;
  description?: string;
  icons: any[];
};

const PayMethod = (props: PayMethodProps) => (
  <Stack spacing={1}>
    <Text>{props.title}</Text>
    {props.description && (
      <Text color="blackAlpha.600" fontSize="sm" lineHeight="normal">
        {props.description}
      </Text>
    )}
    <HStack spacing={4}>
      {props.icons.map((icon, idx) => (
        <Icon key={idx} as={icon} color="secondary.700" height={7} width={7} />
      ))}
    </HStack>
  </Stack>
);

const PayMethods = () => {
  const methods = [
    {
      title: "Tarjetas de crédito con Mercado Pago",
      description: "¡Cuotas sin interés con bancos seleccionados!",
      icons: [SiVisa, FaCcMastercard, SiAmericanexpress],
    },
    {title: "Tarjetas de débito", icons: [SiVisa, SiMastercard, RiMastercardLine]},
  ];

  return (
    <Stack spacing={5}>
      <Heading as="h3" fontSize="lg" pb={2} variant="thin_gray">
        Medios de pago
      </Heading>

      <Stack spacing={1}>
        <Text>Hasta en 12 cuotas sin tarjeta</Text>

        <HStack spacing={4}>
          <Image color="secondary.700" height="23px" src={mcredito} width="89px" />
        </HStack>
      </Stack>

      {methods.map((method, idx) => (
        <PayMethod key={idx} {...method} />
      ))}

      <Stack spacing={1}>
        <Text>Efectivo</Text>

        <HStack spacing={4}>
          <Image color="secondary.700" height="14px" src={rapipago} width="76px" />
          <Image color="secondary.700" height="22px" src={pagofacil} width="22px" />
        </HStack>
      </Stack>
      <Link fontSize="sm">Conocé otros medios de pago</Link>
    </Stack>
  );
};

export default PayMethods;
