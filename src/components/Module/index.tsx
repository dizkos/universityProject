import { DivededSubjectI as Props } from '../../interfaces';
import AccordeonElement from '@components/AccordeonElement';
import styles from './index.module.scss';

const Module = ({ title, skills }: Props) => {
  return (
    <>
      <div className={styles.component}>
        <h3>{title === 'firstModule' ? '1 модуль' : '2 модуль'}</h3>

        <ul>
          {skills.map((element, index) => (
            <li key={index}>{element.title}</li>
          ))}
        </ul>
      </div>

      <AccordeonElement
        title={title === 'firstModule' ? '1 модуль' : '2 модуль'}
        className={styles.accordeonHeading}
      >
        <ul>
          {skills.map((element, index) => (
            <li key={index}>{element.title}</li>
          ))}
        </ul>
      </AccordeonElement>
    </>
  );
};

export default Module;
