export function fetchProducts() {
    return new Promise(async (resolve) =>{
      //TODO: we will not hard-code server URL here
      const response = await fetch('https://a2z-hub-server.vercel.app/products') 
      const data = await response.json()
      resolve({data})
    }
    );
  }


  export function fetchProductById(id) {
    return new Promise(async (resolve) =>{
      //TODO: we will not hard-code server URL here
      const response = await fetch('https://a2z-hub-server.vercel.app/products/'+id) 
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
      const response = await fetch(`https://a2z-hub-server.vercel.app/products?${querystring}`) 
      const data = await response.json()
      const totalItems= await response.headers.get('X-Total-Count')
      resolve({data:{products:data,totalItems:+totalItems}})
    }
    );
}
  

export function fetchCategories() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('  https://a2z-hub-server.vercel.app/categories') 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchBrands() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('https://a2z-hub-server.vercel.app/brands') 
    const data = await response.json()
    resolve({data})
  }
  );
}