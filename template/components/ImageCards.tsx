import { ImagesGalery } from "@/design-system/variables/Images";
import { Section } from "@av-digital/components";
import Image from "next/image";

export const ImageCards = () => {
  return (
    <Section>
      <div className="flex flex-col w-full gap-3 items-center justify-center">
        <div className="w-full h-140 bg-black"><Image src={'/image1.webp'} alt="galery" width={1000} height={1000} className="object-cover"/></div>
        <div className="grid grid-cols-2 md:flex w-full gap-3">
          {ImagesGalery.map((img) => (
            <div key={img.id} className="w-full h-60 bg-black">
              <Image src={img.src} alt="galeryimg" width={500} height={50} className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
