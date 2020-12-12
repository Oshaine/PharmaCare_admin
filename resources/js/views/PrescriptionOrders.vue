<template>
  <div id="content" class="p-5">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Prescription Orders</h1>
    </div>
    <v-card>
      <v-card-title>
        Orders
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
        :items="prescription_orders"
        :search="search"
      >
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
                <form @submit.prevent="save">
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            label="Order Number"
                            v-model="editedItem.order_number"
                            prepend-inner-icon="mdi-receipt"
                            solo
                            disabled
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            label="First Name"
                            v-model="editedItem.user.first_name"
                            prepend-inner-icon="mdi-account"
                            disabled
                            rounded
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            label="Last Name"
                            v-model="editedItem.user.last_name"
                            prepend-inner-icon="mdi-account"
                            disabled
                            rounded
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-file-input
                            :v-model="
                              editedIndex > -1
                                ? editedItem.image.name
                                : editedItem.image
                            "
                            label="Add Image"
                            @change="attachImage"
                          ></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="
                              editedIndex > -1
                                ? `${$store.state.serverPath}/storage/${editedItem.image}`
                                : url
                            "
                            style="width: 200px; margin-left: 80px"
                            :ref="
                              editedIndex > -1
                                ? 'editPrescriptionImage'
                                : 'newPrescriptionImage'
                            "
                          ></v-img>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            rounded
                            outlined
                            disabled
                            :items="['Cash On Pickup', 'PayPal', 'Card']"
                            v-model="editedItem.payment_method"
                            prepend-inner-icon="mdi-cash-multiple"
                            label="Payment Method"
                          ></v-select>
                        </v-col>

                        <v-col>
                          <v-switch
                            v-model="editedItem.is_paid"
                            inset
                            :label="editedItem.is_paid ? 'Paid' : 'Not Paid'"
                          ></v-switch>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            rounded
                            outlined
                            :disabled="editedItem.status == 'Completed'"
                            prepend-inner-icon="mdi-clock-fast"
                            :items="[
                              'Pending',
                              'Not Available',
                              'Processing',
                              'Completed',
                              'Decline',
                              'Ready for Pickup',
                            ]"
                            v-model="editedItem.status"
                            label="Status"
                          ></v-select>
                        </v-col>
                        <v-container fluid>
                          <v-row>
                            <v-col cols="12">
                              <v-combobox
                                :v-model="editedItem.items.medication_id"
                                :items="medications"
                                item-text="name"
                                item-value="medication_id"
                                label="Medications"
                                @change="medication"
                                multiple
                                rounded
                                outlined
                                chips
                              ></v-combobox>
                            </v-col>
                          </v-row>
                        </v-container>
                        <v-col cols="12" sm="6" md="4">
                          <v-list dense>
                            <v-subheader>Medication</v-subheader>
                            <v-list-item-group color="primary">
                              <v-list-item
                                v-for="item in editedItem.items"
                                :key="item.id"
                              >
                                <v-list-item-content>
                                  <v-list-item-title
                                    v-text="item.name"
                                    :v-model="editedItem.items.medication_id"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-list dense>
                            <v-subheader>Quantity</v-subheader>
                            <v-list-item-group color="primary">
                              <v-list-item
                                v-for="item in editedItem.items"
                                :key="item.id"
                              >
                                <v-list-item-content>
                                  <v-list-item-title>
                                    <v-text-field
                                      v-model="editedItem.items.quantity"
                                      type="number"
                                      class="quantity-input"
                                    ></v-text-field>
                                  </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-list dense>
                            <v-subheader>Price</v-subheader>
                            <v-list-item-group color="primary">
                              <v-list-item
                                v-for="item in editedItem.items"
                                :key="item.id"
                              >
                                <v-list-item-content>
                                  <v-list-item-title
                                    v-text="item.price_per_unit"
                                    :v-model="editedItem.items.price_per_unit"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Grand Total"
                            v-model="editedItem.grand_total"
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
                                  new Date(
                                    editedItem.created_at
                                  ).toLocaleString()
                                "
                                label="Order Date"
                                prepend-inner-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" type="day" scrollable>
                              <v-spacer></v-spacer>
                              <v-btn
                                text
                                color="primary"
                                @click="modal = false"
                              >
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
                    <v-btn color="blue darken-1" type="submit" text>
                      Save
                    </v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </v-dialog>
          </v-row>
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
                {{ editedItem.order_number }}?</v-card-title
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

        <template v-slot:[`item.medication_name`]="{ item }">
          <tr v-for="value in item.items" :key="value.id">
            <td>{{ value.name }}</td>
          </tr>
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
        <template v-slot:[`item.is_paid`]="{ item }">
          <tr>
            <td>
              {{ item.is_paid ? "Paid" : "Not Paid" }}
            </td>
          </tr>
        </template>
        <template v-slot:[`item.quantity`]="{ item }">
          <tr v-for="value in item.items" :key="value.id">
            <td>{{ value.pivot.quantity }}</td>
          </tr>
        </template>
        <template v-slot:[`item.price_per_unit`]="{ item }">
          <tr v-for="value in item.items" :key="value.id">
            <td>{{ value.price_per_unit }}</td>
          </tr>
        </template>
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
import * as prescriptionService from "../services/prescription_service";
import Axios from "axios";
export default {
  name: "PrescriptionOrders",
  data: () => ({
    is_loading: false,
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Order Number",
        align: "start",
        sortable: false,
        value: "order_number",
      },
      //   { text: "Customer", value: "customer" },
      { text: "First Name", value: "user.first_name" },
      { text: "Last Name", value: "user.last_name" },

      { text: "Prescription", value: "image" },
      { text: "Status", value: "status" },
      { text: "Medication", value: "medication_name" },
      { text: "Quantity", value: "quantity" },
      { text: "Price", value: "price_per_unit" },
      { text: "Grand Total", value: "grand_total" },
      { text: "isPaid", value: "is_paid" },
      { text: "Payment Method", value: "payment_method" },
      { text: "Order Date", value: "created_at" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    prescription_orders: [],
    medications: [],
    items: [],
    editedItem: {
      id: "",
      order_number: "",
      user_id: "",
      image: [],
      user: {
        first_name: "",
        last_name: "",
      },
      status: "",
      quantity: "",

      items: [
        {
          medication_id: "",
          name: "",
          price_per_unit: "",
          quantity: "",

          pivot: {
            medication_id: "",
            price_per_unit: "",
            quantity: "",
          },
        },
      ],
      item_count: "",
      grand_total: "",
      is_paid: false,
      payment_method: "",
      created_at: "",
    },

    defaultItem: {
      id: "",
      order_number: "",
      user_id: "",
      image: [],
      user: {
        first_name: "",
        last_name: "",
      },
      status: "",
      items: [
        {
          medication_id: "",
          name: "",
          price_per_unit: "",

          pivot: {
            medication_id: "",
            price_per_unit: "",
            quantity: "",
          },
        },
      ],
      item_count: "",
      grand_total: "",
      is_paid: false,
      payment_method: "",
      created_at: "",
    },
    url: "",
    errors: {},
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Update Order";
    },

    isPaid() {
      return this.editedItem.is_paid == 1 ? "Paid" : "Not Paid";
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
      this.loadPrescriptions();
      this.getMedications();
    },

    medication(e) {
      this.editedItem.items = Object.assign(e);
      //   console.log(this.editedItem);

      var temp = [];

      this.editedItem.items.map((value) => {
        console.log(value);
        if (this.editedItem.quantity == null) {
          this.editedItem.quantity = 1;
        }

        temp.push((value.price_per_unit *= this.editedItem.quantity));

        this.items.push({
          medication_id: value.id,
          price_per_unit: value.price_per_unit,
          quantity: this.editedItem.quantity,
        });
      });
      //   console.log(temp);

      var sum = temp.reduce((a, b) => a + b);
      this.editedItem.grand_total = sum.toFixed(2);

      //   this.medications.forEach((item) => {
      //     this.editedItem.items.medication_id = Object.assign(item.id);
      //   });

      //   console.log(this.editedItem.items);
    },

    editItem(item) {
      this.editedIndex = this.prescription_orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.prescription_orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm: async function () {
      this.is_loading = true;
      try {
        const response = await prescriptionService.deletePrescription(
          this.editedItem.id
        );
        this.prescription_orders.splice(this.editedIndex, 1);
        this.flashMessage.success({
          title: "Success",
          message: this.editedItem.order_number + " Deleted",
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
        formData.append("user_id", this.editedItem.user_id);
        formData.append("status", this.editedItem.status);
        formData.append("item_count", this.editedItem.item_count);
        formData.append("grand_total", this.editedItem.grand_total);
        formData.append("is_paid", JSON.stringify(this.editedItem.is_paid));
        formData.append("payment_method", this.editedItem.payment_method);
        formData.append("image", this.editedItem.image);

        formData.append("items", JSON.stringify(this.items));

        formData.forEach((value) => {
          console.log(value);
        });
        if (this.editedIndex > -1) {
          formData.append("_method", "PUT");
          const response = await prescriptionService.updatePrescription(
            this.editedItem.id,
            formData
          );

          Object.assign(
            this.prescription_orders[this.editedIndex],
            this.editedItem
          );
          this.flashMessage.success({
            title: "Success",
            message: this.editedItem.order_number + " Updated",

            time: 5000,
            icon: "/assets/icons/checked.svg",
          });
        } else {
          //   const response = await prescriptionService.createPrescription(formData);
          //   this.flashMessage.success({
          //     title: "Success",
          //     message: this.editedItem.user_id + " Prescription Created",
          //     time: 5000,
          //     icon: "/assets/icons/checked.svg",
          //   });
          this.prescription_orders.push(this.editedItem);
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
    loadPrescriptions: async function () {
      try {
        const response = await prescriptionService.loadPrescriptions();
        this.prescription_orders = response.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "There was an eroor, Please try again!",
        });
      }
    },

    attachImage(e) {
      if (e) {
        this.url = URL.createObjectURL(this.editedItem.image);

        if (this.editedIndex > -1) {
          //edit
          this.$refs.editMedicationImage = URL.createObjectURL(
            this.editedItem.image
          );
        } else {
          //create
          this.$refs.newMedicationImage = URL.createObjectURL(e);
        }
      }
    },
    getMedications: async function () {
      try {
        const response = await prescriptionService.getMedications();
        this.medications = response.data;
      } catch (error) {}
    },
  },
};
</script>
<style>
.quantity-input {
  margin-bottom: -15px;
  margin-top: -20px;
}
</style>

