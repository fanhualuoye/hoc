<template>
  <div class="hello">
    <new-hoc @click="click('new-hoc')" :list="[1,2,3]" v-bind="{a: 'a'}" :props="{a: 'aa'}">
      <div style="color: cornflowerblue" slot="aSlot" @click="click(99999)">具名插槽，在分割线的上方</div>
      <div>默认插槽（不具名），在分割线下方</div>
    </new-hoc>
  </div>
</template>

<script>
import AComponents from './a-components'
import { WithConsole } from './hoc'
const NewHoc = WithConsole(AComponents)

export default {
  name: 'HelloWorld',
  components: {
    NewHoc
  },
  props: {
    msg: String
  },
  methods: {
    click(e) {
      console.log(e)
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
