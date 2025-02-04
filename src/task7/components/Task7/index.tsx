import React, { Suspense, useState } from "react";
import { Label } from "../../../components/Label";
import { Input } from "../../../components/Input";
import { Loading } from "../Loading";

const ItemList = React.lazy(() => import("../ItemsList/index.tsx"));

export const Task7: React.FC = () => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <div>
      <Label htmlFor={"checkbox"}>
        <Input
          type={"checkbox"}
          autoComplete={"off"}
          name={"checkbox"}
          id={"checkbox"}
          onChange={handleChecked}
          placeholder={"checkbox"}
          checked={checked}
        />
        Show List
      </Label>
      <hr />
      {checked && (
        <Suspense fallback={<Loading />}>
          <ItemList />
        </Suspense>
      )}
    </div>
  );
};
