<template>
    <NavBar/>
    <!-- Start Item Details -->
    <section class="item-details section">
        <div class="container" >
            
            <div class="top-area">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="product-images">
                            <main id="gallery">
                                <div class="main-img">
                                    <img :src="statusData.images && statusData.images.length > 0 ? getImageUrl(statusData.images[0]) : ''" id="current" alt="#">
                                </div>
                                
                                <div class="images">
                                    <div v-for="(image, index) in statusData.images" :key="index" class="images">
                                        <img :src="getImageUrl(image)" alt="" style="width: 100px;">
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="product-info">
                            <h2 class="title">{{ statusData.title}}</h2>
                            <p class="location"><i class="lni lni-map-marker"></i><a href="javascript:void(0)">New York, USA</a></p>
                            <h3 class="price">$999</h3>
                            <div class="list-info">
                                <h4>Informations</h4>
                                <ul>
                                    <li><span>Condition:</span> New</li>
                                    <li><span>Brand:</span> Apple</li>
                                    <li><span>Model:</span> Mackbook Pro</li>
                                </ul>
                            </div>
                            <div class="contact-info">
                                <ul>
                                    <li>
                                        <a href="tel:+002562352589" class="call">
                                            <i class="lni lni-phone-set"></i>
                                            +00 256 235 2589
                                            <span>Call & Get more info</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:example@gmail.com" class="mail">
                                            <i class="lni lni-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="social-share">
                                <h4>Share Ad</h4>
                                <ul>
                                    <li><a href="javascript:void(0)" class="facebook"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="javascript:void(0)" class="twitter"><i class="lni lni-twitter-original"></i></a></li>
                                    <li><a href="javascript:void(0)" class="google"><i class="lni lni-google"></i></a></li>
                                    <li><a href="javascript:void(0)" class="linkedin"><i class="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="javascript:void(0)" class="pinterest"><i class="lni lni-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-details-blocks">
                <div class="row">
                    <div class="col-lg-8 col-md-7 col-12">
                        <!-- Start Single Block -->
                        <div class="single-block description">
                            <h3>Description</h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.
                            </p>
                            <ul>
                                <li>Model: Apple MacBook Pro 13.3-Inch MYDA2</li>
                                <li>Apple M1 chip with 8-core CPU and 8-core GPU</li>
                                <li>8GB RAM</li>
                                <li>256GB SSD</li>
                                <li>13.3-inch 2560x1600 LED-backlit Retina Display</li>
                            </ul>
                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                                non-characteristic words etc.</p>
                        </div>
                        <!-- End Single Block -->
                        <!-- Start Single Block -->
                        <div class="single-block tags">
                            <h3>Tags</h3>
                            <ul>
                                <li><a href="javascript:void(0)">Bike</a></li>
                                <li><a href="javascript:void(0)">Services</a></li>
                                <li><a href="javascript:void(0)">Brand</a></li>
                                <li><a href="javascript:void(0)">Popular</a></li>
                            </ul>
                        </div>
                        <!-- End Single Block -->
                        <!-- Start Single Block -->
                        <div class="single-block comments">
                            <h3>Comments</h3>
                            <!-- Start Single Comment -->
                            <div class="single-comment">
                                <img src="" alt="#">
                                <div class="content">
                                    <h4>Luis Havens</h4>
                                    <span>25 Feb, 2023</span>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable.
                                    </p>
                                    <a href="javascript:void(0)" class="reply"><i class="lni lni-reply"></i> Reply</a>
                                </div>
                            </div>
                            <!-- End Single Comment -->
                        </div>
                        <!-- End Single Block -->
                        <!-- Start Single Block -->
                        <div class="single-block comment-form">
                            <h3>Post a comment</h3>
                            <form action="#" method="POST">
                                <div class="row">
                                    <div class="col-lg-6 col-12">
                                        <div class="form-box form-group">
                                            <input type="text" name="name" class="form-control form-control-custom"
                                                placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-12">
                                        <div class="form-box form-group">
                                            <input type="email" name="email" class="form-control form-control-custom"
                                                placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-box form-group">
                                            <textarea name="#" class="form-control form-control-custom"
                                                placeholder="Your Comments"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="button">
                                            <button type="submit" class="btn">Post Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- End Single Block -->
                    </div>
                    <div class="col-lg-4 col-md-5 col-12">
                        <div class="item-details-sidebar">
                            <!-- Start Single Block -->
                            <div class="single-block author">
                                <h3>Author</h3>
                                <div v-if="statusData.user" class="content">
                                    <img src="" alt="#">
                                    <h4>{{ statusData.user.name }}</h4>
                                    <span>Member Since {{ statusData.user.created_at }}</span>
                                    <a href="javascript:void(0)" class="see-all">See All Ads</a>
                                </div>
                            </div>
                            <!-- End Single Block -->
                            <!-- Start Single Block -->
                            <div class="single-block contant-seller comment-form ">
                                <h3>Contact Seller</h3>
                                <form action="#" method="POST">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-box form-group">
                                                <input type="text" name="name" class="form-control form-control-custom"
                                                    placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-box form-group">
                                                <input type="email" name="email"
                                                    class="form-control form-control-custom" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-box form-group">
                                                <textarea name="#" class="form-control form-control-custom"
                                                    placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="button">
                                                <button type="submit" class="btn">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- End Single Block -->
                            <!-- Start Single Block -->
                            <!-- <div class="single-block ">
                                <h3>Location</h3>
                                <div class="mapouter">
                                    <div class="gmap_canvas"><iframe width="100%" height="300" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                                            href="https://putlocker-is.org"></a><br>
                                        <style>
                                            .mapouter {
                                                position: relative;
                                                text-align: right;
                                                height: 300px;
                                                width: 100%;
                                            }
                                        </style><a href="https://www.embedgooglemap.net">google map code for website</a>
                                        <style>
                                            .gmap_canvas {
                                                overflow: hidden;
                                                background: none !important;
                                                height: 300px;
                                                width: 100%;
                                            }
                                        </style>
                                    </div>
                                </div>
                            </div> -->
                            <!-- End Single Block -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Item Details -->

</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
// import axios from 'axios'
import {onMounted} from 'vue';
import { useRoute } from 'vue-router';
import useAds from '../components/composables/adsApi'

const route = useRoute()

const {showAd, statusData} = useAds()
onMounted(()=>{
    showAd(route.params.id)
})

const getImageUrl = (image) => {
    if (image && image.path) {
        return 'http://localhost:8000/storage/' + image.path;
    }
    return ''; // Ou une URL par défaut si aucune image n'est disponible
};


</script>