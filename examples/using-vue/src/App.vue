<template>
  <div id="app">
    <img @click="this.handleReset" src="./assets/logo.png">
    <p>(To reset, click the image)</p>
    <x-slider ref="slider" :selected="selected" @slideChange="handleSlideChange">
      <x-slide>First</x-slide>
      <x-slide>Second</x-slide>
      <x-slide>Third</x-slide>
      <x-slide>Fourth</x-slide>
      <x-slide>Fifth</x-slide>
    </x-slider>
  </div>
</template>

<script>
import Slider from '../../../dist/resources/components/Slider';

export default {
  name: 'App',

  data() {
    return {
      selected: 2,
    };
  },

  methods: {
    handleSlideChange({ detail }) {
      this.selected = detail;
    },

    handleReset() {
      this.selected = 0;
      this.$refs.slider.props = { selected: this.selected };
    },
  },
};
</script>

