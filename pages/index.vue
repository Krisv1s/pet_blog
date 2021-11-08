<template>
  <div style="position: relative;">
    <Header />
    <div class="featured_new">
      <NewsBorder :news="newsList[0]" :nameBorder="'FEATURED ARTICLE'" />
    </div>
    <div class="news_list">
      <h2 style="font-size:42px">Editor’s Picks</h2>
      <div class="line" />
      <NewsPreview v-for="news in listMainNews" :key="news.id" :news="news" />
    </div>
    <img src="@assets/png/end_pic.png" class="pictures" />
    <div class="end_new">
      <NewsBorder :news="newsList[4]" :nameBorder="'END NEWS'" />
    </div>
  </div>
</template>

<script>
import Header from "@components/header.vue";
import NewsPreview from "@components/news_preview.vue";
import NewsBorder from "@components/news_border.vue";
import { getText } from "@utils/func.js";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    NewsPreview,
    NewsBorder
  },
  async mounted() {
    await this.$store.dispatch("news/getUsers");
    await this.$store.dispatch("news/getNews");
  },
  methods: {
    getText
  },
  computed: {
    newsList() {
      return this.$store.getters["news/news"];
    },
    listMainNews() {
      return this.newsList.slice(1, 4);
    }
  }
};
</script>

<style scoped>
.featured_new {
  margin-left: 45px;
  height: 483px;
  width: 509px;
  background: white;
  position: absolute;
  top: 100px;
}

.end_new {
  height: 483px;
  width: 509px;
  position: absolute;
  background: white;
  right: 103px;
  bottom: 55px;
}

.news_list {
  display: flex;
  background: white;
  align-items: center;
  flex-direction: column;
}

.line {
  background: black;
  width: 190px;
  height: 0px;
  border: 5px solid #1c1c1c;
}

.pictures {
  width: 100%;
  height: 592px;
  margin-top: 62px;
}

</style>
