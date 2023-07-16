<template>
  <header class="flex flex-col sm:flex-row p-6 font-mono bg-black text-white">
    <div class="flex items-center justify-between sm:justify-start">
      <div class="mt-2 font-bold">{{ $t("header-title") }}</div>
      <button class="sm:hidden text-white" @click="toggleMenu">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <nav :class="{'hidden': !isMenuOpen}" class="flex flex-col sm:flex-row sm:ml-auto mt-2 sm:mt-0">
      <a class="mt-2 mr-5 underline hover:text-cyan-300 transition-colors" href="">{{ $t("header-a") }}</a>
      <select class="mt-2 text-black w-auto max-w-min" @change="changeLocale" style="overflow: hidden; text-overflow: ellipsis;">
        <option value="en">{{ $t("header-en") }}</option>
        <option value="es">{{ $t("header-es") }}</option>
      </select>
    </nav>
  </header>
  <div class="flex p-0.5 bg-cyan-300"></div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    changeLocale(event) {
      const selectedLocale = event.target.value;
      this.$i18n.locale = selectedLocale;
    },
    handleResize() {
      if (window.innerWidth >= 640) { // Aquí puedes ajustar el ancho de pantalla a partir del cual se mostrarán automáticamente los elementos de navegación
        this.isMenuOpen = true;
      } else {
        this.isMenuOpen = false;
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize(); // Para que el estado inicial sea correcto en función del ancho de la pantalla al cargar la página
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
