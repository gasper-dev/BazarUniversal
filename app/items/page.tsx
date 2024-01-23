import React from "react";
import Container from "../components/ui/Container";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Badge from "../components/ui/Badge";
import data from "../../products.json";
import { Product } from "../utils/types";

interface Params {
  searchParams?: { search?: string; page?: string };
}

export default function Page({ searchParams }: Params) {
  const search = searchParams?.search || "";
  let filtered: Product[] = [];
  if (search.length > 3) {
    filtered = data.products.filter((product: Product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <Container>
      <div className="w-full flex flex-col">
        <Navbar />
        <h2 className="text-lg font-semibold">
          Resultados de búsqueda de {search}: {filtered[0]?.stock}
        </h2>
        <div className="flex items-center space-x-2 my-2">
          {filtered.length > 0 && (
            <>
              {Array.from(
                new Set(filtered.map((product) => product.category))
              ).map((category) => (
                <Badge key={category} category={category} />
              ))}
            </>
          )}
        </div>

        {filtered.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
