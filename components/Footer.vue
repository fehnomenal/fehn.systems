<template>
  <div class="myContainer grow flex flex-col md:flex-row justify-between gap-y-3 items-center text-gray-500">
    <p>&copy; 2025 The authors</p>

    <div class="flex flex-row gap-5">
      <p>
        <NuxtLink
          class="underline transition-colors hover:text-black" target="_blank"
          to="https://github.com/fehnomenal/fehn.systems" rel="noopener noreferrer"
        >
          GitHub
        </NuxtLink>
      </p>
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
