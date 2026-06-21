import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Hello This is page
      <br />
      <Link className="text-white" href="/about" >cllick</Link>
    </div>
  );
}
