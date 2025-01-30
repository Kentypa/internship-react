import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../task5/store.ts";
import styles from "../Header/Header.module.css";

export const GridOfDogs: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);

  const { data, isLoading, error } = useQuery({
    queryKey: ["gridOfDogs"],
    queryFn: () =>
      fetch("https://dog.ceo/api/breeds/image/random/12").then((res) =>
        res.json(),
      ),
    enabled: true,
  });

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ${styles[`bg_${theme.currentTheme}`]}`}
    >
      {data.message.map((imgUrl: string, index: number) => (
        <img key={index} src={imgUrl} alt="Dog" className="w-full h-32" />
      ))}
    </div>
  );
};
