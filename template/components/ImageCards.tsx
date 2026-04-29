import { ImagesGalery } from "@/design-system/variables/Images";
import { Section } from "@av-digital/components";
import Image from "next/image";

export const ImageCards = () => {
  return (
    <Section>
      <div className="w-full grid md:grid-cols-3 gap-4">
        <div className="relative md:col-span-2 h-75 md:h-full group overflow-hidden rounded-2xl">
          <Image
            src="/local6.jpg"
            alt="galery"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg font-semibold">Nosso espaço</p>
            <p className="text-sm text-gray-300">
              Ambiente moderno e aconchegante
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ImagesGalery.map((img) => (
            <div
              key={img.id}
              className="relative h-35 md:h-37.5 group overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt="galeryimg"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};