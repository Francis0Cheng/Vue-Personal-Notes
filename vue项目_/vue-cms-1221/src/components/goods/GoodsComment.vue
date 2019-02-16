<template>
  <cmtbox :newsid="id"></cmtbox>
</template>

<script>
import cmtbox from "../sub-components/Comment.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  props: ["id"],
  components: {
    cmtbox
  }
};
</script>

<style lang="scss" scoped>

</style>
