import { createPortal } from "react-dom";

import { RequestManager } from "../../api/RequestManager";
import { Notification } from "../ui/notification";

export const requestManagerHook = () => {
  RequestManager.baseURL = process.env.REACT_APP_SERVER_URL as string;

  RequestManager.beforeRequestMiddleware.push(({ config }) => {
    if (config.url?.includes("movies")) {
      config.params = { populate: "*" };
    }
  });

  RequestManager.beforeErrorMiddleware.push(({ error }) => {
    createPortal(<Notification text={error.message} />, document.body);
    return null;
  });
};
