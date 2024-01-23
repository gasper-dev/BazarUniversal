import Logo from "./components/Logos";
import Search from "./components/ui/Search";
import Container from "./components/ui/Container";
import Link from "next/link";
interface Params {
  searchParams?: { search?: string; page?: string };
}

export default function Home({ searchParams }: Params) {
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Container>
      <div className="max-w-md flex flex-col items-center  justify-center   mx-auto gap-6 ">
        <Logo />
        <div className="w-full flex items-center rounded-md border pr-2 bg-white">
          <Search placeholder="laptops, smartphones, ..." />
        </div>
        <Link
          className="bg-[#bd1e59] text-white  rounded-md p-3 w-1/2 text-center"
          href={`/items?search=${search}&page=${currentPage}`}
        >
          Buscar
        </Link>
      </div>
    </Container>
  );
}
