<template>
  <div>
    <p>This is a blob</p>
    <UselessBlob />

    <p>and a rotating blob</p>
    <UselessBlob :width="50" :height="50" class="rotating" />
  </div>
</template>

<style scoped>
.rotating {
  animation: rotating 10s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
