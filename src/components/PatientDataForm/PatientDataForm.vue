<script setup lang="ts">
import { usePatientStore } from "@/stores/patient";
import { ref } from "vue";

const patient = usePatientStore();
const props = defineProps({
  onSubmit: {
    type: Function,
    required: true
  }
});
const formIsValid = ref(false);
const validateForm = () => {
  const isFormValid = (
    !!patient.firstName &&
    !!patient.lastName &&
    !!patient.age &&
    !!patient.gender &&
    (patient.gender !== "Other" || !!patient.genderOther) &&
    !!patient.phone &&
    !!patient.email &&
    !!patient.address &&
    !!patient.hoursOfSleep &&
    !!patient.badHabits.length &&
    !!patient.hasFamilyDepression &&
    !!patient.hasMedicalTreatment &&
    (patient.hasMedicalTreatment !== "Yes" || !!patient.medicalTreatmentDetails)
  );

  formIsValid.value = isFormValid;

  return isFormValid;
};
const submitForm = () => {
  if (validateForm()) {
    props.onSubmit();
    patient.onReset();
  }
};

</script>

<template>
  <v-form @submit.prevent="submitForm" class="patient-form" @reset="patient.onReset">
    <v-text-field
      density="compact"
      v-model.trim="patient.firstName"
      label="First Name"
      required
      color="primary"
      variant="outlined"
      counter="20"
      class="mb-1"
      :rules="[() => !!patient.firstName || 'Please enter your first name']"
    />
    <v-text-field
      density="compact"
      counter="20"
      class="mb-1"
      :rules="[() => !!patient.lastName || 'Please enter your last name']"
      v-model.trim="patient.lastName"
      label="Last Name"
      required
      color="primary"
      variant="outlined"
    />
    <v-text-field
      v-model.number="patient.age"
      label="Age"
      required
      type="number"
      color="primary"
      variant="outlined"
      density="compact"
      class="mb-1"
      :rules="[() => !!patient.age || 'Please enter your age', v => v < 120 || 'Please enter a valid age', v => v > 0 || 'Please enter a valid age']"
    />
    <div class="mb-1 checkbox-question">
      <v-label>Specify your gender</v-label>
      <v-checkbox
        v-model="patient.gender"
        label="Male"
        color="primary"
        value="Male"
        density="compact"
        @change="patient.clearGenderOther()"
      />
      <v-checkbox
        v-model="patient.gender"
        label="Female"
        color="primary"
        value="Female"
        density="compact"
        @change="patient.clearGenderOther()"
      />
      <v-checkbox
        v-model="patient.gender"
        label="Other"
        color="primary"
        value="Other"
        density="compact"
        required
        @change="patient.clearGenderOther()"
        :rules="[() => !!patient.gender || 'Please select your gender']"
      />
    </div>
    <v-text-field
      v-if="patient.gender === 'Other'"
      label="Specify your gender"
      required
      color="primary"
      variant="outlined"
      v-model="patient.genderOther"
      class="mb-1"
      density="compact"
      counter="20"
      :rules="[() => !!patient.genderOther || 'Please enter your gender', v => v.length < 20 || '20 symbols max']"
    />
    <v-text-field
      v-model="patient.phone"
      label="Phone"
      required
      color="primary"
      variant="outlined"
      type="tel"
      class="mb-1"
      density="compact"
      :rules="[() => !!patient.phone || 'Please enter your phone number', v => v.length < 20 || '20 symbols max' ]"
      counter="20"
    />
    <v-text-field
      v-model="patient.email"
      label="Email"
      required
      color="primary"
      variant="outlined"
      type="email"
      class="mb-1"
      density="compact"
      :rules="[v => !!v || 'Please enter your email', v => /.+@.+\..+/.test(v) || 'Please enter a valid email address', v => v.length < 30 || '30 symbols max']"
      counter="30"
    />
    <v-text-field
      v-model="patient.address"
      label="Address"
      required
      color="primary"
      variant="outlined"
      class="mb-1"
      density="compact"
      :rules="[() => !!patient.address || 'Please enter your address']"
      counter="50"
    />
    <div class="checkbox-question">
      <v-label>Do you have any bad habits?</v-label>
      <v-checkbox
        v-model="patient.badHabits"
        label="Alcohol"
        color="primary"
        value="Alcohol"
        density="compact"
        @change="patient.removeNoneBadHabits()"
      />
      <v-checkbox
        v-model="patient.badHabits"
        label="Drugs"
        color="primary"
        value="Drugs"
        density="compact"
        @change="patient.removeNoneBadHabits()"
      />
      <v-checkbox
        v-model="patient.badHabits"
        label="Smoking"
        color="primary"
        value="Smoking"
        density="compact"
        @change="patient.removeNoneBadHabits()"
      />
      <v-checkbox
        v-model="patient.badHabits"
        label="None"
        color="primary"
        value="None"
        density="compact"
        @change="patient.setNoneBadHabits('None')"
        :rules="[() => !!patient.badHabits.length || 'Please select your bad habits']"
      />
    </div>
    <div class="checkbox-question">
      <v-label>Does your family have any mental health issues?</v-label>
      <v-checkbox
        v-model="patient.hasFamilyDepression"
        label="Yes"
        color="primary"
        value="Yes"
        density="compact"
      />
      <v-checkbox
        v-model="patient.hasFamilyDepression"
        label="No"
        color="primary"
        value="No"
        density="compact"
        :rules="[() => !!patient.hasFamilyDepression || 'Please select your family mental health issues']"
      />
    </div>
    <v-text-field
      v-model.number="patient.hoursOfSleep"
      label="How many hours of sleep do you get per night?"
      required
      type="number"
      color="primary"
      variant="outlined"
      class="mb-1"
      density="compact"
      :rules="[() => !!patient.hoursOfSleep || 'Please enter your hours of sleep', v => v < 24 || 'Please enter a valid number', v => v > 0 || 'Please enter a valid number']"
    />
    <div class="checkbox-question">
      <v-label>Do you have any medical treatment?</v-label>
      <v-checkbox
        v-model="patient.hasMedicalTreatment"
        label="Yes"
        value="Yes"
        density="compact"
        color="primary"
        @change="patient.clearMedicalTreatmentDetails()"
      />
      <v-checkbox
        v-model="patient.hasMedicalTreatment"
        label="No"
        value="No"
        density="compact"
        color="primary"
        @change="patient.clearMedicalTreatmentDetails()"
        :rules="[() => !!patient.hasMedicalTreatment || 'Please select your medical treatment']"
      />
    </div>
    <v-textarea
      v-if="patient.hasMedicalTreatment === 'Yes'"
      v-model="patient.medicalTreatmentDetails"
      label="Please describe your medical treatment"
      color="primary"
      variant="outlined"
      class="mb-1"
      density="compact"
      :rules="[() => !!patient.medicalTreatmentDetails || 'Please enter your medical treatment details', v => v.length < 100 || '100 symbols max']"
      counter="100"
    />
    <div class="actions">
      <v-btn color="secondary" type="reset">Reset form</v-btn>
      <v-btn type="submit" color="primary">Submit information</v-btn>
    </div>
  </v-form>
</template>

<style scoped>
.patient-form {
  background-color: var(--primary-soft);
  padding: 20px;
  border-radius: 4px;
}

.checkbox-question {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>