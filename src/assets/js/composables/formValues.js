import { reactive } from "vue";
import {ref, onMounted} from 'vue'
import axios from 'axios';

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
            const statusResponse = await clientHttp.get('user')
    //   console.log(statusResponse.data.id);
      
            if(statusResponse.status === 200){
                statusData.value = statusResponse.data
            }
        return statusResponse.data.id
        } catch(error){
            console.log(error);
            
        }
        
    }
}
console.log(status())
onMounted(status);

export default function useForm(){
    const values = reactive({
        title:'',
        description:'',
        country:'',
        city:'',
        price:'',
        delivery_status:'',
        state:'',
        images:'',
        price_type:'',
        phone:'',
        user_id: status(),
    });

    return{
        values,
    }
}





