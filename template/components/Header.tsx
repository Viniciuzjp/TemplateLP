"use client";

import Link from "next/link";
import { Text } from "./Text";
import { useTheme } from "./Context/themeContext";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Brightness6Icon from "@mui/icons-material/Brightness6";

export const Header = () => {
  const { toggleTheme, theme } = useTheme();

  const isDark =
    theme === "light" ? (
      <BedtimeIcon />
    ) : (
      <Brightness6Icon className="text-white" />
    );

  return (
    <header className="fixed top-0 w-full z-50">
      <div
        className="
          w-full
          flex items-center justify-between
          px-3 md:px-12 py-3
          bg-white/10 backdrop-blur-xl
          border-b border-white/10
        "
      >
        <div className="flex items-center gap-2 md:gap-6 max-sm:text-xs">
          <Link href="#sobre">
            <Text className="hover:text-white transition">
              Sobre
            </Text>
          </Link>
          <Link href="#cardapio">
            <Text className="hover:text-white transition">
              Cardápio
            </Text>
          </Link>
          <Link href="#comentarios">
            <Text className="hover:text-white transition">
              Comentários
            </Text>
          </Link>
          <Link href="#localizacao">
            <Text className="hover:text-white transition">
              Localização
            </Text>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <Link
            href="http://wa.me"
            className="
              text-xs md:text-sm px-2 md:px-4 py-2
              rounded-full
              bg-white text-black
              font-medium
              hover:scale-105 transition
            "
          >
            Contato
          </Link>

          <button
            onClick={toggleTheme}
            className="
              flex items-center justify-center
              w-9 h-9 rounded-full
              bg-white/10
              border border-white/10
              hover:scale-110 transition
            "
          >
            {isDark}
          </button>
        </div>
      </div>
    </header>
  );
};