<template>
    <header class="header">
      <div class="header-group">
        <div class="flex items-center justify-between py-10">
          <div class="w-28 lg:w-36 ">
            <img
              src="../../assets/images/logo_white.png"
              alt="logo"
              class="w-full"
            >
          </div>
          <div class="flex">
            <button
              @click="()=>emit('create-account')"
              class="px-6 py-2 font-bold text-white"
            >Sign Up</button>
            <button
              @click="()=>emit('login')"
              class="btn-primary"
            >Sign In</button>
          </div>
        </div>
        <div class="flex flex-col mt-28">
          <h1 class="text-4xl font-black text-white">
            Get feedback. <br>
            And make your customers more <br class="hidden lg:inline-block">
            happy!
          </h1>
          <p class="text-lg font-medium text-white mt-2">
            Receive ideas, complaints and feedback with a <br class="hidden lg:inline-block">
            simple widget on the page.
          </p>
          <button
            class="btn-primary mt-10"
            @click="()=>emit('create-account')"
          >Create a free account</button>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'LandingHeader',
  setup (_, { emit }) {
    return { emit }
  }
}
</script>

<style lang="postcss" scoped>
  .header {
    @apply bg-brand-main w-full flex justify-center;
    height: 700px;
  }
  .btn-primary {
    @apply px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none;
    width: fit-content;
  }
  .header-group {
    @apply flex flex-col w-4/5 max-w-6xl;
  }

  @media screen and (min-width: 1350px) {
    .header-group {
      background-image: url(../../assets/images/blue_balloons.png);
      background-size: 628px;
      background-position: 90% 100%;
      background-repeat: no-repeat;
    }
  }
</style>
