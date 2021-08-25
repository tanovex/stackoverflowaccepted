<template>
  <header>
    <div class="title">stack<b>overflow</b></div>
    <div class="question">Can you guess the accepted answer?</div>
  </header>
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
body {
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  text-align: left;
  background-color: var(--black-025);
  transition: box-shadow cubic-bezier(.165, .84, .44, 1) .25s;
  height: 50px;
  box-sizing: border-box;
  border-top: 3px solid rgb(255, 166, 0);
  margin: 0px auto;
  padding: 5px;
}
header .title, header .question {
  display: inline-block;
}
header .title {
  padding: .25em;
}
header .question {
  padding: .25em;
  font-weight: 500;
  font-size: 15pt;
  text-align: center;
}

</style>
