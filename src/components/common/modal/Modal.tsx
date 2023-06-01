import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import styles from 'components/common/modal/styles.module.scss';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`${styles.modal} relative z-10`}
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        {children}
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
