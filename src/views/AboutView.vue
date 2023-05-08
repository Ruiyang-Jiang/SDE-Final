<template>
  <div class="common-layout"></div>
  <el-container>
      <el-main style="background-color: #000000;">
        <!-- <div class="stage"></div> -->
        <br><br>
        <div class="light-first_row">
          <el-row :gutter='20' justify="center">
            <el-col :span='2'>
              <div class="gutter">
                <el-button type="primary" circle color="#ffffff" @click="showCircle1">WHITE </el-button> 
                <div v-if="isShowCircle1" class="circle1"></div>
              </div>
            </el-col>
            <el-col :span='2'>
              <div class="gutter">
                <el-button type="primary" circle color="#ffffff" @click="showCircle2">WHITE </el-button>
                <div v-if="isShowCircle2" class="circle2"></div>
              </div>
            </el-col>
            <el-col :span='2'>
              <div class="gutter">
                <el-button type="primary" circle color="#ffffff" @click="showCircle3">WHITE </el-button>
                <div v-if="isShowCircle3" class="circle3"></div>
              </div>
            </el-col>
            <el-col :span='2'>
             <div class="gutter">
                <el-button type="primary" circle color="#ffffff" @click="showCircle4">WHITE </el-button>
                <div v-if="isShowCircle4" class="circle4"></div>
              </div>
            </el-col>
            <el-col :span='2'>
              <div class="gutter">
                <el-button type="primary" circle color="#ffffff" @click="showCircle5">WHITE </el-button>
                <div v-if="isShowCircle5" class="circle5"></div>
              </div>
            </el-col>      
          </el-row>
        </div>
        <br><br><br><br><br><br>
        <el-divider /><br><br><br><br><br>  
        <div class="light-second_row">
          <el-row :gutter='20'  justify="center">
            <el-col :span='2'>
              <div class="gutter" id="color-picker-container">
                <el-button type="primary" circle color="#00FF00" @click="showRGBSCircle1">RGBW_S1</el-button>
                <div v-if="isShowRGBSCircle1" class="RGBSCircle1" :style="{ backgroundColor: color1 }"></div>
              </div>
            </el-col>
            <el-col :span='2' >
              <div class="gutter">
                <el-button type="primary" circle color="#ffffff" @click="showCircle6">WHITE </el-button>
                <div v-if="isShowCircle6" class="circle6"></div>
              </div>
            </el-col>
            <el-col :span='2'>
              <div class="gutter">
                <el-button type="primary" circle color="#FF69B4" @click="showRGBSCircleM1">RGBW_M1</el-button>
                <div v-if="isShowRGBSCircleM1" class="RGBSCircleM1" :style="{ backgroundColor: color5, height: circleSize1 + 'px', width: circleSize1 + 'px' }" v-drag @mousedown="updateRGBSCircleM1Position" @wheel="adjustCircleSize"></div>
              </div>
            </el-col> 
            <el-col :span='2'>
             <div class="gutter">
                <el-button type="primary" circle color="#00FF00" @click="showRGBSCircle2">RGBW_S2</el-button>
                <div v-if="isShowRGBSCircle2" class="RGBSCircle2" :style="{ backgroundColor: color2 }"></div>
              </div>
            </el-col>
            <el-col :span='2'>
              <div class="gutter">
                <el-button type="primary" circle color="#00FF00" @click="showRGBSCircle3">RGBW_S3</el-button>
                <div v-if="isShowRGBSCircle3" class="RGBSCircle3" :style="{ backgroundColor: color3 }"></div>
              </div>
            </el-col>
            <el-col :span='2'>
              <div class="gutter">
                <el-button type="primary" circle color="#FF69B4" @click="showRGBSCircleM2">RGBW_M2</el-button>
                <div v-if="isShowRGBSCircleM2" class="RGBSCircleM2" :style="{ backgroundColor: color6, height: circleSize2 + 'px', width: circleSize2 + 'px'  }" v-drag @mousedown="updateRGBSCircleM2Position" @wheel="adjustCircleSize2"></div>
              </div>
            </el-col>
            <el-col :span='2'>
              <div class="gutter">
                <el-button type="primary" circle color="#ffffff" @click="showCircle7">WHITE </el-button>
                <div v-if="isShowCircle7" class="circle7"></div>
              </div>
            </el-col>
            <el-col :span='2'>
             <div class="gutter">
              <el-button type="primary" circle color="#00FF00" @click="showRGBSCircle4">RGBW_S4</el-button>
              <div v-if="isShowRGBSCircle4" class="RGBSCircle4" :style="{ backgroundColor: color4 }"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>
        <div class="color-picker-container">
        <div class="color-picker-wrapper">
          <p>RGBW_S1 color</p>
          <el-color-picker show-alpha id="eu_color_picker" v-model="color1"/>
        </div>
        <div class="color-picker-wrapper-moving1">
          <p>RGBW_M1 color</p>
          <el-color-picker show-alpha id="eu_color_picker4" v-model="color5"/>
        </div>
        <div class="color-picker-wrapper2">
          <p>RGBW_S2 color</p>
          <el-color-picker show-alpha id="eu_color_picker2" v-model="color2"/>
        </div>
        <div class="color-picker-wrapper3">
          <p>RGBW_S3 color</p>
          <el-color-picker show-alpha id="eu_color_picker3" v-model="color3"/>
        </div>
        <div class="color-picker-wrapper-moving2">
          <p>RGBW_M2 color</p>
          <el-color-picker show-alpha id="eu_color_picker4" v-model="color6"/>
        </div>
        <div class="color-picker-wrapper4">
          <p>RGBW_S4 color</p>
          <el-color-picker show-alpha id="eu_color_picker4" v-model="color4"/>
        </div>
        </div>
        <br><br>
        <div>
          <el-form :model="form" label-width="200px">
            <el-form-item label="preset scene name">
              <el-input v-model="form.name" style="width: 500px;"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-switch v-model="valuetoggle" size="large" active-text="real-time control" inactive-text="Close" @click="realtimeUpdate"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button v-for="(button, index) in buttons" :key="button" @click="onDelete(index)">{{ `Delete ${button}` }}</el-button>
            </el-form-item>
          </el-form>
          <div>
            <el-button v-for="(button, index) in buttons" :key="index" @click="handleSceneClick(index)">{{ button  }}</el-button>
          </div>
        </div>  
        <br><br>
        <el-button class="buttons" type="primary" @click="UpdateScene">update current scene</el-button>
      </el-footer>
    </el-container>

