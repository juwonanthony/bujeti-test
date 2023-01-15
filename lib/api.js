import axios from 'axios'

export const axiosInstance = () => {
  return axios.create({
    baseURL: 'https://api.storyblok.com/v2/cdn/stories',
    params: {
      token: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
      version: 'draft',
    },
    timeout: 5000,
  })
}

export const fetchData = async (route) => {
  try {
    const { data } = await axiosInstance().get(route)
    return data?.story
  } catch (error) {
    //error -> for debugging
    return null
  }
}
