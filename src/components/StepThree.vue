<template>
    <div class="step-three">
    <form @submit.prevent="submitStepThree">
      <div>{{ formData }}</div>

      <!-- <button @click="prevStep">Previous</button>
      <button type="submit">Submit Form</button> -->
    </form>
  </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
import axios from 'axios';

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









import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  formData: Record<string, any>;
}>();

const clientHttp = axios.create(
    {
        baseURL: "http://localhost:8000/api/",
        headers: {
            Accept: "application/json",
        }
    }
)

// eslint-disable-next-line vue/valid-define-emits
const emit = defineEmits();

const submitStepThree = async () => {
  try {
    // Envoyer les données de l'étape trois une fois soumises
    // Vous pouvez également ajouter des validations ici
    // et déclencher l'événement resetForm une fois le formulaire soumis avec succès
    const response = await clientHttp.post('/api/add/step-three');
    console.log(response.data.message);
    emit('resetForm');
  } catch (error) {
    console.error('Error submitting step three:', error);
  }
};

const prevStep = () => {
  // Déclencher l'événement prevStep pour revenir à l'étape précédente
  emit('prevStep');
};
</script>