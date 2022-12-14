import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:4000/',
	Accept: 'application/json',
	headers: { 'Cache-Control': 'no-cache' },
	adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false }),
});

export default axiosInstance;
