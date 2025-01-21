import buttons from "./buttons/data-buttons.ts";
import ContainerButtons from "./components/container-buttons.tsx";
import AppCalc from "./components/app-calc.tsx";
import {useState} from "react";
import {initialState, operators} from "./operators.ts";
import Display from "./components/display.tsx";
import Button from "./components/button.tsx";

function App() {
    const [state, setState] = useState(initialState);

    const listButtons = buttons.map((button) => (
        <Button
            content={button.value}
            variant={button.variant}
            key={button.value}
            handleClick={() => operators(button.value, button.variant, state, setState)}
        />
    ));

    return (
        <>
            <AppCalc>
                <Display values={state.values} operator={state.operator}/>
                <ContainerButtons>{listButtons}</ContainerButtons>
            </AppCalc>
        </>
    );
}

export default App;
