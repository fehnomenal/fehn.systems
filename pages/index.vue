<script setup lang="ts">
useHead({
  title: 'Andreas Fehn',
})
</script>

<template>
  <MiscSectionWrapper is-small-height>
    <Header />
  </MiscSectionWrapper>

  <MiscSectionWrapper>
    <BioMain />
  </MiscSectionWrapper>

  <MiscSectionWrapper class="bg-slate-200 shadow-inner">
    <SocialsMain />
  </MiscSectionWrapper>

  <MiscSectionWrapper>
    <Projects />
  </MiscSectionWrapper>

  <MiscSectionWrapper is-small-height>
    <Footer />
  </MiscSectionWrapper>
</template>
