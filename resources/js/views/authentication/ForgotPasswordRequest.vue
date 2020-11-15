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
                <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-2">
                        Forgot Your Password Request?
                      </h1>
                      <p class="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
                    </div>
                    <form v-on:submit.prevent="onSubmit" class="user">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <!-- <div class="invalid-feedback" v-if="errors.email">
                        {{ errors.email[0] }}
                      </div> -->

                      <button
                        ref="btnSubmit"
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Reset Password
                      </button>
                    </form>
                    <hr />
                    <div class="text-center">
                      <router-link class="small" to="/register"
                        >Create an Account!</router-link
                      >
                    </div>
                    <div class="text-center">
                      <router-link class="small" to="/login"
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
    </div>
  </div>
</template>
<script>
import * as auth from "../../services/auth_service";
export default {
  name: "RestPasswordRequest",
  data() {
    return {
      user: {
        email: "",
      },
      btnOldHtml: "",

      errors: {},
    };
  },
  created() {
    document.querySelector("body").style.backgroundColor = "#36b9cc";
  },
  methods: {
    onSubmit: async function () {
      this.$router.push({
        name: "forgot-password",
        params: { email: this.user.email },
      });
      //   try {
      //     this.disableSubmission(this.$refs.btnSubmit);
      //     this.errors = {};
      //     // const response = await auth.resetPasswordRequest(this.user);
      //     this.flashMessage.success({
      //       title: "Success",
      //       message: response.data.message,
      //       time: 5000,
      //     });

      //   } catch (error) {
      //     switch (error.response.status) {
      //       case 401:
      //         this.flashMessage.error({
      //           title: "Error",
      //           message: (this.errors = error.response.data.message),
      //           time: 5000,
      //         });
      //         break;
      //       case 422:
      //         this.errors = error.response.data.errors;
      //         break;
      //       default:
      //         this.flashMessage.error({
      //           title: "Error",
      //           message: "There was an eroor, Please try again!",
      //           time: 5000,
      //         });
      //         break;
      //     }
      //     this.enableSubmission(this.$refs.btnSubmit);
      //   }
    },

    disableSubmission(btn) {
      btn.setAttribute("disabled", "disabled");
      this.btnOldHtml = btn.innerHtml;
      btn.innerHtml =
        '<span class="fa fa-spinner fa-spin"></span> Please wait...';
    },

    enableSubmission(btn) {
      btn.removeAttribute("disabled");
      btn.innerHtml = this.btnOldHtml;
    },
  },
};
</script>
