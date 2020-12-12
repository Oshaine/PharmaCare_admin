<template>
  <div id="content" class="p-5">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">User Management</h1>
    </div>
    <v-card>
      <v-card-title>
        Users
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table :headers="headers" :items="users" :search="search">
        <template v-slot:top>
          <v-spacer></v-spacer>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="800px">
              <v-card>
                <div v-show="is_loading">
                  <v-progress-linear
                    indeterminate
                    color="cyan"
                  ></v-progress-linear>
                </div>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="First Name"
                          v-model="editedItem.first_name"
                          prepend-inner-icon="mdi-account"
                          disabled
                          rounded
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="Last Name"
                          v-model="editedItem.last_name"
                          prepend-inner-icon="mdi-account"
                          disabled
                          rounded
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="Phone Number"
                          v-model="editedItem.phone_number"
                          prepend-inner-icon="mdi-account"
                          disabled
                          rounded
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="Email"
                          v-model="editedItem.email"
                          prepend-inner-icon="mdi-account"
                          disabled
                          rounded
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select
                          rounded
                          outlined
                          :items="['administrator', 'user']"
                          v-model="editedItem.role"
                          prepend-inner-icon="mdi-cash-multiple"
                          label="Role"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="Address"
                          v-model="editedItem.address"
                          disabled
                          rounded
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-dialog
                          ref="dialog"
                          v-model="modal"
                          :return-value.sync="date"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              disabled
                              rounded
                              outlined
                              :v-model="
                                new Date(editedItem.created_at).toLocaleString()
                              "
                              label="Registered Date"
                              prepend-inner-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" type="day" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dialog.save(date)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-dialog>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-dialog v-model="dialogDelete" max-width="800px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete
                {{
                  editedItem.first_name + " " + editedItem.last_name
                }}?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <!-- <template v-slot:[`item.first_name`]="{ item }">{{
          item.user.first_name
        }}</template>
        <template v-slot:[`item.last_name`]="{ item }">
          {{ item.user.last_name }}</template
        >-->
        <!-- <template v-slot:[`item.customer`]="{ item }"
          >{{ item.user.first_name }} {{ item.user.last_name }}</template
        > -->

        <template v-slot:[`item.created_at`]="{ item }">
          <td>
            {{ new Date(item.created_at).toLocaleString() }}
          </td>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as userService from "../services/user_service";
import Axios from "axios";
export default {
  name: "UserManagement",
  data: () => ({
    is_loading: false,
    search: "",
    dialog: false,
    dialogDelete: false,
    is_Completed: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "First Name", value: "first_name" },
      { text: "Last Name", value: "last_name" },

      { text: "Phone Number", value: "phone_number" },
      { text: "Address", value: "address" },
      { text: "Email", value: "email" },
      { text: "Role", value: "role" },
      { text: "Registered Date", value: "created_at" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    users: [],
    editedItem: {
      id: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      address: "",
      email: "",
      role: "",
      created_at: "",
    },
    defaultItem: {
      id: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      address: "",
      email: "",
      role: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New User" : "Update User";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.getUsers();
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm: async function () {
      try {
        const response = await orderService.deleteOrders(this.editedItem.id);
        this.users.splice(this.editedIndex, 1);
        this.flashMessage.success({
          title: "Success",
          message:
            this.editedItem.first_name +
            " " +
            this.editedItem.last_name +
            " User Deleted",
          time: 5000,
          icon: "/assets/icons/checked.svg",
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "There was an eroor, Please try again!",
          icon: "assets/icons/warning.svg",
        });
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save: async function () {
      this.is_loading = true;

      try {
        if (this.editedIndex > -1) {
          var data = {
            id: this.editedItem.id,
            first_name: this.editedItem.first_name,
            last_name: this.editedItem.last_name,
            phone_number: this.editedItem.phone_number,
            address: this.editedItem.address,
            email: this.editedItem.email,
            role: this.editedItem.role,
            created_at: this.editedItem.created_at,
          };
          const response = await userService.updateUsers(
            this.editedItem.id,
            data
          );
          Object.assign(this.users[this.editedIndex], this.editedItem);
          this.flashMessage.success({
            title: "Success",
            message:
              this.editedItem.first_name +
              " " +
              this.editedItem.last_name +
              " Account Updated",
            time: 5000,
            icon: "/assets/icons/checked.svg",
          });

          //   if (this.editedItem.status == "Completed") {
          //     this.is_Completed = false;
          //   }
        } else {
          this.users.push(this.editedItem);
        }
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "There was an eroor, Please try again!",
          icon: "assets/icons/warning.svg",
        });
      }
      this.close();
      this.is_loading = false;
    },
    getUsers: async function () {
      try {
        const response = await userService.getUsers();
        this.users = response.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "There was an eroor, Please try again!",
        });
      }
    },
  },
};
</script>

