<!-- eslint-disable vue/no-mutating-props -->
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
                        <select class="user-chosen-select" v-model="props.formValues.subcategory_id">
                            <option value="none">Select a Category</option>

                            <option v-for = "key in statusData" :value="`${key.id}`">{{ key.name }}</option>
                            <!-- <option value="none">Electronics</option>
                            <option value="none">Computers</option>
                            <option value="none">Headphones</option>
                            <option value="none">Furnitures</option>
                            <option value="none">Books</option> -->
                        </select>
                    </div>
                </div>
            </div>
            <!-- <div class="col-12">
                <div class="form-group">
                    <label>Add Price*</label>
                    <input name="price" type="number" placeholder="Enter Price" v-model="props.formValues.price">
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <label>Price Type*</label>
                    <div class="selector-head">
                        <span class="arrow"><i
                                class="lni lni-chevron-down"></i></span>
                        <select v-model="props.formValues.price_type" class="user-chosen-select">
                            <option value="">Select an option</option>
                            <option value="Fixe">Fixe</option>
                            <option value="Débattable">Débattable</option>
                        </select>
                    </div>
                </div>
            </div> -->
            
            
            
            
            <input type="hidden" name="user_id" v-model="props.formValues.user_id">
            <input type="hidden" name="user_subscription_id" v-model="props.formValues.user_subscription_id">

            
            
            
            
            <div class="col-lg-6 col-12">
                <div class="upload-input">
                    <input :v-model="props.formValues.images" type="file" id="upload" name="images[]" multiple @change="handleImageUpload">
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
            </div>
            

            <div class="col-lg-6 col-12">
                <p v-if="props.formValues.images && props.formValues.images.length > 0">Images sélectionnées :</p>
                <div class="row" v-for="image in props.formValues.images" :key="image.name">
                    <img :src="getImageUrl(image)" alt="Selected image" style="max-width: 100px; max-height: 200px; margin-bottom: 10px;">
                </div>
            </div>


            <div v-if="userData.key !== null" class="col-12">
                <div class="form-group">
                    <label class="video-label">Video Link* <span>Input only
                            YouTube & Vimeo</span></label>
                    <input name="video" type="text"
                        placeholder="Input link">
                    <a href="javascript:void(0)" class="add-video"><i
                            class="lni lni-plus"></i> Add Video</a>
                </div>
            </div>
            <div class="col-12">
                <div class="form-group mt-30">
                    <label>Ad Description*</label>
                    <textarea name="message" placeholder="Input ad description" v-model="props.formValues.description"></textarea>
                </div>
            </div>
            <!-- <div class="col-lg-6 col-12">
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
                            <option value="Neuf">Neuf</option>
                            <option value="Usé">Usé</option>
                        </select>
                    </div>
                </div>
            </div> -->
            <div class="col-lg-6 col-12">
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
const props = defineProps(['formValues']);


const handleImageUpload = (event: { target: { files: any; }; }) => {
  const files = event.target.files;
  const images = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // Vous pouvez traiter chaque fichier ici, par exemple, l'ajouter à un tableau d'images
    images.push(file);
  }
  // Mettre à jour la propriété formValues.images avec le tableau d'images
  // eslint-disable-next-line vue/no-mutating-props
  props.formValues.images = images;
}

const getImageUrl = (image: Blob | MediaSource) => {
  return URL.createObjectURL(image);
}

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




import {ref, onMounted} from 'vue';
import axios from 'axios';

const token = localStorage.getItem('token');

const clientHttp = axios.create(
    {
        baseURL: "http://localhost:8000/api/",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
)


const statusData = ref([])

const status = async ()=>{
    if (token){
        try{
            // const email = router.currentRoute.params.email;
            const statusResponse = await clientHttp.get('subcategories')
      console.log(statusResponse.data);
      
            if(statusResponse.status === 200){
                statusData.value = statusResponse.data
            }
        } catch(error){
            console.log(error);
            
        }
    }
}
onMounted(status);


const userData = ref([])

const user = async ()=>{
    if (token){
        try{
            // const email = router.currentRoute.params.email;
            const statusResponse = await clientHttp.get('adStatus')
      console.log(statusResponse);
      
            if(statusResponse.status === 200){
                userData.value = statusResponse.data
            }
        } catch(error){
            console.log(error);
            
        }
    }
}
onMounted(() => {
        // Appeler fetchStatus au démarrage
        user();

        // Actualiser les données toutes les X secondes (par exemple, toutes les 5 secondes)
        // setInterval(status, 2000);
    });
</script>