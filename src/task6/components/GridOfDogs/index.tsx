import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import styles from "../Header/Header.module.css";
import { themeSelector } from "../../features/theme/themeSelector.ts";

type DogsFetch = {
  message: string[];
  status: string;
};

async function GetDogs(count: number = 12): Promise<string[]> {
  const response: Response = await fetch(
    `https://dog.ceo/api/breeds/image/random/${count}`,
  );
  const data: DogsFetch = await response.json();
  return data.message;
}

export const GridOfDogs: React.FC = () => {
  const theme = useSelector(themeSelector).currentTheme;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gridOfDogs"],
    queryFn: () => GetDogs(12),
  });

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>{error as string}</p>;

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ${styles[`bg_${theme}`]}`}
    >
      {data?.map((imgUrl: string, index: number) => (
        <img key={index} src={imgUrl} alt="Dog" className="w-full h-32" />
      ))}
    </div>
  );
};
