<template>
    <!-- <NavBar/> -->
    <form @submit.prevent="handleAddUser" action="">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Add Title*</label>
                    <input name="title" type="text" placeholder="Enter Title" v-model="formData.name">
                </div>
            </div>

            <div class="col-12">
                <div class="form-group">
                    <label>Add email*</label>
                    <input name="email" type="email" placeholder="Enter email" v-model="formData.email">
                </div>
            </div>

            <div class="col-12">
                <div class="form-group">
                    <label>Add password*</label>
                    <input name="password" type="password" placeholder="Enter password" v-model="formData.password">
                </div>
            </div>

            <div class="col-12">
                <div class="form-group">
                    <label>Category*</label>
                    <div class="selector-head">
                        <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                        <select class="user-chosen-select" v-model="formData.roles">
                            <option value="none">Select a Category</option>

                            <option v-for="(role,key) in getRoleData" :key = "key" :value="`${role.name}`">{{ role.name }}</option>
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
                            <!-- <router-link :to = '{name:"roleEdit", params:{id:role.id}}' class="btn btn-success">Modifier</router-link> -->
                            <button type="button" @click = 'deleteRole(role.id)' class="btn btn-danger">Supprimer</button>
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
// import NavBar from '../components/NavBar.vue'
import { onMounted } from 'vue';
// import axios from 'axios';
// import router from '@/router';
import useUsers from '../components/composables/usersApi'

const { 
        getRoleData,
        formData,
        getRole,
        addUser,
        deleteRole } = useUsers()

onMounted(getRole)

const handleAddUser = async() =>{
    await addUser(formData)
}
</script>