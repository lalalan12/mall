<!--  -->
<template>
  <div class="cart-bottom">
    <div class="bottom-left">
      <div class="checkbox" :class="{checkedActive: isChecked}" @click="checkedChange" >
        <img src="~assets/img/cart/tick.svg" alt="">
      </div>
      <span class="checkbox-text">全选</span>
      <span class="allMoney">合计:</span>
      <span class="money">￥{{allToall}}</span>
    </div>
    <button>去计算(<span>{{allCounter}}</span>)</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allMoney: 0.0,
      allCount: 0,
      isChecked: false,
      produces: []
    }
  },
  created(){
    this.produces.push(...this.$store.state.produces)
  },
  updated(){
    this.isChecked = this.produces.find(item => item.checked === false) === undefined
  },
  computed: {
    allToall(){
      this.allMoney = this.produces.filter(item => item.checked).reduce((pre,item) => pre += item.count * item.price,0).toFixed(2)
      return this.allMoney
    },
    allCounter(){
      this.allCount = this.produces.filter(item => item.checked).length
      return this.allCount
    }
  },
  methods: {
    checkedChange(){
      let checkedFalse = this.produces.find(item => !item.checked)
      if(checkedFalse){
        this.produces.forEach(item => {
          item.checked = true
        })
      }else {
        this.produces.forEach(item =>{
          item.checked = false
        })
      }
      this.isChecked = this.produces.find(item => item.checked === false) === undefined
    }
  }
}
</script>

<style  scoped>
.cart-bottom {
  position: fixed;
  bottom: 50px;
  width: 100%;
  height: 40px;
  background-color: #eee;
}
.bottom-left {
  float: left;
  width: 75%;
}
.checkbox {
  position: relative;
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #888;
  overflow: hidden;
  margin: 10px 5px 0 5px;
}
.checkbox img {
  position: absolute;
  top: 1px;
  left: 1px;
}
.checkbox-text {
  font-size: 15px;
  line-height: 40px;
  color: #666;
  margin-left: 5px;
}
.allMoney {
  line-height: 40px;
  margin-left: 15px;
}
.money {
  line-height: 40px;
}

button {
  float: right;
  width: 25%;
  height: 40px;
  border: 0;
  background-color: #ff4500;
  color: #fff;
}
.checkedActive {
  background-color: var(--color-high-text);
}

</style>
