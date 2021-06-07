<template>
  <div>
    <li>
      <p>{{ polits.text }}</p>
      <span>
        <button v-on:click="Edit(polits._id,polits.text)" >edit</button>
        <button v-on:click="Delete(polits._id)" > &#10006;</button> 
      </span>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    polits: {
      type: Object,
      required: true,
    },
  },
  methods:{
      Delete(id){
          this.$emit('remove-blog',id)
      },
      Edit(id,text){
    
          this.$emit('edit-blog',id,text)
      }
  }
};
</script>
<style scoped>
li {
  border: 0.5px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;
}
span{
  display:grid;
}
button{
  margin: 5px;
}
.done {
  text-decoration: line-through;
}
input {
  margin-right: 1rem;
}
img {
  width: 50%;
}
p {
  line-height: 1px;
}
</style>