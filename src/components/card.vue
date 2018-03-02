<template>
<div class="g-card">
  <div class="g-card__header" v-if="$slots.header || header">
    <slot name="header">{{ header }}</slot>
  </div>
  <div class="g-card__body" :style="bodyStyle">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'g-card',
  props: ['header', 'bodyStyle']
}
</script>
