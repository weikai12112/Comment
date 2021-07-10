<template>
    <div class="commentContent" v-if="Comment!=null">
        <div class="commentTitle">
            <div class="spread" :class="{open:open}" @click="openComment">
                <span class="iconfont icon-zhankai2"></span>
            </div>
            <div>{{Comment.name}} x hours ago</div>
            <div class="delete" @click="deleteBtn">[-]</div>
        </div>
        <div v-show="open">
            <div>
                {{Comment.content}}
            </div>
            <div v-if="!showInput"> 
                <a href="#" style="color:grey" @click="showInput=!showInput">reply</a>
            </div>
            <div v-else>
                <input type="text" v-model="myContent">
                <button @click="reply">send</button>
            </div>
            <div class="reply" v-show="Comment.children.length!=0">
                <Comment v-for="(sub,index) in Comment.children" :key="index" :Comment="sub"></Comment>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: {
        Comment:Object
    },
    data () {
        return {
            myContent:'',
            showInput:false,
            open:true
        }
    },
    methods: {
        reply(){
            this.$store.dispatch('reply',{
                content:this.myContent,
                id:this.Comment.id,
                name:'weikai lim'
            });
            this.myContent = '';
            this.showInput = !this.showInput;
        },
        deleteBtn(){
            this.$store.dispatch('delete',{
                id:this.Comment.id
            });
        },
        openComment(){
            this.open = !this.open;
        }
    }
}
</script>

<style>
    .commentContent{
        margin-bottom: 20px;
    }
    .commentTitle{
        color: grey;
        display: flex;
        font-size: 14px;
        margin-bottom: 5px;
    }
    .reply{
        padding-left: 25px;
        padding-top: 10px;
    }
    .delete{
        cursor: pointer;
    }
    .spread{
        transition: .2s;
        transform:rotate(-90deg);
    }
    .open{
        transform:rotate(0deg);
    }
</style>