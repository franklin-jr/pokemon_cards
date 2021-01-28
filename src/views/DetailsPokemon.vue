<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-img width="400" :src="item.imageUrlHiRes">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row>
          <v-col cols="12">
            <v-row class="align-center pa-3 justify-space-between">
              <div class="titleSize primary--text mr-2">{{ item.name }}</div>
              <v-chip class="ma-2" color="primary">
                {{ item.id }}
              </v-chip>
            </v-row>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card style="border-radius: 20px" class="mx-auto" outlined>
              <v-card-title> Tipo </v-card-title>
              <v-card-text>
                <div v-if="item.types" class="mt-4 ml-2 mb-3">
                  <v-row v-for="(type, i) in item.types" :key="`type${i}`">
                    <div :class="['icon mr-2', type.toLowerCase()]">
                      <img
                        :src="
                          require(`@/assets/images/icons/${type.toLowerCase()}.svg`)
                        "
                      />
                    </div>
                    {{ type }}
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card style="border-radius: 20px" class="mx-auto" outlined>
              <v-card-title> Resistência </v-card-title>
              <v-card-text>
                <div v-if="item.resistances" class="mt-4 ml-2 mb-3">
                  <v-row v-for="(res, i) in item.resistances" :key="`res${i}`">
                    <div :class="['icon mr-2', res.type.toLowerCase()]">
                      <img
                        :src="
                          require(`@/assets/images/icons/${res.type.toLowerCase()}.svg`)
                        "
                      />
                    </div>
                    {{ res.value }}
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card style="border-radius: 20px" class="mx-auto" outlined>
              <v-card-title> Fraquezas </v-card-title>
              <v-card-text>
                <div v-if="item.weaknesses" class="mt-4 ml-2 mb-3">
                  <v-row v-for="(weak, i) in item.weaknesses" :key="`weak${i}`">
                    <div :class="['icon mr-2', weak.type.toLowerCase()]">
                      <img
                        :src="
                          require(`@/assets/images/icons/${weak.type.toLowerCase()}.svg`)
                        "
                      />
                    </div>
                    {{ weak.value }}
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card style="border-radius: 20px" class="mx-auto" outlined>
              <v-card-title> Ataques </v-card-title>
              <v-card-text>
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-list-item
                      v-for="(atack, i) in item.attacks"
                      :key="`atack${i}`"
                      @click="openDialog(atack)"
                    >
                  
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="atack.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <div
                          v-for="(cost, i) in atack.cost"
                          :key="`cost${i}`"
                          :class="['icon mr-2', cost.toLowerCase()]"
                        >
                          <img
                            :src="
                              require(`@/assets/images/icons/${cost.toLowerCase()}.svg`)
                            "
                          />
                        </div>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
                <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="350"
                >
                  <v-card>
                    <v-card-title class="headline">
                     <div>{{attackSelect.name}}</div>
                    </v-card-title>
                    <v-card-text>
                    <div class="subtitle-1"><strong>Dano:</strong> {{attackSelect.damage}}</div>
                  
                    <div class="subtitle-1 mt-4"><strong>Descrição:</strong></div>
                    <div>{{attackSelect.text}}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                      >
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-text>
            </v-card>
          </v-col>

        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "details-pokemon",
  data() {
    return {
      item: "",
      dialog: false,
      attackSelect: {}
    };
  },
  mounted() {
    this.getById();
  },
  methods: {
    getById() {
      this.$store
        .dispatch("getPokemonById", this.$route.params.id)
        .then((resp) => {
          this.item = resp;
        });
    },
    openDialog(item) {
      this.attackSelect = item
      this.dialog = true
    }
  },
};
</script>