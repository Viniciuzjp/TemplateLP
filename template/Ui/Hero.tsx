import Image from "next/image";
import { Text } from "@/components/Text";
import { Button } from "@av-digital/components";

export default function Hero() {
  return (
    <>
      <div id="hero" className="relative w-full h-227.5 mb-30">
        <Image src="/front-view-burger-with-veggies-meat.jpg" alt="Banner" fetchPriority="high" loading="lazy" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex-center md:justify-start">
          <div className="flex flex-col items-center text-center md:items-start md:text-left px-4 md:px-12 max-w-xl space-y-3">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              <Text variant="h1">Sabor Que Conquista</Text>
            </h1>
            <Text variant="body" className="dark:text-white">
              Mais que uma refeição, uma experiência para compartilhar com quem você gosta.
            </Text>
            <Button variant="primary" className="w-5/10 rounded-3xl text-transparent">Faça Seu Pedido</Button>
            
          </div>
        </div>
      </div>
    </>
  );
}
