<script setup lang="ts">
import { usePatientStore } from "@/stores/patient";

const patient = usePatientStore();
const props = defineProps({
  onSubmit: {
    type: Function,
    required: true
  }
});

const submitForm = () => {
  props.onSubmit();
  patient.onReset();
};

</script>

<template>
  <v-form @submit.prevent="submitForm" class="patient-form">
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
      :rules="[() => !!patient.age || 'Please enter your age']"
    />
    <div class="mb-1 checkbox-question">
      <v-label>Specify your gender</v-label>
      <v-checkbox
        v-model="patient.gender"
        label="Male"
        color="primary"
        value="Male"
        density="compact"
      />
      <v-checkbox
        v-model="patient.gender"
        label="Female"
        color="primary"
        value="Female"
        density="compact"
      />
      <v-checkbox
        v-model="patient.gender"
        label="Other"
        color="primary"
        value="Other"
        density="compact"
        required
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
      :rules="[() => !!patient.genderOther || 'Please enter your gender']"
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
      :rules="[() => !!patient.phone || 'Please enter your phone number']"
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
      :rules="[() => !!patient.email || 'Please enter your email']"
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
    />
    <div class="checkbox-question">
      <v-label>Do you have any bad habits?</v-label>
      <v-checkbox
        v-model="patient.badHabits"
        label="Alcohol"
        color="primary"
        value="Alcohol"
        density="compact"
        @click="patient.setBadHabits('Alcohol')"
      />
      <v-checkbox
        v-model="patient.badHabits"
        label="Drugs"
        color="primary"
        value="Drugs"
        density="compact"
        @click="patient.setBadHabits('Drugs')"
      />
      <v-checkbox
        v-model="patient.badHabits"
        label="Smoking"
        color="primary"
        value="Smoking"
        density="compact"
        @click="patient.setBadHabits('Smoking')"
      />
      <v-checkbox
        v-model="patient.badHabits"
        label="None"
        color="primary"
        value="None"
        density="compact"
        @click="patient.setBadHabits('None')"
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
      :rules="[() => !!patient.hoursOfSleep || 'Please enter your hours of sleep']"
    />
    <div class="checkbox-question">
      <v-label>Do you have any medical treatment?</v-label>
      <v-checkbox
        v-model="patient.hasMedicalTreatment"
        label="Yes"
        value="true"
        density="compact"
        color="primary"
      />
      <v-checkbox
        v-model="patient.hasMedicalTreatment"
        label="No"
        value="false"
        density="compact"
        color="primary"
      />
    </div>
    <v-textarea
      v-if="patient.hasMedicalTreatment"
      v-model="patient.medicalTreatmentDetails"
      label="Please describe your medical treatment"
      color="primary"
      variant="outlined"
      class="mb-1"
      density="compact"
      :rules="[() => !!patient.medicalTreatmentDetails || 'Please enter your medical treatment details']"
      counter="100"
    />
    <div class="actions">
      <v-btn color="secondary" @click="patient.onReset()">Reset</v-btn>
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