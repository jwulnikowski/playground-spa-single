<template>
  <div id='planets'>
    Vue.js
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {}
</script>
