import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      id: 1,
      title: `COBREX`,
      description:
        "Insights is a smart analytics and reporting app that helps businesses make better decisions through data. With real-time dashboards, companies can easily track their sales, revenue, and overall performance in one place.",
      image: "/src/assets/images/products/Cobrex.png",
      badge: "Featured",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Other Product",
      description:
        "This product helps companies manage workflows efficiently and improve productivity.",
      image: "/src/assets/images/products/Cobrex.png",
      badge: "",
      isFeatured: false,
    },
    {
      id: 3,
      title: "SuperX",
      description:
        "SuperX gives you AI powered automation to optimize your daily operations.",
      image: "/src/assets/images/products/Cobrex.png",
      badge: "Top Rated",
      isFeatured: true,
    },
    {
      id: 4,
      title: "Lite Manager",
      description:
        "Lite Manager provides a simple solution for small teams to manage projects.",
      image: "/src/assets/images/products/Cobrex.png",
      badge: "",
      isFeatured: false,
    },
  ]);

  const sortedProducts = computed(() => {
    return [...products.value].sort((a, b) => b.isFeatured - a.isFeatured);
  });

  return {
    products,
    sortedProducts,
  };
});
