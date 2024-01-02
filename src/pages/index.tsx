import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  if (typeof window) {
    const router = useRouter();
    router.push("/movies");
  }
  return (
    <>
      <Head>
        <title>FandangClone</title>
        <meta
          name="Fadango Clone"
          content="Using movieGlu API to make a fandago clone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white">Home</main>
    </>
  );
}
