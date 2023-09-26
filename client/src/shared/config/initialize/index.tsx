import { createPortal } from "react-dom";

import { RequestManager } from "../../../api/RequestManager";
import { Notification } from "../../ui/notification";

RequestManager.baseURL = process.env.REACT_APP_SERVER_URL as string;

RequestManager.beforeRequestMiddleware.push(({ config }) => {
  if (config.url?.includes("movies")) {
    config.params = { populate: "*" };
  }
});

RequestManager.beforeErrorMiddleware.push(({ error }) => {
  const root = document.getElementById("root");
  createPortal(<Notification text={error.message} />, root!);
  return null;
});
