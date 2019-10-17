import axios from 'axios'
const instance=axios.create();
instance.wapUrl="http://localhost:3002";
instance.defaults.baseURL="http://localhost:3002";
instance.defaults.timeout=5000;
instance.defaults.headers['Content-Type']='application/x-www-form-urlencoded';
axios.interceptors.request.use=instance.interceptors.request.use;
instance.interceptors.request.use(config=>{
    return config
},err=>{
    return Promise.reject(err)
});


instance.interceptors.response.use(response=>{
    return response
},err=>{
    return Promise.reject(err)
});

export default instance
