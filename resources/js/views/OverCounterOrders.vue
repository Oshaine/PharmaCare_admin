<template>
  <div id="content" class="p-5">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Over The Counter Orders</h1>
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

      <v-data-table :headers="headers" :items="orders" :search="search">
        <template v-slot:top>
          <v-spacer></v-spacer>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="800px">
              <v-card>
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
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          rounded
                          outlined
                          readonly
                          :items="['cash_on_delivery', 'paypal', 'card']"
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
                          prepend-inner-icon="mdi-clock-fast"
                          :items="[
                            'pending',
                            'processing',
                            'completed',
                            'decline',
                          ]"
                          v-model="editedItem.status"
                          label="Status"
                        ></v-select>
                      </v-col>
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
                                <v-list-item-title
                                  v-text="item.pivot.quantity"
                                ></v-list-item-title>
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
                              v-model="
                                new Date(editedItem.created_at).toLocaleString()
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
import * as orderService from "../services/order_service";
import Axios from "axios";
export default {
  name: "OverTheCounterOrders",
  data: () => ({
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
    orders: [],
    editedItem: {
      id: "",
      order_number: "",
      user_id: "",
      user: {
        first_name: "",
        last_name: "",
      },
      status: "",
      items: [
        {
          name: "",
          price_per_unit: "",
          pivot: {
            quantity: "",
          },
        },
      ],
      price: "",
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
      user: {
        first_name: "",
        last_name: "",
      },
      status: "",
      items: [
        {
          name: "",
          price_per_unit: "",
          pivot: {
            quantity: "",
          },
        },
      ],
      price: "",
      item_count: "",
      grand_total: "",
      is_paid: false,
      payment_method: "",
      created_at: "",
    },
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
      this.getOrders();
    },
    editItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm: async function () {
      try {
        const response = await orderService.deleteOrders(this.editedItem.id);
        this.orders.splice(this.editedIndex, 1);
        this.flashMessage.success({
          title: "Success",
          message:
            this.editedItem.user.first_name +
            " " +
            this.editedItem.user.last_name +
            " Order Deleted",
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
      try {
        if (this.editedIndex > -1) {
          var data = {
            id: this.editedItem.id,
            order_number: this.editedItem.order_number,
            user_id: this.editedItem.user_id,
            status: this.editedItem.status,
            item_count: this.editedItem.item_count,
            grand_total: this.editedItem.grand_total,
            is_paid: this.editedItem.is_paid,
            payment_method: this.editedItem.payment_method,
            created_at: this.editedItem.created_at,
          };
          const response = await orderService.updateOrders(
            this.editedItem.id,
            data
          );
          Object.assign(this.orders[this.editedIndex], this.editedItem);
          this.flashMessage.success({
            title: "Success",
            message:
              this.editedItem.user.first_name +
              " " +
              this.editedItem.user.last_name +
              " Order Updated",
            time: 5000,
            icon: "/assets/icons/checked.svg",
          });
        } else {
          this.orders.push(this.editedItem);
        }
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "There was an eroor, Please try again!",
          icon: "assets/icons/warning.svg",
        });
      }
      this.close();
    },
    getOrders: async function () {
      try {
        const response = await orderService.getOrders();
        this.orders = response.data;
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

