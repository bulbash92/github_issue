<template>
  <div class="comment" @click="$emit('show')">
    <div class="comment-header">comented on
      {{ comment.node.createdAt.replace(/[^\d-:]/g, ' ') }}
    </div>
    <p class="comment-body">{{ comment.node.bodyText }}</p>
  </div>
</template>


<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.comment {
  width: 70vw;
  border-radius: 6px;
  border: 1px solid goldenrod;
}

.comment-header {
  padding: 10px 15px;
  background-color: #f6f8fa;
  height: 40px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.comment-body {
  padding: 10px 15px;
}

</style>
