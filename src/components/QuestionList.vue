
<template>
  <div class="questionList">

    <question-list-item v-show="!showQuestionDetails" v-for='question in QuestionArray' :Question="question" :key="question.question_id" @showQDetails="showQDetails" />

    <question-details v-if="showQuestionDetails" :Question="selectedQuestion" :key="selectedQuestion.question_id" @hideQDetails="hideQDetails" />

  </div>
</template>

<script>
import QuestionListItem from './QuestionListItem.vue'
import QuestionDetails from './QuestionDetails.vue'
export default {
  components: { QuestionListItem, QuestionDetails },
  name: 'QuestionList',
  props: {
    QuestionArray: [Object]
  },
  created() {
    this.selectedQuestion = this.QuestionArray[0];
  },
  data() {
    return {
      selectedQuestion: null,
      showQuestionDetails: false
    }
  },
  methods: {
    showQDetails(q) {
      this.selectedQuestion = q;
      this.showQuestionDetails = true;
    },
    hideQDetails() {
      this.showQuestionDetails = false;
    }
   }
}
</script>

<style lang="css" scoped>
    .questionList {
        margin: 1em;
    }
</style>