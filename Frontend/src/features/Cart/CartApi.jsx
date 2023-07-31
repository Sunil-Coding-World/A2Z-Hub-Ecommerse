export function AddtoCart(item) {
    return new Promise(async (resolve) =>{
      //TODO: we will not hard-code server URL here
        const response = await fetch('http://localhost:8000/cart', {
            method: "POST",
            body: JSON.stringify(item),
            headers: {'content-type' : 'application/json'}
      })
      const data = await response.json()
      resolve({data})
    }
    );
}