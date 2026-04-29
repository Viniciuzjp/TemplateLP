export const ProductFilter = [
  { name: "todos" },
  { name: "burger" },
  { name: "pizza" },
  { name: "acompanhamento" },
  { name: "sobremesa" },
  { name: "bebida" },
  { name: "saudavel" },
];

export type ProductsType = {
  id: number,
  name: string
  price: number,
  category:string,
  ingredients: string,
  image: string
}

export const products = [
  {
    id: 1,
    name: "Burger Clássico",
    price: 24.9,
    category: "burger",
    ingredients:
      "Pão brioche, hambúrguer 150g, queijo cheddar, alface, tomate e molho especial",
    image: "/img.png",
  },
  {
    id: 2,
    name: "Burger Bacon Supreme",
    price: 29.9,
    category: "burger",
    ingredients:
      "Pão brioche, hambúrguer 180g, queijo prato, bacon crocante, cebola caramelizada e molho barbecue",
    image: "/img3.png",
  },
  {
    id: 3,
    name: "Pizza Margherita",
    price: 39.9,
    category: "pizza",
    ingredients:
      "Massa artesanal, molho de tomate, mussarela, manjericão fresco e azeite",
    image: "/pizza.png",
  },
  {
    id: 4,
    name: "Pizza Calabresa",
    price: 42.9,
    category: "pizza",
    ingredients:
      "Massa artesanal, molho de tomate, calabresa, cebola e mussarela",
    image: "/pizza2.png",
  },
  {
    id: 5,
    name: "Batata Frita Crocante",
    price: 14.9,
    category: "acompanhamento",
    ingredients: "Batata, sal e óleo vegetal",
    image: "/batata.png",
  },
  {
    id: 6,
    name: "Milkshake Chocolate",
    price: 18.9,
    category: "bebida",
    ingredients: "Leite, sorvete de chocolate, calda de chocolate e chantilly",
    image: "/milkshake.png",
  },
  {
    id: 7,
    name: "Açaí Tradicional",
    price: 21.9,
    category: "sobremesa",
    ingredients: "Açaí, banana, granola e leite condensado",
    image: "/açai.png",
  },
  {
    id: 8,
    name: "Salada Fresh",
    price: 19.9,
    category: "saudavel",
    ingredients: "Alface, rúcula, tomate cereja, pepino e molho especial",
    image: "/salada.png",
  },
  {
    id: 9,
    name: "Refrigerante Lata",
    price: 6.9,
    category: "bebida",
    ingredients: "Bebida gaseificada, açúcar e aromatizantes",
    image: "/lata.png",
  },
];
