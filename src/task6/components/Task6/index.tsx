import React from "react";
import { Header } from "../Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { GridOfDogs } from "../GridOfDogs";
import { useSelector } from "react-redux";
import { RootState } from "../../../task5/store.ts";
import styles from "../Header/Header.module.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Task6: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`container flex-col ${styles[`bg_${theme.currentTheme}`]}`}
      >
        <Header />
        <GridOfDogs />
      </div>
    </QueryClientProvider>
  );
};
