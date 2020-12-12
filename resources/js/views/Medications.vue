
  <!-- <div id="content" class="p-5">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Medications</h1>
    </div>
    <div class="row">
      <div class="col">
        <div class="card shadow mb-4">
          <div
            class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <form
              class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
            >
              <div class="input-group">
                <input
                  type="text"
                  class="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">
                    <i class="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
            <button
              class="btn btn-primary btn-sm ml-auto"
              v-on:click="showMedicationModal"
            >
              <span class="fa fa-plus"></span> Create New
            </button>
          </div>
          <div class="card-body">
            <table class="table table-responsive-lg table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Route</th>
                  <th>Dosage</th>
                  <th>Image</th>
                  <th>Units</th>
                  <th>Price Per Unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(medication, index) in medications.data"
                  :key="index"
                >
                  <td scope="row">{{ medication.id }}</td>
                  <td>{{ medication.name }}</td>
                  <td>{{ getCategory(medication.category_id) }}</td>
                  <td>{{ medication.type }}</td>
                  <td>{{ medication.route }}</td>
                  <td>{{ medication.dosage }}</td>
                  <td>
                    <img
                      class="table-image"
                      :src="`${$store.state.serverPath}/storage/${medication.image}`"
                      :alt="medication.name"
                    />
                  </td>
                  <td>{{ medication.units }}</td>
                  <td>{{ medication.price_per_unit }}</td>
                  <td>
                    <button class="btn btn-primary btn-sm">
                      <span
                        class="fa fa-eye"
                        v-on:click="showDetails(medication.id)"
                      ></span>
                    </button>
                    <button class="btn btn-success btn-sm">
                      <span
                        class="fa fa-edit"
                        v-on:click="editMedication(medication)"
                      ></span>
                    </button>
                    <button class="btn btn-danger btn-sm">
                      <span
                        class="fa fa-trash"
                        v-on:click="deleteMedication(medication)"
                      ></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center pl-5">
              <pagination
                :data="medications"
                @pagination-change-page="loadMedication"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      size="lg"
      id="modal-lg"
      ref="medicationModal"
      hide-footer
      :title="mode == 'create' ? 'Add new medication' : 'Edit new medication'"
    >
      <div class="d-block">
        <form
          v-on:submit.prevent="
            mode == 'edit' ? updateMedication() : createMedication()
          "
          ref="medicationForm"
        >
          <div>
            <div class="form-group">
              <label for="image">Choose an image</label>

              <div v-if="!medicationData.image.name">
                <img
                  v-show="mode == 'create'"
                  class="w-150px"
                  src="/assets/images/Default.png"
                />
              </div>
              <div v-if="medicationData.image.name">
                <img
                  v-show="mode == 'create'"
                  class="w-150px"
                  src="/assets/images/Default.png"
                  ref="newMedicationImageDisplay"
                />
              </div>
              <div v-show="mode == 'edit'">
                <img
                  class="w-150px"
                  :src="`${$store.state.serverPath}/storage/${medicationData.image}`"
                  ref="editMedicationImageDisplay"
                />
              </div>

              <input
                type="file"
                v-on:change="
                  mode == 'create' ? attachImage() : editAttachImage()
                "
                :ref="
                  mode == 'create'
                    ? 'newMedicationImage'
                    : 'editMedicationImage'
                "
                id="image"
                class="form-control w-150px"
              />
              <div class="invalid-feedback" v-if="errors.image">
                {{ errors.image[0] }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  v-model="medicationData.name"
                  id="name"
                  class="form-control"
                  placeholder="Enter Medication Name"
                />
                <div class="invalid-feedback" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="category_id">Category</label>
                <select
                  v-model="medicationData.category_id"
                  id="category_id"
                  class="form-control"
                >
                  <option value="">Choose Category</option>
                  <option
                    v-for="(category, index) in categories"
                    :value="category.id"
                    :key="index"
                  >
                    {{ category.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.category_id">
                  {{ errors.category_id[0] }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="type">Type</label>
                <select
                  type="text"
                  v-model="medicationData.type"
                  id="type"
                  class="form-control"
                >
                  <option value="">Select Type</option>
                  <option id="brand" value="brand">Brand</option>
                  <option id="generic" value="generic">Generic</option>
                </select>

                <div class="invalid-feedback" v-if="errors.type">
                  {{ errors.type[0] }}
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="dosage">Dosage</label>
                <input
                  type="text"
                  v-model="medicationData.dosage"
                  id="dosage"
                  class="form-control"
                  placeholder="Enter Medication Dosage"
                />
                <div class="invalid-feedback" v-if="errors.dosage">
                  {{ errors.dosage[0] }}
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="route">Route</label>
                <select
                  type="text"
                  v-model="medicationData.route"
                  id="route"
                  class="form-control"
                >
                  <option value="">Select Route</option>
                  <option
                    v-for="(item, index) in medicationData.jsonData"
                    :key="index"
                    :value="item.route"
                  >
                    {{ item.route }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.route">
                  {{ errors.route[0] }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="strength">Strength</label>
                <input
                  type="text"
                  v-model="medicationData.strength"
                  id="strength"
                  class="form-control"
                  placeholder="Enter Strength"
                />
                <div class="invalid-feedback" v-if="errors.strength">
                  {{ errors.strength[0] }}
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <label for="usage">Usages</label>
                <b-form-tags
                  input-id="usage"
                  v-model="medicationData.usage"
                  placeholder="Enter Usage"
                  v
                ></b-form-tags>
                <div class="invalid-feedback" v-if="errors.usage">
                  {{ errors.usage[0] }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="units">Units</label>
                <input
                  type="number"
                  v-model="medicationData.units"
                  id="units"
                  class="form-control"
                  placeholder="Enter Units"
                />
                <div class="invalid-feedback" v-if="errors.units">
                  {{ errors.units[0] }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="price_per_unit">Price Per Units</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  v-model="medicationData.price_per_unit"
                  id="price_per_unit"
                  class="form-control"
                  placeholder="Enter Price Per Units"
                />
                <div class="invalid-feedback" v-if="errors.price_per_unit">
                  {{ errors.price_per_unit[0] }}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="text-center">
            <button
              type="button"
              class="btn btn-default"
              v-on:click="hideMedicationModal"
            >
              Cancle
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              v-show="mode == 'create'"
            >
              <span class="fa fa-check"></span>Save
            </button>

            <button
              type="submit"
              class="btn btn-success"
              v-show="mode == 'edit'"
            >
              <span class="fa fa-check"></span>Update
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>-->


<template>
  <div id="content" class="p-5">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <!-- <h1 class="h3 mb-0 text-gray-800">
        Welcome,
        {{
          $store.state.profile.first_name + " " + $store.state.profile.last_name
        }}
      </h1> -->
    </div>
    <v-card>
      <v-card-title>
        Medications
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
        :items="medications"
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
                  New Medication
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
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            label="Medication Name"
                            v-model="editedItem.name"
                            rounded
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            rounded
                            outlined
                            :items="categories"
                            item-text="name"
                            item-value="id"
                            v-model="editedItem.category_id"
                            label="Category"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            rounded
                            outlined
                            :items="['Brand', 'Generic']"
                            item-text="type"
                            v-model="editedItem.type"
                            label="Type"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            rounded
                            outlined
                            :items="getRoutes"
                            v-model="editedItem.route"
                            label="Route"
                          ></v-select>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Dosage"
                            v-model="editedItem.dosage"
                            rounded
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-combobox
                            v-model="editedItem.usage"
                            :items="editedItem.usage"
                            chips
                            multiple
                            clearable
                            label="Usages"
                            prepend-inner-icon="mdi-filter-variant"
                            rounded
                            outlined
                          >
                            <template
                              v-slot:selection="{
                                attrs,
                                item,
                                select,
                                selected,
                              }"
                            >
                              <v-chip
                                v-bind="attrs"
                                :input-value="selected"
                                close
                                @click="select"
                                @click:close="remove(item)"
                              >
                                <strong>{{ item }}</strong>
                              </v-chip>
                            </template>
                          </v-combobox>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            label="Strength"
                            v-model="editedItem.strength"
                            rounded
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Units"
                            v-model="editedItem.units"
                            type="number"
                            rounded
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col>
                          <v-switch
                            v-model="editedItem.is_featured"
                            inset
                            :label="
                              editedItem.is_featured
                                ? 'Featured'
                                : 'Not Featured'
                            "
                          ></v-switch>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Price Per Unit"
                            v-model="editedItem.price_per_unit"
                            rounded
                            outlined
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-file-input
                            v-model="editedItem.image"
                            label="Add Image"
                            @change="attachImage"
                          ></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="
                              editedIndex > -1
                                ? `${$store.state.serverPath}/storage/${editedItem.image.name}`
                                : url
                            "
                            style="width: 200px; margin-left: 80px"
                            :ref="
                              editedIndex > -1
                                ? 'editMedicationImage'
                                : 'newMedicationImage'
                            "
                          ></v-img>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" type="submit" text>
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
        <template v-slot:[`item.image`]="{ item }">
          <tr>
            <v-img
              lazy-src=""
              class="table-image"
              :src="`${$store.state.serverPath}/storage/${item.image}`"
              :alt="item.name"
            ></v-img>
          </tr>
        </template>

        <template v-slot:[`item.category_id`]="{ item }">
          <tr>
            <td>{{ getCategory(item.category_id) }}</td>
          </tr>
        </template>
        <template v-slot:[`item.is_featured`]="{ item }">
          <tr>
            <td>
              {{ item.is_featured ? "Featured" : "Not Featured" }}
            </td>
          </tr>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="showDetails(item.id)">
            mdi-eye</v-icon
          >

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
import * as medicationService from "../services/medication_service";
import JsonData from "../../../public/storage/json/med_route.json";
export default {
  name: "medications",
  data: () => ({
    is_loading: false,
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Medication Name",
        align: "start",
        sortable: true,
        value: "name",
      },
      { text: "Category", value: "category_id" },
      { text: "Type", value: "type" },
      { text: "Route", value: "route" },
      { text: "Dosage", value: "dosage" },
      { text: "Image", value: "image" },
      { text: "Units", value: "units" },
      { text: "Price Per Unit", value: "price_per_unit" },
      { text: "Featured", value: "is_featured" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    categories: [],
    medications: [],
    editedItem: {
      id: "",
      name: "",
      category_id: "",
      type: "",
      route: "",
      strength: "",
      usage: [],
      strength: "",
      dosage: "",
      image: [],
      units: 0,
      price_per_unit: 0.0,
      is_featured: false,
    },
    defaultItem: {
      id: "",
      name: "",
      category_id: "",
      type: "",
      route: "",
      strength: "",
      usage: [],
      strength: "",
      dosage: "",
      image: [],
      units: 0,
      price_per_unit: 0.0,
      is_featured: false,
    },
    url: "",

    errors: {},
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Medication" : "Edit Medication";
    },
    getRoutes() {
      var routes;
      return JsonData.map((item) => (routes = item.route));
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
      this.loadMedication();
      this.loadCategories();
      console.log(this.editedItem.is_featured);
    },

    remove(item) {
      this.editedItem.usage.splice(this.editedItem.usage.indexOf(item), 1);
      this.editedItem.usage = [...this.editedItem.usage];
    },
    editItem(item) {
      this.editedIndex = this.medications.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.medications.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      this.arr = JSON.parse(item.usage);
    },

    deleteItemConfirm: async function () {
      this.is_loading = true;
      try {
        const response = await medicationService.deleteMedication(
          this.editedItem.id
        );
        this.medications.splice(this.editedIndex, 1);
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
        //   var usageArray = Array.from(this.)
        let formData = new FormData();

        formData.append("name", this.editedItem.name);
        formData.append("category_id", this.editedItem.category_id);
        formData.append("type", this.editedItem.type);
        formData.append("route", this.editedItem.route);
        formData.append("strength", this.editedItem.strength);
        formData.append("usage", this.editedItem.usage);
        formData.append("dosage", this.editedItem.dosage);
        formData.append("units", this.editedItem.units);
        formData.append("price_per_unit", this.editedItem.price_per_unit);
        formData.append(
          "is_featured",
          JSON.stringify(this.editedItem.is_featured)
        );
        formData.append("image", this.editedItem.image);
        if (this.editedIndex > -1) {
          formData.append("_method", "PUT");
          const response = await medicationService.updateMedication(
            this.editedItem.id,
            formData
          );
          Object.assign(this.medications[this.editedIndex], this.editedItem);
          this.flashMessage.success({
            title: "Success",
            message: this.editedItem.name + " Medication Updated",
            time: 5000,
            icon: "/assets/icons/checked.svg",
          });
          this.close();
        } else {
          const response = await medicationService.createMedication(formData);
          this.medications.push(this.editedItem);
          this.flashMessage.success({
            title: "Success",
            message: this.editedItem.name + " Medication Created",
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

    //load all medication data
    loadMedication: async function () {
      try {
        const response = await medicationService.loadMedication();
        this.medications = response.data.data;
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
        const response = await medicationService.loadCategories();
        this.categories = response.data;
        return this.categories.name;
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "There was an eroor, Please try again!",
          icon: "assets/icons/warning.svg",
        });
      }
    },
    getCategory(category_id) {
      let category_name = "";
      this.categories.forEach((category) => {
        if (category.id == category_id) {
          category_name = category.name;
        }
      });
      return category_name;
    },

    attachImage(e) {
      if (e) {
        this.url = URL.createObjectURL(this.editedItem.image);
        console.log(this.url);
        if (this.editedIndex > -1) {
          //edit
          this.$refs.editMedicationImage = URL.createObjectURL(
            this.editedItem.image.name
          );
        } else {
          //create
          this.$refs.newMedicationImage = URL.createObjectURL(e);
        }
      }
    },
    showDetails(id) {
      this.$router.push({
        name: "single-medication",
        params: { id: id },
      });
    },
  },
};
</script>


