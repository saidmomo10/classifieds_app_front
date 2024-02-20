<!-- eslint-disable vue/no-mutating-props -->
<template>
    <form class="default-form-style" method="post" action="#">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Add Price*</label>
                    <input name="price" type="number" placeholder="Enter Price" v-model="props.formValues.price">
                </div>
            </div>
            <!-- <div class="col-12">
                <div class="form-group">
                    <label>Price Type*</label>
                    <div class="selector-head">
                        <span class="arrow"><i
                                class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select">
                            <option value="none">Select an option</option>
                            <option value="none">Fixed</option>
                            <option value="none">Price On Call</option>
                        </select>
                    </div>
                </div>
            </div> -->
            <div class="col-12">
                <div class="form-group">
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
            <!-- <div class="col-lg-6 col-12">
                <div class="upload-input">
                    <input type="file" id="upload" name="upload">
                    <label for="upload" class="text-center content">
                        <span class="text">
                            <span class="d-block mb-15">Drop files anywhere
                                to Upload</span>
                            <span class=" mb-15 plus-icon"><i
                                    class="lni lni-plus"></i></span>
                            <span class="main-btn d-block btn-hover">Select
                                File</span>
                            <span class="d-block">Maximum upload file size
                                10Mb</span>
                        </span>
                    </label>
                </div>
            </div> -->
            <!-- <div class="col-lg-6 col-12">
                <div class="form-group">
                    <label class="video-label">Video Link* <span>Input only
                            YouTube & Vimeo</span></label>
                    <input name="video" type="text"
                        placeholder="Input link">
                    <a href="javascript:void(0)" class="add-video"><i
                            class="lni lni-plus"></i> Add Video</a>
                </div>
            </div> -->
            <div class="col-12">
                <div class="form-group mt-30">
                    <label>Ad Description*</label>
                    <textarea name="message" placeholder="Input ad description" v-model="props.formValues.description"></textarea>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                <div class="form-group">
                    <label>Delivery Status*</label>
                    <div class="selector-head">
                        <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select" v-model="props.formValues.delivery_status">
                            <option value="">Select an option</option>
                            <option value="Oui">Oui</option>
                            <option value="Non">Non</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                <div class="form-group">
                    <label>State*</label>
                    <div class="selector-head">
                        <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select" v-model="props.formValues.state">
                            <option value="">Select an option</option>
                            <option value="Oui">Oui</option>
                            <option value="Non">Non</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-6 col-12">
                <div class="form-group">
                    <label>Item Condition*</label>
                    <div class="selector-head">
                        <span class="arrow"><i
                                class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select">
                            <option value="none">Select an option</option>
                            <option value="none">Used</option>
                            <option value="none">Brand New</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <label class="tag-label">Tags* <span>Comma(,)
                            separated</span></label>
                    <input name="tag" type="text"
                        placeholder="Type Product tag">
                </div>
            </div> -->
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