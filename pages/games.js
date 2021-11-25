import Head from 'next/head';
export default function Games() {
  function version(version) {
    document.getElementById('game').src = "../turboman/"+version+"/index.html"
    document.getElementById('gametitle').innerHTML = "Turboman "+version
  }
  return (
    <div className="fadein w-screen flex flex-col justify-center items-center text-center">
      <Head>
        <title>Alloew Games.</title>
      </Head>
      <h1 className="text-6xl">Games!</h1>
      <h4 className="text-xl">Believe it or not, we made these games.</h4>
      <br /><br />
      <h1 id="gametitle" className="text-2xl">Turboman</h1>
      <iframe id="game" className="game rounded-lg"
        src="../turboman/V1.0S5/index.html" />
      <details>
        <summary>Versions (Left : Newest, Right : Oldest) (Click)</summary>
        <div className="w-screen space-x-2 flex flex-wrap justify-center items-center">
        <button className="btn primary" onClick={() => version("V1.0S5")}>
          V1.0S5
        </button>
        <button className="btn primary" onClick={() => version("V1.0S4.1")}>
          V1.0S4.1
        </button>
        <button className="btn primary" onClick={() => version("V1.0S4")}>
          V1.0S4
        </button>
        <button className="btn primary" onClick={() => version("V1.0S3")}>
          V1.0S3
        </button>
        <button className="btn primary" onClick={() => version("V1.0S2")}>
          V1.0S2
        </button>
        <button className="btn primary" onClick={() => version("V1.0S1")}>
          V1.0S1
        </button>
        <button className="btn primary" onClick={() => version("B1.1.1")}>
          B1.1.1
          </button>
          <button className="btn primary" onClick={() => version("B1.1")}>
          B1.1
          </button>
          <button className="btn primary" onClick={() => version("B1.0")}>
          B1.0
          </button>
          <button className="btn primary" onClick={() => version("A3.3.1")}>
          A3.3.1
          </button>
          <button className="btn primary" onClick={() => version("A3.3")}>
          A3.3
          </button>
          <button className="btn primary" onClick={() => version("A3.2.1")}>
          A3.2.1
          </button>
          <button className="btn primary" onClick={() => version("A3.2")}>
          A3.2
          </button>
          <button className="btn primary" onClick={() => version("A3.1")}>
          A3.1
          </button>
          <button className="btn primary" onClick={() => version("A2.0")}>
          A2.0
          </button>
          <button className="btn primary" onClick={() => version("A1.0")}>
          A1.0
        </button>
        </div>
      </details>
      <br /><br /><br />
    </div>
  )
}
