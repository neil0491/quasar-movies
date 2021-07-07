<template>
  <div class="q-pa-md">
    <div class="row items-start q-col-gutter-md">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-2"
        v-for="(film, index) in 18"
        :key="index"
      >
        <q-card lass="my-card">
          <q-item-section>
            <q-skeleton height="350px" animation="wave" />
          </q-item-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardLoader",
});
</script>

<style lang="scss" scoped></style>
