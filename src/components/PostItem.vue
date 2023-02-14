<template>
  <div class="post" @click="$emit('openComments', post)">
    <div>
      <div style="display: flex" class="post-header">
        <div v-if="post.node.state === 'OPEN'">
          <span class="post-status green">{{ post.node.state }} </span>
        </div>
        <div v-else-if="post.node.state === 'CLOSED'">
          <span class="post-status red"> {{ post.node.state }}</span>
        </div>
        <h2 class="post-title"> {{ post.node.title }} </h2>
      </div>
      <p class="post-body"> {{ post.node.bodyText }} </p>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style>
.post {
  display: flex;
  width: 40vw;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid goldenrod;
  overflow: hidden;
  cursor: pointer;
}

.post-header {
  display: flex;
}

.post-title {
  font-weight: bold;
  font-size: 24px;
  word-break: break-all;
}

.post-body {
  margin-top: 10px;
}

.post-status {
  padding: 10px;
  display: inline-block;
  border-radius: 20px;
  color: white;
  margin-right: 40px;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}
</style>
