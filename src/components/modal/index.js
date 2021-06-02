import { cloneElement, useContext, createContext, useState } from "react";
import { Dialog } from "../../lib";
import VisuallyHidden from "@reach/visually-hidden";
import { IoMdClose } from "react-icons/io";
import { CloseButton } from "./lib";
import { useSpring } from "react-spring";

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
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const closeButtonProps = useSpring({
    background: isCloseHovered ? "black" : "transparent",
    opacity: isCloseHovered ? 1 : 0.5
  });

  return (
    <ModalContentBase>
      <ModalDismissButton>
        <CloseButton
          onMouseEnter={() => setIsCloseHovered(true)}
          onMouseLeave={() => setIsCloseHovered(false)}
          style={closeButtonProps}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <IoMdClose fill={isCloseHovered ? "white" : "black"} />
        </CloseButton>
      </ModalDismissButton>
      {children}
    </ModalContentBase>
  );
}

export { Modal, ModalContent, ModalOpenButton };
