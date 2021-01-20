export default {
  mounted (el, binding) {
    console.log('mounted', binding)
    el.style[binding.arg] = binding.value
  },
  updated (el, binding) {
    console.log('upd', binding)
    el.style[binding.arg] = binding.value

  },
  unmounted () {}
}
