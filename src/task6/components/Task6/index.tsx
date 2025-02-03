import React from "react";
import { Header } from "../Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { GridOfDogs } from "../GridOfDogs";
import { useSelector } from "react-redux";
import styles from "../Header/Header.module.css";
import { themeSelector } from "../../features/theme/themeSelector.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Task6: React.FC = () => {
  const theme = useSelector(themeSelector).currentTheme;

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`container flex-col ${styles[`bg_${theme}`]}`}>
        <Header />
        <GridOfDogs />
      </div>
    </QueryClientProvider>
  );
};
