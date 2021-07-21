import axios from "axios";
const instance=axios.create({
    baseURL:"http://localhost:5001/clone-a5e37/us-central1/api"
    //baseURL:"http://localhost:3000/payment"
})
export default instance;
