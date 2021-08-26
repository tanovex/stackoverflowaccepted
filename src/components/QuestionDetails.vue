
<template>
  <div class="questionListItem">
      
        <h2><button @click="$emit('hideQDetails')" title="Back" type="button">&lt;</button> Q: <span v-html="Question.title"></span></h2>
        <p class="QuestionBody" v-html="Question.body"></p>
        <p class="user-info">
            <img :src="Question.owner.profile_image" /> 
            <span class="user-name" v-html="Question.owner.display_name"></span>
        </p>        
        <button v-show="!showAnswers && !showResults" @click="showAnswers=true">Try to Guess</button>
        <div v-show="showAnswers">
            <h3>Answers - Which one was accepted?</h3>
            <answer-list-item :Answer="answer" v-for="answer in Question.answers" :key="answer.answer_id" @isAcceptedAnswer="isAcceptedAnswer" showChoice />
        </div>
        <div v-if="showResults">
            <h1 v-if="correctChoice">Correct!</h1>
            <h1 v-else>Incorrect - the accepted answer is:</h1>
            <answer-list-item :Answer="acceptedAnswer" />
        </div>
  </div>
</template>

<script>
import AnswerListItem from './AnswerListItem.vue'
export default {
  components: { AnswerListItem },
  name: 'QuestionDetails',
  props: {
    Question: Object
  },
  emits: ['hideQDetails'],
  data() {
      return {
        showAnswers: false,
        acceptedAnswer: {},
        showResults: false,
        correctChoice: false
      }
  },
  
  methods: {
    shuffleAnswerArray(arr) {
        arr.sort(() => Math.random() - 0.5);
    },
    isAcceptedAnswer(ans) {
        if(ans.answer_id === this.acceptedAnswer.answer_id) {
            this.correctChoice = true;
        }
        else {
            this.correctChoice = false;
        }
        this.showResults = true;
        this.showAnswers = false;
    }
  },
  
  created() {
      this.shuffleAnswerArray(this.Question.answers);
      for(let i=0; i < this.Question.answers.length; i++) {
          if(this.Question.answers[i].is_accepted){
              this.acceptedAnswer = this.Question.answers[i];
              break;
          }
      }
  }
}
</script>

<style lang="css" scoped>
    .user-info {
        text-align: left;
        margin-left: 3em;
    }
    img {
        width: 2em;
        display:inline-block;
        vertical-align: middle;
    }
    
    .user-name {
        padding: .5em;
        display: inline-block;
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
    h3 {
        font-size: 1.77692308rem;
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