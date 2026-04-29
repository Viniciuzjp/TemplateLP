import { Text } from "@/components/Text";
import { Section, Stack } from "@av-digital/components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

export default function Footer() {
  return (
    <Section>
      <div className="flex max-md:flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 w-full">
          <Stack>
            <Text variant="h2">
              Estamos sempre por perto
            </Text>
            <Text variant="bodySm">
              Porque boa comida merece estar sempre ao seu alcance.
            </Text>
          </Stack>
          <div className="flex flex-col">
            <Text variant="body">
              Nos siga em nossas redes sociais.
            </Text>
            <div className="flex gap-3">
              <Link href={"#location"}>
                <InstagramIcon
                  className="text-(--color)"
                  fontSize="large"
                />
              </Link>
              <Link href={"#location"}>
                <FacebookIcon
                  className="text-(--color)"
                  fontSize="large"
                />
              </Link>
              <Link href={"#location"}>
                <WhatsAppIcon
                  className="text-(--color)"
                  fontSize="large"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <ul className="space-y-3">
            <li>
              <Link href={"#hero"}>
                {" "}
                <Text variant="body">
                  • Inicio
                </Text>
              </Link>
            </li>
            <li>
              <Link href={"#sobre"}>
                {" "}
                <Text variant="body">
                  • Sobre
                </Text>
              </Link>
            </li>
            <li>
              <Link href={"#cardapio"}>
                {" "}
                <Text variant="body">
                  • Cardapio
                </Text>
              </Link>
            </li>
            <li>
              <Link href={"#comentarios"}>
                {" "}
                <Text variant="body">
                  • Comentários
                </Text>
              </Link>
            </li>
            <li>
              <Link href={"#localizacao"}>
                {" "}
                <Text variant="body">
                  • Localização
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Text variant="h3">
            Localização
          </Text>
          <Text variant="body">
            São Paulo - SP
          </Text>
          <Text variant="body">
            Bragança Paulista, Parque dos Estados.
          </Text>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5"><Text>@ {new Date().getFullYear()} Todos os direitos reservados</Text></div>
    </Section>
  );
}
