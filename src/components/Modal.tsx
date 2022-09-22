import * as CheckBox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import axios from "axios";
import { Check, GameController } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Input } from "./form/Input";

interface Game {
    id: string;
    name: string;
    imageUrl: string;
    _count: {
        Ad: number
    };
}

interface Props {
    data: Game[];
}

export function Modal({ data }: Props) {
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [selectedGame, setSelectedGame] = useState<string>('');
    const [voiceChannel, setVoiceChannel] = useState<boolean>(false);

    // useEffect(() => {
    //     axios("http://localhost:3333/games/initialGames")
    //         .then(response => {
    //             setSelectedGame(response.data);
    //         })
    // }, []);

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        try {
            await axios.post(`http://localhost:3333/games/${selectedGame}/ads`, {
                gameId: selectedGame,
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hoursStart: "20:00", //data.hoursStart,
                hoursEnd: "24:00", //data.hoursEnd
                useVoiceChannel: voiceChannel
            });

            alert("Anúncio criado com sucesso!");
        } catch (error) {
            console.log(error);
            alert("Erro ao criar o anúncio!");
        }
    }

    return (
        <Dialog.DialogPortal>
            <Dialog.DialogOverlay className="justify-center bg-black/60 inset-0 fixed" />

            <Dialog.DialogContent className="fixed bg-[#2A2636] text-white px-10 py-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.DialogTitle className="text-[32px] font-black">Publique um anúncio</Dialog.DialogTitle>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mt-8">
                    {/* Game */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">Qual o game?</label> <br />
                        <Select.Root
                            onValueChange={setSelectedGame}>
                            <Select.Trigger className="flex flex-row justify-between bg-zinc-900 py-3 px-4 rounded ">

                                <Select.Value placeholder="Selecione o game que deseja jogar" className="text-sm placeholder:text-zinc-500" />
                                <Select.Icon>
                                    <ChevronDownIcon />
                                </Select.Icon>

                                <Select.Content className="fixed bg-zinc-900/95 text-zinc-300 px-10 py-8 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[400px] shadow-2xl shadow-black/25">
                                    <Select.ScrollUpButton>
                                        <ChevronUpIcon />
                                    </Select.ScrollUpButton>
                                    <Select.Viewport>
                                        <Select.Group>
                                            {data.map(game => {
                                                return (
                                                    <Select.Item key={game.id} value={game.id} placeholder={game.name}>
                                                        <Select.ItemText>{game.name}</Select.ItemText>
                                                    </Select.Item>
                                                );
                                            })}
                                        </Select.Group>
                                    </Select.Viewport>
                                </Select.Content>

                            </Select.Trigger>
                        </Select.Root>
                    </div>

                    {/* Name or Nickname */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label> <br />
                        <Input name="name" id="name" type="text" placeholder="Como te chamam dentro do game?" />
                    </div>

                    {/* YearsPlaying and Discord */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying" className="font-semibold">Joga há quantos anos?</label> <br />
                            <Input name="yearsPlaying" id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord" className="font-semibold">Qual seu Discord?</label> <br />
                            <Input name="discord" id="discord" type="text" placeholder="Usuário#0000" />
                        </div>
                    </div>

                    {/* WeekDays and Hour (Start, End) */}
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>
                            <ToggleGroup.Root
                                type="multiple"
                                className="grid grid-cols-4 gap-1"
                                value={weekDays}
                                onValueChange={setWeekDays}>
                                <ToggleGroup.Item value="0" title="Domingo" className={`w-10 h-10  rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>D</ToggleGroup.Item>
                                <ToggleGroup.Item value="1" title="Segunda" className={`w-10 h-10 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                                <ToggleGroup.Item value="2" title="Terça" className={`w-10 h-10 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>T</ToggleGroup.Item>
                                <ToggleGroup.Item value="3" title="Quarta" className={`w-10 h-10 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                                <ToggleGroup.Item value="4" title="Quinta" className={`w-10 h-10 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                                <ToggleGroup.Item value="5" title="Sexta" className={`w-10 h-10 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                                <ToggleGroup.Item value="6" title="Sábado" className={`w-10 h-10 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hour" className="font-semibold">Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input name="hoursStart" id="hoursStart" className="font-semibold" type="time" placeholder="De" />
                                <Input name="hoursEnd" id="hoursEnd" className="font-semibold" type="time" placeholder="Até" />
                            </div>
                        </div>
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-center gap-2 mt-2 text-sm">
                        <CheckBox.Root
                            onCheckedChange={(checked) => {
                                if (checked)
                                    setVoiceChannel(true);
                                else
                                    setVoiceChannel(false);
                            }}
                            className="flex items-center justify-center w-6 h-6 rounded bg-zinc-900"
                        >
                            <CheckBox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </CheckBox.Indicator>
                        </CheckBox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className="flex justify-end gap-4 mt-4">
                        <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                            Cancelar
                        </Dialog.Close>
                        <button className="flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600" type="submit">
                            <GameController size={24} />
                            Encontrar duo
                        </button>
                    </footer>

                </form>

            </Dialog.DialogContent>
        </Dialog.DialogPortal >
    );
}