<template>
  <card>
    <div
      class="flex justify-between items-center border border-x-0 border-t-0 border-b-warmBlack pb-1"
    >
      <h1 class="text-xl font-bold">Delete Task</h1>
      <router-link :to="{ name: 'Home' }">
        <button class="bg-warmBlack text-white px-2 py-1 rounded-sm">X</button>
      </router-link>
    </div>
    <p class="text-red-500">Are you sure you want to delete this task?</p>
    <div class="flex justify-center items-center">
      <button
        class="bg-warmBrown text-white py-2 px-6 rounded-md"
        @click="deleteData()"
      >
        Yes
      </button>
    </div>
  </card>
</template>

<script>
import { axios, Card } from "../imports";

export default {
  components: { Card },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    deleteData() {
      axios
        .delete(`/api/v1/tasks/destroy/${this.id}`)
        .then((response) => {
          alert(response.data.message);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
