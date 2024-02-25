<template>
    <div style="margin:5px 5px">
        <div v-if="isReactive">
            <span class="reactivitytypedesc">Reactivity Type is:</span>
            <span class="reactivitytypevalue">{{ reactivityType }}</span>
            <span class="divider">|</span>
            <span class="shape" v-html="reactiveView?.content"></span>
            <span class="divider">|</span>
            <span class="countdesc">Count Value is:</span>
            <span class="countvalue">{{ count }}</span>
        </div>
        <div v-if="isRef">
            <span class="reactivitytypedesc">Reactivity Type is:</span>
            <span class="reactivitytypevalue">{{ reactivityType }}</span>
            <span class="divider">|</span>
            <span class="shape" v-html="refView?.content"></span>
            <span class="divider">|</span>
            <span class="countdesc">Count Value is:</span>
            <span class="countvalue">{{ count }}</span>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Shapes } from '../logics/MainLogics'
import Shape  from '../logics/MainLogics'

const props = defineProps<{
  refView?: Shape,
  reactiveView?: Shape,
  reactivityType: string,
  count: number
}>()

const isRef = computed(() => {
  return props.reactivityType === 'ref' ? true : false
})

const isReactive = computed(() => {
  return props.reactivityType === 'reactive' ? true : false
})

</script>

<style scoped>
.reactivitytypedesc {
    display: inline-block;
    width: 130px;
}
.reactivitytypevalue {
    display: inline-block;
    width: 60px;
    background-color:burlywood;
    padding-left: 5px;
    margin-right: 10px;
}
.divider {
    margin: 0 10px;
}
.shape {
    vertical-align: middle;
}
.countdesc {
    margin-left: 10px;
    display: inline-block;
    width: 110px;
}
.countvalue {
    display: inline-block;
    width: 30px;
    background-color:burlywood;
    padding-left: 5px;
    margin-right: 10px;
}
</style>