<template>
    <body>
        <NavBar/>
        <div class="breadcrumbs">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="breadcrumbs-content">
                            <h1 class="page-title">Post Ad</h1>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <ul class="breadcrumb-nav">
                            <li><a href="index.html">Home</a></li>
                            <li>Post Ad</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumbs -->

        <!-- Start Dashboard Section -->
        <section class="dashboard section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-12">
                        <!-- Start Dashboard Sidebar -->
                        <DashboardSidebar/>
                        <!-- Start Dashboard Sidebar -->
                    </div>
                    <div class="col-lg-9 col-md-8 col-12">
                        <div class="main-content">
                            <!-- Start Post Ad Block Area -->
                            <div class="dashboard-block mt-0">
                                <h3 class="block-title">Post Ad</h3>
                                <div class="inner-block">
                                    <!-- Start Post Ad Tab -->
                                    <div class="post-ad-tab">
                                        <nav>
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button 
                                                v-for="(step, index) in steps" 
                                                :key="index" 
                                                :class="{ 'nav-link': true, active: currentStep === index }" 
                                                @click="currentStep = index"
                                                >
                                                <span class="serial">0{{ index + 1 }}</span> 
                                                Step
                                                <span class="sub-title">{{ step.__name }}</span>
                                                </button>
                                            </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div 
                                                v-for="(step, index) in steps" 
                                                :key="index" 
                                                class="tab-pane fade" 
                                                :class="{ 'show active': currentStep === index }"
                                            >
                                                <!-- Contenu de chaque étape du formulaire -->
                                                <component
                                                
                                                v-bind:is="steps[currentStep]"
                                                v-bind:formValues = "values"
                                                
                                                ></component>
                                                <div class="col-12">
                                                    <div  class="form-group button mb-0">
                                                        <button v-on:click="previousStep" v-if = "currentStep > 0" type="submit" class="btn alt-btn">Previous</button>
                                                        <button v-on:click="nextStep" v-if = "currentStep < steps.length - 1" type="submit" class="btn ">Next Step</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Post Ad Tab -->
                                </div>
                            </div>
                            <!-- End Post Ad Block Area -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Dashboard Section -->

        <!-- Start Newsletter Area -->
        <div class="newsletter section">
            <div class="container">
                <div class="inner-content">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="title">
                                <i class="lni lni-alarm"></i>
                                <h2>Newsletter</h2>
                                <p>We don't send spam so don't worry.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="form">
                                <form action="#" method="get" target="_blank" class="newsletter-form">
                                    <input name="EMAIL" placeholder="Your email address" type="email">
                                    <div class="button">
                                        <button class="btn">Subscribe<span class="dir-part"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Newsletter Area -->
        <!-- <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/wow.min.js"></script>
        <script src="../assets/js/tiny-slider.js"></script>
        <script src="../assets/js/glightbox.min.js"></script>
        <script src="../assets/js/main.js"></script> -->
    </body>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue';
  import DashboardSidebar from '@/components/DashboardSidebar.vue'
  import { ref } from 'vue';
  import useForm from '@/components/composables/formValues'

  import StepOne from '../components/StepOne.vue';
  import StepTwo from '../components/StepTwo.vue';
  import StepThree from '../components/StepThree.vue';

  const {
    values
  } = useForm();

  const currentStep = ref(0);
  console.log(currentStep);
  

    const steps = [
        StepOne,
        StepTwo,
        StepThree,
    ];

    const previousStep = () =>{
        currentStep.value--
    }

    const nextStep = () =>{
        currentStep.value++
    }

    // const csrfToken = document.head.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
        // const csrfToken = () => {
        // const token = document.head.querySelector<HTMLMetaElement>('meta[name="csrf-token"]');
        // return token ? token.content : '';
        // };
//     const clientHttp = axios.create(
//     {
//         baseURL: "http://localhost:8000/api/",
//         headers: {
//             Accept: "application/json",
//         }
//     }
// )
// const token = localStorage.getItem('token');


//     const nextStep = async () => {
//   if (currentStep.value < steps.length - 1) {
//     const stepRoute = `step${currentStep.value + 1}`;
    
//     const response = await clientHttp.post(`ad/${stepRoute}`, formData.value,{
//       headers: {
//         Authorization: `Bearer ${token}`,
//       }
//       });
//     if (response.data.data) {
//       formData.value = response.data.data;
//       currentStep.value++;
//     } else {
//       // Gérer les erreurs ici
//       console.error('Erreur lors du traitement de la requête API');
//     }
//   }
// };
</script>

<style>
    .mapouter {
        position: relative;
        text-align: right;
        height: 300px;
        width: 100%;
    }
</style>

<style>
  .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 300px;
      width: 100%;
  }
</style>

