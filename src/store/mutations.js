export default {
    addMainComment(state,value){
        state.Comments.push({
            children:[],
            id:state.Comments.length.toString(),
            name:value.name,
            content:value.content
        });
        writeStorage(state.Comments);
    },
    reply(state,value){
        let item = state.Comments,arr = value.id.split('-');
        let id = JSON.parse(JSON.stringify(arr));
        id = id.join('-');

        while (arr.length) {
            let index = arr.shift();
            item = item[index].children;
        }

        id = `${id}-${item.length}`;
        item.push({
            children:[],
            id,
            name:value.name,
            content:value.content
        })
        writeStorage(state.Comments);
    },
    delete(state,value){
        console.log(value);
        let item = state.Comments,arr = value.id.split('-');
        let delIndex = arr.pop();
        while (arr.length) {
            let index = arr.shift();
            item = item[index].children
        };
        item.splice(delIndex,1);
        item.splice(delIndex,0,null);
        writeStorage(state.Comments);
    }
}
function writeStorage(data) {
    localStorage.setItem("commentData", JSON.stringify(data));
}