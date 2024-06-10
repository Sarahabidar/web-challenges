import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();

  const handleRandomVolume = () => {
    const randomValue = getRandomElement(volumes);
    router.push(`/volumes/${randomValue.slug}`);
  };

  return (
    <>
      <Head>
        <title>List of the Volumes</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Random Volume</button>
    </>
  );
}
