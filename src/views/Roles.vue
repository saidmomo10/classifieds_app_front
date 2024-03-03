<template>
    <!-- <NavBar/> -->
    <form @submit.prevent="role" action="">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Add Title*</label>
                    <input name="title" type="text" placeholder="Enter Title" v-model="formData.name">
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <label>Category*</label>
                    <div class="selector-head">
                        <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select" v-model="formData.permission">
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
        </div>
        <div class="button">
            <button class="btn">Registration</button>
        </div>
    </form>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="getRoleData.length > 0">
                    <tr v-for="(role,key) in getRoleData" :key = "key">
                        <td>{{ role.id }}</td>
                        <td>{{ role.name }}</td>
                        <td>
                            <router-link :to = '{name:"roleEdit", params:{id:role.id}}' class="btn btn-success">Modifier</router-link>
                            <button type="button" @click = 'deleteRole(role.id)' class="btn btn-danger"></button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4" align="center">No role</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import {ref, onMounted} from 'vue';
import axios from 'axios';
import router from '@/router';

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
            const statusResponse = await clientHttp.get('permissions')
      console.log(statusResponse);
      
            if(statusResponse.status === 200){
                statusData.value = statusResponse.data
            }
        } catch(error){
            console.log(error);
            
        }
    }
}
onMounted(status);

const formData = ref({
    name: '',
    permission:'',
})

async function role(){
    try {
        const roles = await clientHttp.post('roles', formData.value,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
      });
        console.log(roles);
        router.replace('/roles');
    }catch(error){
            // emailError.value = 'L\'adresse email doit contenir le symbole "@".';
            // passwordError.value = 'Le mot de passe doit avoir au moins 8 caractères.';
            console.log(error);
    }
}

const getRoleData = ref([])

const getRole = async ()=>{
    if (token){
        try{
            // const email = router.currentRoute.params.email;
            const getRoleResponse = await clientHttp.get('roles')
      console.log(getRoleResponse);
      
            if(getRoleResponse.status === 200){
                getRoleData.value = getRoleResponse.data
            }
        } catch(error){
            console.log(error);
            
        }
    }
}
onMounted(getRole);

</script>