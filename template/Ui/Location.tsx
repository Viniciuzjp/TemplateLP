import { Section } from "@av-digital/components";
import { Text } from "@/components/Text";

export function Location() {
  return (
    <Section spacing="lg">
      <div id="localizacao" className="w-full flex justify-center mb-30">
        <div className="w-full max-w-6xl flex flex-col gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <Text variant="h2" className="text-white">
              Localização
            </Text>
            <Text variant="bodyLg" className="text-gray-400 max-w-md">
              Nossa localização e onde você pode nos encontrar.
            </Text>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-6 md:w-4/10">
              <div className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl p-5">
                <Text variant="h3" className="text-white">
                  Endereço
                </Text>
                <p className="text-gray-400 text-sm">
                  📍 Rua Exemplo, 123 <br />
                  Bragança Paulista - SP
                </p>
              </div>

              <div className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                <Text variant="h3" className="text-white">
                  Horário de funcionamento
                </Text>

                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Seg - Sex</span>
                    <span>18h - 23h</span>
                  </div>

                  <div className="flex justify-between text-gray-300">
                    <span>Sábado</span>
                    <span>16h - 00h</span>
                  </div>

                  <div className="flex justify-between text-gray-300">
                    <span>Domingo</span>
                    <span>16h - 22h</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-6/10 w-full flex">
              <div className="w-full h-full rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=Bragança+Paulista+SP&output=embed"
                  className="w-full h-75 md:h-full min-h-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
