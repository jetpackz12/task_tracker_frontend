<template>
  <div class="h-screen flex justify-center items-center">
    <div
      class="border border-warmBrown rounded-md p-5 bg-warmWhite w-[90%] sm:w-[70%] lg:w-[40%]"
    >
      <h1 class="text-center text-2xl font-bold border border-x-0 border-t-0 border-b-warmBlack pb-1">Task Tracker</h1>
      <div class="border border-x-0 border-t-0 border-b-warmBrown py-2">
        <search-card @search="getSearchValue" />
      </div>
      <div v-for="item in datas.data" :key="item.id">
        <data-card :data="item" @dataId="updateDataStatus" />
      </div>
      <div class="pt-2">
        <div
          class="grid grid-cols-3 gap-2 md:flex md:justify-center md:items-center"
        >
          <a
            v-for="link in datas.links"
            :class="[
              'py-1',
              'px-3',
              'rounded-md',
              'text-white',
              link.active ? 'bg-warmBrown' : 'bg-warmBlack',
              link.url ?? 'hidden',
            ]"
            :key="link.label"
            @click="getData(link.url)"
            ><span v-html="link.label"></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axios, SearchCard, DataCard } from "../imports";

export default {
  components: { SearchCard, DataCard },
  data() {
    return {
      datas: [],
      searchValue: "",
    };
  },
  watch: {
    searchValue(newVal) {
      if (newVal !== "") {
        this.getSearchData();
      } else {
        this.getData("/api/v1/tasks");
      }
    },
  },
  methods: {
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then((response) => {
          this.datas = response.data.tasks;
        })
        .catch((error) => console.log(error));
    },
    getSearchValue(search) {
      this.searchValue = search;
    },
    getSearchData() {
      const params = {
        search: this.searchValue,
      };

      axios
        .get("/api/v1/tasks/show", { params })
        .then((response) => {
          this.datas = response.data;
        })
        .catch((error) => console.log(error));
    },
    updateDataStatus(data) {
      axios
        .post(`/api/v1/tasks/updateStatus/${data.id}`, {
          status: data.status === 1 ? 0 : 1,
        })
        .then((response) => {
          alert(response.data.message);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
  mounted() {
    this.getData("/api/v1/tasks");
  },
};
</script>
