
<template>
  <div class="questionList">

    <question-list-item v-for='question in QuestionArray' :Question="question" :key="question.question_id" />

  </div>
</template>

<script>
import QuestionListItem from './QuestionListItem.vue'
export default {
  components: { QuestionListItem },
  name: 'QuestionList',
  props: {
    QuestionArray: []
  }
}
</script>

<style lang="css" scoped>
    .questionList {
        margin: 1em;
    }
</style>