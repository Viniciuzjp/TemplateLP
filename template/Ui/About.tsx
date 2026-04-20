import { Text } from "@/components/Text";
import Image from "next/image";
import { Container, Section, Stack } from "@av-digital/components";

export default function About() {
  return (
    <>
    <div className="mb-30">
          <Section>
            <div id="sobre" className="flex justify-center items-center">
              <Stack>
                <div className="flex flex-col items-center justify-center">
                <Text variant="h2" className="text-white">
                  SOBRE NÓS
                </Text>
                <Text variant="bodyLg" className="text-white">Mais do que comida, entregamos experiência.</Text>
                </div>
              </Stack>
            </div>
            <div className="flex max-md:flex-col w-full items-center justify-center">
              <div className="md:w-6/10 w-full">
                <Image
                  src={"/img3.png"}
                  alt="banner"
                  width={500}
                  height={500}
                  className="object-cover"
                ></Image>
              </div>
              <div className="md:w-4/10">
                <div className="p-5 space-y-5">
                  <Text variant="h2" className="text-white">
                    LOREM IPSUM DOLOR
                  </Text>
                  <Text variant="body" className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque facilis, optio nihil saepe dolores assumenda sint a
                    ullam, eius cupiditate suscipit asperiores laboriosam
                    repellendus quibusdam earum eum maiores voluptatibus vitae.
                  </Text>
                </div>
              </div>
            </div>
          </Section>
          </div>
    </>
  );
}
