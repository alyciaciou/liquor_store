import { GET, POST } from '@/apis/base';

const { BASE_URL } = import.meta.env;
const addTocart = ( data ) => {
    const res = POST(`/api${BASE_URL}cart`, data);
    return res;
};

const getCartInfo = () => {
    const res = GET(`/api${BASE_URL}cart`);
    return res;
};

export { addTocart, getCartInfo }