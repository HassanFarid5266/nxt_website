import { defineStore } from "pinia";
import { ref } from "vue";

export const usePartnerSwiperStore = defineStore("partners", () => {
  const partners = ref([
    { id: 1, image: "@/assets/images/partner/ammar.png" },
    { id: 2, image: "@/assets/images/partner/ammar.png" },
    { id: 3, image: "@/assets/images/partner/ammar.png" },
    { id: 4, image: "@/assets/images/partner/ammar.png" },
    { id: 5, image: "@/assets/images/partner/ammar.png" },
    { id: 6, image: "@/assets/images/partner/ammar.png" }
  ]);

  return { partners };
});
