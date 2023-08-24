import Counter from '@/Components/Counter';

export default function Home() {
  return (
    <main>
      <h1 className=" sm:text-5xl flex justify-center font-bold md: text-7xl font-mono  py-5 px-5 text-center lg:text-9xl  ">
        Start Counting
      </h1>
      <Counter />
    </main>
  );
}
