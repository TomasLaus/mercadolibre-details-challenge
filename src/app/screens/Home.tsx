import React, {useEffect, useRef, useState} from "react";
import {HStack, Stack, StackDivider, Text, Link, Box, Button, Icon} from "@chakra-ui/react";

import mock from "../../product/mock";
import {Product, Review} from "../../product/types";
import {
  Categories as CategoriesLinks,
  Project,
  Related as RelatedLinks,
} from "../../app/components/Categories";
import Previews from "../components/Previews";
import Features from "../components/Features/Features";
import Description from "../../app/components/Description/Description";
import Comments from "../../app/components/Comments/Comments";
import ProductReviews from "../../app/components/Reviews";
import PriceCard from "../../app/components/PriceCard";
import InfoCard from "../../app/components/InfoCard";
import Promoted from "../../app/components/Promoted/Promoted";
import SellerProducts from "../components/SellerProducts/SellerProducts";
import AlsoBought from "../components/AlsoBought/AlsoBought";
import AlsoSaw from "../components/AlsoSaw/AlsoSaw";

interface Props {
  product: Product;
  reviews: Review[];
}

var link: any = document.querySelector("link[rel~='icon']");

if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
}
link.href = "https://mutatis.cl/wp-content/uploads/2019/08/meli_logo_4.png";

const HomeScreen: React.FC<Props> = ({product = mock.product, reviews = mock.reviews}) => {
  useEffect(() => {
    document.title = `${product.title} | Mercado Libre`;

    return () => {
      document.title = "Mercado Libre";
    };
  }, [product.title]);

  return (
    <>
      <div>
        <Stack py={2} spacing={4}>
          <RelatedLinks />
          <CategoriesLinks />
        </Stack>

        <HStack
          alignItems="flex-start"
          bgColor="white"
          mt={2}
          p={4}
          rounded="md"
          shadow="md"
          width="100%"
        >
          <Stack flex={2}>
            <Previews pictures={product.pictures} />
            <Stack alignSelf="center" divider={<StackDivider />} spacing={10} width="90%">
              <StackDivider />
              <Stack>
                <Text
                  css={{
                    "&": {
                      display: "block",
                      fontSize: "24px",
                      fontWeight: 400,
                      lineHeight: "30px",
                      marginBottom: "15px",
                    },
                  }}
                >
                  Publicaciones del vendedor
                </Text>
                <Box
                  css={{
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                    "&": {
                      width: "700px",
                      display: "flex",
                      overflow: "scroll",
                    },
                  }}
                >
                  <SellerProducts
                    css={{
                      "&": {
                        width: "50%",
                      },
                    }}
                  />
                </Box>
                <Link
                  css={{
                    "&": {
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "1px",
                    },
                  }}
                >
                  Ver más publicaciones del vendedor
                </Link>
              </Stack>
              <Features features={product.attributes} />
              <Description />
              <Comments />
              <ProductReviews reviews={reviews} />
            </Stack>
          </Stack>
          <Stack flex={0.9}>
            <PriceCard {...product} reviews={reviews} />
            <InfoCard address={product.seller_address} />
          </Stack>
        </HStack>
        <Project projectId={product.id} py={4} />

        <div style={{maxHeight: "700px", height: "500px"}}>
          <Stack>
            <Text fontSize="24px" fontWeight={400} mb={2} style={{display: "inline-block"}}>
              Productos promocionados{" "}
              <Link fontSize="15px" fontWeight={50} ml={2}>
                Anunciá aquí
              </Link>
            </Text>

            <Box
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "&": {
                  display: "flex",
                  overflow: "scroll",
                },
              }}
            >
              <Promoted />
            </Box>
          </Stack>
        </div>

        <div style={{maxHeight: "700px", height: "500px"}}>
          <Stack>
            <Text fontSize="24px" fontWeight={400} mb={2} style={{display: "inline-block"}}>
              Quienes vieron este producto también compraron
            </Text>

            <Box
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "&": {
                  display: "flex",
                  overflow: "scroll",
                },
              }}
            >
              <AlsoSaw />
            </Box>
          </Stack>
        </div>

        <div style={{maxHeight: "700px", height: "500px"}}>
          <Stack>
            <Text fontSize="24px" fontWeight={400} mb={2} style={{display: "inline-block"}}>
              Quienes compraron este producto también compraron
            </Text>

            <Box
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "&": {
                  display: "flex",
                  overflow: "scroll",
                },
              }}
            >
              <AlsoBought />
            </Box>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
