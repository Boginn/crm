<template>
  <v-container>
    <v-row>
      <Search :location="$options.name" />

      <v-dialog v-model="expand" width="500">
        <template v-slot:activator="{ on }">
          <span @click="draft()" v-on="on">
            <NavChip :option="option" style="z-index: 2;" />
          </span>
        </template>

        <v-card class="seventh">
          <v-card-title class="secondary">
            New User
          </v-card-title>

          <v-form ref="form" v-if="subject">
            <v-col cols="12">
              <v-text-field
                filled
                dense
                v-model="subject.username"
                :rules="rules.default"
                label="Username"
                required
              ></v-text-field>

              <v-text-field
                filled
                dense
                v-model="subject.password"
                :rules="rules.default"
                label="Password"
                required
              ></v-text-field>

              <v-text-field
                filled
                dense
                v-model="subject.name"
                :rules="rules.default"
                label="Display Name"
                required
              ></v-text-field>

              <v-select
                class="mr-3"
                filled
                v-model="subject.badge"
                :items="availableBadgeNumbers"
                :rules="rules.default"
                label="Badge Number"
                required
              ></v-select>

              <v-text-field
                filled
                dense
                v-model="subject.email"
                :rules="rules.default"
                label="E-mail"
              ></v-text-field>

              <v-text-field
                filled
                dense
                v-model="subject.phone"
                :rules="rules.default"
                label="Phone"
              ></v-text-field>
              <v-row>
                <v-col>
                  <v-checkbox
                    color="tertiary"
                    dense
                    v-model="subject.active"
                    label="Active"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="tertiary"
                    dense
                    v-model="subject.admin"
                    label="Admin"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="tertiary"
                    dense
                    v-model="subject.delegate"
                    label="Delegation"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-card-actions>
                <v-btn small outlined @click="validate()" title="Ok"
                  ><v-icon>
                    mdi-check
                  </v-icon></v-btn
                >
                <v-btn small outlined @click="cancel()" title="Cancel"
                  ><v-icon>
                    mdi-cancel
                  </v-icon></v-btn
                >
              </v-card-actions>
            </v-col>
          </v-form>

          <v-spacer></v-spacer>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row>
      <v-col>
        <v-row>
          <v-col cols="12" class="mt-1" v-for="cop in roster" :key="cop.name">
            <v-card class="tertiary">
              <v-card-text>
                <v-row class="white--text">
                  <v-col>
                    <div>
                      Name: <span class="lime--text">{{ cop.name }}</span>
                    </div>

                    <div>
                      E-mail: <span class="amber--text">{{ cop.email }}</span>
                    </div>

                    <div>
                      Badge:
                      <span class="lime--text">{{ cop.badge }}</span>
                    </div>

                    <div>
                      Phone:
                      <span class="orange--text">{{ cop.phone }}</span>
                    </div>
                  </v-col>
                  <v-col>
                    <div>
                      Active:
                      <span class="green--text" v-if="cop.active">Yes</span
                      ><span class="red--text" v-else>No</span>
                    </div>

                    <div>
                      Admin:
                      <span class="green--text" v-if="cop.admin">Yes</span
                      ><span class="red--text" v-else>No</span>
                    </div>
                    <div>
                      Delegate:
                      <span class="green--text" v-if="cop.delegate">Yes</span
                      ><span class="red--text" v-else>No</span>
                    </div>
                    <div></div>
                  </v-col>
                  <v-col cols="1">
                    <v-dialog
                      v-model="dialog"
                      width="500"
                      :retain-focus="false"
                    >
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on" @click="dialogCop = cop"
                          >mdi-cogs</v-icon
                        >
                      </template>

                      <template v-if="dialogCop">
                        <v-card class="tertiary">
                          <v-card-title class="d-flex justify-center"
                            >Set Permissions for
                            {{ dialogCop.name }}</v-card-title
                          >

                          <v-card-text>
                            <v-row>
                              <v-col>
                                <v-checkbox
                                  v-model="dialogCop.active"
                                  label="Active"
                                  title="Active"
                                ></v-checkbox>
                              </v-col>

                              <v-col>
                                <v-checkbox
                                  v-model="dialogCop.admin"
                                  label="Administrator"
                                  title="Active"
                                ></v-checkbox>
                              </v-col>
                              <v-col>
                                <v-checkbox
                                  v-model="dialogCop.delegate"
                                  label="Delegation"
                                  title="Active"
                                ></v-checkbox>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-btn text block @click="remove(dialogCop)"> <v-icon small class="mb-1 mr-1">mdi-account-remove</v-icon> Delete User</v-btn>
                            </v-row>
                          </v-card-text>

                          <v-divider></v-divider>

                          <v-card-actions class="d-flex justify-center">
                            <v-btn
                              color="vuegrey"
                              text
                              @click="
                                dialog = false;
                                dialogCop = undefined;
                              "
                            >
                              Close
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from "../components/Search.vue";
import NavChip from "../components/NavChip.vue";
import data from "../data/data.js";
import services from "../services/services.js";

export default {
  name: "Roster",

  created() {
    if (!this.user || !this.user.admin) {
      this.$router.push("/");
    }
  },

  components: {
    Search,
    NavChip,
  },

  computed: {
    id() {
      return this.$store.getters.userId;
    },
    user() {
      return this.$store.getters.user;
    },
    search() {
      return this.$store.getters.search;
    },

    roster() {
      if (this.search) {
        return this.$store.getters.roster.filter((entry) =>
          entry.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        return this.$store.getters.roster;
      }
    },
    availableBadgeNumbers() {
      return this.$store.getters.badges;
    },
    option() {
      let option;
      data.dialogRoutes.forEach((element) => {
        if (element.name == "New User") {
          option = element;
        }
      });
      return option;
    },
    rules() {
      return services.rules;
    },
  },

  data: function() {
    return {
      dialog: false,
      dialogCop: undefined,
      expand: false,
      subject: undefined,
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.add();
      }
    },
    draft() {
      this.subject = new data.User(this.id);
      this.expand = true;
    },
    add() {
      if (this.subject) {
        this.subject.badge = `REK${this.subject.badge}`;
        this.$store.dispatch("addUser", this.subject);
        console.log(this.roster)
      }
      this.cancel();
    },
    cancel() {
      this.expand = false;
    },
        remove(obj) {
      this.roster.splice(this.roster.indexOf(obj), 1);
      this.dialog = false;
    },
  },
};
</script>
