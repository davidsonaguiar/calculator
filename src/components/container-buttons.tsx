import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

function ContainerButtons(props: Props) {
    return (
        <div className="max-w-max grid grid-cols-4 gap-3">{props.children}</div>
    );
}

export default ContainerButtons;