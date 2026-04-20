"use client";

import { Button, Section, Stack } from "@av-digital/components";
import { Text } from "@/components/Text";
import { Card } from "@/components/Card";
import Image from "next/image";
import { useState } from "react";
import { products, ProductFilter } from "@/design-system/variables/products";
import Link from "next/link";

export const Menu = () => {
  const [category, setCategory] = useState("todos");

  const filteredProducts =
    category === "todos"
      ? products
      : products.filter((i) => i.category === category);

  return (
    <Section>
      <div
        id="cardapio"
        className="w-full max-w-6xl mx-auto flex flex-col gap-10 mb-30"
      >
        <div className="flex flex-col items-center text-center gap-2">
          <Text variant="h2" className="text-white">
            Principais do Cardápio
          </Text>
          <Text variant="bodyLg" className="text-gray-400">
            Os favoritos da casa que todo mundo ama
          </Text>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {ProductFilter.map((item) => {
            const active = category === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setCategory(item.name)}
                className={`px-4 py-2 rounded-full text-sm transition-all border
                  ${
                    active
                      ? "bg-white text-black border-white"
                      : "text-gray-300 border-white/10 hover:bg-white/10"
                  }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.map((product: any) => (
            <Card key={product.id}>
              <div className="flex flex-col h-full">
                <div className="w-full h-40 relative">
                  <Image
                    src={"/img3.png"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 p-4 gap-3">
                  <div className="flex flex-col gap-1">
                    <Text className="text-white" variant="productPrice">
                      {product.name}
                    </Text>

                    <Text className="text-gray-400" variant="bodySm">
                      {product.ingredients}
                    </Text>
                  </div>

                  <div className="flex items-center justify-between">
                    <Text className="text-white font-semibold">
                      R$ {product.price.toFixed(2)}
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href={"http://wa.me"}>
            <Button variant="secondary" size="lg">
              Peça agora
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
