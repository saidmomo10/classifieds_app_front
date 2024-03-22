import {ref} from 'vue';
import axios from 'axios';

export default function useCategories(){

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

    const categoryData = ref([])
    
    const status = async () => {
        try {
            const statusResponse = await clientHttp.get('subcategories');
            console.log(statusResponse);

            if (statusResponse.status === 200) {
            categoryData.value = statusResponse.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const statusData = ref([])

    const showCategory = async (id) => {
        try {
            const statusResponse = await clientHttp.get(`subcategories/${id}`);
            console.log(statusResponse);

            if (statusResponse.status === 200) {
                statusData.value = statusResponse.data;            
            }
        } catch (error) {
            console.log(error);
        }
    }

    return{
        showCategory,
        status,
        statusData,
        categoryData
    }
}