<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const models = [
  'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json',
  'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json'
]

const enabled = ref(false)
const frame = ref(null)
let pointerListeners

onMounted(async () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return
  enabled.value = true
  await nextTick()
  const element = frame.value
  const { default: runtime } = await import('./live2d.js')
  if (!element || frame.value !== element) return

  // The legacy renderer starts its own animation loop. Keeping it in a separate
  // document lets the browser release its global listeners and WebGL context.
  const doc = element.contentDocument
  const frameWindow = element.contentWindow
  const canvas = doc.createElement('canvas')
  canvas.id = 'vuepress-cat'
  canvas.width = element.clientWidth
  canvas.height = element.clientHeight
  doc.body.style.margin = '0'
  doc.body.style.overflow = 'hidden'
  doc.body.appendChild(canvas)

  const script = doc.createElement('script')
  script.textContent = runtime
  doc.body.appendChild(script)
  frameWindow.loadlive2d(canvas.id, models[Math.floor(Math.random() * models.length)])

  pointerListeners = new AbortController()
  const { signal } = pointerListeners
  function forwardPointer(event) {
    const rect = element.getBoundingClientRect()
    frameWindow.dispatchEvent(new frameWindow.MouseEvent(event.type, {
      button: event.button,
      clientX: event.clientX - rect.left,
      clientY: event.clientY - rect.top
    }))
  }
  window.addEventListener('mousemove', forwardPointer, { signal })
  window.addEventListener('mousedown', forwardPointer, { signal })
  document.addEventListener('mouseout', event => {
    if (!event.relatedTarget) doc.dispatchEvent(new frameWindow.MouseEvent('mouseout'))
  }, { signal })
})

onBeforeUnmount(() => pointerListeners?.abort())
</script>

<template>
  <iframe
    v-if="enabled"
    ref="frame"
    class="site-cat"
    title="Animated cat"
    aria-hidden="true"
    tabindex="-1"
  ></iframe>
</template>

<style scoped>
.site-cat {
  position: fixed;
  right: 0;
  bottom: -20px;
  z-index: 100;
  width: 10.53vw;
  height: 13.16vw;
  border: 0;
  opacity: 0.9;
  pointer-events: none;
}
</style>
