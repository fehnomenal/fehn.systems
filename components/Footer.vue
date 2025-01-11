<template>
  <div class="myContainer flex-grow flex flex-col md:flex-row justify-between items-center text-gray-500">
    <div class="flex flex-row flex-wrap gap-x-5 gap-y-2">
      <p>&copy; {{ new Date().getFullYear() }} The authors</p>

      <p>
        This page is open source:
        <a
          class="underline transition-colors hover:text-black" target="_blank"
          href="https://github.com/fehnomenal/fehn.systems" rel="noopener noreferrer"
        >GitHub</a>
        (external link)
      </p>
    </div>

    <div class="flex flex-row gap-5">
      <p>
        <NuxtLink class="underline transition-colors hover:text-black" to="/privacy">
          Privacy
        </NuxtLink>
      </p>
      <p>
        <NuxtLink class="underline transition-colors hover:text-black" to="/impress">
          Impress
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
