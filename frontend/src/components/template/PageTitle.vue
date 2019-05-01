<template>
  <div class="page-title">
    <h2>
      <i v-if="icon" :class="icon"></i>
      {{ main }}
    </h2>
    <h3>{{ sub }}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub"]
};
</script>

<style>
.page-title h2 {
  margin: 0px;
}

.page-title h3 {
  color: #777;
  margin-top: 5px;
  font-size: 1.1rem;
}
</style>
