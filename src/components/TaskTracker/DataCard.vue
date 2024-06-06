<template>
  <div
    class="flex flex-col justify-between gap-2 border border-x-0 border-t-0 border-b-warmBrown py-2 xxs:flex-row"
  >
    <div class="flex flex-col">
      <div class="flex justify-start items-center gap-1">
        <input type="checkbox" :checked="isCheck" @click="$emit('dataId', data)"/>
        <span>{{ data.task }}</span>
      </div>
      <span>{{ data.date_time }}</span>
    </div>
    <div
      class="flex flex-row justify-start items-center gap-2 xxs:flex-col xs:flex-row sm:justify-center"
    >
      <router-link :to="{ name: 'Update', params: { id: data.id } }">
        <button class="bg-warmBrown text-white py-2 px-4 rounded-md">
          Update
        </button>
      </router-link>
      <router-link :to="{ name: 'Delete', params: { id: data.id } }">
        <button class="bg-warmBrown text-white py-2 px-4 rounded-md">
          Delete
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    isCheck() {
      return this.data.status === 1 ? true : false;
    },
  },
};
</script>
