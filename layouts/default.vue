<template>
  <MiscSectionWrapper is-small-height>
    <Header />
  </MiscSectionWrapper>

  <slot />

  <MiscSectionWrapper is-small-height class="mb-10 md:mb-5 lg:mb-0">
    <Footer />
  </MiscSectionWrapper>
</template>
