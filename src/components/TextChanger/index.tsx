import {Button} from "../Button";
import {useState} from "react";

export const TextChanger: React.FC<any> = () => {
    const personNames = ['Nick', 'Coach', 'Ellis', 'Rochelle'];

    const [index, setState] = useState(0);

    function showNextPerson(): void {
        setState(index > personNames.length - 2 ? 0 : index + 1);
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