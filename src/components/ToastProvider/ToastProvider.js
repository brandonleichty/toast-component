import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

  function addToast() {
    setToasts((previousToasts) => [
      ...previousToasts,
      {
        id: crypto.randomUUID(),
        variant: selectedVariant,
        content: message,
      },
    ]);

    // Reset the toast message and selected variant
    setMessage("");
    setSelectedVariant("notice");
  }

  function removeToast(toastId) {
    setToasts((previousToasts) => {
      return previousToasts.filter(({ id }) => {
        return id !== toastId;
      });
    });
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        message,
        setMessage,
        selectedVariant,
        setSelectedVariant,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
