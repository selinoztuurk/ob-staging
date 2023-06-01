import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';

import styles from 'components/header/profile-dropdown/styles.module.scss';

import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

import AccountApi from 'api/endpoints/AccountApi';

import useAuth from 'hooks/useAuth';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type ProfileDropdownProps = {
  fullname?: string;
};

const ProfileDropdown = ({ fullname }: ProfileDropdownProps): JSX.Element => {
  const navigate = useNavigate();
  const { setUserLoggedOut } = useAuth();

  const [logoutTrigger] = AccountApi.useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutTrigger(undefined);
      setUserLoggedOut();
      navigate(Paths.HOME);
    } catch {}
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={styles['dropdown-button']}>
          {fullname}
          <FaCaretDown className="-mr-1 text-purple-900" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate(Paths.PROFILE)}
                  className={classNames(
                    active ? 'text-gray-900' : 'text-gray-700',
                    'bg-grey-100 w-full px-4 py-2 text-sm text-left'
                  )}
                >
                  {i18n.t('header_profileDropdown_myProfile')}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={classNames(
                    active ? 'text-gray-900' : 'text-gray-700',
                    'bg-red-100 w-full px-4 py-2 text-sm text-left'
                  )}
                >
                  {i18n.t('header_profileDropdown_logout')}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown;
