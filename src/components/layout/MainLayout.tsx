import { useEffect } from 'react';

import styles from 'components/layout/MainLayout.module.scss';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import { setLocallySavedAuthToken } from 'common/util/AuthUtil';

import HandshakeApi from 'api/endpoints/HandshakeApi';

import useAuth from 'hooks/useAuth';

interface MainLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { authToken, setCurrentAuthToken } = useAuth();

  const [handshakeTrigger, { data }] = HandshakeApi.useLazyHandshakeQuery();

  useEffect(() => {
    if (!authToken) {
      handshakeTrigger();
      if (data) {
        setCurrentAuthToken(data.token);
        setLocallySavedAuthToken(data.token);
      }
    }
  }, [setCurrentAuthToken]);

  return authToken ? (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  ) : (
    <></>
  );
};

export default MainLayout;
