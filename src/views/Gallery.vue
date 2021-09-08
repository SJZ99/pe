<template>
  <div>
    <v-img
        v-for="(img, id) in imgs"
        :key="id"
        id="img"
        :src="img"
    ></v-img>

    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
</template>

<script>
export default {
    data: () => ({
        page: 1,
        imgs: [require('@/assets/profile/aurora.jpg'), require('@/assets/profile/cloud-blu.jpg'), 
                require('@/assets/profile/cloud-org.jpg'), require('@/assets/profile/keyboard.jpg')],
    }),
}
</script>

<style lang='scss'>
#img {
    max-width: 90vw;
    height: auto;
    margin-left: 5vw;
    margin-top: 6vh;
}
</style>