import { cloneElement, useContext, createContext, useState } from "react";
import { Dialog } from "../../lib";

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

const ModalContext = createContext();

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props?.onClick)
  });
}

function ModalContentBase(props) {
  const [isOpen, setIsOpen] = useContext(ModalContext);

  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  );
}

function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props?.onClick)
  });
}

function ModalContent({ children, ...props }) {
  return (
    <ModalContentBase>
      <ModalDismissButton>
        <button>CLOSE</button>
      </ModalDismissButton>
      {children}
    </ModalContentBase>
  );
}

export { Modal, ModalContent, ModalOpenButton };
