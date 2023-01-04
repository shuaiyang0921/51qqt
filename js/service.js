// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


var HostAddress = {}
function getHost(hostAddressSign) {
    switch(hostAddressSign){
        case 'els': {
			return axios.defaults.baseURL = 'https://xgw.51qqt.com/els';
        }
    }
}

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */

function get(url, params){    
    return new Promise((resolve, reject) =>{
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
function post(url, params,type) {    
    return new Promise((resolve, reject) => {  
		if(type=="json"){
			axios.post(url, params)
			.then(res => {            
			    resolve(res.data);        
			})        
			.catch(err => {            
			    reject(err.data)        
			})    
		}else{
			axios.post(url, Qs.stringify(params))
			.then(res => {            
			    resolve(res.data);        
			})        
			.catch(err => {            
			    reject(err.data)        
			})    
		}
        
    });
}
