<template>
  <div id="content" class="p-5">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <!-- <h1 class="h3 mb-0 text-gray-800">Categories</h1> -->
    </div>
    <v-card>
      <v-card-title>
        Categories
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="categories"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-dialog v-model="dialog" max-width="800px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  New Category
                </v-btn>
              </template>
              <v-card>
                <div v-show="is_loading">
                  <v-progress-linear
                    indeterminate
                    color="cyan"
                  ></v-progress-linear>
                </div>
                <form @submit.prevent="save">
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            label="Category Name"
                            v-model="editedItem.name"
                            rounded
                            outlined
                            required
                          ></v-text-field>
                          <div class="invalid-feedback" v-if="errors.type">
                            {{ errors.name[0] }}
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Description"
                            v-model="editedItem.description"
                            rounded
                            outlined
                            required
                          ></v-text-field>
                          <div class="invalid-feedback" v-if="errors.type">
                            {{ errors.description[0] }}
                          </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-dialog
                            ref="dialog"
                            v-model="modal"
                            :return-value.sync="date"
                            persistent
                            width="290px"
                          >
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
                          </v-dialog>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text type="submit">
                      Save
                    </v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="800px">
              <v-card>
                <div v-show="is_loading">
                  <v-progress-linear
                    indeterminate
                    color="cyan"
                  ></v-progress-linear>
                </div>
                <v-card-title class="headline"
                  >Are you sure you want to delete
                  {{ editedItem.name }}?</v-card-title
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
          </v-toolbar>
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
import * as categoryService from "../services/category_service";
import Axios from "axios";
export default {
  name: "Category",
  data: () => ({
    is_loading: false,

    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Category Name",
        align: "start",
        sortable: true,
        value: "name",
      },
      { text: "Description", value: "description" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    date: new Date().toISOString().substr(0, 7),
    modal: false,
    categories: [],
    editedItem: {
      id: "",
      name: "",
      description: "",
    },
    defaultItem: {
      id: "",
      name: "",
      description: "",
    },

    errors: {},
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Category" : "Edit Category";
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
      this.loadCategories();
    },
    editItem(item) {
      this.editedIndex = this.categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm: async function () {
      this.is_loading = true;

      try {
        const response = await categoryService.deleteCategory(
          this.editedItem.id
        );
        this.categories.splice(this.editedIndex, 1);
        this.flashMessage.success({
          title: "Success",
          message: this.editedItem.name + " Category Deleted",
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
      this.is_loading = false;
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
        let formData = new FormData();

        formData.append("id", this.editedItem.id);
        formData.append("name", this.editedItem.name);
        formData.append("description", this.editedItem.description);

        if (this.editedIndex > -1) {
          formData.append("_method", "PUT");

          const response = await categoryService.updateCategory(
            this.editedItem.id,
            formData
          );

          Object.assign(this.categories[this.editedIndex], this.editedItem);
          this.flashMessage.success({
            title: "Success",
            message: this.editedItem.name + " Category Updated",
            time: 5000,
            icon: "/assets/icons/checked.svg",
          });
          this.close();
        } else {
          const response = await categoryService.createCategory(formData);
          this.categories.push(this.editedItem);
          this.flashMessage.success({
            title: "Success",
            message: this.editedItem.name + " Category Created",
            time: 5000,
            icon: "/assets/icons/checked.svg",
          });
          this.close();
          this.is_loading = false;
        }
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "There was an eroor, Please try again!",
          icon: "assets/icons/warning.svg",
        });
      }
    },
    loadCategories: async function () {
      try {
        const response = await categoryService.loadCategories();
        this.categories = response.data.data;
        // console.log(response);
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


