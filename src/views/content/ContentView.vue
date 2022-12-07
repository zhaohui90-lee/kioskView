<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import ContentSlot from "@/slot/content/ContentSlot.vue";
import { useRouter } from 'vue-router';
import { fetchPost } from "@/http";
import api from "@/api";
import { useSubTitleStore, useCardModuleStore } from "@/stores/index";
import type { Menu } from "@/shared";

const menuArray = ref<Menu[]>([])

const subTitleStore = useSubTitleStore();
const cardModuleStore = useCardModuleStore();

const router = useRouter();

// 绑定事件 跳转到对应的功能  
function goMenu(target: string, targetName: string) {
  console.log('跳转功能...', target, targetName);
  // 业务名称
  subTitleStore.$patch({
    titleName: targetName
  })
  // 选择业务对象
  const targetObj: Menu | undefined = menuArray.value.find(item => {
    return item.name === targetName
  })
  console.log('targetObj', targetObj);

  if (targetObj) {
    cardModuleStore.$patch({
      cardModule: targetObj.cardType
    })
  }


  // 路由跳转
  console.log(target.slice(3, target.length));
  router.push(target.slice(3, target.length))

}

onBeforeMount(() => {
  console.log('===>', api['getMenuByDeviceNo']);
  
  fetchPost(api['getMenuByDeviceNo'], {
    deviceNo: '001'
  }).then(res => {
    menuArray.value = res.data
  })
})

onMounted(() => {

})

onBeforeUpdate(function () {

})


onUpdated(() => {

})


</script>
  
<template>
  <ContentSlot>
    <template #main-content>
      <div class="content">

        <div class="content-menu-temp">
          <div class="content-menu-temp-item" v-for="(item, index) in menuArray" :key="item.id">
            <div class="item-content" :class="'menu-bg-color-' + index" @click="goMenu(item.function.url, item.name)">
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

  </ContentSlot>

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
      height: 190px;
      width: 390px;

      .item-content {
        height: 80%;
        width: 80%;
        padding: 3%;
        display: flex;
        flex-direction: column;
        border-radius: 1.2rem;

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