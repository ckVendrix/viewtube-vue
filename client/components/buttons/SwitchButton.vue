<template>
  <div class="switch">
    <input
      type="checkbox"
      :name="label"
      id="switch-button"
      @change="onChange"
      :checked="value"
      :disabled="disabled"
    />
    <div class="switch-body">
      <span class="switch-circle">
        <span class="switch-circle-inner"></span>
      </span>
    </div>
    <label for="switch-button" class="label" v-if="label">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  name: 'SwitchButton',
  props: {
    value: Boolean,
    label: String,
    disabled: Boolean
  },
  methods: {
    onChange(e) {
      this.$emit('valuechange', e.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.switch {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  user-select: none;
  margin-top: 20px !important;
  position: relative;

  #switch-button {
    all: unset;
    width: 50px;
    height: 24px;
    background-image: $theme-color-primary-gradient;
    border-radius: 15px;
    background-repeat: no-repeat;

    &:focus {
      outline: solid 2px var(--theme-color) !important;
    }
  }

  input:checked + .switch-body {
    .switch-circle {
      background-color: transparent;
      .switch-circle-inner {
        background-color: var(--bgcolor-alt);
        left: 26px;
      }
    }
  }

  input:disabled {
    filter: grayscale(100%) !important;
    opacity: 0.8 !important;
    pointer-events: none !important;
    user-select: none !important;

    + .switch-body {
      opacity: 0.8 !important;
      filter: grayscale(100%) !important;
      pointer-events: none !important;
      user-select: none !important;
    }
  }

  .switch-body {
    position: absolute;
    left: 0;
    height: 24px;
    width: 50px;
    border-radius: 15px;
    background-repeat: no-repeat;
    pointer-events: none;

    .switch-circle {
      width: 44px;
      height: 18px;
      border-radius: 15px;
      background-color: var(--bgcolor-alt);
      display: block;
      margin: 3px;
      position: relative;
      transition: background-color 300ms $intro-easing;

      .switch-circle-inner {
        left: 0;
        width: 12px;
        height: 12px;
        margin: 3px;
        border-radius: 15px;
        background-color: var(--theme-color);
        display: block;
        position: absolute;
        transition: background-color 300ms $intro-easing,
          left 300ms $overshoot-easing;
      }
    }
  }

  .label {
    line-height: 24px;
    text-align: center;
    margin: 0 0 0 10px;
  }
}
</style>
