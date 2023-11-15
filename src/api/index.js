import axios from "axios"

export const getResult = async (url) => {
    try {
        const response = await axios.post(
            'http://127.0.0.1:5000/api/v1/phishingURL',
            { "url": url },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
      
        console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
