interface State {
    current: string;
    values: string[];
    operator: string;
    position: number;
}

export const initialState: State = {
    current: "0",
    values: [],
    operator: "",
    position: 0,
};

export function calculate(operator: string, num1: string, num2: string) {
    switch (operator) {
        case "+":
            return String(Number(num1) + Number(num2));
            break;
        case "-":
            return String(Number(num1) - Number(num2));
            break;
        case "x":
            return String(Number(num1) * Number(num2));
            break;
        case "/":
            return String(Number(num1) / Number(num2));
            break;
        case "%":
            return String((Number(num1) / 100) * Number(num2));
            break;
        default:
            throw new Error("Invalid operation");
    }
}

export function operators(value: string, variant: string, state: State, setState: (state: State) => void): void {
    switch (variant) {
        case "c":
            setState({...initialState});
            break;

        case "ce":
            if (state.position === 1) {
                if (state.values[1]) {
                    state.values[1] = ""
                } else {
                    state.operator = "";
                    state.position = 0;
                }
            } else {
                state.values[0] = "";
            }
            setState({...state})
            break;

        case "numeric":
            state.values[state.position]
                ? (state.values[state.position] += value)
                : (state.values[state.position] = value);
            state.current += value;
            setState({...state});
            break;

        case "point":
            if (state.values[state.position]) {
                if (!state.values[state.position].includes(".")) {
                    state.values[state.position] += value;
                }
            } else {
                state.values[state.position] = "0" + value;
            }
            setState({...state});
            break;

        case "sinal":
            if (state.values[state.position]) {
                const value = Number(state.values[state.position]) * -1;
                state.values[state.position] = value.toString();
                setState({...state});
            }
            break;

        case "operator":
        case "percent":
            if (state.values.length === 1) {
                state.position = 1;
                state.operator = value;
                state.current = "";
                setState({...state});
            } else if (state.values.length === 2 && state.operator !== "") {
                state.values[0] = calculate(state.operator, state.values[0], state.values[1]);
                state.values[1] = "";
                state.current = calculate(state.operator, state.values[0], state.values[1]);
                state.operator = value;
                setState({...state});
            }
            break;

        case "equal":
            if (state.values.length === 2 && state.operator !== "") {
                state.values[0] = calculate(state.operator, state.values[0], state.values[1]);
                state.values.length = 1;
                state.current = calculate(state.operator, state.values[0], state.values[1]);
                state.position = 0;
                state.operator = "";
                setState({...state});
            }
    }
}
