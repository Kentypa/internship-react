import React from "react";
import { Button } from "../../../components/Button";
import { toggleTheme } from "../../features/theme/themeSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { themeSelector } from "../../features/theme/themeSelector.ts";

export const Header: React.FC = () => {
  const theme = useSelector(themeSelector).currentTheme;
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-row justify-around fixed top-0 p-6 w-full ${styles[`bg_${theme}`]}`}
    >
      <h1>Some text in header</h1>
      <Button
        className={`${styles[`bg_${theme}`]} shadow-2xs`}
        handleClick={() => {
          dispatch(toggleTheme());
        }}
      >
        Change theme
      </Button>
    </div>
  );
};
