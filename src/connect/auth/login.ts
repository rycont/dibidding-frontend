import { createAPIConnector } from "../connector";

export interface LoginInfo {
    userID: string;
    password: string;
}

export const loginWithInfo = createAPIConnector<{}, LoginInfo, {
    token: string
}>('/login', {
    method: "POST",
    needAuth: false,
    mockHandler: () => ({
        token: ""
    })
})
