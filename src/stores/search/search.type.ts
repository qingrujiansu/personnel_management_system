import type {Data} from '@/api/searchApi/types'
export type SearchState = {
    searchInfo:Data | null;
    // searchInfo:{
    //     data:Data | null
    // },
    searchParams:{
        keyword:string,
        pageNo:number,
        pageSize:number
    },
    searchTime:number
}
export type SearchGetters = {
    // getterStudy: (state: StudyState) => Array<Datum>
    // getterSearchInfo:(state:SearchState)=> Data | null
}
export type SearchActions = {
    // findAllFiles: () => void
    Search:(keyword:string,pageNo:number,pageSize:number) => void
    clearState:()=>void
}
  // 注意：如有导入导出的依赖数据或类型，自定义test类型需要使用export导出；否则可视为全局类型即可直接使用
