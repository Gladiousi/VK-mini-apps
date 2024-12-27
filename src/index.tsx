import React from "react";
import ReactDOM from "react-dom/client";
import bridge from "@vkontakte/vk-bridge";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import App from "./App";
import "@vkontakte/vkui/dist/vkui.css";
import "./index.css";

bridge.send("VKWebAppInit");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AdaptivityProvider>
  </ConfigProvider>
);
