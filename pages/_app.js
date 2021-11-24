import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiSun, BiMoon } from 'react-icons/bi';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  function darkLight() {
    document.getElementById('main').classList.toggle('dark');
    document.getElementById('light').classList.toggle('hidden');
    document.getElementById('dark').classList.toggle('hidden');
  }
  return (
    <main className="dark" style={{ 'overflowX': 'hidden', }} id="main">
      <Head>
        <title>Welcome to Alloew!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
      </Head>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900
      text-gray-800 dark:text-gray-100 transition-all duration-150
      text-center">
        <nav className="w-full dark:bg-gray-900 bg-white
      dark:text-gray-200 p-2 font-thin elevation-12 flex flex-row
      fixed top-0 z-50 opacity-100 bg-opacity-100" id="nav">
        <div className="mr-auto">
        <Link href="/">
          <a
            className={router.pathname == "/" ? "link active" : "link"}>
            Home
          </a>
        </Link>
        <Link href="/games">
          <a
            className={router.pathname.startsWith("/games") ? "link active" : "link"}>
            Games
          </a>
        </Link>
        <Link href="/store">
          <a
            className={router.pathname.startsWith("/store") ? "link active" : "link"}>
            Store
          </a>
        </Link>
        <Link href="/other">
          <a
            className={router.pathname.startsWith("/other") ? "link active" : "link"}>
            Other
          </a>
            </Link>
          </div>
          <button id="darkLightButton"
            className="m-auto text-nice"
            onClick={darkLight}>
            <BiSun id="light" size="32" />
            <BiMoon id="dark" className="hidden" size='32' />
          </button>
        </nav>
        <div className="h-24"></div>
          <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp