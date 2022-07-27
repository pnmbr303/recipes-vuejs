<template>
  <div class="app">
    <div>
      <my-select
        v-model="currentPage"
        :options="pages"
      />
    </div>
    <div class="reader" v-for="page in pages">
      <div class="page" v-if="currentPage === page.number">
        <h1>{{ page.number }}</h1>
        <img :src=page.url />
      </div>
    </div>
  </div>
</template>

<script>
import MySelect from "@/components/UI/MySelect";
export default {
  components: {MySelect},
  data() {
    return {
      pages: [
        {number: 1, url: "https://img3.cdnlib.link//manga/sihanbu-agnyeoui-haepiending/chapters/1315459/001_M7uV.png"},
        {number: 2, url: "https://img3.cdnlib.link//manga/sihanbu-agnyeoui-haepiending/chapters/1315459/002_AvSP.png"},
        {number: 3, url: "https://img3.cdnlib.link//manga/sihanbu-agnyeoui-haepiending/chapters/1315459/003_s2vo.png"}
      ],
      currentPage: 2
    }
  },
}
</script>

<style scoped>

</style>