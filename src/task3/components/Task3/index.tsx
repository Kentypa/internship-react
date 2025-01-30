import React, { useState } from "react";
import "../../styles/style.css";
import { Menu } from "../Menu";
import { UserInformation } from "../../../types/user-information.ts";
import { MenuRoutes } from "../../screens/MenuRoutes.tsx";

export const Task3: React.FC = () => {
  const [currentUserID, setCurrentUserID] = useState<number>(0);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [availableAccounts, setAvailableAccounts] = useState<UserInformation[]>(
    [],
  );

  return (
    <div>
      <Menu isAuthorized={isAuthorized}></Menu>
      <MenuRoutes
        currentUserID={currentUserID}
        isAuthorized={isAuthorized}
        setCurrentUserID={setCurrentUserID}
        setIsAuthorized={setIsAuthorized}
        availableAccounts={availableAccounts}
        setAvailableAccounts={setAvailableAccounts}
      />
    </div>
  );
};
