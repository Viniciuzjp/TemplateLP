"use client";
import { Button, Section } from "@av-digital/components";
import { Text } from "@/components/Text";
import { Card } from "@/components/Card";
import Image from "next/image";
import { useState } from "react";
import { products, ProductFilter, ProductsType } from "@/design-system/variables/products";
import Link from "next/link";
import { useTheme } from "@/components/Context/themeContext";

export const Menu = () => {
  const [category, setCategory] = useState("todos");
  const { theme } = useTheme();

  const isDark = theme === "dark" ? "primary" : "secondary";

  const filteredProducts =
    category === "todos"
      ? products
      : products.filter((i) => i.category === category);

  return (
    <Section>
      <div
        id="cardapio"
        className="w-full max-w-6xl mx-auto flex flex-col gap-12 mb-30 relative"
      >
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-white/5 to-transparent" />

        <div className="flex flex-col items-center text-center gap-3">
          <Text variant="h2">
            Cardápio
          </Text>
          <Text variant="bodyLg" className="text-gray-400 max-w-md">
            Os sabores que fazem nossos clientes voltarem sempre
          </Text>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {ProductFilter.map((item) => {
            const active = category === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setCategory(item.name)}
                className={`px-5 py-2 rounded-full text-sm transition-all border backdrop-blur-md
                ${
                  active
                    ? "bg-white text-black border-white shadow-lg scale-105"
                    : "text-gray-300 border-white/10 hover:bg-white/10 hover:scale-105"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3">
          {filteredProducts.map((product: ProductsType) => (
            <Card
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition"
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 group-hover:bg-black/10 transition" />
              </div>

              <div className="flex flex-col justify-between flex-1 p-4 gap-4">
                <div className="flex flex-col gap-1">
                  <Text variant="productPrice">
                    {product.name}
                  </Text>

                  <Text className="text-neutral-800" variant="bodySm">
                    {product.ingredients}
                  </Text>
                </div>

                <div className="flex items-center justify-between">
                  <Text className="font-semibold">
                    R$ {product.price.toFixed(2)}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href={"http://wa.me"}>
            <Button variant={isDark} size="lg" className="px-8">
              Pedir no WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};