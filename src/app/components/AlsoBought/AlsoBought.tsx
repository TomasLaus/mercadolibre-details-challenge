import React from "react";
import {Box, Badge, Image} from "@chakra-ui/react";

const AlsoBought: Function = (): JSX.Element[] => {
  const alsob = [
    {
      id: 1,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_830892-MLA46174633611_052021-AB.webp",
      imageAlt: "Rear view of modern home with pool",
      title: "Stitch Y Angel 2 Peluches De 20 Cm - Hermosos Angel Y Stich",
      formattedPrice: "$2.900",
      freeShipping: true,
    },
    {
      id: 2,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_872612-MLA48473755513_122021-AB.webp",
      imageAlt: "Peluche",
      title: "Oso De Peluche Proyector Estrellas Luz De Noche Bright Teddy",
      formattedPrice: "$3.300",
      freeShipping: true,
    },
    {
      id: 3,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_967297-MLA48886007023_012022-AB.webp",
      imageAlt: "Peluche",
      title: "Peluches Pokemon Go 20cm Varios Modelos Pikachu Pokemones",
      formattedPrice: "$1.500",
      freeShipping: true,
    },
    {
      id: 4,
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_785583-MLA43550642377_092020-AB.webp",
      imageAlt: "Peluche",
      title: " Stitch Rosa Angel Peluche",
      formattedPrice: "$1.779",
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

  return alsob.map((p) => (
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

export default AlsoBought;
