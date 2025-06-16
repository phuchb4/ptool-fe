import apiClient from "../api/axios";
import { LoginCredential } from "../types/credentials.type";

function authService() {
    const Login = async (credentials: LoginCredential) => {
        return await apiClient.post('/login', {...credentials})
    };

    return {
        Login
    };
}

export default authService;