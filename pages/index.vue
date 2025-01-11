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

  <MiscSectionWrapper>
    <SocialsMain />
  </MiscSectionWrapper>

  <MiscSectionWrapper>
    <Projects />
  </MiscSectionWrapper>

  <MiscSectionWrapper is-small-height>
    <Footer />
  </MiscSectionWrapper>
</template>
