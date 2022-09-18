import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { useEffect, useState } from "react";
import { GameCard } from "./components/GameCard";

import logoImage from "./assets/logo-nlw.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Input } from "./components/form/Input";
import './styles/main.css';
import { Modal } from "./components/Modal";

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
        <Modal data={games} />
      </Dialog.Root>

    </div>

  )
}

