<template>
  <div id="socials" class="myContainer grow py-24 sm:py-32 flex flex-col">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Socials
      </h2>
      <p class="mt-2 text-lg/8 text-gray-600">
        You can find me around the internet.
      </p>
    </div>

    <div class="grow flex flex-col justify-center">
      <div class="flex flex-row gap-7 mx-auto">
        <SocialsButton to="https://github.com/fehnomenal">
          <Icon name="mdi:github" class="text-5xl" />
        </SocialsButton>

        <SocialsButton to="https://www.xing.com/profile/Andreas_Fehn4">
          <Icon name="mdi:xing" class="text-5xl" />
        </SocialsButton>

        <SocialsButton to="mailto:business@fehn.systems">
          <Icon name="mdi:at" class="text-5xl" />
        </SocialsButton>
      </div>
    </div>
  </div>
</template>
