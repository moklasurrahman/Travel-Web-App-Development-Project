export const getAllProducts = async (searchTerm) => {
    const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ''}`);
  
    if (!response.ok) {
      //This code for error handle
      // eslint-disable-next-line no-throw-literal
      throw { message: response.statusText, status: response.status };
    }
  
    const data = await response.json();
    return data;
  };
  

  export const getSingleproduct = async (id) => {
    const response = await fetch(`http://localhost:8000/products/${id}`);
  
    if (!response.ok) {
      //This code for error handle
      // eslint-disable-next-line no-throw-literal
      throw { message: response.statusText, status: response.status };
    }
  
    const data = await response.json();
    return data;
  };



  export const getFeaturedProducts = async () => {
    const response = await fetch("http://localhost:8000/featured_products");
  
    if (!response.ok) {
      //This code for error handle
      // eslint-disable-next-line no-throw-literal
      throw { message: response.statusText, status: response.status };
    }
  
    const data = await response.json();
    return data;
  };

  export const getTrendingProducts = async () => {
    const response = await fetch("http://localhost:8000/trending_products");
  
    if (!response.ok) {
      //This code for error handle
      // eslint-disable-next-line no-throw-literal
      throw { message: response.statusText, status: response.status };
    }
  
    const data = await response.json();
    return data;
  };