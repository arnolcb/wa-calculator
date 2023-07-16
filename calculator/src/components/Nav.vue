<template>
  <header class="flex p-6 font-mono bg-black text-white">
    <h1> {{ $t("header-title") }} </h1>
    <nav class="flex ml-auto">
      <!--
      <router-link class="ml-2" to="/">Home</router-link>
      <router-link class="ml-2" to="/about">About</router-link>
      -->
      <a class="mr-5 underline hover:text-cyan-300 transition-colors" href="">{{ $t("header-a") }}</a>
      <select class="ml-2 text-black" @change="changeLocale">
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </nav>
  </header>
</template>

<script>
export default{
  methods: {
    changeLocale(event) {
      const selectedLocale = event.target.value;
      this.$i18n.locale = selectedLocale;
    },
  },
}
</script>
