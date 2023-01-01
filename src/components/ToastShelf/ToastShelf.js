import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map(({ variant, content, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} variant={variant} removeToast={removeToast}>
              {content}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
