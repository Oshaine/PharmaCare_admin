(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Medications.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Medications.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_medication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/medication_service */ "./resources/js/services/medication_service.js");
/* harmony import */ var _public_storage_json_med_route_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/storage/json/med_route.json */ "./storage/app/public/json/med_route.json");
var _public_storage_json_med_route_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/storage/json/med_route.json */ "./storage/app/public/json/med_route.json", 1);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "medications",
  data: function data() {
    var _editedItem, _defaultItem;

    return {
      search: "",
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: "Medication Name",
        align: "start",
        sortable: true,
        value: "name"
      }, {
        text: "Category",
        value: "category_id"
      }, {
        text: "Type",
        value: "type"
      }, {
        text: "Route",
        value: "route"
      }, {
        text: "Dosage",
        value: "dosage"
      }, {
        text: "Image",
        value: "image"
      }, {
        text: "Units",
        value: "units"
      }, {
        text: "Price Per Unit",
        value: "price_per_unit"
      }, {
        text: "Featured",
        value: "is_featured"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }],
      editedIndex: -1,
      categories: [],
      medications: [],
      editedItem: (_editedItem = {
        id: "",
        name: "",
        category_id: "",
        type: "",
        route: "",
        strength: "",
        usage: []
      }, _defineProperty(_editedItem, "strength", ""), _defineProperty(_editedItem, "dosage", ""), _defineProperty(_editedItem, "image", []), _defineProperty(_editedItem, "units", 0), _defineProperty(_editedItem, "price_per_unit", 0.0), _defineProperty(_editedItem, "is_featured", false), _editedItem),
      defaultItem: (_defaultItem = {
        id: "",
        name: "",
        category_id: "",
        type: "",
        route: "",
        strength: "",
        usage: []
      }, _defineProperty(_defaultItem, "strength", ""), _defineProperty(_defaultItem, "dosage", ""), _defineProperty(_defaultItem, "image", []), _defineProperty(_defaultItem, "units", 0), _defineProperty(_defaultItem, "price_per_unit", 0.0), _defineProperty(_defaultItem, "is_featured", false), _defaultItem),
      url: "",
      errors: {}
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Medication" : "Edit Medication";
    },
    getRoutes: function getRoutes() {
      var routes;
      return _public_storage_json_med_route_json__WEBPACK_IMPORTED_MODULE_2__.map(function (item) {
        return routes = item.route;
      });
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
      this.loadMedication();
      this.loadCategories();
      console.log(this.editedItem.is_featured);
    },
    remove: function remove(item) {
      this.editedItem.usage.splice(this.editedItem.usage.indexOf(item), 1);
      this.editedItem.usage = _toConsumableArray(this.editedItem.usage);
    },
    editItem: function editItem(item) {
      this.editedIndex = this.medications.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.medications.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      this.arr = JSON.parse(item.usage);
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
                return _services_medication_service__WEBPACK_IMPORTED_MODULE_1__["deleteMedication"](this.editedItem.id);

              case 3:
                response = _context.sent;
                this.medications.splice(this.editedIndex, 1);
                this.flashMessage.success({
                  title: "Success",
                  message: this.editedItem.name + " Category Deleted",
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
        var formData, response, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                //   var usageArray = Array.from(this.)
                formData = new FormData();
                formData.append("name", this.editedItem.name);
                formData.append("category_id", this.editedItem.category_id);
                formData.append("type", this.editedItem.type);
                formData.append("route", this.editedItem.route);
                formData.append("strength", this.editedItem.strength);
                formData.append("usage", this.editedItem.usage);
                formData.append("dosage", this.editedItem.dosage);
                formData.append("units", this.editedItem.units);
                formData.append("price_per_unit", this.editedItem.price_per_unit);
                formData.append("is_featured", JSON.stringify(this.editedItem.is_featured));
                formData.append("image", this.editedItem.image);

                if (!(this.editedIndex > -1)) {
                  _context2.next = 23;
                  break;
                }

                formData.append("_method", "PUT");
                _context2.next = 17;
                return _services_medication_service__WEBPACK_IMPORTED_MODULE_1__["updateMedication"](this.editedItem.id, formData);

              case 17:
                response = _context2.sent;
                Object.assign(this.medications[this.editedIndex], this.editedItem);
                this.flashMessage.success({
                  title: "Success",
                  message: this.editedItem.name + " Medication Updated",
                  time: 5000,
                  icon: "/assets/icons/checked.svg"
                });
                this.close();
                _context2.next = 29;
                break;

              case 23:
                _context2.next = 25;
                return _services_medication_service__WEBPACK_IMPORTED_MODULE_1__["createMedication"](formData);

              case 25:
                _response = _context2.sent;
                this.medications.push(this.editedItem);
                this.flashMessage.success({
                  title: "Success",
                  message: this.editedItem.name + " Medication Created",
                  time: 5000,
                  icon: "/assets/icons/checked.svg"
                });
                this.close();

              case 29:
                _context2.next = 34;
                break;

              case 31:
                _context2.prev = 31;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!",
                  icon: "assets/icons/warning.svg"
                });

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 31]]);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }(),
    //load all medication data
    loadMedication: function () {
      var _loadMedication = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_medication_service__WEBPACK_IMPORTED_MODULE_1__["loadMedication"]();

              case 3:
                response = _context3.sent;
                this.medications = response.data.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!",
                  icon: "assets/icons/warning.svg"
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function loadMedication() {
        return _loadMedication.apply(this, arguments);
      }

      return loadMedication;
    }(),
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_medication_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context4.sent;
                this.categories = response.data;
                return _context4.abrupt("return", this.categories.name);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!",
                  icon: "assets/icons/warning.svg"
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    getCategory: function getCategory(category_id) {
      var category_name = "";
      this.categories.forEach(function (category) {
        if (category.id == category_id) {
          category_name = category.name;
        }
      });
      return category_name;
    },
    attachImage: function attachImage(e) {
      if (e) {
        this.url = URL.createObjectURL(this.editedItem.image);
        console.log(this.url);

        if (this.editedIndex > -1) {
          //edit
          this.$refs.editMedicationImage = URL.createObjectURL(this.editedItem.image.name);
        } else {
          //create
          this.$refs.newMedicationImage = URL.createObjectURL(e);
        }
      }
    },
    showDetails: function showDetails(id) {
      this.$router.push({
        name: "single-medication",
        params: {
          id: id
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Medications.vue?vue&type=template&id=20556596&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Medications.vue?vue&type=template&id=20556596& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      }),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _vm._v("\n      Medications\n      "),
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
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.medications,
              search: _vm.search
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "top",
                  fn: function() {
                    return [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "" } },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "800px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass: "mb-2",
                                              attrs: {
                                                color: "primary",
                                                dark: ""
                                              }
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _vm._v(
                                            "\n                New Medication\n              "
                                          )
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialog,
                                callback: function($$v) {
                                  _vm.dialog = $$v
                                },
                                expression: "dialog"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c("v-card", [
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
                                                        label:
                                                          "Medication Name",
                                                        rounded: "",
                                                        outlined: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.name,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "name",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.name"
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
                                                    _c("v-select", {
                                                      attrs: {
                                                        rounded: "",
                                                        outlined: "",
                                                        items: _vm.categories,
                                                        "item-text": "name",
                                                        "item-value": "id",
                                                        label: "Category"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .category_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "category_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.category_id"
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
                                                    _c("v-select", {
                                                      attrs: {
                                                        rounded: "",
                                                        outlined: "",
                                                        items: [
                                                          "Brand",
                                                          "Generic"
                                                        ],
                                                        "item-text": "type",
                                                        label: "Type"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.type,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "type",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.type"
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
                                                    _c("v-select", {
                                                      attrs: {
                                                        rounded: "",
                                                        outlined: "",
                                                        items: _vm.getRoutes,
                                                        label: "Route"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.route,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "route",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.route"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  { attrs: { cols: "12" } },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Dosage",
                                                        rounded: "",
                                                        outlined: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.dosage,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "dosage",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.dosage"
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
                                                    _c("v-combobox", {
                                                      attrs: {
                                                        items:
                                                          _vm.editedItem.usage,
                                                        chips: "",
                                                        multiple: "",
                                                        clearable: "",
                                                        label: "Usages",
                                                        "prepend-inner-icon":
                                                          "mdi-filter-variant",
                                                        rounded: "",
                                                        outlined: ""
                                                      },
                                                      scopedSlots: _vm._u([
                                                        {
                                                          key: "selection",
                                                          fn: function(ref) {
                                                            var attrs =
                                                              ref.attrs
                                                            var item = ref.item
                                                            var select =
                                                              ref.select
                                                            var selected =
                                                              ref.selected
                                                            return [
                                                              _c(
                                                                "v-chip",
                                                                _vm._b(
                                                                  {
                                                                    attrs: {
                                                                      "input-value": selected,
                                                                      close: ""
                                                                    },
                                                                    on: {
                                                                      click: select,
                                                                      "click:close": function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.remove(
                                                                          item
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  "v-chip",
                                                                  attrs,
                                                                  false
                                                                ),
                                                                [
                                                                  _c("strong", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item
                                                                      )
                                                                    )
                                                                  ])
                                                                ]
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ]),
                                                      model: {
                                                        value:
                                                          _vm.editedItem.usage,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "usage",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.usage"
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
                                                        label: "Strength",
                                                        rounded: "",
                                                        outlined: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .strength,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "strength",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.strength"
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
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Units",
                                                        type: "number",
                                                        rounded: "",
                                                        outlined: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.units,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "units",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.units"
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
                                                          .is_featured
                                                          ? "Featured"
                                                          : "Not Featured"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .is_featured,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "is_featured",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.is_featured"
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
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Price Per Unit",
                                                        rounded: "",
                                                        outlined: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .price_per_unit,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "price_per_unit",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.price_per_unit"
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
                                                        label: "Add Image"
                                                      },
                                                      on: {
                                                        change: _vm.attachImage
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.image,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "image",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.image"
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
                                                          ? "editMedicationImage"
                                                          : "newMedicationImage",
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
                                                                .image.name
                                                            : _vm.url
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
                                              "\n                    Cancel\n                  "
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
                                    "v-card-title",
                                    { staticClass: "headline" },
                                    [
                                      _vm._v(
                                        "Are you sure you want to delete\n                " +
                                          _vm._s(_vm.editedItem.name) +
                                          "?"
                                      )
                                    ]
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
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
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
                  key: "item.category_id",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("tr", [
                        _c("td", [
                          _vm._v(_vm._s(_vm.getCategory(item.category_id)))
                        ])
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
                              return _vm.showDetails(item.id)
                            }
                          }
                        },
                        [_vm._v("\n          mdi-eye")]
                      ),
                      _vm._v(" "),
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/medication_service.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/medication_service.js ***!
  \*****************************************************/
/*! exports provided: createMedication, loadMedication, deleteMedication, updateMedication, singleMedication, loadCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMedication", function() { return createMedication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMedication", function() { return loadMedication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMedication", function() { return deleteMedication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMedication", function() { return updateMedication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleMedication", function() { return singleMedication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 //create medication

function createMedication(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/medications', data);
} //read medication

function loadMedication() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/medications');
} //delete medication

function deleteMedication(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/medications/".concat(id));
} //update medication

function updateMedication(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("medications/".concat(id), data);
} //single medication

function singleMedication(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/medications/".concat(id));
} //load medicaton with categories

function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-categories');
}

/***/ }),

/***/ "./resources/js/views/Medications.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Medications.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Medications_vue_vue_type_template_id_20556596___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Medications.vue?vue&type=template&id=20556596& */ "./resources/js/views/Medications.vue?vue&type=template&id=20556596&");
/* harmony import */ var _Medications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Medications.vue?vue&type=script&lang=js& */ "./resources/js/views/Medications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Medications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Medications_vue_vue_type_template_id_20556596___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Medications_vue_vue_type_template_id_20556596___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VCombobox: vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_8__["VCombobox"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_11__["VFileInput"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_13__["VImg"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_15__["VSwitch"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Medications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Medications.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Medications.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Medications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Medications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Medications.vue?vue&type=template&id=20556596&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Medications.vue?vue&type=template&id=20556596& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medications_vue_vue_type_template_id_20556596___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Medications.vue?vue&type=template&id=20556596& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Medications.vue?vue&type=template&id=20556596&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medications_vue_vue_type_template_id_20556596___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medications_vue_vue_type_template_id_20556596___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./storage/app/public/json/med_route.json":
/*!************************************************!*\
  !*** ./storage/app/public/json/med_route.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"route\":\"Oral\"},{\"route\":\"Injection\"},{\"route\":\"Sublingual and buccal\"},{\"route\":\"Rectal\"},{\"route\":\"Vaginal\"},{\"route\":\"Ocular\"},{\"route\":\"Otic\"},{\"route\":\"Nasal\"},{\"route\":\"Inhalation\"}]");

/***/ })

}]);