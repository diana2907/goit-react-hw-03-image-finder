import axios from 'axios';

export async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '30777079-fc8e0746f15782a8ac52fec5b';
  const params = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

  const response = await axios(`${url}${params}`);
  return response;
}
