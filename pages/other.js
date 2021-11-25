import Head from 'next/head';
import { BiPhone, BiReply } from 'react-icons/bi';
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
      <br/><div className="border-b w-11/12 h-2 dark:border-gray-200 border-gray-800"></div><br/>
      <br />
      <h3 className="text-5xl">Buttons/Links</h3>
      <br />
      <div className="flex flex-row flex-wrap space-x-2">
        <button className="btn primary">Primary</button>
        <button className="btn secondary">Secondary</button>
        <button className="btn tertiary">Tertiary</button>
        <button className="btn quaternary">Quaternary</button>
        <button className="link">Link</button>
      </div>
      <br/>
      <br/><div className="border-b w-11/12 h-2 dark:border-gray-200 border-gray-800"></div><br/>
      <br />
      <h3 className="text-5xl">Animations : </h3>
      <br />
      <div>
        <h1 className="text-3xl">Spin :</h1>
        <img className="max-w-sm m-24 spin" src="../alloew2.png"></img>
      </div>
      <br />
      <div className="border-b w-2/3 h-2 dark:border-gray-400 border-gray-600"></div><br/>
      <br />
      <div>
        <h1 className="text-3xl">Fade in and out :</h1>
        <img className="max-w-md m-12 fade" src="../alloew2.png"></img>
      </div>
      <br />
      <div className="border-b w-2/3 h-2 dark:border-gray-400 border-gray-600"></div><br/>
      <br />
      <div>
        <h1 className="text-3xl">Blinking text :</h1>
        <div className="flex flex-row text-center justify-center items-center">
          <h1 className="text-4xl">Today I will&nbsp;</h1>
          <div className="bg-red-400 blink h-10 w-5 rounded-sm"></div>
        </div>
      </div>
      <br />
      <div className="border-b w-2/3 h-2 dark:border-gray-400 border-gray-600"></div><br/>
      <br />
      <div>
        <h1 className="text-3xl">Spin and scale : </h1>
        <br />
        <img className="max-w-md m-24 spinscale" src="../alloew2.png"></img>
        <label for="transition">Batman Transition Sound</label>
        <audio id="transition" controls className="m-auto">
          <source src="../transition.mp3" type="audio/mpeg"></source>
        </audio>
        <br />
    </div>
    </div>
  )
}
