export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="flex  min-h-screen p-2">{children}</main>;
}
