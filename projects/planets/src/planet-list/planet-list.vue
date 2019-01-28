<template>
  <div class="planetList">
    <Button
      @onClick='handleButtonClick'
      :disabled='loading || !nextPage'
    >
      Fetch More planets
    </Button>
    <div v-for='planet in planets'>
      <planet
        v-bind:planet='planet'
      >
      </planet>
    </div>
    <div v-if='loading'>
      Loading ...
    </div>
  </div>
</template>

<script>
import Planet from './planet.vue'
import { Forms } from 'styleguide!sofe'

export default {
  props: {
    loading: Boolean,
    nextPage: Boolean,
    planets: Array,
  },
  components: {
    Planet,
    Button: Forms.Button
  },
  methods: {
    handleButtonClick: function () {
      this.$emit('fetchPlanets')
    }
  }
}
</script>
