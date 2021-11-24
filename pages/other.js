import Head from 'next/head';
export default function Other() {
  return (
    <div className="fadein w-screen flex flex-col justify-center items-center text-center">
      <Head>
        <title>Alloew Other.</title>
      </Head>
      <h1 className="text-6xl">Other</h1>
      <h4 className="text-xl">These are all the other things that we have made that you might want to try.</h4>
      <br/><div className="border-b w-11/12 h-2 dark:border-gray-200 border-gray-800"></div><br/>
      <h3 className="text-5xl">Credits : </h3>
      <h4 className="text-xl">Lead Developer : Quinn</h4>
      <h4 className="text-xl">Lead Artist : Flynn</h4>
      <h4 className="text-xl">Artist and Map designer : Jacob</h4>
      <h4 className="text-xl">Game Tester : Mycheal, Richard, Quinn, Flynn, Jacob</h4>
      <br/><div className="border-b w-11/12 h-2 dark:border-gray-200 border-gray-800"></div><br/>
      <br />
      <h3 className="text-5xl">Chat</h3>
      <br/>
      <iframe className="game rounded" src="https://deadsimplechat.com/Vc3zaUSkv" />
      <br/>
    </div>
  )
}
