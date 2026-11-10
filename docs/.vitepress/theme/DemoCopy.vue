<script setup>
import { useData } from "vitepress";

defineProps({ lang: String });
const { lang: locale } = useData();
</script>

<template>
  <!-- Use the same button/label/code order as VitePress Markdown code fences. -->
  <button type="button" class="copy" :title="locale === 'zh-CN' ? '复制代码' : 'Copy code'"
    :aria-label="locale === 'zh-CN' ? '复制代码' : 'Copy code'"></button>
  <span class="lang">{{ lang }}</span>
</template>
