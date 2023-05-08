
<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-container>
      

      <el-main>

        <!-- <div>
          <el-form :model="form" label-width="200px">
            <el-form-item label="preset scene name">
              <el-input v-model="form.name" style="width: 500px;"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button v-for="(button, index) in buttons" :key="button" @click="onDelete(index)">{{ `Delete ${button}` }}</el-button>
            </el-form-item>
          </el-form>
          <div>
            <el-button v-for="button in buttons" :key="button">{{ button }}</el-button>
          </div>
        </div> -->

      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
  
  data() {
    return {
      form: {
        name: "",
      },
      buttons: [] as string[],
    };
  },
  methods: {
    onSubmit() {
      this.buttons.push(this.form.name);
      this.form.name = ""; // clear the input field after creating a button
    },
    onDelete(index: number) {
      this.buttons.splice(index, 1);
    },
  },
});

</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 50px;
  margin-right: 50px;
}
</style>