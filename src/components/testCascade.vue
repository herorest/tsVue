<template>
  <a-cascade
    v-model="innerValue"
    :options="options"
  ></a-cascade>

</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Mixins } from "vue-property-decorator";
import { Mutation, Action, State, namespace } from "vuex-class";

@Component({
  name: "cascade"
})
export default class testCascade extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) value!: Array<any>;
  @Prop({ default: () => [] }) options!: Array<any>;

  prefixCls: string = "cascade";

  get innerValue() {
    return this.value;
  }

  set innerValue(val) {
    this.$emit("input", val);
    this.$emit("change", val);
  }
}
</script>
