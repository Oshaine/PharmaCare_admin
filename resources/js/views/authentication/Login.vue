<template>
  <div>
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <h2 class="parmacare-title">PharmaCare</h2>
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user" v-on:submit.prevent="login">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          v-model="user.email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address"
                        />
                        <div class="invalid-feedback" v-if="errors.email">
                          {{ errors.email[0] }}
                        </div>
                      </div>
                      <div class="form-group">
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
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="user.remember_me"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                      <hr />
                      <a href="#" class="btn btn-google btn-user btn-block">
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a href="#" class="btn btn-facebook btn-user btn-block">
                        <i class="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <router-link class="small" to="/forgot-password-request"
                        >Forgot Password?</router-link
                      >
                    </div>
                    <div class="text-center">
                      <router-link class="small" to="/register"
                        >Create an Account!</router-link
                      >
                    </div>
                  </div>
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
  name: "Login",
  created() {
    document.querySelector("body").style.backgroundColor = "#36b9cc";
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember_me: false,
      },
      errors: {},
    };
  },
  methods: {
    login: async function () {
      try {
        const response = await auth.login(this.user);
        this.errors = {};
        //rediret user to dashboard
        this.$router.push("/");
      } catch (error) {
        switch (error.response.status) {
          case 401:
            this.flashMessage.error({
              title: "Error",
              message: (this.errors = error.response.data.message),
              time: 5000,
            });
            break;
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 500:
            this.flashMessage.error({
              title: "Error",
              message: error.response.data.message,
              time: 5000,
            });
            break;

          default:
            this.flashMessage.error({
              title: "Error",
              message: "There was an eroor, Please try again!",
              time: 5000,
            });
            break;
        }
      }
    },
  },
};
</script>
