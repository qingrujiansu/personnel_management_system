//模块化pinia
import {useSearchStore} from './search'
export default function useStore() {
    return {
        searchStore:useSearchStore(),
    }
}


