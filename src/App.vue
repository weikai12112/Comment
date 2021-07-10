<template>
  <div class="App">
    <AddComment/>
    <Comment v-for="(item,index) in Comments" :key="index" :Comment='item'></Comment>
  </div>
</template>

<script>
import AddComment from '../src/components/AddComment/AddComment'
export default {
  name: 'App',
  components: {
    AddComment
  },
  created () {
    let commentData = JSON.parse(localStorage.getItem("commentData"))
    if (commentData) {
      this.$store.state.Comments = commentData;
    }
    this.Comments = this.$store.state.Comments;
    
  },
  data () {
    return {
      Comments:[]
    }
  }
}
</script>

<style>
  .App{
    background-color: #f5f5ee;
    padding: 20px;
  }
</style>
