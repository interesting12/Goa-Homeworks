import Link from "next/link"
export default function About() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            This is about page 
            <br />
            <Link className="text-white" href="/" >helo</Link>
        </div>
    )
}