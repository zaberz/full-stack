<template>
  <div class="home">
    <task-item v-for="(task,index) in list" :task="task.content" :time="task.time" :key="index" @change="removeTask(task)"></task-item>
    <router-link to="add">添加</router-link>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem';
import taskStore from '@/libs/taskStore';
import {getTasks} from '@/api/task';

export default {
  name: 'home',
  components: {
    TaskItem,
  },
  data: ()=> {
    let list = []
    taskStore.iterate((value, key)=> {
      list.push({
        key: key,
        time: new Date(parseInt(key)).toLocaleString(),
        content: value,
        status: 1
      })
    })
    return {
      list,
    }
  },
  async mounted() {
    this.initTaskList()
  },
  methods: {
    async initTaskList() {
      const taskList = await getTasks()
      this.list = taskList
    },
    removeTask(task) {
      let index = this.list.findIndex((item) => (item === task))
      let key = task.key
      taskStore.removeItem(key).then(()=> {
        this.list.splice(index, 1)
      })
    }
  }
}
</script>
