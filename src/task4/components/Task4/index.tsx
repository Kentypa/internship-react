import React, { useState } from "react";
import { fetchCharactersDataByPage } from "../../api/RickAndMortyAPI.ts";
import { CharacterList } from "../CharacterList";
import "../../styles/style.css";
import { PaginationButtons } from "../PaginationButtons";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../../components/Button";

export const Task4: React.FC = () => {
  const routerParams = useParams();

  const currentPage = routerParams.pageId
    ? Number(routerParams.pageId.split("=")[1])
    : 1;
  const nav = useNavigate();
  const [page, setPage] = useState(currentPage);

  const { isLoading, data } = useQuery({
    queryKey: [page],
    queryFn: fetchCharactersDataByPage,
    keepPreviousData: true,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data && <CharacterList characters={data.results} />}
      <PaginationButtons page={page} setPage={setPage} />
      <Button
        handleClick={() => {
          nav(`/task4/authorization`);
        }}
      >
        Authorization page
      </Button>
    </div>
  );
};
