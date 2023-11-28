import { onMounted, ref } from "vue";
import type { ServerReview } from "@/types/review";
import axios from "axios";
import { doctors } from "@/data/doctors";

export const useReview = (id: string) => {
  const review = ref<ServerReview | null>(null);
  const randomDoctor = doctors[Math.floor(Math.random() * doctors.length)];

  const fetchReview = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
      review.value = data;
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  onMounted(fetchReview);

  return {
    review,
    randomDoctor,
  };
};