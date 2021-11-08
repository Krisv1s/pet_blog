<template>
  <div class="window">
    <Header />
    <div class="news_list" v-if="newsList[$route.params.news]">
      <span class="title">{{ newsList[$route.params.news].title }}</span>
      <div class="info_news">
        <span class="gray_text">{{ newsList[$route.params.news].author }}</span>
        <div class="eclipse"></div>
        <span class="gray_text"> {{ new Date().toLocaleDateString() }}</span>
      </div>
      <div class="body_news">
        {{ newsList[$route.params.news].body
        }}{{ newsList[$route.params.news].body
        }}{{ newsList[$route.params.news].body }}
      </div>
    </div>
    <div v-if="newsList[+$route.params.news - 1]">
      <NuxtLink :to="`/${+$route.params.news - 1}`"
        ><svg
          class="arrow_left"
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="150" fill="#1C1C1C" />
          <path
            d="M108.6 33.6001L41.3999 75.9001L108.6 116.4"
            stroke="white"
            stroke-width="5"
          />
        </svg>
      </NuxtLink>
      <div class="text_left">
        Next up:
        <span style="font-weight:bold;">{{
          getText(newsList[+$route.params.news - 1].title)
        }}</span>
      </div>
    </div>
    <div v-if="newsList[+$route.params.news + 1]">
      <NuxtLink :to="`/${+$route.params.news + 1}`">
        <svg
          class="arrow_right"
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="150" fill="#1C1C1C" />
          <path
            d="M41.4001 33.6001L108.6 75.9001L41.4001 116.4"
            stroke="white"
            stroke-width="5"
          /></svg
      ></NuxtLink>
      <div class="text_right">
        Next up:
        <span style="font-weight:bold;">{{
          getText(newsList[+$route.params.news + 1].title)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@components/header.vue";
import { getText } from "@utils/func.js";

export default {
  components: {
    Header
  },
  async mounted() {
    await this.$store.dispatch("news/getUsers");
    await this.$store.dispatch("news/getNews");
  },
  computed: {
    newsList() {
      return this.$store.getters["news/news"];
    }
  },
  methods: {
    getText
  }
};
</script>

<style scoped>
.news_list {
  display: flex;
  background: white;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 42px;
  line-height: 52px;
  font-weight: bold;
  width: 790px;
  margin-top: 54px;
  text-align: center;
}

.info_news {
  display: flex;
  align-self: center;
  margin-top: 17px;
}

.gray_text {
  color: rgba(28, 28, 28, 0.5);
  line-height: 22px;
}

.eclipse {
  background: rgba(28, 28, 28, 0.5);
  border-radius: 50%;
  width: 3px;
  height: 3px;
  display: inline-flex;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
}

.body_news {
  margin-top: 26px;
  width: 652px;
  line-height: 24px;
}

.arrow_left {
  position: fixed;
  left: 0px;
  bottom: 0px;
}

.arrow_right {
  position: fixed;
  right: 0px;
  bottom: 0px;
}

.text_left {
  position: fixed;
  left: 184px;
  bottom: 61px;
  font-size: 20px;
  line-height: 25px;
}

.text_right {
  position: fixed;
  right: 179px;
  bottom: 61px;
  font-size: 20px;
  line-height: 25px;
}

.window {
  position: relative;
}
</style>
