import { Text } from "@/components/Text";
import { Section, Stack } from "@av-digital/components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

export default function Footer() {
  return (
    <Section>
      <div className="flex max-md:flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 w-full">
          <Stack>
            <Text variant="h2" className="text-white">
              LOREM IPSUM DOLOR
            </Text>
            <Text variant="bodySm" className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              quae odio ab, sed in minima consectetur. Nobis, consequatur
              aspernatur? Hic voluptatem rem, ducimus qui molestias dicta
              consequuntur repellat illo modi!
            </Text>
          </Stack>
          <div className="flex flex-col">
            <Text variant="body" className="text-white">
              Nos siga em nossas redes sociais.
            </Text>
            <div className="flex gap-3">
              <Link href={'#'}><InstagramIcon className="text-white" fontSize="large"/></Link>
              <Link href={'#'}><FacebookIcon className="text-white" fontSize="large"/></Link>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
            <ul className="space-y-3">
                <li><Link href={'#hero'}> <Text variant="body" className="text-white">• Inicio</Text></Link></li>
                <li><Link href={'#sobre'}> <Text variant="body" className="text-white">• Sobre</Text></Link></li>
                <li><Link href={'#cardapio'}> <Text variant="body" className="text-white">• Cardapio</Text></Link></li>
                <li><Link href={'#comentarios'}> <Text variant="body" className="text-white">• Comentários</Text></Link></li>
                <li><Link href={'#localizacao'}> <Text variant="body" className="text-white">• Localização</Text></Link></li>
            </ul>
        </div>
        <div className="flex flex-col gap-3 w-full">
            <Text variant="h3" className="text-white">
                Localização
            </Text>
            <Text variant="body" className="text-white">
                São Paulo - SP
            </Text>
            <Text variant="body" className="text-white">
                Bragança Paulista, Parque dos Estados.
            </Text>
        </div>
      </div>
    </Section>
  );
}
