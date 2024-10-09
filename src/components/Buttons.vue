<script setup>
import { fetchPopulationData } from "@/services/countryData.js";
import { fetchAnimeRec } from "@/services/animeRec.js";

const handleCountryClick = async () => {
  try {
    const data = await fetchPopulationData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const handleAnimeRecClick = async () => {
  try {
    const data = await fetchAnimeRec();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<template>
  <div class="flex justify-center py-20 ">
    <button class="bg-green-300 hover:bg-green-200 mx-10" @click="handleCountryClick">
      Fetch Country Data
    </button>
    <button class="bg-green-300 hover:bg-green-200 mx-10" @click="handleAnimeRecClick">
      Fetch Anime Recommendation Data
    </button>
  </div>
</template>
