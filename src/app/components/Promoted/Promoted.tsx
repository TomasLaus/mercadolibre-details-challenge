import React from "react";
import {Box, Badge, Image} from "@chakra-ui/react";

const Promoted: Function = (): JSX.Element[] => {
  const promoted = [
    {
      id: 1,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_770863-MLA48481503504_122021-AB.webp",
      imageAlt: "Rear view of modern home with pool",
      title: "Oso De Peluche Proyector Estrellas Luz De Noche Bright Teddy",
      formattedPrice: "$1.900",
      freeShipping: true,
    },
    {
      id: 2,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_997101-MLA46444926524_062021-AB.webp",
      imageAlt: "Peluche",
      title: "Peluche Mickey O Minnie 30 Cm Mickey Mouse Club House",
      formattedPrice: "$2.300",
      freeShipping: true,
    },
    {
      id: 3,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_887574-MLA45404969973_032021-AB.webp",
      imageAlt: "Peluche",
      title: "Mickey Club House Minnie Plush Con Luz Ditoys Disney",
      formattedPrice: "$2.300",
      freeShipping: true,
    },
    {
      id: 4,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_617273-MLA48182409009_112021-AB.webp",
      imageAlt: "Peluche",
      title: "Peluche De 25 Cm - Stitch",
      formattedPrice: "$5.300",
      freeShipping: true,
    },
    {
      id: 5,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_947152-MLA45853179380_052021-AB.webp",
      imageAlt: "Peluche",
      title: "Peluche Muñeco Amongus Gigante Impostor Tripulante 41 Cm",
      formattedPrice: "$1.300",
      freeShipping: false,
    },
    {
      id: 6,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_917251-MLA48717907732_122021-AB.webp",
      imageAlt: "Peluche",
      title: "Juguete Bailarin Juego Del Calamar Repite- Canta - Baila",
      formattedPrice: "$3.100",
      freeShipping: true,
    },
    {
      id: 7,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_840454-MLA44728671151_012021-AB.webp",
      imageAlt: "Peluche",
      title: "Peluche Blink Nivis Suave En Caja Original Disney Store 1048",
      formattedPrice: "$900",
      freeShipping: false,
    },
    {
      id: 8,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_618231-MLA46505722148_062021-AB.webp",
      imageAlt: "Peluche",
      title: " Peluche Muñeco Amongus Impostor Tripulante Premium",
      formattedPrice: "$890",
      freeShipping: true,
    },
    {
      id: 9,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_818414-MLA47252157217_082021-AB.webp",
      imageAlt: "Peluche",
      title: "Peluche Sonic 35 Cm Excelente Calidad Premium Nudillos ",
      formattedPrice: "$1.300",
      freeShipping: false,
    },
  ];

  return promoted.map((p) => (
    <div key={p.id} style={{height: "45vh", maxHeight: "55vh"}}>
      <Box
        bgColor="white"
        borderRadius="lg"
        borderWidth="1px"
        css={{
          "&": {
            maxHeight: "500px",
          },
          "&:hover": {
            boxShadow: "1px 1px 13px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          },
        }}
        direction="row"
        maxW="sm"
        mb={10}
        mr={5}
        overflow="hidden"
        w="224px"
      >
        <Image alt={p.imageAlt} src={p.imageUrl} w="100%" />

        <Box fontSize="26px" fontWeight="200" ml="6" mt="1">
          {p.formattedPrice}
        </Box>

        <Box p="6">
          <Badge bgColor="transparent" borderRadius="full" color="#00a650" fontWeight="900" ml="-1">
            {p.freeShipping ? "Envío gratis" : null}
          </Badge>
          <Box isTruncated as="h4" fontWeight="200" lineHeight="tight" mt="1">
            {p.title}
          </Box>
        </Box>
      </Box>
    </div>
  ));
};

export default Promoted;
