<template>
  <div>
  <div class="card-header" @click="toggle">
 {{title}}
        </div>
    <div v-show="isActive" @click="selected" class="card-content">


  <slot name="content" ></slot>

    </div>
    </div>
</template>

<script>
export default {
  props: {
    name:'CollapseItem',
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isActive:false
    }
  },
  mounted () {

    this.$on('open', this.$parent.openByIndex)
        if (this.isActive) {
          console.log("``isActive:``")
      this.$emit('open', this.index)
    }

  },
  computed: {
    index () {
      return this.$parent.$children.indexOf(this)
    }
  },
  methods:{
  selected (){
  alert("selected:"+this.index)
  },
    toggle () {
      if ((this.isActive = !this.isActive)) {
      console.log("emit:open")
        this.$emit('open',this.index)
      }
    }
  }
}
</script>

<style>

.card-content {
font-size: 5rem;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
  }
.card-content-box {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card-header {
font-size: 3rem;
    white-space:nowrap;

  }

</style>
