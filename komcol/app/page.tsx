import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-8">
        <h1 className="text-4xl font-bold">Welcome to My Landing Page</h1>
        <p className="text-lg mt-4">Build your future with us.</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg">
          Get Started
        </button>
      </section>
    </div>

  );
}