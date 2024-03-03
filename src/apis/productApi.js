import { GET } from '@/apis/base';

const { BASE_URL } = import.meta.env;
const getProducts = () => {
    const res = GET(`/api${BASE_URL}products/all`);
    return res;
};

const getProductInfo = ( id ) => {
    const res = GET(`/api${BASE_URL}product/${id}`);
    return res;
};

export { getProducts, getProductInfo }