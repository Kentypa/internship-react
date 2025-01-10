import React from "react";
import {Button} from "../Button";
import '../../styles/style.css'

type PaginationButtonsProps = {
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

export const PaginationButtons: React.FC<PaginationButtonsProps> = ({handleNextPage, handlePreviousPage}) => {
    return (
        <div className="pagination-buttons">
            <Button handleClick={handlePreviousPage}>Previous</Button>
            <Button handleClick={handleNextPage}>Next</Button>
        </div>
    )
}