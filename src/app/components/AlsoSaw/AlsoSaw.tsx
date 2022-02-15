import React from "react";
import {Box, Badge, Image} from "@chakra-ui/react";

const AlsoSaw: Function = (): JSX.Element[] => {
  const alsosaw = [
    {
      id: 1,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_890249-MLA45500561904_042021-AB.webp",
      imageAlt: "Peluche",
      title: "Cubo Dado Anti Stress Ansiedad Y Nervios Color A Elección",
      formattedPrice: "$940",
      freeShipping: true,
    },
    {
      id: 2,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_959714-MLA47321676540_092021-AB.webp",
      imageAlt: "Peluche",
      title: "Juguete Agua Bebes Animales Goma Eva C Bolsa Red Infantil ",
      formattedPrice: "$1.320",
      freeShipping: true,
    },
    {
      id: 3,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_808369-MLA48217676314_112021-AB.webp",
      imageAlt: "Peluche",
      title: "Cubo Mágico 3d De 6 Lados Juego De Ingenio Laberinto Colores",
      formattedPrice: "$340",
      freeShipping: true,
    },
    {
      id: 4,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_884647-MLA45537468851_042021-AB.webp",
      imageAlt: "Peluche",
      title: "Animales De Goma Para El Agua Bebe X 6 El Duende Azul 7483",
      formattedPrice: "$1.490",
      freeShipping: true,
    },
    {
      id: 5,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_795840-MLA46906039806_072021-AB.webp",
      imageAlt: "Peluche",
      title: "Baby Yoda Peluche Muñeco Importado Star Wars The Mandalorian",
      formattedPrice: "$1.790",
      freeShipping: false,
    },
    {
      id: 6,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_689348-MLA47011761522_082021-AB.webp",
      imageAlt: "Peluche",
      title: "Peluche De Lilo Y Stitch O Angel 55-60cm Calidad Suave Grand",
      formattedPrice: "$7.100",
      freeShipping: true,
    },
    {
      id: 7,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_603500-MLA47487564153_092021-AB.webp",
      imageAlt: "Peluche",
      title: "Peluche Pokemon Varios Personajes Principales Pikachu 22cm",
      formattedPrice: "$1.200",
      freeShipping: false,
    },
    {
      id: 8,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_852736-MLA48424873827_122021-AB.webp",
      imageAlt: "Peluche",
      title: "Peluche Stitch 45cm Importado Lilo Y Stitch Hermosos Suaves",
      formattedPrice: "$6.890",
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

  return alsosaw.map((p) => (
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

export default AlsoSaw;
