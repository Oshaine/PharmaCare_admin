(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PrescriptionOrders.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PrescriptionOrders.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_prescription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/prescription_service */ "./resources/js/services/prescription_service.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PrescriptionOrders",
  data: function data() {
    return {
      is_loading: false,
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
        text: "Prescription",
        value: "image"
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
          last_name: ""
        },
        status: "",
        quantity: "",
        items: [{
          medication_id: "",
          name: "",
          price_per_unit: "",
          quantity: "",
          pivot: {
            medication_id: "",
            price_per_unit: "",
            quantity: ""
          }
        }],
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
        image: [],
        user: {
          first_name: "",
          last_name: ""
        },
        status: "",
        items: [{
          medication_id: "",
          name: "",
          price_per_unit: "",
          pivot: {
            medication_id: "",
            price_per_unit: "",
            quantity: ""
          }
        }],
        item_count: "",
        grand_total: "",
        is_paid: false,
        payment_method: "",
        created_at: ""
      },
      url: "",
      errors: {}
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
      this.loadPrescriptions();
      this.getMedications();
    },
    medication: function medication(e) {
      var _this = this;

      this.editedItem.items = Object.assign(e); //   console.log(this.editedItem);

      var temp = [];
      this.editedItem.items.map(function (value) {
        console.log(value);

        if (_this.editedItem.quantity == null) {
          _this.editedItem.quantity = 1;
        }

        temp.push(value.price_per_unit *= _this.editedItem.quantity);

        _this.items.push({
          medication_id: value.id,
          price_per_unit: value.price_per_unit,
          quantity: _this.editedItem.quantity
        });
      }); //   console.log(temp);

      var sum = temp.reduce(function (a, b) {
        return a + b;
      });
      this.editedItem.grand_total = sum.toFixed(2); //   this.medications.forEach((item) => {
      //     this.editedItem.items.medication_id = Object.assign(item.id);
      //   });
      //   console.log(this.editedItem.items);
    },
    editItem: function editItem(item) {
      this.editedIndex = this.prescription_orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.prescription_orders.indexOf(item);
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
                this.is_loading = true;
                _context.prev = 1;
                _context.next = 4;
                return _services_prescription_service__WEBPACK_IMPORTED_MODULE_1__["deletePrescription"](this.editedItem.id);

              case 4:
                response = _context.sent;
                this.prescription_orders.splice(this.editedIndex, 1);
                this.flashMessage.success({
                  title: "Success",
                  message: this.editedItem.order_number + " Deleted",
                  time: 5000,
                  icon: "/assets/icons/checked.svg"
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!",
                  icon: "assets/icons/warning.svg"
                });

              case 12:
                this.closeDelete();
                this.is_loading = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function deleteItemConfirm() {
        return _deleteItemConfirm.apply(this, arguments);
      }

      return deleteItemConfirm;
    }(),
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this3 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    save: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.is_loading = true;
                _context2.prev = 1;
                formData = new FormData();
                formData.append("user_id", this.editedItem.user_id);
                formData.append("status", this.editedItem.status);
                formData.append("item_count", this.editedItem.item_count);
                formData.append("grand_total", this.editedItem.grand_total);
                formData.append("is_paid", JSON.stringify(this.editedItem.is_paid));
                formData.append("payment_method", this.editedItem.payment_method);
                formData.append("image", this.editedItem.image);
                formData.append("items", JSON.stringify(this.items));
                formData.forEach(function (value) {
                  console.log(value);
                });

                if (!(this.editedIndex > -1)) {
                  _context2.next = 21;
                  break;
                }

                formData.append("_method", "PUT");
                _context2.next = 16;
                return _services_prescription_service__WEBPACK_IMPORTED_MODULE_1__["updatePrescription"](this.editedItem.id, formData);

              case 16:
                response = _context2.sent;
                Object.assign(this.prescription_orders[this.editedIndex], this.editedItem);
                this.flashMessage.success({
                  title: "Success",
                  message: this.editedItem.order_number + " Updated",
                  time: 5000,
                  icon: "/assets/icons/checked.svg"
                });
                _context2.next = 22;
                break;

              case 21:
                //   const response = await prescriptionService.createPrescription(formData);
                //   this.flashMessage.success({
                //     title: "Success",
                //     message: this.editedItem.user_id + " Prescription Created",
                //     time: 5000,
                //     icon: "/assets/icons/checked.svg",
                //   });
                this.prescription_orders.push(this.editedItem);

              case 22:
                _context2.next = 27;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](1);
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!",
                  icon: "assets/icons/warning.svg"
                });

              case 27:
                this.close();
                this.is_loading = false;

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 24]]);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }(),
    loadPrescriptions: function () {
      var _loadPrescriptions = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_prescription_service__WEBPACK_IMPORTED_MODULE_1__["loadPrescriptions"]();

              case 3:
                response = _context3.sent;
                this.prescription_orders = response.data;
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

      function loadPrescriptions() {
        return _loadPrescriptions.apply(this, arguments);
      }

      return loadPrescriptions;
    }(),
    attachImage: function attachImage(e) {
      if (e) {
        this.url = URL.createObjectURL(this.editedItem.image);

        if (this.editedIndex > -1) {
          //edit
          this.$refs.editMedicationImage = URL.createObjectURL(this.editedItem.image);
        } else {
          //create
          this.$refs.newMedicationImage = URL.createObjectURL(e);
        }
      }
    },
    getMedications: function () {
      var _getMedications = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_prescription_service__WEBPACK_IMPORTED_MODULE_1__["getMedications"]();

              case 3:
                response = _context4.sent;
                this.medications = response.data;
                _context4.next = 9;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function getMedications() {
        return _getMedications.apply(this, arguments);
      }

      return getMedications;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.quantity-input {\n  margin-bottom: -15px;\n  margin-top: -20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PrescriptionOrders.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PrescriptionOrders.vue?vue&type=template&id=3061177e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PrescriptionOrders.vue?vue&type=template&id=3061177e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
              items: _vm.prescription_orders,
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
                              _c("v-card", [
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.is_loading,
                                        expression: "is_loading"
                                      }
                                    ]
                                  },
                                  [
                                    _c("v-progress-linear", {
                                      attrs: {
                                        indeterminate: "",
                                        color: "cyan"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.save($event)
                                      }
                                    }
                                  },
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
                                                        callback: function(
                                                          $$v
                                                        ) {
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
                                                        callback: function(
                                                          $$v
                                                        ) {
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
                                                        callback: function(
                                                          $$v
                                                        ) {
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
                                                      md: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-file-input", {
                                                      attrs: {
                                                        "v-model":
                                                          _vm.editedIndex > -1
                                                            ? _vm.editedItem
                                                                .image.name
                                                            : _vm.editedItem
                                                                .image,
                                                        label: "Add Image"
                                                      },
                                                      on: {
                                                        change: _vm.attachImage
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
                                                    _c("v-img", {
                                                      ref:
                                                        _vm.editedIndex > -1
                                                          ? "editPrescriptionImage"
                                                          : "newPrescriptionImage",
                                                      staticStyle: {
                                                        width: "200px",
                                                        "margin-left": "80px"
                                                      },
                                                      attrs: {
                                                        src:
                                                          _vm.editedIndex > -1
                                                            ? _vm.$store.state
                                                                .serverPath +
                                                              "/storage/" +
                                                              _vm.editedItem
                                                                .image
                                                            : _vm.url
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
                                                        disabled: "",
                                                        items: [
                                                          "Cash On Pickup",
                                                          "PayPal",
                                                          "Card"
                                                        ],
                                                        "prepend-inner-icon":
                                                          "mdi-cash-multiple",
                                                        label: "Payment Method"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .payment_method,
                                                        callback: function(
                                                          $$v
                                                        ) {
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
                                                          _vm.editedItem
                                                            .is_paid,
                                                        callback: function(
                                                          $$v
                                                        ) {
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
                                                        disabled:
                                                          _vm.editedItem
                                                            .status ==
                                                          "Completed",
                                                        "prepend-inner-icon":
                                                          "mdi-clock-fast",
                                                        items: [
                                                          "Pending",
                                                          "Not Available",
                                                          "Processing",
                                                          "Completed",
                                                          "Decline",
                                                          "Ready for Pickup"
                                                        ],
                                                        label: "Status"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.status,
                                                        callback: function(
                                                          $$v
                                                        ) {
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
                                                  "v-container",
                                                  { attrs: { fluid: "" } },
                                                  [
                                                    _c(
                                                      "v-row",
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "12"
                                                            }
                                                          },
                                                          [
                                                            _c("v-combobox", {
                                                              attrs: {
                                                                "v-model":
                                                                  _vm.editedItem
                                                                    .items
                                                                    .medication_id,
                                                                items:
                                                                  _vm.medications,
                                                                "item-text":
                                                                  "name",
                                                                "item-value":
                                                                  "medication_id",
                                                                label:
                                                                  "Medications",
                                                                multiple: "",
                                                                rounded: "",
                                                                outlined: "",
                                                                chips: ""
                                                              },
                                                              on: {
                                                                change:
                                                                  _vm.medication
                                                              }
                                                            })
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
                                                            _vm.editedItem
                                                              .items,
                                                            function(item) {
                                                              return _c(
                                                                "v-list-item",
                                                                {
                                                                  key: item.id
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-list-item-content",
                                                                    [
                                                                      _c(
                                                                        "v-list-item-title",
                                                                        {
                                                                          attrs: {
                                                                            "v-model":
                                                                              _vm
                                                                                .editedItem
                                                                                .items
                                                                                .medication_id
                                                                          },
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
                                                            _vm.editedItem
                                                              .items,
                                                            function(item) {
                                                              return _c(
                                                                "v-list-item",
                                                                {
                                                                  key: item.id
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-list-item-content",
                                                                    [
                                                                      _c(
                                                                        "v-list-item-title",
                                                                        [
                                                                          _c(
                                                                            "v-text-field",
                                                                            {
                                                                              staticClass:
                                                                                "quantity-input",
                                                                              attrs: {
                                                                                type:
                                                                                  "number"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .editedItem
                                                                                    .items
                                                                                    .quantity,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .editedItem
                                                                                      .items,
                                                                                    "quantity",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "editedItem.items.quantity"
                                                                              }
                                                                            }
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
                                                            _vm.editedItem
                                                              .items,
                                                            function(item) {
                                                              return _c(
                                                                "v-list-item",
                                                                {
                                                                  key: item.id
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-list-item-content",
                                                                    [
                                                                      _c(
                                                                        "v-list-item-title",
                                                                        {
                                                                          attrs: {
                                                                            "v-model":
                                                                              _vm
                                                                                .editedItem
                                                                                .items
                                                                                .price_per_unit
                                                                          },
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
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "6"
                                                    }
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
                                                        callback: function(
                                                          $$v
                                                        ) {
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
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "6"
                                                    }
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
                                                                          "v-model": new Date(
                                                                            _vm.editedItem.created_at
                                                                          ).toLocaleString(),
                                                                          label:
                                                                            "Order Date",
                                                                          "prepend-inner-icon":
                                                                            "mdi-calendar",
                                                                          readonly:
                                                                            ""
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
                                                                  color:
                                                                    "primary"
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
                                                                  "\n                              Cancel\n                            "
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  text: "",
                                                                  color:
                                                                    "primary"
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
                                                                  "\n                              OK\n                            "
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
                                              "\n                    Close\n                  "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              color: "blue darken-1",
                                              type: "submit",
                                              text: ""
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Save\n                  "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
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
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.is_loading,
                                      expression: "is_loading"
                                    }
                                  ]
                                },
                                [
                                  _c("v-progress-linear", {
                                    attrs: { indeterminate: "", color: "cyan" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
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
                  key: "item.image",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "tr",
                        [
                          _c("v-img", {
                            staticClass: "table-image",
                            attrs: {
                              "lazy-src": "",
                              src:
                                _vm.$store.state.serverPath +
                                "/storage/" +
                                item.image,
                              alt: item.name
                            }
                          })
                        ],
                        1
                      )
                    ]
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
          _vm._v("Prescription Orders")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/prescription_service.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/prescription_service.js ***!
  \*******************************************************/
/*! exports provided: createPrescription, loadPrescriptions, deletePrescription, updatePrescription, loadUsers, getMedications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrescription", function() { return createPrescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPrescriptions", function() { return loadPrescriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePrescription", function() { return deletePrescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePrescription", function() { return updatePrescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsers", function() { return loadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMedications", function() { return getMedications; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 //create prescriptions

function createPrescription(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/prescriptions', data);
} //read prescription

function loadPrescriptions() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/prescriptions');
} //delete prescription

function deletePrescription(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/prescriptions/".concat(id));
} //update prescription

function updatePrescription(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("prescriptions/".concat(id), data);
} //load medicaton with categories

function loadUsers() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/all-users');
} //load prescribed medications

function getMedications() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/prescribed-medications');
}

/***/ }),

/***/ "./resources/js/views/PrescriptionOrders.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/PrescriptionOrders.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrescriptionOrders_vue_vue_type_template_id_3061177e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrescriptionOrders.vue?vue&type=template&id=3061177e& */ "./resources/js/views/PrescriptionOrders.vue?vue&type=template&id=3061177e&");
/* harmony import */ var _PrescriptionOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrescriptionOrders.vue?vue&type=script&lang=js& */ "./resources/js/views/PrescriptionOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PrescriptionOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrescriptionOrders.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PrescriptionOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrescriptionOrders_vue_vue_type_template_id_3061177e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrescriptionOrders_vue_vue_type_template_id_3061177e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VCombobox: vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_8__["VCombobox"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_10__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__["VDialog"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_12__["VFileInput"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_14__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VListItemGroup"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VListItemTitle"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_16__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_17__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_18__["VSubheader"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_19__["VSwitch"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_20__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/PrescriptionOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/PrescriptionOrders.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/PrescriptionOrders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PrescriptionOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PrescriptionOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PrescriptionOrders.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PrescriptionOrders.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/PrescriptionOrders.vue?vue&type=template&id=3061177e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/PrescriptionOrders.vue?vue&type=template&id=3061177e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_template_id_3061177e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PrescriptionOrders.vue?vue&type=template&id=3061177e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PrescriptionOrders.vue?vue&type=template&id=3061177e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_template_id_3061177e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrescriptionOrders_vue_vue_type_template_id_3061177e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);