</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import axios, { AxiosResponse } from 'axios';
import tinycolor from 'tinycolor2';
import draggable from "vuedraggable";

export default defineComponent({
  data() {
    return {
      value: ref(true),
      isShowCircle1: false,
      isShowCircle2: false,
      isShowCircle3: false,
      isShowCircle4: false,
      isShowCircle5: false,
      isShowCircle6: false,
      isShowCircle7: false,
      isShowRGBSCircle1: false,
      isShowRGBSCircle2: false,
      isShowRGBSCircle3: false,
      isShowRGBSCircle4: false,
      isShowRGBSCircleM1: false,
      isShowRGBSCircleM2: false,
      color1: '#000000', // default color
      
      initialColor: 'rgba(0,0,0,1)',
      color2: '#000000', // default color
      color3: '#000000', // default color
      color4: '#000000', // default color
      color5: '#000000', // default color
      color6: '#000000', // default color
      circleTop: 0,
      circleLeft: 0,
      URL: this.$customUrl,
      circleSize1: 100, // initial size, adjust as needed
      circleSize2: 100,
      form: {
        name: "",
      },
      buttons: [] as string[],
      activeButton: null as number | null,
      left1: 0,
      top1: 0,
      left2: 0,
      top2: 0,
      scenes: [] as string[],
      valuetoggle: false, // Set the default value to false
      debounceTimeout: undefined as number | undefined,
    };
  },
  methods: {
    showCircle1() {
      this.isShowCircle1 = !this.isShowCircle1;
    },
    showCircle2() {
      this.isShowCircle2 = !this.isShowCircle2;
    },
    showCircle3() {
      this.isShowCircle3 = !this.isShowCircle3;
    },
    showCircle4() {
      this.isShowCircle4 = !this.isShowCircle4;
    },
    showCircle5() {
      this.isShowCircle5 = !this.isShowCircle5;
    },
    showCircle6() {
      this.isShowCircle6 = !this.isShowCircle6;
      if (this.isShowCircle6) {
        const a = 255;
        const data = new Uint8Array([a]);
        const CreateFixtureRequest = {
          fixture: {
          id:1,
          channels:data,
          },
        };
        const serverUrl = this.URL; // Replace with your actual server URL
        axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest);
      }
    },
    showCircle7() {
      this.isShowCircle7 = !this.isShowCircle7;
      if (this.isShowCircle7) {
        const a = 255;

        const data = new Uint8Array([a]);
        const CreateFixtureRequest = {
          fixture: {
          id:6,
          channels:data,
          },
        };
        const serverUrl = this.URL; // Replace with your actual server URL
        axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest);
      }
    },
    showRGBSCircle1() {
      this.isShowRGBSCircle1 = !this.isShowRGBSCircle1;
    },
    sendColorToServer1() {
      const color = tinycolor(this.color1);
      const r = color._r;
      const g = color._g;
      const b = color._b;
      const i = Math.round(color._a * 255);

      const data = new Uint8Array([r, g, b, i]);//console.log("1",data);

      const CreateFixtureRequest = {
        fixture: {
          id: 0,
          channels: data,
        },
      };
      const serverUrl = this.URL; // Replace with your actual server URL
      axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest);
      console.log("s1", data);
    },
    showRGBSCircle2() {
      this.isShowRGBSCircle2 = !this.isShowRGBSCircle2;
    },
    sendColorToServer2(){
      const color = tinycolor(this.color2);
      const r = color._r;
      const g = color._g;
      const b = color._b;
      const i = Math.round(color._a * 255);

      const data = new Uint8Array([r, g, b, i]);//console.log("2",data);
      const CreateFixtureRequest = {
        fixture: {
        id:3,
        channels:data,
        },
      };
      const serverUrl = this.URL; // Replace with your actual server URL
      axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest);
      console.log("s2",data); 
    },
    showRGBSCircle3() {
      this.isShowRGBSCircle3 = !this.isShowRGBSCircle3;
    },
    sendColorToServer3(){
      const color = tinycolor(this.color3);
      const r = color._r;
      const g = color._g;
      const b = color._b;
      const i = Math.round(color._a * 255);

      const data = new Uint8Array([r, g, b, i]);//console.log("3",data);
      const CreateFixtureRequest = {
          fixture: {
          id:4,
          channels:data,
        },
      };
      const serverUrl = this.URL; // Replace with your actual server URL
      axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest);
      console.log("s3",data);
    },
    showRGBSCircle4() {
      this.isShowRGBSCircle4 = !this.isShowRGBSCircle4
    },
    sendColorToServer4(){
      const color = tinycolor(this.color4);
      const r = color._r;
      const g = color._g;
      const b = color._b;
      const i = Math.round(color._a * 255);

      const data = new Uint8Array([r, g, b, i]);//console.log("4",data);
      const CreateFixtureRequest = {
        fixture: {
        id:7,
        channels:data,
        },
      };
      const serverUrl = this.URL; // Replace with your actual server URL
      axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest);
      console.log("s4",data);
    },

    showRGBSCircleM1() {
      this.isShowRGBSCircleM1 = !this.isShowRGBSCircleM1;
    },
    sendColorToServerM1() {
      const uint8Array = new Uint8Array(11);
      uint8Array[0] = this.left1;  console.log("send:0",uint8Array[0]);
      uint8Array[1] = this.top1;   console.log("send:1",uint8Array[1]);
      uint8Array[2] = 100;
      uint8Array[3] = this.circleSize1;  console.log("send:3",uint8Array[3]);
      uint8Array[4] = 255;
      uint8Array[5] = 0;
      uint8Array[10] = 0;

      const color = tinycolor(this.color5);
      uint8Array[6] = color._r;
      uint8Array[7] = color._g;
      uint8Array[8] = color._b;
      uint8Array[9] = Math.round(color._a * 255);
      console.log("moving1",uint8Array);

      const CreateFixtureRequest = {
        fixture: {
          id: 2,
          channels: uint8Array,
        },
      };
      const serverUrl = this.URL; // Replace with your actual server URL

      //axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest);

      axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest).then((response) => {console.log("Request successful:", response);
  })
  .catch((error) => {
    console.error("Error in Axios request:", error);
  });
  const testUrl = 'https://jsonplaceholder.typicode.com/posts';
  axios.post(testUrl, CreateFixtureRequest)
    .then((response) => {
      console.log("Test request successful:", response);
    })
    .catch((error) => {
      console.error("Error in test Axios request:", error);
    });
    },

    updateRGBSCircleM1Position(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (!el) return;
      // Calculate the initial offset
      const offsetX = e.clientX - el.getBoundingClientRect().left;
      const offsetY = e.clientY - el.getBoundingClientRect().top;

      let newLeft = this.left1;
      let newTop = this.top1;

      const onMouseMove = (e: MouseEvent) => {
       //Calculate the new position of an element based on mouse movement
        newLeft = e.clientX - offsetX;
        newTop = e.clientY - offsetY;
      };

      const onMouseUp = () => {
        // update element position
        this.left1 = newLeft/5;
        this.top1 = newTop/5;
        console.log("update", newLeft, newTop);

        // Clear mousemove and mouseup event listeners
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      // Add mouse move and mouse up event listeners
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },

    showRGBSCircleM2() {
      this.isShowRGBSCircleM2 = !this.isShowRGBSCircleM2;
    },
    sendColorToServerM2() {
      const uint8Array = new Uint8Array(11);
      uint8Array[0] = this.left2;  console.log("send",uint8Array[0]);
      uint8Array[1] = this.top2;   console.log("send",uint8Array[1]);
      uint8Array[2] = 100;
      uint8Array[3] = this.circleSize2;  console.log("send:3",uint8Array[3]);
      uint8Array[4] = 255;
      uint8Array[5] = 0;
      uint8Array[10] = 0;

      if (this.isShowRGBSCircleM2) {
        const color = tinycolor(this.color6);
        uint8Array[6] = color._r;
        uint8Array[7] = color._g;
        uint8Array[8] = color._b;
        uint8Array[9] = Math.round(color._a * 255);

        const CreateFixtureRequest = {
          fixture: {
          id:5,
          channels:uint8Array,
          },
        };
        const serverUrl = this.URL; // Replace with your actual server URL
        axios.post(`http://${serverUrl}/light-queue`, CreateFixtureRequest);

        //console.log(1,uint8Array);
      }
    },

    updateRGBSCircleM2Position(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (!el) return;
      // Calculate the initial offset
      const offsetX = e.clientX - el.getBoundingClientRect().left;
      const offsetY = e.clientY - el.getBoundingClientRect().top;

      let newLeft = this.left2;
      let newTop = this.top2;

      const onMouseMove = (e: MouseEvent) => {
       // Calculate the new position of an element based on mouse movement
        newLeft = e.clientX - offsetX;
        newTop = e.clientY - offsetY;
      };

      const onMouseUp = () => {
        // update element position
        this.left2 = newLeft/5;
        this.top2 = newTop/5;
        console.log("update", newLeft, newTop);

        // Clear mousemove and mouseup event listeners
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      // Add mouse move and mouse up event listeners
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      
    },

    onDelete(index: number) {
      const sceneName = this.scenes[index];

      const serverUrl = this.URL;
      const encodedDeleteSceneRequest = {
        // Define the properties of the createSceneRequest object
        scene: {
          name: sceneName,
       },
        // Add other properties as needed
      };
      console.log("12321",sceneName);
      axios.post(`http://${serverUrl}/delete-scene`, encodedDeleteSceneRequest);

      this.buttons.splice(index, 1)
      this.activeButton = null
    },

    async onSubmit() {
      // Assuming `serverUrl` and `createSceneRequest` are defined and passed from the component
      const serverUrl = this.URL;
      const createSceneRequest = {
        // Define the properties of the createSceneRequest object
        scene: {
          name: this.form.name,
          external: false,
          stage: {
            fixtures: null,
          },
       },
        // Add other properties as needed
      };
      console.log("434343",this.form.name);
      axios.post(`http://${serverUrl}/create-scene`, createSceneRequest);
      
      // Do something with the response, e.g., update the component's data
      this.buttons.push(this.form.name);
      this.form.name = '';
      },
      
      handleSceneClick(index:number) {
        this.callTestUpdateCurrentScene(index);
      },
    async callTestUpdateCurrentScene(index:number) {
      console.log("update current scene");
      const sceneName = this.buttons[index];
      const UpdateCurrentSceneRequest ={name:sceneName,};
      const serverUrl = this.URL; // Replace with your actual server URL
      axios.post(`http://${serverUrl}/update-current-scene`, UpdateCurrentSceneRequest);
    },

    async playCurrentScene() {
      console.log("playcurrent");
      const serverUrl = this.URL;
      //console.log(serverUrl);
      axios.get(`http://${serverUrl}/play-scene`);
    },

    blackout() {
      this.isShowCircle1 = false;
      this.isShowCircle2 = false;
      this.isShowCircle3 = false;
      this.isShowCircle4 = false;
      this.isShowCircle5 = false;
      this.isShowCircle6 = false;
      this.isShowCircle7 = false;
      this.isShowRGBSCircle1 = false;
      this.isShowRGBSCircle2 = false;
      this.isShowRGBSCircle3 = false;
      this.isShowRGBSCircle4 = false;
      this.isShowRGBSCircleM1 = false;
      this.isShowRGBSCircleM2 = false;
    },

    async UpdateScene(){
      console.log("update scene");
      this.blackout();
      const serverUrl = this.URL;
      axios.get(`http://${serverUrl}/create-fixture`);
      console.log("after update");
    },

    async fetchScenes() {
      const serverUrl = this.URL; // Replace with your actual server URL
      const response = await axios.get(`http://${serverUrl}/get-scene-list`);
      
      console.log(response);
      // Assuming the response data is an array of scene names
      this.scenes = response.data.map((scene: { name: string }) => scene.name);

      // Clear the buttons array and add all scene names as buttons
      this.buttons = [];
      this.scenes.forEach((scene) => this.buttons.push(scene));

      console.log("get",this.scenes);
    },

    // async Blackout(){
    //   const UpdateCurrentSceneRequest ={name:'nihao',};
    //   const serverUrl = this.URL;
    //   console.log("blackout");
    //   //this.blackout();
    //   await axios.post(`http://${serverUrl}/blackout`,UpdateCurrentSceneRequest);
    // },

    adjustCircleSize(e: WheelEvent) {
      if (e.deltaY < 0) {
        if(this.circleSize1<=240){
          // scrolling up, increase size
          this.circleSize1 += 10; // adjust the amount of size change as needed
        }
      } else {
        if(this.circleSize1>=10){
          // scrolling down, decrease size
          this.circleSize1 -= 10; // adjust the amount of size change as needed
        }
      }
    },
    debouncedSendColorToServerM1() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.sendColorToServerM1();
      }, 300); // Adjust the debounce delay as needed (300ms here)
    },

    adjustCircleSize2(e: WheelEvent) {
      if (e.deltaY < 0) {
        if(this.circleSize2<=240){
          // scrolling up, increase size
          this.circleSize2 += 10; // adjust the amount of size change as needed
        }
      } else {
        if(this.circleSize2>=10){
          // scrolling down, decrease size
          this.circleSize2 -= 10; // adjust the amount of size change as needed
        }
      }
    },
    debouncedSendColorToServerM2() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.sendColorToServerM2();
      }, 300); // Adjust the debounce delay as needed (300ms here)
    },
    sendToggleValueToServer() {
      const ToggleContent = { buttonProperty: this.valuetoggle };
      const serverUrl = this.URL; console.log(ToggleContent);
      axios.post(`http://${serverUrl}/toggle-debug-mode`, ToggleContent);
    },

    realtimeUpdate(){
      const ToggleContent = { buttonProperty: this.valuetoggle }; // Use the current value of the el-switch
      const serverUrl = this.URL; console.log(ToggleContent);
      axios.post(`http://${serverUrl}/toggle-debug-mode`,ToggleContent);
    }
  },
    computed: {
      buttonClass() {
        return (index:number) => {
          return {
            'active': index === this.activeButton
          }
        }
      }
    },
    async mounted() {
      // Get the scenes when the component is first created
      await this.fetchScenes();
      this.sendToggleValueToServer();
    },
    components: {
      draggable,
    },
    watch: {
      color1() {
        this.sendColorToServer1();
      },
      color2() {
        this.sendColorToServer2();
      },
      color3() {
        this.sendColorToServer3();
      },
      color4() {
        this.sendColorToServer4();
      },

      color5() {
        this.sendColorToServerM1();
      },
      left1() {
        this.sendColorToServerM1();
      },
      circleSize1() {
      this.debouncedSendColorToServerM1();
    },
      color6() {
        this.sendColorToServerM2();
      },
      left2() {
        this.sendColorToServerM2();
      },
      circleSize2(){
        this.debouncedSendColorToServerM2();
      },
    },
    
    
  },
);

