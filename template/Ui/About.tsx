import { Text } from "@/components/Text";
import Image from "next/image";
import { Section, Stack } from "@av-digital/components";

export default function About() {
  return (
    <>
      <div className="mb-30">
        <Section>
          <div id="sobre">
            <Stack>
              <div className="flex-col flex-center">
                <Text variant="h2">
                  SOBRE NÓS
                </Text>
                <Text variant="bodyLg">
                  Mais do que comida, entregamos experiência.
                </Text>
              </div>
            </Stack>
          </div>
          <div className="flex max-md:flex-col w-full items-center justify-center">
            <div className="flex-center md:w-6/10 w-full">
              <Image
                src="/img3.png"
                alt="banner"
                width={400}
                height={380}
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover"
              />
            </div>
            <div className="md:w-4/10">
              <div className="flex flex-col items-center justify-center text-center p-5 space-y-5">
                <Text variant="h2">
                  Nossa essência em cada preparo
                </Text>
                <Text variant="body">
                  Nascemos da paixão por transformar ingredientes simples em
                  experiências memoráveis. Cada detalhe do nosso processo — da
                  escolha dos ingredientes ao preparo — é pensado para entregar
                  sabor, qualidade e consistência. Mais do que uma hamburgueria,
                  somos um espaço feito para reunir pessoas, compartilhar
                  momentos e criar memórias. Aqui, cada pedido carrega um pouco
                  da nossa essência: dedicação, autenticidade e amor pelo que
                  fazemos.
                </Text>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
