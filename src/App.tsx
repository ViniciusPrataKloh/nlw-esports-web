import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { GameCard } from "./components/GameCard";

import axios from "axios";
import logoImage from "./assets/logo-nlw.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Modal } from "./components/Modal";
import './styles/main.css';

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
    axios("http://localhost:3333/games/initialGames")
      .then(response => {
        setGames(response.data);
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

