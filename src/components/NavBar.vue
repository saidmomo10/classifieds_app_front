<template>
    <!-- Preloader -->
    <!-- <div class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div> -->
    <!-- /End Preloader -->

    <!-- Start Header Area -->
    <header class="header navbar-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="nav-inner">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                                <img src="" alt="Logo">
                            </a>
                            <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a class=" active dd-menu collapsed" href="javascript:void(0)"
                                            data-bs-toggle="collapse" data-bs-target="#submenu-1-1"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">Accueil</a>
                                        <ul class="sub-menu collapse" id="submenu-1-1">
                                            <li class="nav-item active"><a href="/">Home Default</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/category" aria-label="Toggle navigation">Categories</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class=" dd-menu collapsed" href="javascript:void(0)"
                                            data-bs-toggle="collapse" data-bs-target="#submenu-1-3"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">Annonces</a>
                                        <ul class="sub-menu collapse" id="submenu-1-3">
                                            <li class="nav-item"><a href="javascript:void(0)">Ad Grid</a></li>
                                            <li class="nav-item"><a href="javascript:void(0)">Ad Listing</a></li>
                                            <li class="nav-item"><a href="javascript:void(0)">Ad Details</a></li>
                                        </ul>
                                    </li>
                                    <!-- <li class="nav-item">
                                        <a class=" dd-menu collapsed" href="javascript:void(0)"
                                            data-bs-toggle="collapse" data-bs-target="#submenu-1-4"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">Pages</a>
                                        <ul class="sub-menu mega-menu collapse" id="submenu-1-4">
                                            <li class="single-block">
                                                <ul>
                                                    <li class="mega-menu-title">Essential Pages</li>
                                                    <li class="nav-item"><a href="about-us.html">About Us</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Ads Details</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Ads Post</a></li>
                                                    <li class="nav-item"><a href="pricing.html">Pricing Table</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Sign Up</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Sign In</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Contact Us</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">FAQ</a></li>
                                                    <li class="nav-item"><a href="404.html">Error Page</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Mail Success</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Comming Soon</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="single-block">
                                                <ul>
                                                    <li class="mega-menu-title">Dashboard</li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Account Overview</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">My Profile</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">My Ads</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Favorite Ads</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Ad post</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Bookmarked Ad</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Messages</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Close account</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Invoice</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> -->
                                    <li class="nav-item">
                                        <a class=" dd-menu collapsed" href="javascript:void(0)"
                                            data-bs-toggle="collapse" data-bs-target="#submenu-1-5"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">Blog</a>
                                        <ul class="sub-menu collapse" id="submenu-1-5">
                                            <li class="nav-item"><a href="javascript:void(0)">Blog Grid Sidebar</a>
                                            </li>
                                            <li class="nav-item"><a href="javascript:void(0)">Blog Single</a></li>
                                            <li class="nav-item"><a href="javascript:void(0)">Blog Single
                                                    Sibebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div> <!-- navbar collapse -->
                            <div class="login-button">
                                <ul>
                                    <li>
                                        <a href="login"><i class="lni lni-enter"></i> Se connecter</a>
                                    </li>
                                    <!-- <li>
                                        <a href="signup"><i class="lni lni-user"></i> Register</a>
                                    </li> -->
                                    <!-- <li>
                                        <form @submit.prevent = "logout" action="">
                                            <div class="button">
                                                <button type="submit" class="btn">Logout</button>
                                            </div>
                                        </form>
                                    </li> -->
                                </ul>
                            </div>
                            <div v-if = "statusData">
                                {{ statusData.status }}
                            </div>
                            <div class="button header-button">
                                <a href="about" class="btn">Publier une annonce</a>
                            </div>
                        </nav> <!-- navbar -->
                    </div>
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </header>
    <!-- End Header Area -->
</template>



<script setup lang="ts">
import {ref, onMounted} from 'vue'
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
            const statusResponse = await clientHttp.get('showSubscription')
      console.log(statusResponse);
      
            if(statusResponse.status === 200){
                statusData.value = statusResponse.data
            }
        } catch(error){
            console.log(error);
            
        }
    }
}
onMounted(() => {
        // Appeler fetchStatus au démarrage
        status();

        // Actualiser les données toutes les X secondes (par exemple, toutes les 5 secondes)
        // setInterval(status, 2000);
    });


    const statu = async ()=>{
    if (token){
        try{
            // const email = router.currentRoute.params.email;
            const statusResponse = await clientHttp.get('showSubscription')
      console.log(statusResponse);
      
            if(statusResponse.status === 200){
                statusData.value = statusResponse.data
            }
        } catch(error){
            console.log(error);
            
        }
    }
}
onMounted(() => {
        // Appeler fetchStatus au démarrage
        statu();

        // Actualiser les données toutes les X secondes (par exemple, toutes les 5 secondes)
        // setInterval(status, 2000);
    });


    async function logout(){
        try {
            const user = await clientHttp.post('logout');
            console.log(user);
            router.replace('/login');
            // toast.success(user.data)
        }catch(error){
                // emailError.value = 'L\'adresse email doit contenir le symbole "@".';
                // passwordError.value = 'Le mot de passe doit avoir au moins 8 caractères.';
            //     toast.error(error.response.data.message, {
            // autoClose: 1000,
            // });
                console.log(error);
        }
    }
</script>
