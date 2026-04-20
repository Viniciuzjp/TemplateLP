'use client'

import { Card } from "@/components/Card";
import { Text } from "@/components/Text";
import { Section, Stack } from "@av-digital/components";
import { Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const reviews = [
  {
    id: 1,
    name: "Maria Paulino",
    time: "1 ano atrás",
    rating: 5,
    comment:
      "Ambiente super agradável, com um atendimento impecável, além de lanches maravilhosos com ingredientes de qualidade, vale muito a pena a experiência!",
  },
  {
    id: 2,
    name: "Edjane Maria",
    time: "2 anos atrás",
    rating: 5,
    comment:
      "O melhor lanche que eu já comi, não deixe de provar! Ligue e peça o seu! Atendimento excelente e entrega rápida.",
  },
  {
    id: 3,
    name: "Jonathan Serafim Rodrigues",
    time: "1 ano atrás",
    rating: 5,
    comment: "Lanche top. Bom atendimento e ambiente agradável. Recomendo.",
  },
];

export default function Reviews() {
  return (
    <Section spacing="lg">
      <div id="comentarios" className="w-full max-w-6xl mx-auto flex flex-col gap-10 mb-30">
        <div className="flex flex-col items-center text-center gap-2">
          <Text variant="h2" className="text-white">
            Comentários
          </Text>
          <Text variant="bodyLg" className="text-gray-400">
            Não é só sabor, é experiência — e eles comprovam.
          </Text>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id}>
              <div className="flex flex-col h-full p-5 gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                    <AccountCircleIcon className="text-white" />
                  </div>

                  <div className="flex flex-col">
                    <Text variant="body" className="text-white">
                      {review.name}
                    </Text>
                    <Text variant="bodySm" className="text-gray-400">
                      {review.time}
                    </Text>
                  </div>
                </div>

                <div className="flex">
                  <Rating value={review.rating} readOnly size="small" />
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <FormatQuoteIcon className="text-white/40" />

                  <Text variant="body" className="text-gray-300">
                    {review.comment}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
