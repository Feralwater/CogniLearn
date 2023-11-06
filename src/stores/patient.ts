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
  hasFamilyDepression: "",
  hoursOfSleep: null,
  hasMedicalTreatment: "",
  medicalTreatmentDetails: ""
};

export const usePatientStore = defineStore("patient", {
  state: () => initialPatient,
  actions: {
    onReset() {
      Object.assign(this, initialPatient);
    },

    clearGenderOther() {
      this.genderOther = "";
    },

    clearMedicalTreatmentDetails() {
      this.medicalTreatmentDetails = "";
    }
  }
});
