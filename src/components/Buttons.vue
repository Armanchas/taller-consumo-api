<script setup>
import { fetchPopulationData } from "@/services/countryData.js";

const handleCountryClick = async () => {
  try {
    const data = await fetchPopulationData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<template>
  <div class="flex justify-center py-20">
    <button class="bg-green-300 hover:bg-green-200" @click="handleCountryClick">
      Fetch Country Data
    </button>
  </div>
</template>
