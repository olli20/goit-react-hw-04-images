import axios from 'axios';

const instance = axios.create({
    baseURL: "https://pixabay.com/api",
    params: {
      key: "32051707-22cc9bd81885c5eb5ea8ac825",
      per_page: 20,
      image_type: "photo",
      orientation: "horizontal",
    },
  });

export const searchImages = async(q, page) => {
    const {data} = await instance.get("/", {
        params: {
            q, 
            page
        },
      });
    return data;
}