import React, {useState} from "react";
import {fetchCharactersDataByPage} from "../../api/RickAndMortyAPI.ts";
import {CharacterList} from "../CharacterList";
import '../../styles/style.css'
import {PaginationButtons} from "../PaginationButtons";
import {useQuery} from "react-query";
import {useNavigate, useParams} from "react-router";
import {Button} from "../Button";

const MIN_PAGE = 1
const MAX_PAGE = 42

export const Task4: React.FC = () => {
    const routerParams = useParams();
    const currentPage: number = routerParams.pageId ? Number(routerParams.pageId.split("=")[1]) : 1;
    const nav = useNavigate();
    const [page, setPage] = useState(currentPage);

    const { isLoading, data } = useQuery({
        queryKey: [page],
        queryFn: fetchCharactersDataByPage,
    })

    function handleNextPage() {
        if (page < MAX_PAGE) {
            const newPage = page + 1;
            setPage(newPage);
            nav(`/task4/page=${newPage}`);
        }
    }

    function handlePreviousPage() {
        if (page > MIN_PAGE) {
            const newPage = page - 1;
            setPage(newPage);
            nav(`/task4/page=${newPage}`);
        }
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {data && <CharacterList characters={data.results} />}
            <PaginationButtons handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />
            <Button handleClick={() => {
                nav(`/task4/authorization`);
            }}>Authorization page</Button>
        </div>
    );
};
