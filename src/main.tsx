import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.tsx";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap");
        ${emotionReset}
        body {
          font-family: "Rubik", sans-serif;
          width: 100%;
          height: 100vh;
          background-color: #f2d8d8;
        }
      `}
    />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
