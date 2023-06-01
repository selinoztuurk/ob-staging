import styles from './styles.module.scss';

/* eslint-disable no-unused-vars */
export enum ButtonColor {
  Primary,
  Secondary,
  Danger,
}
/* eslint-enable no-unused-vars */

const BUTTON_CLASS_NAMES = {
  [ButtonColor.Primary]: 'button-purple',
  [ButtonColor.Secondary]: 'button-yellow',
  [ButtonColor.Danger]: 'button-red',
};

type ButtonProps = {
  text?: string;
  icon?: JSX.Element;
  color?: ButtonColor;
  outlined?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  anchor?: boolean;
  anchorHref?: string;
  disabled?: boolean;
  submitType?: boolean;
};

const Button = ({
  text,
  icon,
  color,
  fullWidth,
  onClick,
  anchor,
  anchorHref,
  disabled,
  submitType,
}: ButtonProps) => {
  const buttonColorClassName = color
    ? BUTTON_CLASS_NAMES[color]
    : BUTTON_CLASS_NAMES[ButtonColor.Primary];

  const renderText = (text: string | undefined): JSX.Element =>
    text ? <div className={styles['text-container']}>{text}</div> : <></>;

  return anchor && anchorHref ? (
    <a
      className={`${styles.button} ${styles[buttonColorClassName]} ${
        fullWidth && styles['full-width']
      }`}
      href={anchorHref}
      target="_blank"
      rel="nofollow"
    >
      {icon && <div className={styles['icon-container']}>{icon}</div>}
      {renderText(text)}
    </a>
  ) : (
    <button
      className={`${styles.button} ${styles[buttonColorClassName]} ${
        fullWidth && styles['full-width']
      } ${disabled && styles['disabled']}`}
      onClick={onClick}
      disabled={disabled}
      type={submitType ? 'submit' : 'button'}
    >
      {icon && <div className={styles['icon-container']}>{icon}</div>}
      {renderText(text)}
    </button>
  );
};

export default Button;
