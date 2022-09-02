<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, reactive, ref, watch } from 'vue';


const props = defineProps<{
  menu: any,
  msg?: String
}>()

const menuArray = ref<Array<any>>([])


onBeforeMount(() => {
  console.log('content before mounted....');
})

onMounted(() => {
  console.log('content mounted...');

})

onBeforeUpdate(function () {
  console.log('content before update....');
  menuArray.value = props.menu.data
  console.log(menuArray);

  // 处理数据
  const array = menuArray.value
  array.map(item => {
    item['menu-bg-color'] = 'menu-bg-color-' + item.sort
  })
})


onUpdated(() => {
  console.log('content updated');

})


</script>

<template>
  <div class="content">
    <div class="content-menu-temp">
      <div class="content-menu-temp-item" v-for="item, index in menuArray" :key="item.id">
        <div class="item-content" :class="'menu-bg-color-' + index">
          <div class="menu-name">
            <div class="menu-title">{{ item.name }}</div>
            <div class="menu-logo ico-plane" :class="'ico' + item.logo"></div>
          </div>
          <div class="menu-tips">{{ item.tips }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 75%;
  color: #fff;
  font-size: 30px;

  .content-menu-temp {
    width: auto;
    margin: 50px 50px 0 50px;
    display: flex;
    flex-wrap: wrap;

    &-item {
      height: 200px;
      width: 390px;

      .item-content {
        height: 80%;
        width: 80%;
        padding: 3%;
        display: flex;
        flex-direction: column;
        border-radius: 2.2rem;

        .menu-name {
          height: 60%;
          width: 100%;
          display: flex;
          align-items: center;
          text-align: justify;

          .menu-title {
            font-size: 35px;
            width: 70%;
            flex: 4;
          }

          .menu-logo {
            flex: 1;
            padding-right: 15px;
          }

          div {
            flex: 1;
          }
        }

        .menu-tips {
          height: 40%;
          font-size: 1.4rem;
        }
      }
    }
  }

}
</style>