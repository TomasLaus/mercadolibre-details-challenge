import {Heading, Stack, Table, Tbody, Tr, Td, Text, Box} from "@chakra-ui/react";
import React from "react";

type FeaturesProps = {
  features: Array<{
    id: string;
    name: string;
    value_name: string;
    values: any;
    attribute_group_id?: string;
    attribute_group_name?: string;
  }>;
};
const Features = ({features}: FeaturesProps) => {
  return (
    <Stack spacing={8}>
      <Heading as="h3" variant="thin_gray">
        Características principales
      </Heading>
      <Table
        css={{
          "&": {
            display: "table-cell",
            borderRadius: "5px",
            border: "1px solid  #ededed",
          },
        }}
        variant="striped"
      >
        <Tbody>
          {features.map((feature) => (
            <Tr
              key={feature.id}
              css={{
                "&": {
                  width: "100%",
                },
                "&:nth-child(odd) :first-child": {
                  backgroundColor: "#ebebeb",
                },
                "&:nth-child(even) :first-child": {
                  backgroundColor: "#f5f5f5",
                },
                "&:nth-child(odd) :nth-child(2)": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <Td
                css={{
                  "&": {
                    display: "table-cell",
                    textAlign: "left",
                    verticalAlign: "middle",
                  },
                  "&:nth-child(odd) :first-child": {
                    backgroundColor: "#ebebeb",
                  },
                  "&:nth-child(even) :first-child": {
                    backgroundColor: "#f5f5f5",
                  },
                  "&:nth-child(odd) :nth-child(2)": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                {feature.name}
              </Td>
              <Td
                css={{
                  "&": {
                    display: "table-cell",
                    textAlign: "left",
                    width: "550px",
                    verticalAlign: "middle",
                  },

                  "&:nth-child(odd) :first-child": {
                    backgroundColor: "#ebebeb",
                  },
                  "&:nth-child(even) :first-child": {
                    backgroundColor: "#f5f5f5",
                  },
                  "&:nth-child(odd) :nth-child(2)": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                {feature.values[0].name}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Stack>
        <Text fontSize="20px" lineHeight="25px">
          Otras características
        </Text>

        <Box
          css={{
            "&": {
              display: "flex",
              flexWrap: "wrap",
            },
          }}
        >
          <Text
            css={{
              "&": {
                width: "50%",
                boxSizing: "border-box",
              },
            }}
          >
            {" "}
            <strong>Material:</strong> Peluche
          </Text>

          <Text
            css={{
              "&": {
                width: "50%",
                boxSizing: "border-box",
              },
            }}
          >
            {" "}
            <strong>Es material hipoalergénico:</strong> No
          </Text>

          <Text
            css={{
              "&": {
                width: "50%",
                boxSizing: "border-box",
              },
            }}
          >
            {" "}
            <strong>Es material hipoalergénico:</strong> No
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Features;
