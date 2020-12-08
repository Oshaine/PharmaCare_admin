<template>
  <div>
    <div class="container">
      <h2 class="parmacare-title p-5">PharmaCare</h2>
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user" v-on:submit.prevent="register">
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        v-model="user.first_name"
                        id="first_name"
                        placeholder="First Name"
                      />
                      <div class="invalid-feedback" v-if="errors.first_name">
                        {{ errors.first_name[0] }}
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        v-model="user.last_name"
                        id="last_name"
                        placeholder="Last Name"
                      />
                      <div class="invalid-feedback" v-if="errors.last_name">
                        {{ errors.last_name[0] }}
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      v-model="user.email"
                      id="email"
                      placeholder="Email Address"
                    />
                    <div class="invalid-feedback" v-if="errors.email">
                      {{ errors.email[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="tel"
                      class="form-control form-control-user"
                      v-model="user.phone_number"
                      id="phone_number"
                      placeholder="Phone Number"
                    />
                    <div class="invalid-feedback" v-if="errors.phone_number">
                      {{ errors.phone_number[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      v-model="user.address"
                      id="address"
                      placeholder="Enter Address"
                    />
                    <div class="invalid-feedback" v-if="errors.address">
                      {{ errors.address[0] }}
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        v-model="user.password"
                        id="password"
                        placeholder="Password"
                        autocomplete="on"
                      />
                      <div class="invalid-feedback" v-if="errors.password">
                        {{ errors.password[0] }}
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        v-model="user.password_confirmation"
                        id="password_confirmation"
                        placeholder="Confim Password"
                        autocomplete="on"
                      />
                      <div
                        class="invalid-feedback"
                        v-if="errors.password_confirmation"
                      >
                        {{ errors.password_confirmation[0] }}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Register Account
                  </button>
                  <!-- <hr />
                  <a href="#" class="btn btn-google btn-user btn-block">
                    <i class="fab fa-google"></i>
                    Register with Google
                  </a>
                  <a href="#" class="btn btn-facebook btn-user btn-block">
                    <i class="fab fa-facebook-f"></i> Register with Facebook
                  </a> -->
                </form>
                <br /><br />
                <hr />
                <div class="text-center">
                  <router-link class="small" to="/forgot-password"
                    >Forgot Password?</router-link
                  >
                </div>
                <div class="text-center">
                  <router-link class="small" to="/login" exact
                    >Already have an account? Login!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as auth from "../../services/auth_service";
export default {
  name: "Register",
  created() {
    document.querySelector("#app").style.backgroundColor = "#36b9cc";
  },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        phone_number: "",
        address: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    register: async function () {
      try {
        await auth.register(this.user);
        this.errors = {};
        this.$router.push("/login");
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 500:
            this.flashMessage.error({
              title: "Error",
              message: error.response.data.message,
              time: 5000,
              icon: "assets/icons/warning.svg",
            });
            break;

          default:
            this.flashMessage.error({
              title: "Error",
              message: "There was an eroor, Please try again!",
              time: 5000,
              icon: "assets/icons/warning.svg",
            });
            break;
        }
      }
    },
  },
};
</script>
