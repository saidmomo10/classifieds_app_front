<!-- eslint-disable vue/no-mutating-props -->
<template>
    <form class="default-form-style" method="post" action="#">
        <div class="row">
            <div class="col-lg-6 col-12">
                <div class="form-group">
                    <label>Mobile Numbe*</label>
                    <input v-model="props.formValues.phone" name="number" type="text"
                        placeholder="Enter mobile number">
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">op
                    <label>Country*</label>
                    <div class="selector-head">
                        <span class="arrow"><i
                                class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select" v-model="props.formValues.country">
                            <option value="none">Select a Country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <!-- <option value="none">America</option>
                            <option value="none">Albania</option>
                            <option value="none">Bangladesh</option>
                            <option value="none">Brazil</option>
                            <option value="none">India</option>
                            <option value="none">South Africa</option> -->
                        </select>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-12">
                <div class="form-group">
                    <label>Select City*</label>
                    <div class="selector-head">
                        <span class="arrow"><i
                                class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select" v-model="props.formValues.city">
                            <option value="none">Select City</option>
                            <option value="New York">New York</option>
                            <!-- <option value="none">Los Angeles</option>
                            <option value="none">Chicago</option>
                            <option value="none">San Diego</option>
                            <option value="none">San Jose</option> -->
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                        id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        I agree to all Terms of Use & Posting Rules
                    </label>
                </div>
            </div>
            
            <!-- <div class="col-12">
                <div class="form-group button mb-0">
                    <button @click="prevStep" type="submit" class="btn alt-btn">Previous</button>
                    <button type="submit" class="btn ">Next Step</button>
                </div>
            </div> -->
        </div>
        </form>
</template>

<script setup lang="ts">
const props = defineProps(['formValues'])

// import { ref } from 'vue';
// import axios from 'axios';

// eslint-disable-next-line vue/no-dupe-keys
// const formData = ref({
//     price: '',
//     country:'',
//     city:'',
//     description:'',
//     delivery_statut:'' 
// });

// import { defineProps, defineEmits } from 'vue';

// const props = defineProps<{
//   formData: Record<string, any>;
// }>();

// const clientHttp = axios.create(
//     {
//         baseURL: "http://localhost:8000/api/",
//         headers: {
//             Accept: "application/json",
//         }
//     }
// )


// // eslint-disable-next-line vue/valid-define-emits
// const emit = defineEmits();

// const submitStepTwo = async () => {
//   try {
//     const response = await clientHttp.post('/api/ad/step-two', props.formData);
//     console.log(response.data.message);
//     emit('nextStep');
//   } catch (error) {
//     console.error('Error submitting step two:', error);
//   }
// };

// const prevStep = () => {
//   emit('prevStep');
// };
</script>

<style scoped>

</style>