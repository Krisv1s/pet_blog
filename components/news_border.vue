<template>
  <div>
    <NuxtLink :to="`/${news.id - 1}`" v-if="news">
      <div class="text_featured">
        <span style="color: rgba(28, 28, 28, 0.5);">{{ nameBorder }}</span>
        <br />
        <span class="title">{{ getText(news.title) }}</span>
        <div style="margin-top:12px;" class="info_news">
          <span class="gray_text">{{ news.author }}</span>
          <div class="eclipse"></div>
          <span class="gray_text"> {{ new Date().toLocaleDateString() }}</span>
        </div>
        <div style="margin-top:14px;line-height: 24px;">
          {{ news.body }}
        </div>
      </div></NuxtLink
    >
  </div>
</template>

<script>
import { getText } from "@utils/func.js";

export default {
  props: ["news", "nameBorder"],
  methods: { getText }
};
</script>

<style scoped>
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

.info_news {
  display: flex;
}

.title {
  font-size: 33px;
  line-height: 41px;
  font-weight: bold;
  width: 430px;
}

.text_featured {
  margin-top: 71px;
  margin-left: 39px;
  margin-right: 40px;
}
</style>
