<script setup>
import DefaultTheme from "vitepress/theme";
import { useData, withBase } from "vitepress";
import logo from "../../../logo.png";
import SiteCat from "./integrations/SiteCat.vue";
import SiteComments from "./integrations/SiteComments.vue";

const { frontmatter, lang } = useData();
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-title-before>
      <img class="site-logo" :src="logo" alt="CSS Tricks" width="377" height="100" />
    </template>
    <template #nav-bar-content-after>
      <a v-if="frontmatter.languageLink" class="language-link" :href="withBase(frontmatter.languageLink)"
        :lang="lang === 'zh-CN' ? 'en' : 'zh-CN'" :hreflang="lang === 'zh-CN' ? 'en' : 'zh-CN'">
        {{ lang === 'zh-CN' ? 'English' : '中文' }}
      </a>
    </template>
    <template #doc-after><SiteComments /></template>
    <template #layout-bottom><SiteCat /></template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.site-logo {
  width: 128px;
  height: auto;
}

@media (max-width: 480px) {
  .site-logo {
    width: 104px;
  }
}
</style>
