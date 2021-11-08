import axios from "axios";

export const state = () => ({
  users: [],
  news: []
});

export const actions = {
  async getUsers({ commit }) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("setUsers", data);
  },
  async getNews({ commit }) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setNews", data);
  }
};

export const getters = {
  news(state) {
    const { news, users } = state;
    const newsList = [];
    for (const key of news) {
      const user = users.find(item => item.id == key.userId);
      newsList.push({
        author: user.name,
        ...key
      });
    }
    return newsList;
  }
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setNews(state, news) {
    state.news = news;
  }
};
