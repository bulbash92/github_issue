<template>
  <div
      v-if="comments.length === 0 & !isCommentsLoading"
      class="empty"
  >
    У этого Issue пока нет комментариев
  </div>
  <div v-else-if="isCommentsLoading" class="loading">идет загрузка...</div>
  <div v-else>
    <transition-group class="comment-list" name="comments-list" tag="p">
      <comment-item
          v-for="comment in comments"
          :comment="comment"
          :key="comment.node.createdAt"
      />
    </transition-group>
  </div>
</template>

<script>
import {Api} from "@/api/api";
import CommentItem from "@/components/CommentItem";

export default {
  components: {CommentItem},
  data() {
    return {
      comments: [],
      isCommentsLoading: false,
    }
  },
  methods: {
    async fetchIssue(name) {
      try {
        this.isCommentsLoading = true
        const res = await Api.getIssue(name)
        this.comments = res.filter(i => i.node.id === this.$route.params.id)[0].node.comments.edges
      } catch (error) {
        console.log(error)
      } finally {
        this.isCommentsLoading = false
      }
    }
  },
  mounted() {
    this.fetchIssue(this.$route.query.name)
  }

}

</script>

<style scoped>
.empty {
  text-align: center;
  margin-top: 10px;
}

.loading {
  text-align: center;
  color: green;
  font-size: 18px;
}

.comment-list {
  display: flex;
  justify-content: center;
  padding: 15px;

}

.comments-list-item {
  display: inline-block;
  margin-right: 10px;
}

.comments-list-enter-active,
.comments-list-leave-active {
  transition: all 0.4s ease;
}

.comments-list-enter,
.comments-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
