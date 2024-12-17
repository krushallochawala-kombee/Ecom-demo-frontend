<template>
  <div>
    <NuxtLayout></NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useRootStore } from './stores/rootstore';

onMounted(async () => {
    const myStore = useRootStore()
    console.log(myStore.$state)
})

</script>