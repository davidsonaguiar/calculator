import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

function AppCalc(props: Props): JSX.Element {
    return (
        <div className="
          max-w-full w-fit p-8 rounded-[48px]
          flex flex-col gap-6
          bg-neutral-800
          shadow-[inset_0_-10px_10px_rgba(0,0,0,0.3),inset_0_10px_10px_rgba(255,255,255,0.1),0_15px_20px_rgba(0,0,0,0.5)]"
        >
            {props.children}
        </div>
    )
}

export default AppCalc;