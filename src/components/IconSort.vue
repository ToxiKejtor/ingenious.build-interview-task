<template>
  <div class="icon-sort px-2">
    <div class="icon-sort__top"></div>
    <div class="icon-sort__bottom"></div>
  </div>
</template>
<style scoped>
.icon-sort {
  display: flex;
  flex-direction: column;
}

.icon-sort__top {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;

  border-bottom: 5px solid grey;
  margin-bottom: 2px;
}

.icon-sort__bottom {
  width: 0;
  height: 0;

  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid grey;
}
</style>
