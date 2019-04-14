<template>
  <footer class="footer">
    <span>
      Copyright
      <strong>Atlantis Sistemas</strong>
      @ {{ date.getFullYear() }}
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #ddd;
  color: #333;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>
