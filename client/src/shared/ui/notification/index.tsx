import { useEffect, useState } from "react";

import "./index.css";

export function Notification({ text }: { text: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return isVisible ? (
    <div className="notification">
      <p>{text}</p>
    </div>
  ) : null;
}
