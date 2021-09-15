<!--  -->
<template>
  <div class="category">
    <cate-nav-bar/>
    <cate-main :category="category" :subcategories="categoryData[0].subcategories" />
  </div>
</template>

<script>
import {getCategory, getSubCategory, getCategoryDetail} from 'network/category.js'


import CateNavBar from './catechild/CateNavBar.vue';
import CateMain from './catechild/CateMain.vue';
export default {
  components: {CateNavBar, CateMain },
  data() {
    return {
      category: [],
      categoryData: {},
      currentIndex: -1
    };
  },
  created(){
    this.getCategoryA()
  },
  computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
		    if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
  methods: {

    // 数据请求
    getCategoryA(){
      getCategory().then(res =>{
        // 获取分类数据
        this.category = res.data.category.list
        // 初始化每个类别的子数据
        for(let i = 0; i < this.category.length; i++){
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 请求第一个分类的数据
        this.getSubCategoryA(0)
      })
    },
    getSubCategoryA(index){
      this.currentIndex = index
      const mailKey = this.category[index].maitKey
      getSubCategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        console.log(res);
        this.categoryData = {...this.categoryData}
        this.getCategoryDetailA('pop')
        this.getCategoryDetailA('sell')
        this.getCategoryDetailA('new')
      })
    },
    getCategoryDetailA(type){
      // 获取请求的miniWallkey
      const miniWallkey = this.category[this.currentIndex].miniWallkey
      // 发送请求，传入miniWallkey和key
      getCategoryDetail(miniWallkey,type).then(res => {
        // 将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    /**
       * 事件响应相关的方法
       */
    selectItem(index) {
      this.getSubcategoryA(index)
    }
  }
};
</script>

<style  scoped>

</style>
