import { useNavigate, Link } from 'react-router-dom';
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';

import styles from 'components/footer/styles.module.scss';

import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

const Footer = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles.info}>
          <div className={styles.column}>
            <img
              onClick={() => navigate(Paths.HOME)}
              className={styles.logo}
              src="/logo/logo.svg"
              alt="Öğrenci Baksana Logo"
            />
            <div className={styles.about}>{i18n.t('footer_about')}</div>
          </div>
          <div className={`${styles.column} ${styles['left-aligned']}`}>
            {/* <div className={styles.title}>
              {i18n.t('footer_categories_title')}
            </div>
            TODO: Update routes 
            <Link to={Paths.HOME}>
              {i18n.t('footer_categories_technology')}
            </Link>
            <Link to={Paths.HOME}>{i18n.t('footer_categories_service')}</Link>
            <Link to={Paths.HOME}>{i18n.t('footer_categories_fashion')}</Link>
            <Link to={Paths.HOME}>
              {i18n.t('footer_categories_entertainment')}
            </Link>
            <Link to={Paths.HOME}>{i18n.t('footer_categories_culture')}</Link>
            <Link to={Paths.HOME}>
              {i18n.t('footer_categories_foodBeverage')}
            </Link>*/}
          </div>
          <div className={`${styles.column} ${styles['left-aligned']}`}>
            {/* <div className={styles.title}>
              {i18n.t('footer_corporate_title')}
            </div>
            TODO: Update routes 
            <Link to={Paths.HOME}>{i18n.t('footer_corporate_aboutUs')}</Link>
            <Link to={Paths.HOME}>{i18n.t('footer_corporate_contactUs')}</Link>
            <Link to={Paths.HOME}>{i18n.t('footer_corporate_faq')}</Link>
            <Link to={Paths.HOME}>
              {i18n.t('footer_corporate_forBusinesses')}
            </Link>*/}
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.title}> {i18n.t('footer_social_title')}</div>
          <div className={styles['social-icons']}>
            <Link to={Paths.TWITTER} target="_blank">
              <FaTwitter className={styles.icon} />
            </Link>
            <Link to={Paths.INSTAGRAM} target="_blank">
              <FaInstagram className={styles.icon} />
            </Link>
            <Link to={Paths.FACEBOOK} target="_blank">
              <FaFacebook className={styles.icon} />
            </Link>
            <Link to={Paths.TIKTOK} target="_blank">
              <FaTiktok className={styles.icon} />
            </Link>
            <Link to={Paths.YOUTUBE} target="_blank">
              <FaYoutube className={styles.icon} />
            </Link>
            <Link to={Paths.LINKEDIN} target="_blank">
              <FaLinkedin className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            {i18n.t('footer_bottom_copyright')}
          </div>
          <div className={styles.links}>
            <Link className={styles.link} to={Paths.TERMS_AND_CONDITIONS}>
              {i18n.t('footer_bottom_termsOfUse')}
            </Link>
            <Link className={styles.link} to={Paths.PRIVACY_POLICY}>
              {i18n.t('footer_bottom_privacyPolicy')}
            </Link>
            {/* <Link className={styles.link} to={Paths.HOME}>
              {i18n.t('footer_bottom_cookieUsage')}
            </Link>
            <Link className={styles.link} to={Paths.HOME}>
              {i18n.t('footer_bottom_feedback')}
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
