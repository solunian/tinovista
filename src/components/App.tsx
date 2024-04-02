import mv_cs_png from "/src/assets/mv_cs.png";
import tinovation_png from "/src/assets/tinovation.png";
import comp_jpg from "/src/assets/comp.jpeg";
import wit_jpg from "/src/assets/wit.jpeg";
import mv_ai_png from "/src/assets/mv_ai.png";
import { TinoVista } from "./TinoVista";

export function App() {
  return (
    <>
    <div className="from-blue-600 to-purple-500 bg-gradient-to-b h-full w-full text-white flex flex-row justify-center">
      
      <div className="flex flex-col my-10 items-center gap-8 px-8 py-10">
        
        <h1 className="font-heading font-bold text-9xl text-center transition drop-shadow-2xl">Tinovation Next Year!</h1>
        
        <p className="text-xl text-yellow-200 max-w-[70rem] my-8">
        <span className="text-yellow-300">IMPORTANT!</span> We have agreed on a merger with Cupertino and Monta Vista's coding clubs.
          We have been building towards a combined community of programmers, and this is only a teaser for what's to come!

          <br/>
          <br/>
          
          We hope for a clean takeover by a central group of students that will work with everyone and monitor the growth of our clubs.
          We will be the Cupertino chapter of the club and transition to competitive coding/CS theory/ACSL over the next couple years!

          <br/>
          <br/>

          Thank you all for this journey with Tinovation, and we hope you will help make our new vision a reality!
        </p>

        <div className="flex flex-row gap-8 flex-wrap">
          <img className="rounded-2xl w-48" src={mv_cs_png.src} alt="mv cs"/>
          <img className="rounded-2xl w-48" src={tinovation_png.src} alt="tinovation"/>
          <img className="rounded-2xl w-48" src={comp_jpg.src} alt="tino comp prog"/>
          <img className="rounded-2xl w-48" src={wit_jpg.src} alt="wit"/>   
          <img className="rounded-2xl w-48" src={mv_ai_png.src} alt="mv ai"/>
        </div>

        <p className="text-xl">and more!!!</p>

        <p className="text-4xl mt-20">Introducing...</p>

        <TinoVista/>
        
        
        <h2 className="text-4xl font-bold mt-8">*requirements* for all</h2>
        <ul className="flex flex-col items-start text-xl list-disc text-pink-200 gap-4">
          <li>$20 membership fee per member.</li>
          <li>must have taken a CS class in school.</li>
          <li>must learn Java, JQuery, and React.</li>
          <li>retreats/joint meetings between Monta Vista and Cupertino High.</li>
          <li>required ACSL/USACO/hackathon participation.</li>
          <li>USACO silver required for members, USACO gold required for officers.</li>
        </ul>

      </div>
    </div>
    <footer className="bg-purple-700 text-purple-950 flex flex-row justify-center py-2">
      TinoVista Tech 2024.
    </footer>
    </>
  );
}