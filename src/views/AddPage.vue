<template>
  <card>
    <div
      class="flex justify-between items-center border border-x-0 border-t-0 border-b-warmBlack pb-1"
    >
      <h1 class="text-xl font-bold">Add Task</h1>
      <router-link :to="{ name: 'Home' }">
        <button class="bg-warmBlack text-white px-2 py-1 rounded-sm">X</button>
      </router-link>
    </div>
    <form class="space-y-2" @submit.prevent="submitForm">
      <input
        class="block bg-white w-full rounded-md p-2 shadow-sm focus:outline-none sm:text-sm"
        placeholder="Enter a task"
        type="text"
        name="task"
        v-model.lazy.trim="formData.task"
      />
      <input
        class="block bg-white w-full rounded-md p-2 shadow-sm focus:outline-none sm:text-sm"
        placeholder="Date and time"
        type="text"
        name="date_time"
        v-model.lazy.trim="formData.date_time"
      />
      <div class="flex justify-start items-center gap-1">
        <input
          class=""
          placeholder="Enter a task"
          type="checkbox"
          name="status"
          id="status"
          v-model="formData.status"
        />
        <label class="text-warmBlack" for="status">Done</label>
      </div>
      <div class="flex justify-center items-center">
        <button class="bg-warmBrown text-white py-2 px-6 rounded-md">
          Submit
        </button>
      </div>
    </form>
  </card>
</template>

<script>
import { axios, Card } from "../imports";

export default {
  components: { Card },
  data() {
    return {
      formData: {
        task: "",
        date_time: "",
        status: false,
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("/api/v1/tasks/store", {
          ...this.formData,
          status: this.formData.status ? 1 : 0,
        })
        .then((response) => {
          alert(response.data.message);
          this.formData = { task: "", date_time: "", status: false };
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.message);
        });
    },
  },
};
</script>
