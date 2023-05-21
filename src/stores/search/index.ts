import { defineStore } from 'pinia'
import to from 'await-to-js'
import type { SearchState, SearchGetters, SearchActions } from './search.type'
import type { Data,ResultList } from '@/api/searchApi/types'
import { reqSearch } from '@/api/searchApi'
export const useSearchStore = defineStore<
  string,
  SearchState,
  SearchGetters,
  SearchActions
>({
  id: 'search', // id必填，且需要唯一
  persist: true, //开启数据持久化
  state: () => {
    return {
      searchInfo: null,
      searchParams: {
        keyword: '',
        pageNo: 1,
        pageSize: 10,
      },
      searchTime: 0,
    }
  },
  getters: {
    // getterSearchInfo(state) {
    //   return state.searchInfo.data
    // },
  },
  actions: {
    async Search(keyword: string, pageNo, pageSize: number) {
      this.searchParams.keyword = keyword
      this.searchParams.pageNo = pageNo
      this.searchParams.pageSize = pageSize
      const timeStart = Date.now()
      const [err, res] = await to(
        reqSearch(
          this.searchParams.keyword,
          this.searchParams.pageNo,
          this.searchParams.pageSize,
        ),
      )
      const timeEnd = Date.now()
      this.searchTime = timeEnd - timeStart
      if (err) {
        console.log(err)
      }
      this.searchInfo = null
      this.searchInfo = res?.data as any
      // Object.assign(this.searchInfo, res?.data!)
      // console.log('searchInfo', this.searchInfo)
    },
    clearState() {
      this.searchInfo = null
      Object.assign(this.searchParams, {
        keyword: '',
        pageNo: 1,
        pageSize: 10,
      })
    },
  },
})
