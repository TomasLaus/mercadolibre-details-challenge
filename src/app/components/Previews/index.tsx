import React, {useState} from "react";
import {Flex, Stack} from "@chakra-ui/react";
// @ts-ignore
import ReactImageZoom from "react-image-zoom";

import {ProductPicture} from "../../../product/types";

import Images from "./Images";

type PreviewsProps = {
  pictures: ProductPicture[];
};

const Previews = ({pictures}: PreviewsProps) => {
  const [currentPicture, setCurrentPicture] = useState(pictures[0]);

  return (
    <Flex height="500px" mb={10}>
      <Stack>
        {pictures.map((pic) => (
          <Images
            key={pic.id}
            active={currentPicture.id}
            handleClick={setCurrentPicture}
            picture={pic}
          />
        ))}
      </Stack>

      <div style={{margin: "0 auto"}}>
        {/* <Image src={currentPicture.url} /> */}
        <ReactImageZoom
          height={500}
          img={currentPicture.url}
          scale={1.2}
          width={500}
          zoomWidth={300}
        />
      </div>
    </Flex>
  );
};

export default Previews;
