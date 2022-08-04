<template>
  <v-container fill-height>
    <v-btn @click="rulet()"> test </v-btn>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12">
            <v-row no-gutters>
              <v-col
                v-for="(header, h) of headerSlots"
                :style="{
                  height: '86px !important',
                  textAlign: 'center',
                  border: 'thin solid rgba(0,0,0,.12)',
                  backgroundColor: header.color,
                }"
                :key="h"
              >
                {{ header.id }}
                <v-icon :style="{ top: '35%' }">
                  {{ header.icon }}
                </v-icon>
              </v-col>
            </v-row>
          </v-col>

          <v-col xs="2s" sm="2" md="2" lg="2">
            <v-row no-gutters style="width: 68%; float: left" class="fill-height">
              <v-col
                v-for="(left, l) of leftSlots"
                :style="{
                  textAlign: 'center',
                  border: 'thin solid rgba(0,0,0,.12)',
                  backgroundColor: left.color,
                }"
                :key="l"
                cols="12"
              >
                {{ left.id }}
                <v-icon :style="{ top: '35%' }">
                  {{ left.icon }}
                </v-icon>
              </v-col>
            </v-row>
          </v-col>
          <v-col :style="{ height: '70vh' }" xs="8" sm="8" md="8" lg="8"> </v-col>
          <v-col xs="2" sm="2" md="2" lg="2">
            <v-row no-gutters style="width: 68%; float: right" class="fill-height">
              <v-col
                v-for="(right, r) of rightSlots"
                :style="{
                  height: 'auto',
                  textAlign: 'center',
                  border: 'thin solid rgba(0,0,0,.12)',
                  backgroundColor: right.color,
                }"
                :key="r"
                cols="12"
              >
                {{ right.id }}
                <v-icon :style="{ top: '35%' }">
                  {{ right.icon }}
                </v-icon>
              </v-col>
            </v-row>
          </v-col>

          <v-col xs="12" sm="12" md="12" lg="12">
            <v-row no-gutters>
              <v-col
                v-for="(footer, f) of footerSlots"
                :style="{
                  height: '86px !important',
                  textAlign: 'center',
                  border: 'thin solid rgba(0,0,0,.12)',
                  backgroundColor: footer.color,
                }"
                :key="f"
              >
                {{ footer.id }}
                <v-icon :style="{ top: '35%' }">
                  {{ footer.icon }}
                </v-icon>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import {
  computed, defineComponent, onMounted, ref,
} from '@vue/composition-api';
import {
  mdiBarcode,
  mdiBaseballBat,
  mdiBell,
  mdiCircle,
  mdiCloudSync,
  mdiClover,
  mdiFoodApple,
  mdiFruitCherries,
  mdiFruitCitrus,
  mdiFruitWatermelon,
  mdiNumeric7,
  mdiStar,
} from '@mdi/js';

