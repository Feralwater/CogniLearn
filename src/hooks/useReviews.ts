import axios from "axios";
import type { Review, ServerReview } from "@/types/review";
import { onMounted, ref, watch } from "vue";

export const useReviews = (itemsPerPage: number) => {
  const isReviewsLoading = ref(false);
  const reviews = ref<Review[]>([]);
  const totalPages = ref(0);
  const currentPage = ref(1);

  const fetchReviews = async () => {
    try {
      isReviewsLoading.value = true;
      const { data, headers } = await axios.get("https://jsonplaceholder.typicode.com/comments", {
        params: {
          _page: currentPage.value,
          _limit: itemsPerPage
        }
      });
      totalPages.value = Math.ceil(headers["x-total-count"] / itemsPerPage);
      reviews.value = data.map((review: ServerReview) => ({
        id: review.id,
        name: review.name,
        review: review.body,
        rating: Math.floor(Math.random() * 5) + 1
      }));
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      isReviewsLoading.value = false;
    }
  };

  const updateReviews = async () => {
    await fetchReviews();
  };

  onMounted(fetchReviews);

  watch(currentPage, updateReviews);

  return {
    isReviewsLoading,
    reviews,
    totalPages,
    currentPage
  };
};