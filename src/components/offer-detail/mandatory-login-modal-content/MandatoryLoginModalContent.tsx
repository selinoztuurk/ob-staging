import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Dialog, Transition } from '@headlessui/react';

import Paths from 'routing/Paths';

import i18n from 'common/i18n/i18n';

type MandatoryLoginModalContentProps = {
  onClose: () => void;
};

const MandatoryLoginModalContent = ({
  onClose,
}: MandatoryLoginModalContentProps) => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    onClose();
    navigate(Paths.LOGIN);
  };

  const navigateToRegister = () => {
    onClose();
    navigate(Paths.REGISTER);
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-center">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10">
                  <FaExclamationTriangle
                    className="h-6 w-6 text-amber-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-bold leading-6 text-purple-900"
                  >
                    {i18n.t('mandatoryLogin_title')}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-purple-900">
                      {i18n.t('mandatoryLogin_subtitle')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex flex-col sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-amber-400 px-3 py-2 text-sm font-bold text-purple-900 shadow-sm hover:bg-amber-500 sm:w-auto"
                onClick={navigateToLogin}
              >
                {i18n.t('mandatoryLogin_loginButtonTitle')}
              </button>
              <div className="mt-2 flex justify-center">
                <p className="text-sm text-gray-500 ">
                  {i18n.t('mandatoryLogin_noAccount')}
                </p>
              </div>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-bold text-purple-900 shadow-sm ring-1 ring-inset ring-purple-800 hover:bg-purple-50 sm:w-auto"
                onClick={navigateToRegister}
              >
                {i18n.t('mandatoryLogin_registerButtonTitle')}
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  );
};
export default MandatoryLoginModalContent;
