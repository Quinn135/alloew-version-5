import Head from 'next/head';

function Button(props) {
  return (
  <button className="btn primary" onClick={() => version(props.version)}>
    {props.version}
  </button>
  )
}

function version(version) {
    document.getElementById('game').src = "../turboman/"+version+"/index.html"
    document.getElementById('gametitle').innerHTML = "Turboman "+version
  }

export default function Games() {
  return (
    <div className="fadein w-screen flex flex-col justify-center items-center text-center">
      <Head>
        <title>Alloew Games.</title>
      </Head>
      <h1 className="text-6xl">Games!</h1>
      <h4 className="text-xl">Believe it or not, we made these games.</h4>
      <br /><br />
      <h1 id="gametitle" className="text-2xl">Turboman V1.0S5</h1>
      <iframe id="game" className="game rounded-lg"
        src="../turboman/V1.0S5/index.html" />
      <details>
        <summary>Versions (Left : Newest, Right : Oldest) (Click)</summary>
        <div className="w-screen space-x-2 flex flex-wrap justify-center items-center">
          <Button version="V1.0S5" />
          <Button version="V1.0S4.1" />
          <Button version="V1.0S4" />
          <Button version="V1.0S3" />
          <Button version="V1.0S2" />
          <Button version="V1.0S1" />
          <Button version="B1.1.1" />
          <Button version="B1.1" />
          <Button version="B1.0" />
          <Button version="A3.3.1" />
          <Button version="A3.3" />
          <Button version="A3.2.1" />
          <Button version="A3.2" />
          <Button version="A3.1" />
          <Button version="A2.0" />
          <Button version="A1.0" />
        </div>
      </details>
      <br /><br /><br />
    </div>
  )
}
