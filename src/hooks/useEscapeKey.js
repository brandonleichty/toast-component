import React from "react";

export function useEscapeKey(onEscape) {
  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        onEscape();
      }
    });
    return () => {
      window.removeEventListener("keydown");
    };
  }, []);
}
