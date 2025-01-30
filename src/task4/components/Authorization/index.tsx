import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { Login } from "../Login";
import { Registration } from "../Registration";
import { ProtectedRoute } from "../ProtectedRoute";
import { UserInformation } from "../../../types/user-information.ts";
import { Menu } from "../Menu";
import { Logout } from "../../../components/Logout";
import { MainCabinet } from "../../../components/Main Cabinet";

export const Authorization: React.FC = () => {
  const [currentUserID, setCurrentUserID] = useState<number>();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [availableAccounts, setAvailableAccounts] = useState<UserInformation[]>(
    [],
  );

  return (
    <div>
      <Menu isAuthorized={isAuthorized} />
      <Routes>
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
                user={availableAccounts.find(
                  (user) => user.id === currentUserID,
                )}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
