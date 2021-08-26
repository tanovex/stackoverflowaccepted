
<template>
  <div class="questionListItem">
        <h2>Q: <span v-html="Question.title"></span></h2>
        <p class="QuestionBody" v-html="Question.body"></p>
        <p>
            <img :src="Question.owner.profile_image" /> 
            <span class="user-name">{{Question.owner.display_name}}</span>
        </p>
        <div v-for="answer in Question.answers" :key="answer.answer_id">
            <answer-list-item :Answer="answer" />
        </div>
  </div>
</template>

<script>
import AnswerListItem from './AnswerListItem.vue'
export default {
  components: { AnswerListItem },
  name: 'QuestionListItem',
  props: {
    Question: {}
  }
}
</script>

<style lang="css" scoped>
    img {
        width: 2em;
        display:inline-block;
    }
    h2 {
        font-size: 2.07692308rem;
        line-height: 1.35;
        font-weight: normal;
        margin-left: .75em;
        margin-right: .75em;
        margin-bottom: 0;
        text-align: left;
        border-bottom: 1px solid #bbb;
    }
    .questionListItem{
        padding: .25em;
    }
    p.QuestionBody {
        text-align: left;
       
        margin-left: 1em;
        margin-right: 1em;

        padding-left: 1em;
        padding-right: 1em;
    }
    p.QuestionBody >>> pre{
        background: #f6f6f6;
        
        margin: 2em;
        padding: 1em;

        border: 1px solid #333;
        white-space: pre-line;
    }

</style>