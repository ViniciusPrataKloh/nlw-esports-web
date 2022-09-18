import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="h-[50px] bg-zinc-900 p-y-3 px-4 rounded text-sm placeholder:text-zinc-500"
        />
    );
}
