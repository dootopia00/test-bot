import axios from 'axios';

export const mainList = (url: string, page: any) => {
  
  (async () => {

    try {
      let host = '/product/list?page=1&perPage=10';
      // console.log('url : ', process.env.API_URL+host);
      const response = await axios.get(process.env.API_URL+host);

      if(response.data.code === 200){
        console.log(response.data.code+'-'+process.env.API_URL+host)
      }else{
        console.log('response : ', response.data.code)
      }

      // Print the results
    } catch (error) {
      console.error('An error occurred:', error);
    
    } finally {
      // console.error('finally ');
    }

  })();
}

export const mainTestList = (url: string) => {
  (async () => {

    // console.log('getProduct ');
    try {
      let host = '/product/2';
      let response = await axios.get(process.env.API_URL+host);

      if(response.data.code === 200){
        console.log(response.data.code+'-'+process.env.API_URL+host)
      }else{
        console.log('response : ', response.data.code)
      }


      
      // Print the results
    } catch (error) {
      console.error('An error occurred:', error);
    
    } finally {
      // console.error('finally ');
    }

  })();
}
