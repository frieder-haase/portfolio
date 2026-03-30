export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div></div>
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-4 py-8">

          <div className="w-1/2 rounded-lg overflow-hidden border-2 border-solid border-bgblack flex flex-col">
            <div>
              <img src="/assets/Ticketsystem.png" alt="Ticketsystem" className="bild" />
            </div>
            <div className="letterbox">
              <h3>IHK-Abschlussprojekt: Webbasiertes Ticketsystem</h3>
              <p>Full-Stack Umsetzung - API-Umsetzung - Symfony & React</p>
            </div>
          </div>

          <div className="w-1/2 rounded-lg overflow-hidden border-2 border-solid border-bgblack flex flex-col">
            <div>
              <img src="/assets/TankschutzHalle.png" alt="Tankschutz Halle" className="bild" />
            </div>
            <div className="letterbox">
              <h3>Tankschutz Halle</h3>
              <p>Umsetzung in WordPress nach vorgegebenen Design</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 py-8"> 
          <div className="w-1/2 rounded-lg overflow-hidden border-2 border-solid border-bgblack flex flex-col">
            <div>
              <img src="/assets/JensIwan.png" alt="Jens Iwan" className="bild" />
            </div>
            <div className="letterbox">
              <h3>Jens Iwan</h3>
              <p>Umsetzung in WordPress nach vorgegebenen Design</p>
            </div>
          </div>

          <div className="w-1/2 rounded-lg overflow-hidden border-2 border-solid border-bgblack flex flex-col">
            <div>
              <img src="/assets/AfricanExplorer.png" alt="African Explorer" className="bild" />
            </div>
            <div className="letterbox">
              <h3>African Explorer</h3>
              <p>Umsetzung der Suchfunktion</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
