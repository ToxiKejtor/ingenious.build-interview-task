<template>
  <div class="wrapper px-2">
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.top {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;

  border-bottom: 5px solid grey;
  margin-bottom: 2px;
}

.bottom {
  width: 0;
  height: 0;

  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid grey;
}
</style>
