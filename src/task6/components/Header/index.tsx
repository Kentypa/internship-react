import React from "react";
import { Button } from "../../../components/Button";
import { toggleTheme } from "../../features/theme/themeSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../task5/store.ts";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-row justify-around fixed top-0 p-6 w-full ${styles[`bg_${theme.currentTheme}`]}`}
    >
      <h1>Some text in header</h1>
      <Button
        className={`${styles[`bg_${theme.currentTheme}`]} shadow-2xs`}
        handleClick={() => {
          dispatch(toggleTheme());
        }}
      >
        Change theme
      </Button>
    </div>
  );
};
