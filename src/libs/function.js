import axios from "axios";

const callAxios = async (url, method, data, params) => {
    const options = {
        url: url,
        method: method,
        data: data,
        params: params,
    };
    try {
        const response = await axios(options);
        return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export {callAxios}