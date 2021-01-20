export default {
  mounted (el, binding) {
    console.log('mounted', binding)
    el.style.color = binding.value
  },
  updated (el, binding) {
    console.log('upd', binding)
    el.style.color = binding.value
  },
  unmounted () {}
}
