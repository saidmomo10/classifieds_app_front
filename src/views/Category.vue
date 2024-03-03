<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <form @submit.prevent="sub" action="" >
        <div class="col-12">
            <div class="form-group">
                <label>Add Title*</label>
                <input name="title" type="text" placeholder="Enter Title" v-model="formData.name">
            </div>
        </div>
        <div class="col-12">
            <div class="form-group">
                <label>duration*</label>
                <input name="title" type="number" placeholder="Enter Title" v-model="formData.duration">
            </div>
        </div>
        <div class="col-12">
            <div class="form-group">
                <label>price*</label>
                <input name="title" type="number" placeholder="Enter Title" v-model="formData.price">
            </div>
        </div>
        <div class="col-12">
                <div class="form-group mt-30">
                    <label>Ad Description*</label>
                    <textarea name="message" placeholder="Input ad description" v-model="formData.description"></textarea>
                </div>
            </div>
        <div class="button">
            <button class="btn">Registration</button>
        </div>
    </form>
</template>

<script setup lang="ts">
// import NavBar from '../components/NavBar.vue'
    import axios from 'axios';
    import router from '@/router';
    import { ref } from 'vue';

    const clientHttp = axios.create(
    {
        baseURL: "http://localhost:8000/api/",
        headers: {
            Accept: "application/json",
        }
    }
)

const formData = ref({
    name: '',
    duration:'',
    price:'',
    description:'',
})
const token = localStorage.getItem('token');


async function sub(){
    try {
        const user = await clientHttp.post('create-subscription', formData.value,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
      });
        console.log(user);
        router.replace('/form');
    }catch(error){
            // emailError.value = 'L\'adresse email doit contenir le symbole "@".';
            // passwordError.value = 'Le mot de passe doit avoir au moins 8 caractères.';
            console.log(error);
    }
}
</script>