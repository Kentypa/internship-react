import {Button} from "../Button";
import {useState} from "react";

export const TextChanger: React.FC = () => {
    const personNames = ['Nick', 'Coach', 'Ellis', 'Rochelle'];

    const [index, setState] = useState(0);

    function showNextPerson(): void {
        setState((index + 1) % personNames.length);
    }

    return (
        <>
            <Button handleClick={showNextPerson}>
                Show next person name.
            </Button>
            <br/>{personNames[index]}
        </>
    )
}