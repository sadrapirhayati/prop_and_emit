<template>
  <div style="width:750px">
      <div>
        <span class="tag">Sibling Component:</span>
        <div class="container" id="mycomponent">
          <MyComponent :reactivityType="reactivityType" :refView="refView" :reactiveView="reactiveView" :count="count" />
        </div>
      </div>

      <div>
        <span class="tag">Mother Component:</span>
        <div class="container" id="mainapp">
          <div>
            <button @click="refShowRectangle">Change Shape With Ref</button>
            <button @click="reactiveShowRectangle">Change Shape With Reactive</button>
          </div> 
        </div>
      </div>

      <div>
        <span class="tag">Sibling Component:</span>
        <div class="container" id="anothercomponent">
          <AnotherComponent :count="count" @changeCount="handleChangeCount" />
        </div>
      </div>

  </div>
</template>

<script setup lang="ts">
import MyComponent from './components/MyComponent.vue'
import AnotherComponent from './components/AnotherComponent.vue'

import { ref, reactive  } from 'vue';
import type { Ref } from 'vue'
import { Shapes } from './logics/MainLogics'
import Shape from './logics/MainLogics'

const refView: Ref<Shape> = ref({ title: Shapes[0].title, content: Shapes[0].content });
const reactiveView: Shape = reactive({ title: Shapes[0].title, content: Shapes[0].content })
const reactivityType: Ref<string> = ref('ref')
const count: Ref<number> = ref(0)

function filterShapes (shapeName: string, type: string): void {
  for (let shape of Shapes) {
    if (shape.title === shapeName) {
      if (type === 'ref') {
        refView.value.title = shape.title;
        refView.value.content = shape.content; 
      }
      else if (type === 'reactive') {
        reactiveView.title = shape.title;
        reactiveView.content = shape.content;
      }
      break;
    }
  }
}

function refShowRectangle () {
  reactivityType.value = 'ref'
  let nextShape = ''
  if (refView.value.title === 'rectangle') {
    nextShape = 'circle'
  } else nextShape = 'rectangle'
  filterShapes(nextShape, 'ref')
}

function reactiveShowRectangle () {
  reactivityType.value = 'reactive'
  let nextShape = ''
  if (reactiveView.title === 'rectangle') {
    nextShape = 'circle'
  } else nextShape = 'rectangle'
  filterShapes(nextShape, 'reactive')
}

function handleChangeCount (countObject: {value: number}) {
    if (countObject["value"] % 2 == 0) {
      count.value = count.value + 11;
    } else {
      count.value = count.value + 1
    } 
}

</script>

<style scoped>
.tag {
  display: inline-block;
  width: 140px;
}
.container {
  display: inline-block;
  border: 1px solid gray;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 5px 5px;
  width: 490px;
}
button {
  margin: 5px 5px;
  width: 220px;
}
</style>
