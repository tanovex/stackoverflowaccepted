
<template>
  <div class="answerListItem">
        <p class="AnswerBody"><span v-html="Answer.body"></span></p>
        <p>
            <img :src="Answer.owner.profile_image" /> 
            <span class="user-name" v-html="Answer.owner.display_name"></span>
        </p>
        <p v-if="showChoice">
            <button type="button" @click="$emit('isAcceptedAnswer', Answer)">I choose this one</button>
        </p>
  </div>
</template>

<script>
export default {
  name: 'AnswerListItem',
  props: {
    Answer: {},
    showChoice: Boolean
  },
  emits: ["isAcceptedAnswer"]
}
</script>

<style lang="css" scoped>
    img {
        width: 1.5em;
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
    .answerListItem{
        margin: 3em;
        padding: .25em;
        border: 1px solid #333;
    }
    p.AnswerBody {
        text-align: left;
       
        margin-left: 1em;
        margin-right: 1em;

        padding-left: 1em;
        padding-right: 1em;
    }
    p.AnswerBody >>> pre{
        background: #f6f6f6;
        
        margin: 2em;
        padding: 1em;

        border: 1px solid #333;
        white-space: pre-line;
    }
</style>