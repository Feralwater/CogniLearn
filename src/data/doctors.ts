import type { Doctor } from "@/types/doctor";
import doctor1 from "@/assets/images/doctors/1.jpg";
import doctor2 from "@/assets/images/doctors/2.jpg";
import doctor3 from "@/assets/images/doctors/3.png";
import doctor4 from "@/assets/images/doctors/4.jpg";
import doctor5 from "@/assets/images/doctors/5.jpg";
import doctor6 from "@/assets/images/doctors/6.jpg";
import doctor7 from "@/assets/images/doctors/7.jpg";

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. John Doe",
    speciality: "Ophthalmologist, Neurologist",
    rating: 4.5,
    reviews: 17,
    photo: doctor1
  },
  {
    id: 2,
    name: "Dr. Peter Parker",
    speciality: "Psychotherapist",
    rating: 4.0,
    reviews: 35,
    photo: doctor2
  },
  {
    id: 3,
    name: "Dr. Ellyse Perry",
    speciality: "Psychiatrist",
    rating: 4.5,
    reviews: 89,
    photo: doctor3
  },
  {
    id: 4,
    name: "Dr. Emma Watson",
    speciality: "Clinical Psychologist",
    rating: 5.0,
    reviews: 27,
    photo: doctor4
  },
  {
    id: 5,
    name: "Dr. Harry Potter",
    speciality: "Psychologist",
    rating: 3.5,
    reviews: 12,
    photo: doctor5
  },
  {
    id: 6,
    name: "Dr. George Bailey",
    speciality: "Sexologist",
    rating: 4.7,
    reviews: 39,
    photo: doctor6
  },
  {
    id: 7,
    name: "Dr. Yvonne Nelson",
    speciality: "Procedure",
    rating: 2.5,
    reviews: 1589,
    photo: doctor7
  }
];