export default defineComponent({
  setup() {
    const items = ref([
      {
        id: 1,
        icon: mdiCircle,
        color: '',
      },
      {
        id: 2,
        icon: mdiBell,
        color: '',
      },
      {
        id: 3,
        icon: mdiFruitCherries,
        color: '',
      },
      {
        id: 4,
        icon: mdiBarcode,
        color: '',
      },
      {
        id: 5,
        icon: mdiBarcode,
        color: '',
      },
      {
        id: 6,
        icon: mdiBarcode,
        color: '',
      },
      {
        id: 7,
        icon: mdiFoodApple,
        color: '',
      },
      {
        id: 8,
        icon: mdiFruitCherries,
        color: '',
      },
      {
        id: 9,
        icon: mdiFruitCitrus,
        color: '',
      },
      {
        id: 10,
        icon: mdiFruitWatermelon,
        color: '',
      },
      {
        id: 11,
        icon: mdiFruitCherries,
        color: '',
      },
      {
        id: 12,
        icon: mdiClover,
        color: '',
      },
      {
        id: 13,
        icon: mdiFoodApple,
        color: '',
      },
      {
        id: 14,
        icon: mdiFruitCherries,
        color: '',
      },
      {
        id: 15,
        icon: mdiCircle,
        color: '',
      },
      {
        id: 16,
        icon: mdiBell,
        color: '',
      },
      {
        id: 17,
        icon: mdiFruitCherries,
        color: '',
      },
      {
        id: 18,
        icon: mdiBaseballBat,
        color: '',
      },
      {
        id: 19,
        icon: mdiBaseballBat,
        color: '',
      },
      {
        id: 20,
        icon: 77,
        color: '',
      },
      {
        id: 21,
        icon: mdiFoodApple,
        color: '',
      },
      {
        id: 22,
        icon: mdiFruitCherries,
        color: '',
      },
      {
        id: 23,
        icon: mdiFruitCitrus,
        color: '',
      },
      {
        id: 24,
        icon: mdiStar,
        color: '',
      },
      {
        id: 25,
        icon: mdiFruitCherries,
        color: '',
      },
      {
        id: 26,
        icon: mdiClover,
        color: '',
      },
      {
        id: 27,
        icon: mdiFoodApple,
        color: '',
      },
      {
        id: 28,
        icon: mdiFruitCherries,
        color: '',
      },
    ]);
    const headerSlots = computed(() => items.value.slice(0, -19));
    const rightSlots = computed(() => items.value.slice(9, -14));
    const leftSlots = computed(() => items.value.slice(23).reverse());
    const footerSlots = computed(() => items.value.slice(14, -5).reverse());
    const timer = (ms: number): any => new Promise((res) => setTimeout(res, ms));

    const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

    const generate = () => {
      const vr = getRandomInt(0, 1);
      const vueltas = items.value.length * vr;
      const winner = getRandomInt(7, items.value.length);

      const spin = [];

      for (let i = 0; i <= vr; i++) {
        spin.push({
          id: i + 1,
          length: items.value.length,
        });
      }
      spin.push({
        id: spin.length + 1,
        length: winner,
      });
      const result = {
        vr,
        vueltas,
        winner,
        spin,
      };
      return result;
    };

    const rulet = async () => {
      const logic = generate();
      console.log('welcom to vue 3', logic);

      let vuelta = 0;
      for (const spin of logic.spin) {
        let subtract = 7;
        for (let s = 0; s < spin.length; s++) {
          await timer(200);
          items.value[s].color = 'red';
          if (s < 7) {
            const restore = items.value.length - subtract;
            items.value[restore].color = 'white';
            subtract--;
          }
          if (s > 6) {
            const restore = s - 7;
            items.value[restore].color = 'white';
          }

          if (vuelta === logic.spin.length - 1) {
            console.log('ultima vuelta');
            if (spin.length - 7 === s) {
              const restore = spin.length - 7;
              console.log('restore', restore, ' s', s);
              items.value[restore].color = 'white';
            }
            if (spin.length - 6 === s) {
              const restore = spin.length - 6;
              console.log('restore', restore, ' s', s);
              items.value[restore].color = 'white';
            }

            if (spin.length - 5 === s) {
              const restore = spin.length - 5;
              console.log('restore', restore, ' s', s);
              items.value[restore].color = 'white';
            }
            if (spin.length - 4 === s) {
              const restore = spin.length - 4;
              console.log('restore', restore, ' s', s);
              items.value[restore].color = 'white';
            }
            if (spin.length - 3 === s) {
              const restore = spin.length - 3;
              console.log('restore', restore, ' s', s);
              items.value[restore].color = 'white';
            }
            // if (spin.length - 2 === s) {
            //   const restore = spin.length - 2;
            //   console.log('restore', restore, ' s', s);
            //   items.value[restore].color = 'white';
            // }
          }
        }
        vuelta++;
      }
    };
    onMounted(async () => {
      // rulet();
    });
    return {
      headerSlots,
      leftSlots,
      rightSlots,
      footerSlots,
      rulet,
      generate,
    };
  },
});
</script>
