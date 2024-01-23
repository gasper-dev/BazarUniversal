import { StarIcon, HalfStarIcon } from "./ui/Icons";
import { Product } from "../utils/types";

interface CardsProps {
  product: Product;
}

export default function Cards({ product }: CardsProps) {
  return (
    <article className="flex mb-4 p-2 py-4 text-gray-700 items-center space-x-4 inset-0 overflow-hidden rounded-lg border border-black/5 bg-gray-200/25 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.04)] ">
      <img
        alt={product?.title}
        className="h-[120px] w-[120px] rounded-full object-cover "
        height="100"
        src={product.thumbnail} // Puedes usar la URL de la imagen del producto
        style={{
          aspectRatio: "100/100",
          objectFit: "cover",
        }}
        width="100"
      />

      <div className="flex flex-col">
        <span className="text-lg font-semibold ">{product.title}</span>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex  items-center space-x-6">
          <span className="text-lg font-bold">{product.price}$</span>
        </div>
        <div className="flex ">
          {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
            <StarIcon key={index} className="text-yellow-400 h-6 w-6" />
          ))}
          {product.rating % 1 !== 0 && (
            <HalfStarIcon className="text-yellow-400 h-6 w-6" />
          )}
        </div>
      </div>
    </article>
  );
}
