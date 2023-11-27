export function fetchLoggedInUserOrders(userId) {
    return new Promise(async (resolve) =>{
      const response = await fetch('https://a2z-hub-server.vercel.app/orders/?user.id='+userId) 
      const data = await response.json()
      resolve({data})
    }
    );
  }