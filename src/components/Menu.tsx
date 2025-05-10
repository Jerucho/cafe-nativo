import { ProductCard } from "./ProductCard";
import { Title } from "./Title";

const coffees = [
  {
    product_name: "Expresso",
    product_price: 29.99,
    product_image:
      "https://s3.ppllstatics.com/diariovasco/www/multimedia/2024/11/13/espresso-RrCckvN0LEAFk54KAQQPcXM-1200x840@Diario%20Vasco.jpg",
    product_description:
      "Nuestro espresso signature, intenso y con notas de chocolate negro y frutos rojos",
  },
  {
    product_name: "Flat White Cremoso",
    product_price: 34.99,
    product_image:
      "https://images.arla.com/recordid/8763AA65-2EDD-4328-80C50FD4BB9B9EFE/picture.jpg?width=375&height=265&mode=crop&format=webp",
    product_description:
      "Un flat white cremoso, suave y con un toque de caramelo.",
  },
  {
    product_name: "Latte",
    product_price: 32.99,
    product_image:
      "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/314D11A6-4457-4C70-A1BE-A6C25F597C18/Derivates/B362DC69-6AAA-43E1-AF51-184463E8551B.jpg",
    product_description: "Un latte cremoso con un toque de vainilla.",
  },
  {
    product_name: "Cold Brew",
    product_price: 31.99,
    product_image:
      "https://blog.renaware.com/wp-content/uploads/2021/08/Cold-brew-2.jpg",
    product_description: "Un cappuccino clásico con espuma cremosa.",
  },
];

export const Menu = ({
  ref: menuRef,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) => {
  return (
    <section
      ref={menuRef}
      className="container flex h-auto min-h-screen flex-col justify-center gap-10 bg-bg-alt p-4 pt-20"
    >
      <Title title="Menú" description="Cafés" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {coffees.map((product, index) => (
          <ProductCard
            key={index}
            product_name={product.product_name}
            product_price={product.product_price}
            product_image={product.product_image}
            product_description={product.product_description}
          />
        ))}
      </div>
    </section>
  );
};
