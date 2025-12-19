import { Cormorant } from "next/font/google";
const cormorant = Cormorant({ subsets: ["latin"] });

export default function CraftsyLoader() {
  return (
    <div className="min-h-screen bg-[#fcf8f0] flex flex-col justify-center items-center z-50">
      <div className="Craftsy-spinner mb-8">
        <div className="Craftsy-block"></div>
        <div className="Craftsy-block"></div>
        <div className="Craftsy-block"></div>
        <div className="Craftsy-block"></div>
      </div>

      <h2
        className={`${cormorant.className} text-2xl font-bold text-[#3f3f3f] animate-pulse`}
      >
        Crafting your experience...
      </h2>
    </div>
  );
}