</script>

<style scoped>
.layout-container-demo .el-main {
  padding: 0;
}

.circle1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-200%, -70%); /*position of circle*/
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}
.circle2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-130%, -70%); /*position of circle*/
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}
.circle3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%); /*position of circle*/
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}
.circle4 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(20%, -70%); /*position of circle*/
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}
.circle5 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(100%, -70%); /*position of circle*/
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}
 .circle6 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -150%); 
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}
.circle7 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -150%); 
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}
.circle8 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -150%); 
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}
.circle9 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(30%, -150%); 
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  opacity: 30%;
}

.RGBSCircle1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-140%, -150%); 
  width: 250px;
  height: 250px;
  border-radius: 50%;
  pointer-events: none;
  opacity: 50%;
}
.RGBSCircle2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -150%); 
  width: 250px;
  height: 250px;
  border-radius: 50%;
  pointer-events: none;
  opacity: 50%;
}
.RGBSCircle3{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -150%); 
  width: 250px;
  height: 250px;
  border-radius: 50%;
  pointer-events: none;
  opacity: 50%;
}
.RGBSCircle4{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(40%, -150%); 
  width: 250px;
  height: 250px;
  border-radius: 50%;
  pointer-events: none;
  opacity: 50%;
}

.RGBSCircleM1{
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transform: translate(40%, -150%); 
  opacity: 70%;
}
.RGBSCircleM2{
  position: absolute;
  transform: translate(40%, -150%); 
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: 70%;
}

.color-picker-container {
  display: flex;
  flex-direction: row;
}
.color-picker-wrapper {
  margin-left: 5%;
  margin-right: 5%;
}
.color-picker-wrapper-moving1 {
   margin-right: 5%;/*30px; */
}
.color-picker-wrapper-moving2 {
  margin-right:5%; /*20px;*/
}
.color-picker-wrapper2 {
  margin-right:5%; /*20px;*/
}
.color-picker-wrapper3 {
  margin-right:5%; /*170px;*/
}
.active {
  background-color: blue;
  color: white;
}
.buttons{
  margin-bottom: 100px;
}

</style>