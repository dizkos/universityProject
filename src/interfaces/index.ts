interface SkillsI {
  skills: SkillI[] | undefined;
}

export interface SkillI {
  id: number;
  title: string;
  string: string;
  new: null | boolean;
}

export interface DivededSubjectI {
  title: string;
  skills: SkillI[];
}

export interface SpecializedSubjectsI {
  title: string;
  dividedSubjects: DivededSubjectI[];
}

export interface RepoItemI {
  title: string;
  specializedSubjects: SkillsI[];
}

export interface specializedSubjectsFromServerI {
  id: number;
  string: string;
  title: string;
  duration: number;
  new: null | boolean;
  skills: SkillI[];
}
