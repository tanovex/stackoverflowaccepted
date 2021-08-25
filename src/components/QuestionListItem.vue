
<template>
  <div class="questionListItem">
      <img :src="Question.owner.profile_image" :title="Question.owner.display_name" />
      <h2 v-html="Question.title"></h2>
      <p v-html="Question.body"></p>

      
      {{Question}}
  </div>
</template>

<script>
export default {
  name: 'QuestionListItem',
  props: {
    Question: {}
  }
}
</script>