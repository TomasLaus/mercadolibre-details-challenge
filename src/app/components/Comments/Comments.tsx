import React, {useState, MutableRefObject} from "react";
import {Heading, Stack} from "@chakra-ui/react";

import Input from "./Input";
import Questions from "./Questions";
import FAQ from "./FAQ";

const initialState = [
  {question: "Que colores tenes disponibles ??"},
  {
    question: "Genial por dónde mandan los productos por Andreani o algún correo",
    answer: "Por correo argentino.",
    date: new Date(2022, 1, 15),
  },
  {
    question: "Hola buen día hacen envíos a Catamarca y que costó tiene",
    answer: "Hola hacemos envios y el mismo es sin costo. Saludos.",
    date: new Date(2022, 2, 1),
  },
];

const Comments = () => {
  const [questions, setQuestions] = useState(initialState);

  const addQuestion = (input: MutableRefObject<any>) => {
    if (input) {
      if (input && input.current.value) {
        setQuestions([
          {
            question: input.current.value,
          },
          ...questions,
        ]);

        input.current.value = "";
      }
    }
  };

  return (
    <Stack spacing={8}>
      <Heading as="h3" variant="thin_gray">
        Preguntas y respuestas
      </Heading>

      <FAQ />

      <Input handleClick={addQuestion} />

      <Stack spacing={4}>
        <Heading as="h4" color="blackAlpha.800" fontSize="lg">
          Últimas realizadas
        </Heading>
        {questions.map((question, idx) => (
          <Questions key={idx} {...question} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Comments;
