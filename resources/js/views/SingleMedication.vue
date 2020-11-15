<template>
  <div id="content" class="p-5">
    <div class="wrapper">
      <div class="col-1-2">
        <div class="product-wrap">
          <div class="product-shot">
            <img
              :src="`${$store.state.serverPath}/storage/${medication.image}`"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="col-1-2">
        <div class="product-info">
          <h2>{{ medication.name }}</h2>
          <h3>$ {{ medication.price_per_unit }}</h3>
          <p>Units {{ medication.units }}</p>
          <div class="desc">
            <p>Category {{ getCategory(medication.category_id) }}</p>
            <p>Dosage {{ medication.dosage }}</p>
          </div>

          <hr />
          <h3>Usage</h3>
          <p>{{ medication.usage }}</p>
          <h3>Route</h3>
          <p>{{ medication.route }}</p>
          <router-link :to="{ name: 'medications' }" class="button">
            Back</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as medicationService from "../services/medication_service";
export default {
  name: "SingleMedication",
  data() {
    return {
      medication: {},
      categories: [],
    };
  },
  methods: {
    showMedication: async function () {
      try {
        const response = await medicationService.singleMedication(
          this.$route.params.id
        );
        this.medication = response.data;
        console.log(response.data);
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "An Error Occured",
        });
      }
    },

    loadCategories: async function () {
      try {
        const response = await medicationService.loadCategories();
        this.categories = response.data;
      } catch (error) {
        this.flashMessage.error({
          title: "Error",
          message: "There was an eroor, Please try again!",
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
  },
  mounted() {
    this.showMedication();
    this.loadCategories();
  },
};
</script>

<style >
img {
  max-width: 100%;
}

.wrapper {
  width: 90%;
  margin: 70px auto;
}

.col-1-2 {
  float: left;
  width: 50%;
}

.product-wrap {
  margin: 0 auto;
  width: 450px;
}
.product-wrap .product-shot {
  padding-top: 30px;
  transition: all 0.5s ease;
}
.product-wrap .product-shot:hover {
  transform: scale(1.1);
}

.product-info h2 {
  padding-bottom: 15px;
  font-size: 32px;
  border-bottom: 1px solid #d9d9d9;
}
.product-info .desc {
  margin-top: 25px;
  font-size: 16px;
  line-height: 1.6;
}
.product-info .sizing-list {
  margin-top: 25px;
  padding: 0px;
  list-style-type: none;
}
.product-info .size {
  display: inline;
  margin-right: 10px;
  padding: 10px 15px;
  color: #c2c2c2;
  border: 1px solid #c2c2c2;
  cursor: pointer;
}
.product-info .size.active {
  color: white;
  background-color: #c2c2c2;
}

.button {
  display: inline-block;
  margin-top: 35px;
  padding: 12px 25px;
  font-size: 16px;
  width: 100px;
  text-decoration: none;
  background-color: #505050;
  color: white;
  transition: 0.25s ease;
  border-radius: 16px;
  display: inline-block;
  margin: 4px 2px;
  padding: 10px 20px;
  text-align: center;
}

.button:hover {
  background-color: #323232;
  text-decoration: none;
  color: tan;
}
</style>
