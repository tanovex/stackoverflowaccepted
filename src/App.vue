<template>
  <h1>Can you guess the accepted answer?</h1>
  <question-list :QuestionArray="result" />
</template>

<script>
import QuestionList from './components/QuestionList.vue'

export default {
  name: 'App',
  components: {
    QuestionList
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchQuestions();
    });
  },
  data () {
    return {
      result: [],
      responseAvailable: false,
    }
  },
  methods: {
    fetchQuestions() {
      this.responseAvailable = false;
      fetch("https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=creation&accepted=True&answers=2&site=stackoverflow&filter=!*MZqiH2nLJUkb))*")
      .then(response => { 
          if(response.ok) {
              return response.json()    
          } 
          else {
              alert("Server returned " + response.status + " : " + response.statusText);
          }                
      })
      .then(response => {
          this.result = response.items; 
          this.responseAvailable = true;
      })
      .catch(err => {
          console.log(err);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
