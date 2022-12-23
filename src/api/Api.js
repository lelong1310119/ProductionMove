import axios from 'axios';
import User from '../Cookie/User';

const api = axios.create({
    baseURL: 'https://production-move-be.vercel.app',
    // withCredentials: true
  })
let auth = User.getCookieData()

const Api = {
    getAuth: () => {
        auth = User.getCookieData();
    },
    
    login: async(data) => {
        const response = await api.post("/api/login", data);
        return response;
    },

    getProductline: async() => {
        const response = await api.get("/api/product-lines");
        return response;
    },

    getFactory: async() => {
        const response = await api.get("/api/manufacture-factories");
        return response;
    },

    getAgent: async() => {
        const response = await api.get("/api/distribution-agents");
        return response;
    },

    getWarrantyCenter: async() => {
        const response = await api.get("/api/warranty-centers");
        return response;
    },

    createProductionIot: async(param) => {
        const response = await api({
            url: "/api/manufacture-factories/create-production-lot",
            method: "POST",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
            data: param
        })
        return response;
    },

    exportProductionIot: async(param) => {
        const response = await api({
            url: "/api/manufacture-factories/export-production-lot",
            method: "POST",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
            data: param
        })
        return response;
    },

    soldProduction: async(param) => {
        const response = await api({
            url: "/api/distribution-agents/sold-production",
            method: "POST",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
            data: param
        })
        return response;
    },

    guaranteeProduction: async(param) => {
        const response = await api({
            url: "/api/distribution-agents/guarantee",
            method: "POST",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
            data: param
        })
        return response;
    },

    sendProductionBackFactory: async(param) => {
        const response = await api({
            url: "/api/distribution-agents/send-back-factory",
            method: "POST",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
            data: param
        })
        return response;
    },

    guaranteeDone: async(param) => {
        const response = await api({
            url: "/api/warranty-center/guarantee-done",
            method: "POST",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
            data: param
        })
        return response;
    },

    guaranteeError: async(param) => {
        const response = await api({
            url: "/api/warranty-center/send-back-to-factory",
            method: "POST",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
            data: param
        })
        return response;
    },

    getProductionIot: async() => {
        const response = await api({
            url: "/api/production-lots",
            method: "GET",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
        })
        return response;
    },

    getProductionIot: async() => {
        const response = await api({
            url: "/api/production-lots",
            method: "GET",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
        })
        return response;
    },

    getProductionError: async() => {
        const response = await api({
            url: "/api/manufacture-factories/productions-error?page=1&per_page=1000",
            method: "GET",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
        })
        return response;
    },

    getProductionReturn: async() => {
        const response = await api({
            url: "/api/manufacture-factories/productions-return-back?page=1&per_page=1000",
            method: "GET",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
        })
        return response;
    },

    getOnSaleProduction: async() => {
        const response = await api({
            url: "/api/distribution-agents/on-sale-productions",
            method: "GET",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
        })
        return response;
    },

    getSoldProduction: async() => {
        const response = await api({
            url: "/api/distribution-agents/sold-productions?page=1&per_page=1000",
            method: "GET",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
        })
        return response;
    },

    getGuaranteeingProduction: async() => {
        const response = await api({
            url: "/api/warranty-centers/guaranteeing-productions?page=1&per_page=1000",
            method: "GET",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
        })
        return response;
    },

    getGuaranteeDoneProduction: async() => {
        const response = await api({
            url: "/api/warranty-centers/guarantee-done-productions?page=1&per_page=1000",
            method: "GET",
            headers: {
                "user_auth_data": JSON.stringify(auth),
            },
        })
        return response;
    },
}

export default Api;
