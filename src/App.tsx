import { MagnifyingGlassPlus } from "phosphor-react";
import { useEffect, useState } from "react";
import { GameCard } from "./components/GameCard";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

import logoImage from "./assets/logo-nlw.svg";
import './styles/main.css';
import { CreateAdBanner } from "./components/CreateAdBanner";

interface Game {
  id: string;
  name: string;
  imageUrl: string;
  _count: {
    Ad: number
  };
}

export default function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games/initialGames")
      .then(response => response.json())
      .then(data => {
        setGames(data);
      })
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img
        src={logoImage}
        alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlwGradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameCard
              key={game.id}
              name={game.name}
              ads={game._count.Ad}
              cover={game.imageUrl}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.DialogPortal>
          <Dialog.DialogOverlay className="justify-center bg-black/60 inset-0 fixed" />

          <Dialog.DialogContent className="fixed bg-[#2A2636] text-white px-10 py-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.DialogTitle className="text-[32px] font-black">Publique um anúncio</Dialog.DialogTitle>

            <Dialog.DialogContent>
              <form className="mt-8">
                {/* Game */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="game"
                    className="font-semibold">Qual o game?</label> <br />
                  <input
                    id="game"
                    type="text"
                    placeholder="Selecione o game que deseja jogar"
                    className="h-[50px] bg-zinc-900 p-y-3 px-4 rounded text-sm placeholder:text-zinc-500" />
                </div>

                {/* Name or Nickname */}
                <div>
                  <label htmlFor="name">Seu nome (ou nickname)</label> <br />
                  <input id="name" type="text" placeholder="Como te chamam dentro do game?" />
                </div>

                {/* YearsPlaying and Discord */}
                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label> <br />
                    <input id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO" />
                  </div>
                  <div>
                    <label htmlFor="discord">Qual seu Discord?</label> <br />
                    <input id="discord" type="text" placeholder="Usuário#0000" />
                  </div>
                </div>

                {/* WeekDays and Hour (Start, End) */}
                <div>
                  <div>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                  </div>
                  <div>
                    <label htmlFor="hour">Qual horário do dia?</label>
                    <div>
                      <input id="hoursStart" type="time" placeholder="De" />
                      <input id="hoursEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>

                {/* Checkbox */}
                <div>
                  <input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>

              </form>

            </Dialog.DialogContent>
          </Dialog.DialogContent>
        </Dialog.DialogPortal>
      </Dialog.Root>

    </div>

  )
}

