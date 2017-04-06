<template>
  
    <div>
    <div class="title"> 
{{title}}
</div>
 <slot></slot>
    </div>
  
</template>

<script>
export default {
  props: {
    name:'Collapse',
    accordion: Boolean,
    title:String
  },
  data () {
    return {
      currentItem:-1
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods:{

    openByIndex (index) {

      if (this.accordion) {
        this.$children[index].isActive=true
         
         if(this.currentItem >-1 && this.currentItem !==index)
         {
        this.$children[this.currentItem].isActive=false
        }
        this.currentItem=index
        
      }
    }
  }
}
</script>

<style>

.card-content {
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
  }
.card-content-box {
    padding-top: 20px;
    padding-bottom: 20px;
  }
.title {
  font-size: 3rem;
  height:5rem;
  padding:1rem;
    background-color: #f0f0f0;
}

</style>
