<template>
    <div>
        <button @click="handleClick">Increase Count</button>
        <span># Increase 1 step if ODD and increase 11 step if EVEN.</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  count: number,
}>()

const emit = defineEmits({
  click: null,
  changeCount: ({value}) => {
    console.log(value)
    if (value % 2 == 0) {
      console.warn('Even count value! value increased by 11')
      return true
    }
    else {
      console.warn('Odd count value! value increased by 1')
      return true
    }
  }
})

function handleClick () {
  emit('changeCount', {value: props.count})
}


</script>

<style scoped>
button {
    margin: 5px 5px;
}
span {
    font-style: italic;
}
</style>