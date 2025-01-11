<template>
  <div class="flex flex-row justify-between h-full items-center text-gray-500">
    <div class="flex flex-row gap-5">
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
      <p><a class="underline transition-colors hover:text-black" href="/privacy">Privacy</a></p>
      <p><a class="underline transition-colors hover:text-black" href="/impress">Impress</a></p>
    </div>
  </div>
</template>
