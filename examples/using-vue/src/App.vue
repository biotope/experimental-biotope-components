<template>
  <div id="app">
    <img @click="this.handleReset" src="./assets/logo.png">
    <p>(To reset, click the image)</p>
    <x-slider ref="slider" :selected="selected" @slideChange="handleSlideChange">
      <x-slide>First</x-slide>
      <Slide>Second</Slide>
      <x-slide>Third</x-slide>
      <Slide>Fourth</Slide>
      <x-slide>Fifth</x-slide>
    </x-slider>
  </div>
</template>

<script>
import Slider from '../../../dist/resources/components/Slider';
import Slide from './Slide';

export default {
  name: 'App',

  components: {
    Slide,
  },

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

