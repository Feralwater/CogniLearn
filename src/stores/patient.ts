import { defineStore } from "pinia";

const initialPatient = {
  firstName: "",
  lastName: "",
  age: null,
  gender: "",
  genderOther: "",
  phone: "",
  email: "",
  address: "",
  badHabits: [],
  hasFamilyDepression: false,
  hoursOfSleep: null,
  hasMedicalTreatment: false,
  medicalTreatmentDetails: "",
}

export const usePatientStore = defineStore("patient", {
  state: () => initialPatient,
  actions: {
    onReset() {
      Object.assign(this, initialPatient);
    },

    clearGenderOther() {
      this.genderOther = "";
    }
  },
});
