import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Hello World </h1>
      <button className="text-blue-500 bg-white font-bold py-2 px-4 mt-4 rounded-lg border border-gray-200">
        <Link href="/profile"> Visit Profile</Link>
      </button>
    </div>
  );
}
