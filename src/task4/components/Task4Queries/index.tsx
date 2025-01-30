import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MenuRoutes } from "../../screens/MenuRoutes.tsx";

const queryClient = new QueryClient();

export const Task4Queries: React.FC = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MenuRoutes />
      </QueryClientProvider>
    </div>
  );
};
