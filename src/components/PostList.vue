<template>
  <div v-if="posts.length > 0">
    <transition-group tag="div" class="post-list" name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.node.id"
          @openComments="$emit('openComments', post)"
      />
    </transition-group>
  </div>
  <h2 v-else class="post-list-empty">
    Выберите репорзиторий чтобы отобразить Issues
  </h2>
</template>

<script>

import PostItem from "@/components/PostItem";
import CommentItem from "@/components/CommentItem";

export default {
  components: {CommentItem, PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
.post-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
  gap: 20px;
}

.post-list-empty {
  color: dimgray;
  margin-top: 10px;
  text-align: center;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
