<template>
    <div class="addComment">
        <textarea name="" id="addComment" cols="30" rows="10" v-model="myComment"></textarea>
        <div class="addBtn">
            <button @click="addComment">add comment</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addComment(){
            this.$store.dispatch('addMainComment',{
                content:this.myComment,
                name:'weikai lim'
            });
            this.myComment='';
        }
    },
    data () {
        return {
            myComment:''
        }
    }
}
</script>

<style>
    .addComment{
        margin-bottom: 30px;
    }
    #addComment{
        width: 60%;
        margin-bottom: 15px;
    }
    .addBtn>button{
        background-color: #ffffff;
        border: 1px solid #cbcbc4;
        border-radius: 7px;
        padding: 3px;
    }
</style>