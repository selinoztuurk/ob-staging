import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaExternalLinkAlt, FaCopy } from 'react-icons/fa';

import i18n from 'common/i18n/i18n';

type OfferCodeModalContentProps = {
  campaignCode: string;
  brandWebsite: string;
  brandName: string;
  discountAmount: string;
};

export default function OfferCodeModalContent({
  campaignCode,
  brandWebsite,
  brandName,
  discountAmount,
}: OfferCodeModalContentProps) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center text-center sm:p-0">
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
            <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
              <div className="flex items-center justify-center">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                  <Dialog.Title
                    as="h4"
                    className="text-base font-bold leading-6 text-purple-900"
                  >
                    {i18n.t('offerCodeModal_title')}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-purple-900">
                      {i18n.t('offerCodeModal_subtitle', {
                        brand: brandName,
                        amount: discountAmount,
                      })}
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-6">
                    <p className="text-lg p-3 bg-purple-100 rounded w-min font-bold text-purple-900">
                      {campaignCode}
                    </p>
                    <div className="group relative">
                      <span
                        id="tooltip"
                        role="tooltip"
                        className="invisible absolute -top-10 z-10 inline-block px-3 py-2 text-sm text-white bg-purple-500 rounded-lg tooltip"
                      >
                        {i18n.t('offerCodeModal_copied')}
                      </span>
                      <button
                        data-tooltip-target="tooltip"
                        className="bg-purple-900 rounded-full p-2 shadow ml-2"
                        onClick={() =>
                          navigator.clipboard.writeText(campaignCode)
                        }
                      >
                        <FaCopy className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-center sm:px-6">
              <a
                type="button"
                href={brandWebsite}
                target="_blank"
                className="inline-flex w-full justify-center items-center rounded-md bg-amber-400 px-3 py-2 text-sm font-bold text-purple-900 shadow-sm hover:bg-amber-500 sm:ml-3 sm:w-auto"
              >
                {i18n.t('offerCodeModal_startShopping')}
                <FaExternalLinkAlt className="m-2" />
              </a>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  );
}
