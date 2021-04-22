import Image from "next/image";
export default function Home() {
  return (
    <>
      <h1>Homem Page</h1>
      <form>
        <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />
        <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
          Sign up
        </button>
      </form>

      <button class="bg-red-500 hover:bg-red-700 ...">Hover me</button>
      <img src="https://images.unsplash.com/photo-1618902544126-340f03626a5a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

      <Image
        src="/https://images.unsplash.com/photo-1618902544126-340f03626a5a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </>
  );
}
