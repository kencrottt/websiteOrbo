import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white shadow-md">
      <Link href="/" className="text-2xl font-bold">
        MyBrand 🚀
      </Link>
      <div className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/beli">Beli</Link>
        <Link href="/joki">Joki</Link>

      </div>
    </nav>
  );
}