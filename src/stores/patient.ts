import { defineStore } from "pinia";

const initialPatient = {
  firstName: "",
  lastName: "",
  age: 0,
  gender: "",
  genderOther: "",
  phone: "",
  email: "",
  address: "",
  badHabits: [""],
  hasFamilyDepression: false,
  hoursOfSleep: 0,
  hasMedicalTreatment: false,
  medicalTreatmentDetails: "",
}

export const usePatientStore = defineStore("patient", {
  state: () => (initialPatient),
  actions: {
    setBadHabits(badHabit: string) {
      if(badHabit === "None") {
        this.badHabits = ["None"];
      } else {
        if(this.badHabits.includes("None")) {
          this.badHabits = this.badHabits.filter((habit) => habit !== "None");
        }
        if(this.badHabits.includes(badHabit)) {
          this.badHabits = this.badHabits.filter((habit) => habit !== badHabit);
        } else {
          this.badHabits.push(badHabit);
        }
      }
    },
    onReset() {
      Object.assign(this, initialPatient);
    },
  },
});
