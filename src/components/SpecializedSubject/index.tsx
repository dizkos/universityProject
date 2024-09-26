import { DivededSubjectI } from '../../interfaces';
import Module from '@components/Module';
import styles from './index.module.scss';

interface Props {
  title: string;
  dividedSubjects: DivededSubjectI[];
}

const SpecializedSubjects = ({ title, dividedSubjects }: Props) => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.moduls}>
        {dividedSubjects.map((subject, index) => (
          <Module key={index} {...subject}/>
        ))}
      </div>
    </div>
  );
};

export default SpecializedSubjects;
