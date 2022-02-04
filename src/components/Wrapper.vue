<template>
  <div>
    <v-sheet
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="pa-3"
      v-if="loading"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-sheet>
    <slot v-else-if="error" name="error" v-bind="{ error }">
      {{ error }}
    </slot>
    <slot v-else name="default" v-bind="{ value }" />
  </div>
</template>

<script>
import { Operation } from "../api";

export default {
  props: {
    executor: {
      type: Operation,
      required: true,
    },
  },

  data() {
    return {
      loading: false,
      error: null,
      value: null,
    };
  },

  watch: {
    executor: {
      immediate: true,
      handler() {
        this.loading = true;
        this.executor
          .on("success", (response) => {
            this.value = response;
            this.loading = false;
          })
          .on("error", (error) => {
            this.value = null;
            this.error = error;
            this.loading = false;
          })
          .execute();
      },
    },
  },
};
</script>