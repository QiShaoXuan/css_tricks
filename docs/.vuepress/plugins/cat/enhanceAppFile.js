import Cat from './cat.vue'

export default (params ) => {
  const {Vue} = params
  console.log(params)
  
  Vue.component('Cat', Cat)
}
