import { Card } from "@/components/Card";
import { Text } from "@/components/Text";
import { Section, Stack } from "@av-digital/components";
import { Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { reviews } from "@/design-system/variables/reviews";

export default function Reviews() {
  return (
    <Section spacing="lg">
      <div id="comentarios" className="w-full max-w-6xl mx-auto flex flex-col gap-10 mb-30">
        <div className="flex flex-col items-center text-center gap-2">
          <Text variant="h2">
            Comentários
          </Text>
          <Text variant="bodyLg">
            Não é só sabor, é experiência — e eles comprovam.
          </Text>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id}>
              <div className="flex flex-col h-full p-5 gap-5">
                <div className="flex gap-3">
                  <div className="flex-center justify-center w-12 h-12 rounded-full">
                    <AccountCircleIcon fontSize="large" className="text-(--color)" />
                  </div>

                  <div className="flex flex-col">
                    <Text variant="body">
                      {review.name}
                    </Text>
                    <Text variant="bodySm">
                      {review.time}
                    </Text>
                  </div>
                </div>

                <div className="flex">
                  <Rating value={review.rating} readOnly size="small" />
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <FormatQuoteIcon fontSize="large" className=" text-(--color)" />

                  <Text variant="body">
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
