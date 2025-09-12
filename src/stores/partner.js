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
      image: "/src/assets/images/partner/ammar.png",
      links: {
        github: "https://github.com/mianshahid720",
        linkedin: "https://www.linkedin.com/in/shahid-mehmood-89a722248",
        instagram: "https://www.linkedin.com/in/shahid-mehmood-89a722248",
      },
    },
    {
      id: 2,
      name: "Hassan Babes",
      role: "Full Stack Developer",
      company: "Nextash",
      image: "/src/assets/images/partner/ammar.png",
      links: {
        github: "https://github.com/hassanbabes",
        linkedin: "https://www.linkedin.com/in/hassanbabes",
        instagram: "https://www.instagram.com/hassanbabes",
      },
    },
    {
      id: 3,
      name: "John Smith",
      role: "UI/UX Designer",
      company: "Nextash",
      image: "/src/assets/images/partner/ammar.png",
      links: {
        github: "https://github.com/johnsmith",
        linkedin: "https://www.linkedin.com/in/johnsmith",
        instagram: "https://www.instagram.com/johnsmith",
      },
    },
  ]);

  return { partners };
});
