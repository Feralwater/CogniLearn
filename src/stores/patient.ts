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
  badHabits: [] as string[],
  hasFamilyDepression: "",
  hoursOfSleep: null,
  hasMedicalTreatment: "",
  medicalTreatmentDetails: ""
};

export const usePatientStore = defineStore("patient", {
  state: () => initialPatient,
  actions: {
    onReset() {
      this.firstName = "";
      this.lastName = "";
      this.age = null;
      this.gender = "";
      this.genderOther = "";
      this.phone = "";
      this.email = "";
      this.address = "";
      this.badHabits = [];
      this.hasFamilyDepression = "";
      this.hoursOfSleep = null;
      this.hasMedicalTreatment = "";
      this.medicalTreatmentDetails = "";
    },

    clearGenderOther() {
      this.genderOther = "";
    },

    clearMedicalTreatmentDetails() {
      this.medicalTreatmentDetails = "";
    },

    setNoneBadHabits(badHabit: 'None') {
      this.badHabits = [badHabit];
    },

    removeNoneBadHabits() {
      this.badHabits = this.badHabits.filter(badHabit => badHabit !== 'None');
    }
  }
});
