<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :name="label"
      :id="id"
      class="checkbox-element"
      @change="onChange"
      :checked="value"
      :disabled="disabled"
    />
    <div class="checkbox-body">
      <span class="checkbox-background">
        <span class="checkbox-circle-inner"></span>
      </span>
    </div>
    <label :for="id" class="label" v-if="label">{{
      label
    }}</label>
  </div>
</template>

<script>
import Commons from '@/plugins/commons';

export default {
  name: 'CheckBox',
  props: {
    value: Boolean,
    label: String,
    disabled: Boolean
  },
  data() {
    return {
      id: Commons.uuidv4()
    };
  },
  methods: {
    onChange(e) {
      this.$emit('valuechange', e.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  user-select: none;
  position: relative;

  .checkbox-element {
    all: unset;
    width: 24px;
    height: 24px;
    background-image: $theme-color-primary-gradient;
    border-radius: 5px;
    background-repeat: no-repeat;

    &:focus {
      outline: solid 2px var(--theme-color) !important;
    }
  }

  input:checked + .checkbox-body {
    background-color: var(--theme-color);
    clip-path: polygon(
      3px 9px,
      8px 13px,
      17px 1px,
      20px 4px,
      9px 19px,
      1px 12px
    );
  }

  input:disabled {
    filter: grayscale(100%) !important;
    opacity: 0.8 !important;
    pointer-events: none !important;
    user-select: none !important;

    + .checkbox-body {
      opacity: 0.8 !important;
      filter: grayscale(100%) !important;
      pointer-events: none !important;
      user-select: none !important;
    }
  }

  .checkbox-body {
    position: absolute;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    background-repeat: no-repeat;
    pointer-events: none;
    margin: 2px;
    clip-path: polygon(
      0 0,
      0 0,
      20px 0,
      20px 20px,
      0 20px,
      0 0
    );
    background-color: var(--bgcolor-alt);
    display: block;
    transition: background-color 300ms $intro-easing,
      clip-path 300ms $intro-easing;

    .checkbox-background {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      background-color: var(--bgcolor-alt);
      display: block;
      margin: 0;
      position: relative;
      transition: background-color 300ms $intro-easing;
    }
  }

  .label {
    line-height: 24px;
    text-align: center;
    margin: 0 0 0 10px;
  }
}
</style>
