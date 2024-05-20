import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);

// 리액트 쿼리를 활용해서 외부에서 코인api를 끌어왔다 => api.ts
// recoil을 가장 상위요소로 지정해야한다
// RecoilRoot 안에 원자 (리덕스로치면 컨테이너다) atom
