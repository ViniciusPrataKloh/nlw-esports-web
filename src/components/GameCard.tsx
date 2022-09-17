export interface GameCardProps {
    name: string;
    ads: number;
    cover: string;
}

export function GameCard({ name, ads, cover }: GameCardProps) {
    return (
        <a href="#" className="relative rounded-lg overflow-hidden transition-[0.5] hover:scale-[1.055]">
            <img src={cover} alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{name}</strong>
                <span className="text-sm text-zinc-300 block">{ads} anúncio(s)</span>
            </div>
        </a>
    );
}