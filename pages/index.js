import Head from 'next/head';
export default function Home() {
  return (
    <div className="fadein w-screen flex flex-col justify-center items-center text-center">
      <Head>
        <title>Alloew Home.</title>
      </Head>
      <h1 className="text-6xl">Welcome to Alloew!</h1>
      <h4 className="text-xl">A website where me and my friends make things for fun.</h4>
      <br />
      <div className="flex flex-col rounded
      border border-gray-500 p-2 m-2">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl">Even newer website!</h1>
          <div className="flex flex-row items-center max-w-3xl">
            <img src="../alloew.png" className="mr-8
            w-1/3 object-contain" />
            <p className="text-lg">We are now on Alloew Version 5, simpler and better than before! (Again)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
