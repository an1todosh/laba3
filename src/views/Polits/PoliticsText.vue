<template>
  <div class="PoliticsText">
  
    <Loader v-if="loading"/>
    <PolitsList v-else-if="politics.length" v-bind:politics="politics" v-bind:postPolits="postPolits" @remove-blog="removeComment"/>
    <p v-else></p>
    <hr>
    <AddPolits @add-politics="addTodo" :postPolits="postPolits"/>
  </div>
</template>

<script>
import PolitsList from '../NewText/PolitsList'
import AddPolits from '../NewText/AddPolits'
import Loader from '../Loader/Loader'
export default {
  name: "PoliticsText",
  data(){
        return {
            politics:[],
            loading:true,
            postPolits:"polits",
            all:{
              politics:this.politics,
              postPolits:this.postPolits
            }
        }
  },
  mounted(){
      fetch('http://localhost:4000/app/getPolits')
      .then(response => response.json())
      .then(json=>{
          this.politics=json.polits
          console.log(json.polits)
          this.loading = false
      })
      
  },
  components: {
    PolitsList,
    AddPolits,
    Loader
  },
  methods:{
    addTodo(polits){
      this.politics.push(polits)
    },
    removeComment(_id){
      this.politics = this.politics.filter(t=>t._id !==_id)
    },
  }
}
</script>
<style>
textarea{
  width:100%;
  height: 100px;
}
</style>