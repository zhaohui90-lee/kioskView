<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import ContentSlot from "@/slot/content/ContentSlot.vue";
import { useRouter } from 'vue-router';
import { fetchPost } from "@/http";
import api from "@/api";
import { useSubTitleStore, useCardModuleStore } from "@/stores/index";
import type { Menu } from "@/shared";

const menuArray = ref<Menu[]>([])
const menuArrayBig = ref<Menu[]>([])
const menuArraySmall = ref<Menu[]>([])

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
    // console.log(menuArray.value);

    menuArrayBig.value = menuArray.value.filter(item => item.flag === 'big')
    menuArraySmall.value = menuArray.value.filter(item => item.flag === 'small')
    menuArray.value = menuArrayBig.value.concat(menuArraySmall.value)
  })
})

onMounted(() => {

})

onBeforeUpdate(function () {

})


onUpdated(() => {

})


</script>
  
/****
按钮分大小 宽度1080分割为12等分 
大按钮占360 小按钮占180

1rem = 20px
height = 1030px = 51.5rem
gap = 1rem

想要实现四行按钮
51.5-3 = 48.5rem
48.5/4-3=12.125rem
去除padding 12.125-3=9.125rem

width = 1080px = 54rem
去除内边距 54rem - 2rem = 52rem
去除gap 52rem-3rem=49rem
实现四列按钮 49/4=12.25rem
去除内边距 12.25rem-3rem=9.25rem

大按钮实现两倍的小按钮
width=490px=24.5rem
去除padding 24.5rem-3rem=21.5rem
加上gap 21.5rem+1rem=22.5rem
*/

/**
实现大按钮三列 小按钮六列 按钮总体三行
height = 744px = 37.2rem
去除gap 37.2 - 2 = 35.2rem
去除padding 35.2/3 - 3 = 8.73rem

小按钮6列
width = 1240px = 62rem
去除gap 62 - 5 = 57rem
去除padding 57/6 - 3 = 17.66rem

小按钮
去除gap 64 - 2 = 62rem
去除padding 62/3 - 3 = 6.5rem

大按钮是小按钮的两倍+gap
6.5*2 + 4 = 17rem
*/
<template>
  <ContentSlot>
    <template #main-content>
      <div class="content">

        <div class="content-menu-temp">
          <div class="content-menu-temp-item" :class="[`menu-bg-color-${index}-s`]" :data-type="item.flag" v-for="(item, index) in menuArray" :key="item.id">

            <div class="item-content" @click="goMenu(item.function.url, item.name)">
              <div class="menu-name menu-name-wrap">
                <div class="menu-title">{{ item.name }}</div>
                <div class="menu-logo ico-plane" :class="`ico${item.logo}`"></div>
              </div>
              <!-- <div class="menu-tips">{{ item.tips }}</div> -->
            </div>

          </div>
        </div>

      </div>
    </template>
  </ContentSlot>
</template>
  
<style lang="less" scoped>
.content {
  padding: 0 1rem;
}

.content-menu-temp {
  display: flex;
  flex-flow: row wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  padding-top: 2rem;


  @media screen and (max-width: 1080px) {
    .content-menu-temp-item[data-type='small'] {
      flex-basis: 9.25rem;
      max-width: 9.25rem;
      flex-grow: 1;
      height: 9.125rem;
      padding: 1.5rem;
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
    }

    .content-menu-temp-item[data-type='big'] {
      flex-basis: 22.5rem;
      max-width: 22.5rem;
      flex-grow: 1;
      height: 9.125rem;
      padding: 1.5rem;
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
    }

    .item-content .menu-name {
      font-size: var(--font-size-extra-large);
      line-height: var(--line-height-extra-large);
    }

    .item-content .menu-tips {
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
    }
  }

  @media screen and (min-width: 1280px) {
    .content-menu-temp-item[data-type='small'] {
      flex-basis: 6.5rem;
      max-width: 6.5rem;
      flex-grow: 1;
      height: 6.73rem;
      padding: 1.5rem;
      border-radius: 1.5rem;
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);

      .menu-name {
        display: flex;
        flex-flow: column nowrap;
        flex-direction: column-reverse;
        align-items: center;

        .menu-logo {
          width: 70%;
          // background: center/25% no-repeat;
        }
      }
    }

    .content-menu-temp-item[data-type='big'] {
      flex-basis: 17rem;
      max-width: 17rem;
      flex-grow: 1;
      height: 6.73rem;
      padding: 1.5rem;
      border-radius: 1.5rem;
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);

      .menu-name {
        display: flex;
        flex-flow: row nowrap;
        flex-grow: 1;
        align-items: center;

        .menu-logo {
          flex: 1;
        }
        .menu-title {
          flex: 1;
        }
      }
    }

    .item-content .menu-name {
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
    }

    .item-content .menu-tips {
      font-size: var(--font-size-base);
      line-height: var(--line-height-base);
    }
  }

  .item-content {
    display: flex;
    flex-flow: column wrap;
    row-gap: .5rem;
  }

  


}
</style>