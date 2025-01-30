import React from "react";
import "../../styles/style.css";
import { Button } from "../../../components/Button";
import { useQuery } from "react-query";
import { getMaxPagesFromAPI } from "../../api/GetMaxPagesFromAPI.ts";
import { useNavigate } from "react-router";

type PaginationButtonsProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  page,
  setPage,
}) => {
  const nav = useNavigate();
  const { data, isLoading, isError } = useQuery<number>({
    queryKey: "getPages",
    queryFn: getMaxPagesFromAPI,
    keepPreviousData: true,
  });

  const MIN_PAGE = 1;
  const MAX_PAGE = data || MIN_PAGE;

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
    <>
      {isError && <p>Whoops, we have some errors</p>}
      {isLoading ? (
        <h3>Pages is loading, wait</h3>
      ) : (
        <div className="pagination-buttons">
          <Button handleClick={handlePreviousPage}>Previous</Button>
          <Button handleClick={handleNextPage}>Next</Button>
        </div>
      )}
    </>
  );
};
