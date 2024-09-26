import classNames from 'classnames';
import styles from './index.module.scss';

interface Props {
  title: string;
  children: JSX.Element | string;
  color?: 'red' | 'dark';
}

const TextBlock = ({ title, children, color = 'dark' }: Props) => {
  const cn = classNames;
  return (
    <div className={cn(styles.component, styles[color])}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default TextBlock;
