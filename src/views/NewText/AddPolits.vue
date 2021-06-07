<template>
  <div class="addPost">
    <textarea name="" id="" v-model="text" required></textarea>
    <button type="submit" class="addButton" v-on:click="onSubmit(postPolits)">Send</button>
  </div>
</template>
<script>
export default {
  props: ["postPolits"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit(postPolits) {
      if (this.text.trim()) {
        const newTodo = {
          _id: Date.now(),
          text: this.text,
        };
        console.log(newTodo);
        fetch(`http://localhost:4000/app/` + postPolits, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }).then((res) => res.json());
        this.$emit("add-politics", newTodo);
        this.text = "";
      }
    },
  },
};
</script>
<style>
textarea {
  width: 100%;
  height: 100px;
}
.text {
  align-self: start;
}
.addPost{
  color:red
}
</style>
<style scoped>
.addPost{
  display: flex;
}
.addButton{
  width: 40%;
}
</style>