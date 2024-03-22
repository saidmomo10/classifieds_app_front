import {ref} from 'vue';
import axios from 'axios';
// import { useHttpStore } from '@/stores/http'

export default function useAds(){
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
    const nextPage = ref("")
    const previousPage = ref("")
    const currentPage = ref(1); // Numéro de page actuel
    const totalPages = ref(1); // Nombre total de pages

    // // Fonction pour charger les annonces de la page spécifiée
    const fetchPageAds = async (pageNumber) => {
    try {
        const statusResponse = await clientHttp.get(`ads?page=${pageNumber}`);
        console.log(statusResponse);

        if (statusResponse.status === 200) {
        const pagination = statusResponse.data;
        statusData.value = pagination.data;
        nextPage.value = pagination.next_page_url;
        previousPage.value = pagination.prev_page_url;
        currentPage.value = pageNumber;
        }
    } catch (error) {
        console.log(error);
    }
    }

    // // Fonction pour charger les annonces suivantes
    const fetchNextAds = async (url) => {
    try {
        const statusResponse = await clientHttp.get(url);
        console.log(statusResponse);

        if (statusResponse.status === 200) {
        const pagination = statusResponse.data;
        statusData.value = pagination.data;
        nextPage.value = pagination.next_page_url;
        previousPage.value = pagination.prev_page_url;
        currentPage.value++;
        }
    } catch (error) {
        console.log(error);
    }
    }

    // Fonction pour charger les annonces précédentes
    const fetchPrevAds = async (url) => {
    try {
        const statusResponse = await clientHttp.get(url);
        console.log(statusResponse);

        if (statusResponse.status === 200) {
        const pagination = statusResponse.data;
        statusData.value = pagination.data;
        nextPage.value = pagination.next_page_url;
        previousPage.value = pagination.prev_page_url;
        currentPage.value--;
        }
    } catch (error) {
        console.log(error);
    }
    }

    // Chargement initial des annonces (première page)
    const status = async () => {
        try {
            const statusResponse = await clientHttp.get('ads');
            console.log(statusResponse);

            if (statusResponse.status === 200) {
            const pagination = statusResponse.data;
            statusData.value = pagination.data;
            // filteredAds.value = statusData.value
            nextPage.value = pagination.next_page_url;
            previousPage.value = pagination.prev_page_url;
            totalPages.value = pagination.last_page; // Définit le nombre total de pages
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const statusData = ref([])

    //Show
    const showAd = async (id)=>{
        if (token){
            try{
                // const email = router.currentRoute.params.email;
                const statusResponse = await clientHttp.get(`ads/${id}`)
        console.log(statusResponse);
        
                if(statusResponse.status === 200){
                    statusData.value = statusResponse.data
                }
            } catch(error){
                console.log(error);
                
            }
        }
    }

    //Post


    // const searchQuery = ref('');
    // const ads = ref([]);
    // const filteredAds = ref([])

    // const getAds = async ()=>{
    //     if (token){
    //         try{
    //             // const email = router.currentRoute.params.email;
    //             const getResponse = await clientHttp.get('livesearch')
    //     console.log(getResponse);
        
    //             if(getResponse.status === 200){
    //                 ads.value = getResponse.data
    //                 filteredAds.value = ads.value
    //             }
    //         } catch(error){
    //             console.log(error);
                
    //         }
    //     }
    // }    

    // const filter = (query) =>{
    //     if(query == ''){
    //         filteredAds.value = ads.value
    //         return 
    //     }
    //     filteredAds.value = ads.value.filter(ad => {
    //         return (
    //             ad.title.toLowerCase().includes(query.toLowerCase()) ||
    //             ad.city.toLowerCase().includes(query.toLowerCase())
    //         );
    //     })
    // }



    // const selectedItem = async (id)=>{
    //     if (token){
    //         try{
    //             // const email = router.currentRoute.params.email;
    //             const statusResponse = await clientHttp.get(`ad`)
    //     console.log(statusResponse);
        
    //             if(statusResponse.status === 200){
    //                 Ads.value = statusResponse.data
    //             }
    //         } catch(error){
    //             console.log(error);
                
    //         }
    //     }
    // }    

    return{
        
        showAd,
        nextPage,
        previousPage,
        currentPage,
        totalPages,
        statusData,
        fetchPageAds,
        fetchNextAds,
        fetchPrevAds,
        status,
        
        // // getResults,
        // // selectedItem
    }
}