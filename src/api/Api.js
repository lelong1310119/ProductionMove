import axios from 'axios';

const baseURL = "https://production-move-be.vercel.app";

const Api = {
    createFactory: async(data) => {
        const url = `${baseURL}/api/admins/create-manufacture-factory`;
        const response = await axios.post(url, data);
        return response;
    },

    createAgent: async(data) => {
        const url = `${baseURL}/api/admins/create-distribution-agent`;
        const response = await axios.post(url, data);
        return response;
    },

    createWarrantyCenter: async(data) => {
        const url = `${baseURL}/api/admins/create-warranty-center`;
        const response = await axios.post(url, data);
        return response;
    },

    createProductline: async(data) => {
        const url = `${baseURL}/api/admins/create-production-line`;
        const response = await axios.post(url, data);
        return response;
    },

    getProductline: async() => {
        const url = `${baseURL}/api/product-lines`;
        const response = await axios.get(url);
        return response;
    },

    getFactory: async() => {
        const url = `${baseURL}/api/manufacture-factories`;
        const response = await axios.get(url);
        return response;
    },

    getAgent: async() => {
        const url = `${baseURL}/api/distribution-agents`;
        const response = await axios.get(url);
        return response;
    },

    getWarrantyCenter: async() => {
        const url = `${baseURL}/api/warranty-centers`;
        const response = await axios.get(url);
        return response;
    },

    getProduction: async() => {
        const url = `${baseURL}/api/productions`;
        const response = await axios.get(url);
        return response;
    },
}

export default Api;