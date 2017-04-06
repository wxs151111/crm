<template>
  <div>
    <Collapse accordion title="Employee List"> 
      <CollapseItem v-for="item in employeelist" :title="item.name">
        <div slot="content">{{item.content}}</div>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script>
import Collapse from 'components/Collapse'
import CollapseItem from 'components/CollapseItem'

export default {
  data() {
    return {
      employeelist:[{
        name:'Rex Wang',
        content:'content 1'
        }, {
        name:'Jim Zhang',
        content:'content 2'
        }]
      }
    },
  components: {
    Collapse,
    CollapseItem
  }
}
</script>
<style>
.item-content{
  background-color: #f0f0f0;
  width:200px;
}
</style>
