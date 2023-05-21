import request from '@/utils/axios';
import type { searchResponseType } from './types'


export const reqSearch = (keyword:string,pageNo:number,pageSize:number) => {
    return request<searchResponseType>({
        url: '/common/search',
        params:{
            keyword,
            pageNo,
            pageSize
        },
        method: 'get',
    });
};

