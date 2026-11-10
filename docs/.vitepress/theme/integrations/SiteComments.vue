<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'

const repository = 'QiShaoXuan/css_tricks'
const issuesUrl = `https://github.com/${repository}/issues`
const issuesApi = `https://api.github.com/repos/${repository}/issues`
const { page, lang } = useData()
const isEnglish = computed(() => lang.value.startsWith('en'))
const section = ref(null)
const visible = ref(false)
const issue = ref(null)
const comments = ref([])
let observer

const legacyLabels = computed(() => {
  const path = page.value.relativePath
    .replace(/(^|\/)(index|README)\.md$/i, '$1')
    .replace(/\.md$/, '.html')
  const label = withBase('/' + path)
  // Older Gitalk builds sometimes prefixed the GitHub Pages base twice.
  return [...new Set([label, withBase(label)])]
})
const issueLink = computed(() => {
  if (issue.value) return `${issuesUrl}/${issue.value.number}`
  const labels = '(' + legacyLabels.value.map(label => `label:"${label}"`).join(' OR ') + ')'
  const query = `is:issue label:Gitalk ${labels}`
  return `${issuesUrl}?q=${encodeURIComponent(query)}`
})

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    visible.value = entry.isIntersecting
  }, { rootMargin: '200px' })
  observer.observe(section.value)
})
onBeforeUnmount(() => observer?.disconnect())

watch([legacyLabels, visible], async ([labels, isVisible], [previousLabels], onCleanup) => {
  if (labels !== previousLabels) {
    issue.value = null
    comments.value = []
  }
  if (!isVisible || issue.value) return

  const controller = new AbortController()
  onCleanup(() => controller.abort())

  async function getJson(url) {
    const response = await fetch(url, { signal: controller.signal })
    if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}`)
    return response.json()
  }

  try {
    for (const label of labels) {
      const query = new URLSearchParams({ state: 'all', labels: 'Gitalk,' + label })
      const threads = await getJson(`${issuesApi}?${query}`)
      const match = threads.find(thread => !thread.pull_request)
      if (!match) continue

      const entries = match.comments
        ? await getJson(`${issuesApi}/${match.number}/comments`)
        : []
      if (controller.signal.aborted) return
      issue.value = match
      comments.value = entries
      break
    }
  } catch {
    // The GitHub link still works when anonymous API requests are rate limited.
  }
})
</script>

<template>
  <section ref="section" class="site-comments" data-comments>
    <ul v-if="comments.length" class="comment-list">
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.user?.login }}</strong>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
    <a :href="issueLink" target="_blank" rel="noopener noreferrer">
      {{ isEnglish ? 'Read or leave comments on GitHub' : '前往 GitHub 查看或发表评论' }}
    </a>
  </section>
</template>

<style scoped>
.site-comments {
  margin: 32px auto 0;
  max-width: 688px;
  padding: 16px 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.site-comments a {
  color: var(--vp-c-brand-1);
}

.site-comments a:hover {
  text-decoration: underline;
}

.comment-list {
  margin-bottom: 16px;
}

.comment-list li {
  margin-bottom: 12px;
  padding: 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.comment-list p {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
</style>
