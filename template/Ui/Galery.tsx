import { Section, Stack } from "@av-digital/components";
import { Text } from "@/components/Text";
import { ImageCards } from "@/components/ImageCards";

export default function Galery() {
  return (
    <>
    <div className="mb-30">
      <Section>
        <div id="sobre" className="flex justify-center items-center">
          <Stack>
            <div className="flex flex-col items-center justify-center">
              <Text variant="h2">
                Galeria
              </Text>
              <Text variant="bodyLg">
                Veja mais sobre nosso estabelecimento.
              </Text>
            </div>
          </Stack>
        </div>
      </Section>
      <Section>
        <ImageCards/>
      </Section>
      </div>
    </>
  );
}
