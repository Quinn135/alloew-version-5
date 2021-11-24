import Head from 'next/head';

function Item(props) {
  return (
    <div class="w-full flex flex-col justify-center items-center">
      <br />
      <h1 className="text-3xl">{props.name}</h1>
      <h1 className="text-lg">By : {props.author}</h1>
      <img src={props.src} className="m-auto rounded" style={{ 'max-height': '80vh', 'max-width': '80vw', }} />
      <br />
      <div className="border-b w-11/12 h-2 dark:border-gray-200 border-gray-800"></div>
    </div>
  )
}

export default function Store() {
  return (
    <div className="fadein w-screen flex flex-col justify-center items-center text-center">
      <Head>
        <title>Alloew Store.</title>
      </Head>
      <h1 className="text-6xl">Store!</h1>
      <h4 className="text-xl">Welcome to the store where you can download images (mostly Jacob) has made.</h4>
      <br />
      <div className="border-b w-11/12 h-2 dark:border-gray-200 border-gray-800"></div>
      <Item name="Colored Homer" author="Jacob" src="../store/Colored Homer.png" />
      <Item name="Colorless Homer" author="Jacob" src="../store/Colorless Homer.png" />
      <Item name="Homer is Fine" author="Jacob" src="../store/Homer is Fine.png" />
      <Item name="homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer" author="Jacob" src="../store/homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer.png" />
      <Item name="Retro Homer" author="Jacob" src="../store/Retro Homer.png" />
      <Item name="Fred Simmer" author="Quinn" src="../store/Fred Simmer.png" />
      <br />
    </div>
  )
}
