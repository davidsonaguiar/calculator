interface Props {
    values: string[];
    operator: string;
}

function Display(props: Props) {
    return (
        <div>
            <div className="max-w-[290px] p-4 text-xl text-neutral-700 text-right overflow-hidden">{props.values[0] || 0}</div>
            <div className="w-full max-w-[290px] px-4 flex justify-between gap-4 text-4xl text-neutral-100 overflow-hidden">
                <span className="text-neutral-700 text-right">{props.operator}</span>
                {props.operator ? props.values[1] || 0 : props.values[0] || 0}
            </div>
        </div>
    );
}

export default Display;
