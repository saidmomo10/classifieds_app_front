<template>
    <form action="" @submit.prevent="submitStepThree" enctype="multipart/form-data">
    <div>
        <p v-if="props.formValues.images && props.formValues.images.length > 0">Images sélectionnées :</p>
        <div v-for="image in props.formValues.images" :key="image.name">
          <img :src="getImageUrl(image)" alt="Selected image" style="max-width: 200px; max-height: 200px; margin-bottom: 10px;">
        </div>
    </div>      <p v-text="props.formValues.title"></p>
      <p v-text="props.formValues.price"></p>
      <p v-text="props.formValues.description"></p>
      <p v-text="props.formValues.country"></p>
      <p v-text="props.formValues.city"></p>
      <p v-text="props.formValues.delivery_status"></p>
      <p v-text="props.formValues.state"></p>
      <p v-text="props.formValues.price_type"></p>
      <p v-text="props.formValues.phone"></p>

    <button type="submit" class="btn ">Next Step</button>

    </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
const props = defineProps(['formValues']);
console.log(props.formValues)


// const formData = ref({ title: '', price: '' });

// const submitStepThree = async () => {
//   try {
//     const response = await axios.post('/api/form/step-three');
//     console.log(response.data.message);
//     // Réinitialiser le formulaire après la soumission réussie
//     // emit('resetForm');
//   } catch (error) {
//     console.error('Error submitting step three:', error);
//   }
// }

// const prevStep = () => {
//   // Émettre l'événement prevStep vers le composant parent
// //   emit('prevStep');
// }






const getImageUrl = (image: Blob | MediaSource) => {
  return URL.createObjectURL(image);
}



const token = localStorage.getItem('token');

const clientHttp = axios.create(
    {
        baseURL: "http://localhost:8000/api/",
        headers: {
            'Content-Type': "multipart/form-data",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
)


const submitStepThree = async () => {
  try {
    // Envoyer les données de l'étape trois une fois soumises
    // Vous pouvez également ajouter des validations ici
    // et déclencher l'événement resetForm une fois le formulaire soumis avec succès
    const response = await clientHttp.post('ads', props.formValues);
    console.log(response.data);
    router.replace('/adsList')
  } catch (error) {
    console.error('Error submitting step three:', error);
  }
};

</script>