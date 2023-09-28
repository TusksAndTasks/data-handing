import { RequestManager } from "../../../api/RequestManager";

RequestManager.baseURL = process.env.REACT_APP_SERVER_URL as string;

RequestManager.beforeRequestMiddleware.push(({ config }) => {
  if (config.url?.includes("movies")) {
    config.params = { populate: "*" };
  }
});

RequestManager.beforeErrorMiddleware.push(({ error }) => {
  const root = document.getElementById("root");
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = error.message;

  root!.appendChild(notification);
  setTimeout(() => root!.removeChild(notification), 3000);

  return null;
});
