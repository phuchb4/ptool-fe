import authService from "../services/auth.service";
import { LoginCredential } from "../types/credentials.type";

function useAuth() {
    const { Login } = authService();

    const loginUser = async (credentials: LoginCredential) => {
        try {
            return await Login(credentials);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        catch (error) {
            alert("Incorrect email or password!")
        }
    };

    return {
        loginUser
    }
}

export default useAuth;