<template>
  <div class="">
    <input type="text" placeholder="请输入任务内容" v-model="task">
    <button @click="add">添加</button>
  </div>
</template>

<script>
import taskStore from '@/libs/taskStore';
import {addTask} from "@/api/task";

export default {
  data: ()=> ({
    task: ''
  }),
  methods: {
    async add() {
      console.log(taskStore);
      let res = await addTask(this.task)
      console.log(res);
      await taskStore.setItem(+new Date(), this.task);
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
