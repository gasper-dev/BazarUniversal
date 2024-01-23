import clsx from "clsx";
interface BadgeProps {
  category?: string;
}

export default function Badge({ category }: BadgeProps) {
  console.log(category);

  const badgeClasses = clsx(
    "inline-block",
    "whitespace-nowrap",
    "rounded-md",
    "px-2",
    "py-1",
    "text-sm",
    "font-bold",
    "leading-none",
    "text-white",
    {
      "bg-red-500": category === "smartphones",
      "bg-green-500": category === "fragrances",
      "bg-blue-500": category === "laptops",
      "bg-yellow-400": category === "home-decoration",
      "bg-green-400": category === "groceries",
      "bg-indigo-400": category === "skincare",
    }
  );

  return <span className={badgeClasses}>{category}</span>;
}
