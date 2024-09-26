import SpecializedSubjects from '@components/SpecializedSubject';
import TextBlock from '@components/TextBlock';
import {
  DivededSubjectI,
  RepoItemI,
  SkillI,
  SpecializedSubjectsI,
  specializedSubjectsFromServerI,
} from '../interfaces';
import styles from './page.module.scss';

export default async function Home() {
  const res = await fetch('https://api.moscow.mba/products', {
    // Есть вариант сделать SSR, но у нас файл весит 15 мб, что в целом достаточно нагружает сервер. Думаю лучше сделать статическую генерацию
    // cache: 'no-store',
    cache: 'force-cache',
  });
  const repo = await res.json();

  const dataForDisplay = repo.reduce(
    (acc: SpecializedSubjectsI[], elem: RepoItemI) => {
      const specializedSubjects = elem
        .specializedSubjects[0] as specializedSubjectsFromServerI;

      if (specializedSubjects && specializedSubjects.skills) {
        if (specializedSubjects.skills.length) {
          const higherAverageNumber = Math.ceil(
            specializedSubjects.skills.length / 2
          );

          const dividedSubjects = specializedSubjects.skills.reduce(
            (acc: DivededSubjectI[], elem: SkillI, index: number) => {
              acc[index <= higherAverageNumber - 1 ? 0 : 1].skills.push(elem);
              return acc;
            },
            [
              { title: 'firstModule', skills: [] },
              { title: 'secondModule', skills: [] },
            ]
          );
          acc.push({
            title: elem.title,
            dividedSubjects,
          });
        }
      }
      return acc;
    },
    []
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Специализированные дисциплины</h1>
        {dataForDisplay.map((elem: SpecializedSubjectsI, index: number) => (
          <SpecializedSubjects key={index} {...elem} />
        ))}
      </main>
      <section className={styles.blocks}>
        <TextBlock title="Практические модули" color="red">
          Работа над собственными проектами: практика групповых взаимодействий,
          кейс-методы, эссе
        </TextBlock>
        <TextBlock title="Итоговая аттестация">
          <ul>
            <li>
              Бизнес-проектирование (подготовка итоговой аттестационной работы,
              консультирование по бизнес-проектированию)
            </li>
            <li>Защита итоговой аттестационной работы</li>
          </ul>
        </TextBlock>
      </section>
    </div>
  );
}
