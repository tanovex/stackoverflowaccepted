
<template>
  <li class="answerListItem">
        <img :src="Answer.owner.profile_image" :title="Answer.owner.display_name" />
        <h3 v-html="Answer.title"></h3>
        <p v-html="Answer.body"></p>
  </li>
</template>

<script>
export default {
  name: 'AnswerListItem',
  props: {
    Answer: {}
  }
}
</script>

<style lang="css" scoped>
    img {
        width: 2em;
    }
</style>