import React from "react";
import { UserInformation } from "../../types/user-information.ts";

type MainCabinetProps = {
  user?: UserInformation;
};

export const MainCabinet: React.FC<MainCabinetProps> = ({ user }) => {
  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>Main Cabinet</h1>
      <ul>
        <li>user id: {user.id}</li>
        <li>user email: {user.email}</li>
        <li>user password: {user.password}</li>
      </ul>
    </div>
  );
};
