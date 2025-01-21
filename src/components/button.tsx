import {Variant} from "../buttons/data-buttons.ts";

interface Props {
    content: string;
    variant: Variant;
    handleClick?: (value: string) => void;
}

function Button(props: Props) {

    const variant = props.variant === "operator" || props.variant === "equal"
        ? "bg-purple-800 text-neutral-100 hover:bg-purple-500 hover:text-neutral-100"
        : "bg-neutral-800 text-neutral-100 hover:bg-neutral-800 hover:text-purple-800"

    return (
        <button
            className={`
              ${variant}
              w-16 aspect-square rounded-full text-2xl 
              transition duration-300 ease-in-out
              shadow-[inset_0_-2px_2px_rgba(0,0,0,0.3),inset_0_2px_2px_rgba(255,255,255,0.1),0_3px_3px_rgba(0,0,0,0.5)]
              active:shadow-[inset_0_-2px_2px_rgba(0,0,0,0.3),inset_0_2px_2px_rgba(255,255,255,0.1),0_1px_1px_rgba(0,0,0,0.5)]`}
            type="button"
            onClick={() => props.handleClick?.(props.content)}
        >
            {props.content}
        </button>
    );
}

export default Button;
