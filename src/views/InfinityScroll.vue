<template>
  <div>
    <header>
      <h1>Infinity Scroll Exercise</h1>
    </header>
    <main>
      <PostList v-for="(list, idx) in post_list" :key="idx" :list="list" />
    </main>
  </div>
</template>

<script>
import PostList from '@/components/InfinityScroll/PostList.vue';

export default {
  components: {
    PostList,
  },
  data() {
    return {
      post_list: [],
    };
  },
  methods: {
    getList() {
      const list_titles = ['면접', '합겹하고', '싶어요', '메디스트림', '제발요', '메일주세요'];
      const list = [];

      for (let i = 0; i < 10; i++) {
        list.push({
          title: list_titles[Math.floor(Math.random() * list_titles.length)],
          description: '메디스트립 합격하고 싶어요 제발요 전화/메일 주세요...',
        });
      }
      return list;
    },
    handleScroll() {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        const new_list = this.getList();
        this.post_list = [...this.post_list, ...new_list];
      }
    },
  },
  mounted() {
    this.post_list = this.getList();
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #2c3e50;
  min-height: 100vh;
  padding-top: 3rem;
}
header h1 {
  text-align: center;
}
header {
  margin-bottom: 2rem;
}
main {
  padding: 0 2rem;
  max-width: 640px;
  margin: 0 auto;
}
</style>
