import myAxios from "../plugins/myAxios.ts";
import {setCurrentUserState} from "../states/user.ts";

export const getCurrentUser = async () => {
    // const currentUser = getCurrentUserState();
    // if (currentUser) {
    //     return currentUser;
    // }
    // 不存在则从远程获取
    const res = await myAxios.get('/user/current');
    if (res.data.code === 0) {
        setCurrentUserState(res.data);
        return res.data;
    }
    // const res = await myAxios.get('/user/current')
    return null;
}
