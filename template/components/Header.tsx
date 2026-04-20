import Link from "next/link";
import { Text } from "./Text";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="sticky top-0 w-full overflow-hidden h-20 bg-white/10 z-10">
      <div className="flex">
        <div className="flex h-auto p-2">
        {'Logo'}
        </div>
        <div className="flex w-full gap-10 p-5 justify-end items-center">
          <Link href={"#sobre"}>
            <Text variant="bodySm" className="text-white">
              Sobre
            </Text>
          </Link>
          <Link href={"#cardapio"}>
            <Text variant="bodySm" className="text-white">
              Cardápio
            </Text>
          </Link>
          <Link href={"#comentarios"}>
            <Text variant="bodySm" className="text-white">
              Comentários
            </Text>
          </Link>
          <Link href={"#localizacao"}>
            <Text variant="bodySm" className="text-white">
              Localização
            </Text>
          </Link>
          <Link href={"http://wa.me"}>
            <Text variant="bodySm" className="text-white">
              Fale Conosco
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};
