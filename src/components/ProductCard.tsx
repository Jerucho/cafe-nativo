interface ProductCardProps {
  product_name: string;
  product_price: number;
  product_image: string;
  product_description: string;
  badge?: string;
}
export const ProductCard = ({
  product_name,
  product_price,
  product_image,
  product_description,
}: ProductCardProps) => {
  return (
    <div className="flex max-h-[350px] min-h-3/5 w-full flex-col justify-center rounded-lg bg-white shadow-md">
      <img
        src={product_image}
        alt={product_name}
        className="h-3/5 w-full rounded-t-lg object-cover"
      />
      <div className="h-2/5 p-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{product_name}</h2>
          <p className="text-gray-600">${product_price.toFixed(2)}</p>
        </div>
        <p className="mt-2 text-sm text-gray-500">{product_description}</p>
      </div>
    </div>
  );
};
