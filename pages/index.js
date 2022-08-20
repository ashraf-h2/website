import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-[800px] mx-auto my-0">
        <p className="text-green-500">Hamayoon</p>
      </div>
      <Link href="/projects">
        <a className="text-blue-500 hover:text-blue-900 hover:underline">
          Go to Projects
        </a>
      </Link>
    </div>
  );
}
