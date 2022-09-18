import * as Dialog from "@radix-ui/react-dialog";
import * as CheckBox from "@radix-ui/react-checkbox";
import { Check, GameController } from "phosphor-react";
import { Input } from "./form/Input";



export function Modal() {
    return (
        <Dialog.DialogPortal>
            <Dialog.DialogOverlay className="justify-center bg-black/60 inset-0 fixed" />

            <Dialog.DialogContent className="fixed bg-[#2A2636] text-white px-10 py-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.DialogTitle className="text-[32px] font-black">Publique um anúncio</Dialog.DialogTitle>

                <form className="flex flex-col gap-4 mt-8">
                    {/* Game */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">Qual o game?</label> <br />
                        <Input id="game" type="text" placeholder="Selecione o game que deseja jogar"
                        />
                    </div>

                    {/* Name or Nickname */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label> <br />
                        <Input id="name" type="text" placeholder="Como te chamam dentro do game?" />
                    </div>

                    {/* YearsPlaying and Discord */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying" className="font-semibold">Joga há quantos anos?</label> <br />
                            <Input id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord" className="font-semibold">Qual seu Discord?</label> <br />
                            <Input id="discord" type="text" placeholder="Usuário#0000" />
                        </div>
                    </div>

                    {/* WeekDays and Hour (Start, End) */}
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>
                            <div className="grid grid-cols-4 gap-1">
                                <button title="Domingo" className="w-10 h-10 bg-zinc-900 rounded">D</button>
                                <button title="Segunda" className="w-10 h-10 bg-zinc-900 rounded">S</button>
                                <button title="Terça" className="w-10 h-10 bg-zinc-900 rounded">T</button>
                                <button title="Quarta" className="w-10 h-10 bg-zinc-900 rounded">Q</button>
                                <button title="Quinta" className="w-10 h-10 bg-zinc-900 rounded">Q</button>
                                <button title="Sexta" className="w-10 h-10 bg-zinc-900 rounded">S</button>
                                <button title="Sábado" className="w-10 h-10 bg-zinc-900 rounded">S</button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hour" className="font-semibold">Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input id="hoursStart" className="font-semibold" type="time" placeholder="De" />
                                <Input id="hoursEnd" className="font-semibold" type="time" placeholder="Até" />
                            </div>
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 mt-2 text-sm">
                        <CheckBox.Root className="flex items-center justify-center w-6 h-6 rounded bg-zinc-900">
                            <CheckBox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </CheckBox.Indicator>
                        </CheckBox.Root>
                        Costumo me conectar ao chat de voz
                    </div>

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
        </Dialog.DialogPortal>
    );
}