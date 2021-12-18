import { TypeUser } from "@/type";
import { createAPIConnector } from "..";

export const getUserInfo = createAPIConnector<{}, {}, {
    userInfo: TypeUser,
}>('info', {
    method: "GET",
    needAuth: false,
    mockHandler: () => ({
        userInfo: {
            dimigoin_uid: 1010,
            name: "홍길도",
            student_id: "1010",
            user_id: "1010",
            user_photo: "http://github.com/rycont.png"
        }
    })
})
