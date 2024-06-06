<template>
  <div class="flex flex-col justify-between gap-2 sm:flex-row">
    <input
      class="block bg-white w-full rounded-md p-2 shadow-sm focus:outline-none sm:text-sm"
      placeholder="Search task..."
      type="text"
      name="search"
      v-model.lazy.trim="searchVal"
      @keypress.enter="$emit('search', searchVal)"
    />
    <div class="flex justify-start gap-2 sm:justify-between">
      <button
        class="bg-warmBrown text-white py-2 px-4 rounded-md"
        @click="$emit('search', searchVal)"
      >
        Search
      </button>
      <router-link :to="{ name: 'Add' }">
        <button class="bg-warmBrown text-white py-2 px-4 rounded-md">
          Add
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
    };
  },
};
</script>
