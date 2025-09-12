import { defineStore } from "pinia";
import { ref } from "vue";

export const usePartnerSwiperStore = defineStore("partnerSwiper", () => {
  const partners = ref([
    { id: 1, image: "/src/assets/images/partner/ammar.png" },
    { id: 2, image: "/src/assets/images/partner/ammar.png" },
    { id: 3, image: "/src/assets/images/partner/ammar.png" },
    { id: 4, image: "/src/assets/images/partner/ammar.png" },
    { id: 5, image: "/src/assets/images/partner/ammar.png" },
    { id: 6, image: "/src/assets/images/partner/ammar.png" },
    { id: 7, image: "/src/assets/images/partner/ammar.png" },
    { id: 8, image: "/src/assets/images/partner/ammar.png" }
  ]);

  return { partners };
});
