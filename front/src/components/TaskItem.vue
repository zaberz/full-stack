<template>
  <div>
    <input type="checkbox" @change="emitChange" v-model="isChecked">
    <span>{{time}}</span>
    <span>{{task}}</span>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    time: String,
    task: String,
  },
  data: ()=> ({
    isChecked: false
  }),
  methods: {
    emitChange() {
      this.$emit('change', this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
