import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, title }) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    setTimeout(() => backdropRef.current.classList.add("active"), 100);
  }, []);

  return createPortal(
    <div className="backdrop" ref={backdropRef}>
      <div className="modal-body">
        {title && (
          <>
            <h2>{title}</h2>
            <hr />
          </>
        )}
        {children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
