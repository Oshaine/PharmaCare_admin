(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Register",
  created: function created() {
    document.querySelector("#app").style.backgroundColor = "#36b9cc";
  },
  data: function data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        phone_number: "",
        address: "",
        password: "",
        password_confirmation: ""
      },
      errors: {}
    };
  },
  methods: {
    register: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["register"](this.user);

              case 3:
                this.errors = {};
                this.$router.push("/login");
                _context.next = 18;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 12 : _context.t1 === 500 ? 14 : 16;
                break;

              case 12:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 18);

              case 14:
                this.flashMessage.error({
                  title: "Error",
                  message: _context.t0.response.data.message,
                  time: 5000,
                  icon: "assets/icons/warning.svg"
                });
                return _context.abrupt("break", 18);

              case 16:
                this.flashMessage.error({
                  title: "Error",
                  message: "There was an eroor, Please try again!",
                  time: 5000,
                  icon: "assets/icons/warning.svg"
                });
                return _context.abrupt("break", 18);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("h2", { staticClass: "parmacare-title p-5" }, [_vm._v("PharmaCare")]),
      _vm._v(" "),
      _c("div", { staticClass: "card o-hidden border-0 shadow-lg my-5" }, [
        _c("div", { staticClass: "card-body p-0" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", {
              staticClass: "col-lg-5 d-none d-lg-block bg-register-image"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-7" }, [
              _c("div", { staticClass: "p-5" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "user",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.register($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.first_name,
                              expression: "user.first_name"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            id: "first_name",
                            placeholder: "First Name"
                          },
                          domProps: { value: _vm.user.first_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "first_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.first_name
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.errors.first_name[0]) +
                                  "\n                    "
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.last_name,
                              expression: "user.last_name"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "text",
                            id: "last_name",
                            placeholder: "Last Name"
                          },
                          domProps: { value: _vm.user.last_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "last_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.last_name
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.errors.last_name[0]) +
                                  "\n                    "
                              )
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "email",
                          id: "email",
                          placeholder: "Email Address"
                        },
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.errors.email[0]) +
                                "\n                  "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.phone_number,
                            expression: "user.phone_number"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "tel",
                          id: "phone_number",
                          placeholder: "Phone Number"
                        },
                        domProps: { value: _vm.user.phone_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "phone_number",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.phone_number
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.errors.phone_number[0]) +
                                "\n                  "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.address,
                            expression: "user.address"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "text",
                          id: "address",
                          placeholder: "Enter Address"
                        },
                        domProps: { value: _vm.user.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "address", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.address
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.errors.address[0]) +
                                "\n                  "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password,
                              expression: "user.password"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "password",
                            id: "password",
                            placeholder: "Password",
                            autocomplete: "on"
                          },
                          domProps: { value: _vm.user.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.password
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.errors.password[0]) +
                                  "\n                    "
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password_confirmation,
                              expression: "user.password_confirmation"
                            }
                          ],
                          staticClass: "form-control form-control-user",
                          attrs: {
                            type: "password",
                            id: "password_confirmation",
                            placeholder: "Confim Password",
                            autocomplete: "on"
                          },
                          domProps: { value: _vm.user.password_confirmation },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.password_confirmation
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.errors.password_confirmation[0]) +
                                  "\n                    "
                              )
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-user btn-block",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                  Register Account\n                "
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small",
                        attrs: { to: "/forgot-password" }
                      },
                      [_vm._v("Forgot Password?")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small",
                        attrs: { to: "/login", exact: "" }
                      },
                      [_vm._v("Already have an account? Login!")]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h1", { staticClass: "h4 text-gray-900 mb-4" }, [
        _vm._v("Create an Account!")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/authentication/Register.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=4aa4e5cb& */ "./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=4aa4e5cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);