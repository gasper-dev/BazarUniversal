export default function Button({ title }: { title: string }) {
  return (
    <button className="bg-[#bd1e59] text-white mt-4 rounded-md p-2 w-1/2">
      {title}
    </button>
  )
}
