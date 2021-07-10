export default {
    addMainComment({commit},value){
        commit('addMainComment',value)
    },
    reply({commit},value){
        commit('reply',value)
    },
    delete({commit},value){
        commit('delete',value)
    }
}