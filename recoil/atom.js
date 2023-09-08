import { atom } from "recoil";
import { selector } from "recoil";

//전화번호 state
export const telState = atom({
  key: "telState",
  default: "",
});
export const tel1State = atom({
  key: "tel1State",
  default: "",
});
export const tel2State = atom({
  key: "tel2State",
  default: "",
});
export const tel3State = atom({
  key: "tel3State",
  default: "",
});
export const numStateA = atom({
  key: "numStateA",
  default: "",
});
export const numStateB = atom({
  key: "numStateB",
  default: "",
});
export const numStateC = atom({
  key: "numStateC",
  default: "",
});
export const emailState = atom({
  key: "emailState",
  default: "",
});
export const contentState = atom({
  key: "contentState",
  default: "",
});

//학부모 state
export const parent1State = atom({
  key: "parent1State",
  default: "",
});

export const parent2State = atom({
  key: "parent2State",
  default: "",
});
export const parent3State = atom({
  key: "parent3State",
  default: "",
});

export const valueState = atom({
  key: "valueState",
  default: [],
});
//수강과목 및 분반 관련 state
export const resultState = atom({
  key: "resultState",
  default: [],
});

export const inputAtom = atom({
  key: "inputAtom",
  default: "",
});
//상담 과목 state
export const sangdamState = atom({
  key: "sangdamState",
  default: "",
});
export const subjectStateA = atom({
  key: "subjectStateA",
  defalut: "",
});
export const teacherState = atom({
  key: "teacherState",
  defalut: "",
});
//상담 대상 state
export const daesangState = atom({
  key: "daesangState",
  default: "",
});

export const textareaState = atom({
  key: "textareaState",
  defalut: "",
});
//담당반 state
export const clsState = atom({
  key: "clsState",
  default: "",
});
//학년 state
export const gradeState = atom({
  key: "gradeState",
  default: "",
});
//가족관계 state
export const familyState = atom({
  key: "familyState",
  default: "",
});

//회원가입 폼에 있는 state
export const formDataState = atom({
  key: "formDataState",
  default: {},
});

export const selectedSubjectState = atom({
  key: "selectedSubjectState",
  default: "",
});

//counselEdit 페이지에서 쓰이는 state
export const selectedSubState = atom({
  key: "selectedSubState",
  default: "",
});

//상담대상 state
export const selectedDaeState = atom({
  key: "selectedDaeState",
  default: "",
});

//acamember/register에 있는 .
export const studentNameState = atom({
  key: "studentNameState",
  default: "",
});

export const studentBirthState = atom({
  key: "studentBirthState",
  default: "",
});

export const studentSchoolState = atom({
  key: "studentSchoolState",
  default: "",
});
export const studentGradeState = atom({
  key: "studentGradeState",
  default: "",
});

export const studentTel1State = atom({
  key: "studentTel1State",
  default: "",
});
export const studentTel2State = atom({
  key: "studentTel2State",
  default: "",
});

export const studentTel3State = atom({
  key: "studentTel3State",
  default: "",
});

export const parentTel1State = atom({
  key: "parentTel1State",
  default: "",
});
export const parentTel2State = atom({
  key: "parentTel2State",
  default: "",
});
export const parentTel3State = atom({
  key: "parentTel3State",
  default: "",
});

export const studentFamilyState = atom({
  key: "studentFamilyState",
  default: "",
});
export const studentArrState = atom({
  key: "studentArrState",
  default: "",
});
export const studentInfoState = {
  key: "studentInfoState",
  default: {
    name: "",
    birth: "",
    school: "",
    selectedValue: "",
  },
};

export const studentClassState = {
  key: "studentClassState",
  default: "",
};

export const studentListState = atom({
  key: "studentListState",
  default: [],
});

export const counselListState = atom({
  key: "counselListState",
  defalut: [],
});

export const noteState = atom({
  key: "noteState",
  default: "",
});
