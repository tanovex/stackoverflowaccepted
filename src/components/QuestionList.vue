
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
  },
  // methods: {
  //   fetchAnswerIDs() {
  //     this.responseAvailable = false;
  //     fetch("https://api.stackexchange.com/2.3/questions/{ids}/answers?order=desc&sort=activity&site=stackoverflow")
  //     .then(response => { 
  //         if(response.ok) {
  //             return response.json()    
  //         } 
  //         else {
  //             alert("Server returned " + response.status + " : " + response.statusText);
  //         }                
  //     })
  //     .then(response => {
  //         this.result = response.items; 
  //         this.responseAvailable = true;
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     });
  //   },
  //   fetchAnswers() {
  //     this.responseAvailable = false;
  //     fetch("https://api.stackexchange.com/2.3/questions/{ids}/answers?order=desc&sort=activity&site=stackoverflow")
  //     .then(response => { 
  //         if(response.ok) {
  //             return response.json()    
  //         } 
  //         else {
  //             alert("Server returned " + response.status + " : " + response.statusText);
  //         }                
  //     })
  //     .then(response => {
  //         this.result = response.items; 
  //         this.responseAvailable = true;
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     });
  //   }
  // }
}
</script>