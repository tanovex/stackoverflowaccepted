
<template>
  <div class="questionListItem">
        <h2>Q: <span v-html="Question.title"></span> <button @click="$emit('showQDetails', Question)" type="button">View</button></h2>
  </div>
</template>

<script>
export default {
  name: 'QuestionListItem',
  props: {
    Question: {}
  },
  emits: ['showQDetails'],
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
        font-size: 1.07692308rem;
        line-height: 1.35;
        font-weight: normal;
        margin-left: .75em;
        margin-right: .75em;
        margin-bottom: 0;
        text-align: left;
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