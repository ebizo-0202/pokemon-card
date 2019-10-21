import { Store } from 'vuex'
import { initialiseStores, nana } from '@/app/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
console.log('before nana')
const nanaed = (store: Store<any>) => nana(store)
nanaed
console.log('after nana')
console.log(nanaed)
export const plugins = [initializer]
export * from '@/app/utils/store-accessor'