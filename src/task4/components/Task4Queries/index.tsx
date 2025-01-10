import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {Task4} from "../Task4";
import {Route, Routes} from "react-router";
import {Authorization} from "../Authorization";

const queryClient = new QueryClient()

export const Task4Queries: React.FC = () => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path=":pageId?" element={<Task4 />} />
                    <Route path="authorization/*" element={<Authorization />} />
                </Routes>
            </QueryClientProvider>
        </div>
    )
}