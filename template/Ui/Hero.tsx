import Image from "next/image";
import { Text } from "@/components/Text";
import { Button } from "@av-digital/components";

export default function Hero() {
  return (
    <>
      <div id="hero" className="relative w-full h-227.5 bg-black mb-30">
        <Image src="/front-view-burger-with-veggies-meat.jpg" alt="Banner" fill className="object-cover" />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          <div className="flex flex-col items-center text-center md:items-start md:text-left px-4 md:px-12 max-w-xl space-y-3">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              <Text variant="h1">LOREM IPSUM DOLOR</Text>
            </h1>
            <Text variant="body" className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              harum hic dolor labore quaerat vitae, eius eligendi earum dolores!
              Obcaecati suscipit repellat placeat nobis fugit ipsam
              reprehenderit perspiciatis voluptas neque!
            </Text>
            <Button variant="secondary" className="w-5/10">Faça Seu Pedido</Button>
          </div>
        </div>
      </div>
    </>
  );
}
