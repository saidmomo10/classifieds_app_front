<!-- eslint-disable vue/no-mutating-props -->
<template>
    <form class="default-form-style" method="post" action="#">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Add Title*</label>
                    <input name="title" type="text" placeholder="Enter Title" v-model="props.formValues.title">
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <label>Category*</label>
                    <div class="selector-head">
                        <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select" >
                            <option value="none">Select a Category</option>
                            <option value="none">Téléphones</option>
                            <option value="none">Electronics</option>
                            <option value="none">Computers</option>
                            <option value="none">Headphones</option>
                            <option value="none">Furnitures</option>
                            <option value="none">Books</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- <div class="col-12">
                <div class="form-group button mb-0">
                    <button type="submit" :disabled="loading" class="btn ">Next Step</button>
                </div>
            </div> -->
        </div>
    </form>
</template>

<script setup lang="ts">
const props = defineProps(['formValues'])



// import { ref } from 'vue';



//     const formData = ref({
//         title: '',
//         // subcategory_id: '',
//     })

//     const loading = ref(false);

// const submitStepOne = async () => {
//   try {
//     loading.value = true;
//     const response = await clientHttp.post('ad/step-one', formData.value);
//     console.log(response);
//     loading.value = false;
//     emit('nextStep');
//   } catch (error) {
//     console.error('Error submitting step one:', error);
//     loading.value = false;
//   }
// };
</script>