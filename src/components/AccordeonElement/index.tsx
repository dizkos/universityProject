'use client';

import { useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

interface Props {
  title: string;
  children: JSX.Element;
  className: string;
}

const AccordeonElement = ({ title, children, className }: Props) => {
  const cn = classNames;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootClasses = cn(styles.component, isOpen && styles.active, className);

  return (
    <div className={rootClasses}>
      <button onClick={() => setIsOpen((prev) => !prev)} className={styles.button}>
        <ReactSVG
          src={isOpen ? 'images/minus.svg' : 'images/plus.svg'}
        />
        <div>{title}</div>
      </button>
      <div className={cn(styles.content, isOpen && styles.show)}>
        {children}
      </div>
    </div>
  );
};

export default AccordeonElement;
