import { MagnifyingGlassPlus } from "phosphor-react";
import logoImage from "./assets/logo-nlw.svg";
import './styles/main.css';


export default function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img
        src={logoImage}
        alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlwGradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="#" className="relative rounded-lg overflow-hidden transition-[0.5] hover:scale-[1.055]">
          <img src="/game1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Título do Game</strong>
            <span className="text-sm text-zinc-300 block">X anúncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden transition-[0.5] hover:scale-[1.055]">
          <img src="/game2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Título do Game</strong>
            <span className="text-sm text-zinc-300 block">X anúncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden transition-[0.5] hover:scale-[1.055]">
          <img src="/game3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Título do Game</strong>
            <span className="text-sm text-zinc-300 block">X anúncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden transition-[0.5] hover:scale-[1.055]">
          <img src="/game4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Título do Game</strong>
            <span className="text-sm text-zinc-300 block">X anúncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden transition-[0.5] hover:scale-[1.055]">
          <img src="/game5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Título do Game</strong>
            <span className="text-sm text-zinc-300 block">X anúncios </span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden transition-[0.5] hover:scale-[1.055]">
          <img src="/game6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Título do Game</strong>
            <span className="text-sm text-zinc-300 block">X anúncios </span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-nlwGradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 rounded-lg flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="flex items-center gap-3 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>

      </div>
    </div >
  )
}

