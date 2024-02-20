import { reactive } from "vue";

export default function useForm(){
    const values = reactive({
        title:'',
        description:'',
        country:'',
        city:'',
        price:'',
        delivery_status:'',
        state:'',
    });

    return{
        values,
    }
}