(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/OverCounterOrders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/OverCounterOrders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/order_service */ "./resources/js/services/order_service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "OverTheCounterOrders",
  data: function data() {
    return {
      search: "",
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: "Order Number",
        align: "start",
        sortable: false,
        value: "order_number"
      }, //   { text: "Customer", value: "customer" },
      {
        text: "First Name",
        value: "user.first_name"
      }, {
        text: "Last Name",
        value: "user.last_name"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Medication",
        value: "medication_name"
      }, {
        text: "Quantity",
        value: "quantity"
      }, {
        text: "Price",
        value: "price_per_unit"
      }, {
        text: "Grand Total",
        value: "grand_total"
      }, {
        text: "isPaid",
        value: "is_paid"
      }, {
        text: "Payment Method",
        value: "payment_method"
      }, {
        text: "Order Date",
        value: "created_at"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }],
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
          last_name: ""
        },
        status: "",
        items: [{
          name: "",
          price_per_unit: "",
          pivot: {
            quantity: ""
          }
        }],
        price: "",
        item_count: "",
        grand_total: "",
        is_paid: false,
        payment_method: "",
        created_at: ""
      },
      defaultItem: {
        id: "",
        order_number: "",
        user_id: "",
        user: {
          first_name: "",
          last_name: ""
        },
        status: "",
        items: [{
          name: "",
          price_per_unit: "",
          pivot: {
            quantity: ""
          }
        }],
        price: "",
        item_count: "",
        grand_total: "",
        is_paid: false,
        payment_method: "",
        created_at: ""
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Update Order";
    },
    isPaid: function isPaid() {
      return this.editedItem.is_paid == 1 ? "Paid" : "Not Paid";
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.getOrders();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm: function () {
      var _deleteItemConfirm = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_order_service__WEBPACK_IMPORTED_MODULE_1__["deleteOrders"](this.editedItem.id);

              case 3:
                response = _context.sent;
                this.orders.splice(this.editedIndex, 1);
                this.flashMessage.success({
                  title: "Success",
                  message: this.editedItem.user.first_name + " " + this.editedItem.user.last_name + " Order Deleted",
                  time: 5000,
                  icon: "/assets/icons/checked.svg"
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!",
                  icon: "assets/icons/warning.svg"
                });

              case 11:
                this.closeDelete();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function deleteItemConfirm() {
        return _deleteItemConfirm.apply(this, arguments);
      }

      return deleteItemConfirm;
    }(),
    close: function close() {
      var _this = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this.editedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this2 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      });
    },
    save: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var data, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(this.editedIndex > -1)) {
                  _context2.next = 10;
                  break;
                }

                data = {
                  id: this.editedItem.id,
                  order_number: this.editedItem.order_number,
                  user_id: this.editedItem.user_id,
                  status: this.editedItem.status,
                  item_count: this.editedItem.item_count,
                  grand_total: this.editedItem.grand_total,
                  is_paid: this.editedItem.is_paid,
                  payment_method: this.editedItem.payment_method,
                  created_at: this.editedItem.created_at
                };
                _context2.next = 5;
                return _services_order_service__WEBPACK_IMPORTED_MODULE_1__["updateOrders"](this.editedItem.id, data);

              case 5:
                response = _context2.sent;
                Object.assign(this.orders[this.editedIndex], this.editedItem);
                this.flashMessage.success({
                  title: "Success",
                  message: this.editedItem.user.first_name + " " + this.editedItem.user.last_name + " Order Updated",
                  time: 5000,
                  icon: "/assets/icons/checked.svg"
                });
                _context2.next = 11;
                break;

              case 10:
                this.orders.push(this.editedItem);

              case 11:
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!",
                  icon: "assets/icons/warning.svg"
                });

              case 16:
                this.close();

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13]]);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }(),
    getOrders: function () {
      var _getOrders = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_order_service__WEBPACK_IMPORTED_MODULE_1__["getOrders"]();

              case 3:
                response = _context3.sent;
                this.orders = response.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!"
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function getOrders() {
        return _getOrders.apply(this, arguments);
      }

      return getOrders;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/OverCounterOrders.vue?vue&type=template&id=430e3dfe&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/OverCounterOrders.vue?vue&type=template&id=430e3dfe& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "p-5", attrs: { id: "content" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _vm._v("\n      Orders\n      "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              items: _vm.orders,
              search: _vm.search
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "top",
                  fn: function() {
                    return [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: { persistent: "", "max-width": "800px" },
                              model: {
                                value: _vm.dialog,
                                callback: function($$v) {
                                  _vm.dialog = $$v
                                },
                                expression: "dialog"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v(_vm._s(_vm.formTitle))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-container",
                                        [
                                          _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Order Number",
                                                      "prepend-inner-icon":
                                                        "mdi-receipt",
                                                      solo: "",
                                                      disabled: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem
                                                          .order_number,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "order_number",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.order_number"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "First Name",
                                                      "prepend-inner-icon":
                                                        "mdi-account",
                                                      disabled: "",
                                                      rounded: "",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.user
                                                          .first_name,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem.user,
                                                          "first_name",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.user.first_name"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Last Name",
                                                      "prepend-inner-icon":
                                                        "mdi-account",
                                                      disabled: "",
                                                      rounded: "",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.user
                                                          .last_name,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem.user,
                                                          "last_name",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.user.last_name"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      rounded: "",
                                                      outlined: "",
                                                      readonly: "",
                                                      items: [
                                                        "cash_on_delivery",
                                                        "paypal",
                                                        "card"
                                                      ],
                                                      "prepend-inner-icon":
                                                        "mdi-cash-multiple",
                                                      label: "Payment Method"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem
                                                          .payment_method,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "payment_method",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.payment_method"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                [
                                                  _c("v-switch", {
                                                    attrs: {
                                                      inset: "",
                                                      label: _vm.editedItem
                                                        .is_paid
                                                        ? "Paid"
                                                        : "Not Paid"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.is_paid,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "is_paid",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.is_paid"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      rounded: "",
                                                      outlined: "",
                                                      "prepend-inner-icon":
                                                        "mdi-clock-fast",
                                                      items: [
                                                        "pending",
                                                        "processing",
                                                        "completed",
                                                        "decline"
                                                      ],
                                                      label: "Status"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.status,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "status",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.status"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list",
                                                    { attrs: { dense: "" } },
                                                    [
                                                      _c("v-subheader", [
                                                        _vm._v("Medication")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-group",
                                                        {
                                                          attrs: {
                                                            color: "primary"
                                                          }
                                                        },
                                                        _vm._l(
                                                          _vm.editedItem.items,
                                                          function(item) {
                                                            return _c(
                                                              "v-list-item",
                                                              { key: item.id },
                                                              [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        domProps: {
                                                                          textContent: _vm._s(
                                                                            item.name
                                                                          )
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          }
                                                        ),
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list",
                                                    { attrs: { dense: "" } },
                                                    [
                                                      _c("v-subheader", [
                                                        _vm._v("Quantity")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-group",
                                                        {
                                                          attrs: {
                                                            color: "primary"
                                                          }
                                                        },
                                                        _vm._l(
                                                          _vm.editedItem.items,
                                                          function(item) {
                                                            return _c(
                                                              "v-list-item",
                                                              { key: item.id },
                                                              [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        domProps: {
                                                                          textContent: _vm._s(
                                                                            item
                                                                              .pivot
                                                                              .quantity
                                                                          )
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          }
                                                        ),
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list",
                                                    { attrs: { dense: "" } },
                                                    [
                                                      _c("v-subheader", [
                                                        _vm._v("Price")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-group",
                                                        {
                                                          attrs: {
                                                            color: "primary"
                                                          }
                                                        },
                                                        _vm._l(
                                                          _vm.editedItem.items,
                                                          function(item) {
                                                            return _c(
                                                              "v-list-item",
                                                              { key: item.id },
                                                              [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        domProps: {
                                                                          textContent: _vm._s(
                                                                            item.price_per_unit
                                                                          )
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          }
                                                        ),
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", sm: "6" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Grand Total",
                                                      disabled: "",
                                                      rounded: "",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem
                                                          .grand_total,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "grand_total",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.grand_total"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", sm: "6" }
                                                },
                                                [
                                                  _c(
                                                    "v-dialog",
                                                    {
                                                      ref: "dialog",
                                                      attrs: {
                                                        "return-value":
                                                          _vm.date,
                                                        persistent: "",
                                                        width: "290px"
                                                      },
                                                      on: {
                                                        "update:returnValue": function(
                                                          $event
                                                        ) {
                                                          _vm.date = $event
                                                        },
                                                        "update:return-value": function(
                                                          $event
                                                        ) {
                                                          _vm.date = $event
                                                        }
                                                      },
                                                      scopedSlots: _vm._u([
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            var attrs =
                                                              ref.attrs
                                                            return [
                                                              _c(
                                                                "v-text-field",
                                                                _vm._g(
                                                                  _vm._b(
                                                                    {
                                                                      attrs: {
                                                                        disabled:
                                                                          "",
                                                                        rounded:
                                                                          "",
                                                                        outlined:
                                                                          "",
                                                                        label:
                                                                          "Order Date",
                                                                        "prepend-inner-icon":
                                                                          "mdi-calendar",
                                                                        readonly:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value: new Date(
                                                                          _vm.editedItem.created_at
                                                                        ).toLocaleString(),
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            new Date(
                                                                              _vm.editedItem.created_at
                                                                            ),
                                                                            "toLocaleString()",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "\n                              new Date(editedItem.created_at).toLocaleString()\n                            "
                                                                      }
                                                                    },
                                                                    "v-text-field",
                                                                    attrs,
                                                                    false
                                                                  ),
                                                                  on
                                                                )
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ]),
                                                      model: {
                                                        value: _vm.modal,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.modal = $$v
                                                        },
                                                        expression: "modal"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-date-picker",
                                                        {
                                                          attrs: {
                                                            type: "day",
                                                            scrollable: ""
                                                          },
                                                          model: {
                                                            value: _vm.date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.date = $$v
                                                            },
                                                            expression: "date"
                                                          }
                                                        },
                                                        [
                                                          _c("v-spacer"),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                text: "",
                                                                color: "primary"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.modal = false
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                            Cancel\n                          "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                text: "",
                                                                color: "primary"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$refs.dialog.save(
                                                                    _vm.date
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                            OK\n                          "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.close }
                                        },
                                        [
                                          _vm._v(
                                            "\n                  Close\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.save }
                                        },
                                        [_vm._v(" Save ")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "800px" },
                          model: {
                            value: _vm.dialogDelete,
                            callback: function($$v) {
                              _vm.dialogDelete = $$v
                            },
                            expression: "dialogDelete"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", { staticClass: "headline" }, [
                                _vm._v(
                                  "Are you sure you want to delete\n              " +
                                    _vm._s(_vm.editedItem.order_number) +
                                    "?"
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: { click: _vm.closeDelete }
                                    },
                                    [_vm._v("Cancel")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: { click: _vm.deleteItemConfirm }
                                    },
                                    [_vm._v("OK")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer")
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.medication_name",
                  fn: function(ref) {
                    var item = ref.item
                    return _vm._l(item.items, function(value) {
                      return _c("tr", { key: value.id }, [
                        _c("td", [_vm._v(_vm._s(value.name))])
                      ])
                    })
                  }
                },
                {
                  key: "item.is_paid",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("tr", [
                        _c("td", [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.is_paid ? "Paid" : "Not Paid") +
                              "\n          "
                          )
                        ])
                      ])
                    ]
                  }
                },
                {
                  key: "item.quantity",
                  fn: function(ref) {
                    var item = ref.item
                    return _vm._l(item.items, function(value) {
                      return _c("tr", { key: value.id }, [
                        _c("td", [_vm._v(_vm._s(value.pivot.quantity))])
                      ])
                    })
                  }
                },
                {
                  key: "item.price_per_unit",
                  fn: function(ref) {
                    var item = ref.item
                    return _vm._l(item.items, function(value) {
                      return _c("tr", { key: value.id }, [
                        _c("td", [_vm._v(_vm._s(value.price_per_unit))])
                      ])
                    })
                  }
                },
                {
                  key: "item.created_at",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("td", [
                        _vm._v(
                          "\n          " +
                            _vm._s(new Date(item.created_at).toLocaleString()) +
                            "\n        "
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.editItem(item)
                            }
                          }
                        },
                        [_vm._v("\n          mdi-pencil\n        ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.deleteItem(item)
                            }
                          }
                        },
                        [_vm._v(" mdi-delete ")]
                      )
                    ]
                  }
                }
              ],
              null,
              true
            )
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      },
      [
        _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
          _vm._v("Over The Counter Orders")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/order_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/order_service.js ***!
  \************************************************/
/*! exports provided: createOrders, getOrders, deleteOrders, updateOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrders", function() { return createOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrders", function() { return getOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOrders", function() { return deleteOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrders", function() { return updateOrders; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 //create category

function createOrders(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/orders', data);
} //reade category

function getOrders() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/orders');
} //delete category

function deleteOrders(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/orders/".concat(id));
} //update category

function updateOrders(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("orders/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/views/OverCounterOrders.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/OverCounterOrders.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OverCounterOrders_vue_vue_type_template_id_430e3dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverCounterOrders.vue?vue&type=template&id=430e3dfe& */ "./resources/js/views/OverCounterOrders.vue?vue&type=template&id=430e3dfe&");
/* harmony import */ var _OverCounterOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverCounterOrders.vue?vue&type=script&lang=js& */ "./resources/js/views/OverCounterOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OverCounterOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OverCounterOrders_vue_vue_type_template_id_430e3dfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OverCounterOrders_vue_vue_type_template_id_430e3dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemGroup"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemTitle"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_13__["VSubheader"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_14__["VSwitch"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/OverCounterOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/OverCounterOrders.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/OverCounterOrders.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverCounterOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OverCounterOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/OverCounterOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverCounterOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/OverCounterOrders.vue?vue&type=template&id=430e3dfe&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/OverCounterOrders.vue?vue&type=template&id=430e3dfe& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverCounterOrders_vue_vue_type_template_id_430e3dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OverCounterOrders.vue?vue&type=template&id=430e3dfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/OverCounterOrders.vue?vue&type=template&id=430e3dfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverCounterOrders_vue_vue_type_template_id_430e3dfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverCounterOrders_vue_vue_type_template_id_430e3dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);