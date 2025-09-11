// stores/usePartnersStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePartnersStore = defineStore("partners", () => {
  const partners = ref([
    {
      id: 1,
      name: "Ammar Shahid",
      role: "Developer & Designer",
      company: "Nextash",
      image: "/src/assets/images/team/ammar.png",
      links: {
        github: "https://github.com/mianshahid720",
        linkedin: "https://www.linkedin.com/in/shahid-mehmood-89a722248",
        instagram: "https://www.linkedin.com/in/shahid-mehmood-89a722248",
      },
    },
  ]);

  return { partners };
});
