export function fetchProducts() {
    return new Promise(async (resolve) =>{
      //TODO: we will not hard-code server URL here
      const response = await fetch('http://localhost:8000/products') 
      const data = await response.json()
      resolve({data})
    }
    );
  }


 export function fetchProductsByFilter(filter,pagination) {
  //todo for multiple filter
  let querystring = '';
  for (let key in filter) {
    querystring +=`${key}=${filter[key]}&`
  } 
  for (let key in pagination) {
    querystring +=`${key}=${pagination[key]}&`
  } 
    return new Promise(async (resolve) =>{
      //TODO: we will not hard-code server URL here
      const response = await fetch(`http://localhost:8000/products?${querystring}`) 
      const data = await response.json()
      const totalItems= await response.headers.get('X-Total-Count')
      resolve({data:{products:data,totalItems:+totalItems}})
    }
    );
  }