<template>
  <div>
    <ul>
      <PolitsItem
        v-for="polits in politics"
        :key="polits._id"
        v-bind:polits="polits"
        v-on:remove-blog="removeTodo"
        v-on:edit-blog="editbBlog"
      />
      <Edit v-if="edit" @edit-close="closeBloge" @edit="closeEditBloge" v-bind:message="message"/>
    </ul>
  </div>
</template>
<script>
import PolitsItem from "./PolitsItem";
import Edit from './Edit'
export default {
  props: ["politics","postPolits"],
  data(){
        return {
            edit:false,
            message:'',
            id:''
        }
  },
  components: {
    PolitsItem,
    Edit
  },
  methods: {
    removeTodo(_id) {
      // alert(this.postPolits)
      fetch(`http://localhost:4000/app/delete${this.postPolits}/`+_id, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      this.$emit("remove-blog", _id);
    },
    editbBlog(id,message){
      if(message){
        this.message=message
      }
      this.id=id
      this.edit=true
    },
    closeEditBloge(bool,mes){
       this.politics = this.politics.map(t=>{
        if(t._id===this.id){
          fetch(`http://localhost:4000/app/UpDate${this.postPolits}/`+this.id,{
            method:'PUT',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
            },
            body:JSON.stringify({
              text: mes
              })
          })
          return {  
            ...t,
            text: mes
          }  
        }
        return t;
      })
      this.edit=bool
    },
    closeBloge(bool){
      this.edit=bool
      this.message
    }
  },
};
</script>
