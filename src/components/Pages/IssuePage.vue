<template>
  <div>
    <v-select
        v-model="selected"
        :filterable="true"
        :searchable="true"
        :options="options"
        :label="label"
        :placeholder="'выберите репозиторий'"
    />
    <post-list
        :posts="posts"
        @openComments="openComments"
        v-if="!isPostsLoading"
    />
    <div v-else class="loading">Идет загрузка</div>
  </div>

</template>

<script>
import PostList from '@/components/PostList.vue';
import {Api} from "@/api/api";
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";


export default {
  components: {
    PostList,
    vSelect
  },
  data() {
    return {
      posts: [],
      selected: '',
      options: [],
      isPostsLoading: false,
      label: 'title',
    }
  },
  methods: {
    openComments(post) {
      this.$router.push({path: `issue/${post.node.id}`, query: {name: this.selected.title}})
    },
    async fetchRepositories() {
      try {
        const response = await Api.getRepositories()
        const newOptions = response.map(opt => ({title: opt.name}))
        this.options = newOptions
      } catch (err) {
        console.log(err)
      }
    },
    async fetchIssue(name) {
      try {
        this.isPostsLoading = true
        const res = await Api.getIssue(name)
        this.posts = res
        this.isPostsLoading = false
      } catch (error) {
        console.log(error)
      }
    }
  },
  watch: {
    selected(newValue) {
      this.fetchIssue(newValue.title)
    }
  },
  mounted() {
    this.fetchRepositories()
  }
}
</script>

<style>
.loading {
  text-align: center;
  color: green;
  font-size: 18px;
}
</style>
