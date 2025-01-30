import { Route, Routes } from "react-router";
import { MainPage } from "../components/MainPage";
import { AboutUs } from "../components/AboutUs";
import { Contacts } from "../components/Contacts";
import { Login } from "../components/Login";
import { Registration } from "../components/Registration";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Logout } from "../../components/Logout";
import { MainCabinet } from "../../components/Main Cabinet";
import React from "react";
import { UserInformation } from "../../types/user-information.ts";

type MenuRoutesProps = {
  currentUserID: number;
  setCurrentUserID: (newNumber: number) => void;
  isAuthorized: boolean;
  setIsAuthorized: (newBoolean: boolean) => void;
  availableAccounts: UserInformation[];
  setAvailableAccounts: (userInformations: UserInformation[]) => void;
};

export const MenuRoutes: React.FC<MenuRoutesProps> = ({
  currentUserID,
  setCurrentUserID,
  isAuthorized,
  setIsAuthorized,
  availableAccounts,
  setAvailableAccounts,
}) => {
  return (
    <Routes>
      <Route path="main-page" element={<MainPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contacts" element={<Contacts />} />
      <Route
        path="login"
        element={
          <Login
            setIsAuthorized={setIsAuthorized}
            availableAccounts={availableAccounts}
            setCurrentUserID={setCurrentUserID}
          />
        }
      />
      <Route
        path="registration"
        element={
          <Registration
            availableAccounts={availableAccounts}
            setAvailableAccounts={setAvailableAccounts}
          />
        }
      />
      <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
        <Route
          path="logout"
          element={<Logout setIsAuthorized={setIsAuthorized} />}
        />
        <Route
          path="main-cabinet"
          element={
            <MainCabinet
              user={availableAccounts.find((user) => user.id === currentUserID)}
            />
          }
        />
      </Route>
    </Routes>
  );
};
