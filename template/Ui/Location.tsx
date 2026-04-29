import { Section } from "@av-digital/components";
import { Text } from "@/components/Text";
import Link from "next/link";

export function Location() {
  return (
    <Section spacing="lg">
      <div
        id="localizacao"
        className="w-full flex justify-center mb-30 relative"
      >
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-white/5 to-transparent" />

        <div className="w-full max-w-6xl flex flex-col gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <Text variant="h2" className="text-white">
              Localização
            </Text>
            <Text variant="bodyLg" className="text-gray-400 max-w-md">
              Venha nos visitar e experimentar o melhor hambúrguer da região.
            </Text>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col gap-6">
              <div className="group flex flex-col gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition hover:bg-white/10 hover:scale-[1.01]">
                <div className="flex items-center gap-2 text-white">
                </div>

                <Text variant="bodyLg" className="text-gray-400 text-sm">
                  Rua Exemplo, 123 <br />
                  Bragança Paulista - SP
                </Text>

                <Link
                  href="https://www.google.com/maps?q=Bragança+Paulista+SP"
                  target="_blank"
                  className="text-sm text-primary hover:underline mt-2"
                >
                 <Text >Abrir no Google Maps →</Text>
                </Link>
              </div>

              <div className="group flex flex-col gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition hover:bg-white/10 hover:scale-[1.01]">

                <div className="flex flex-col gap-2 text-sm">
                  {[
                    ["Seg - Sex", "18h - 23h"],
                    ["Sábado", "16h - 00h"],
                    ["Domingo", "16h - 22h"],
                  ].map(([day, time]) => (
                    <div
                      key={day}
                      className="flex justify-between text-gray-300 dark:text-neutral-700"
                    >
                      <Text variant="bodyLg">{day}</Text>
                      <Text variant="bodyLg">{time}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group">
              <iframe
                src="https://www.google.com/maps?q=Bragança+Paulista+SP&output=embed"
                className="w-full h-75 md:h-full grayscale group-hover:grayscale-0 transition"
                title="map"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

              <a
                href="https://www.google.com/maps?q=Bragança+Paulista+SP"
                target="_blank"
                className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium shadow hover:scale-105 transition"
              >
                Ver rota
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}