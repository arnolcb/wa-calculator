<template>
  <div
    class="text-2xl font-mono flex mt-6 font-bold text-center justify-center"
  >
    {{ $t("calculator") }}
  </div>
  <div class="font-mono flex ml-5 mr-5 mt-4 text-center justify-center">
    {{ $t("calculator-description") }}
  </div>
  <div class="font-mono grid grid-cols-2 gap-4 p-6">
    <div>
      <div class="font-bold mb-2">{{ $t("calculator-c1-title") }}</div>
      <div v-for="(note, index) in notes" :key="index" class="mb-2">
        <input
          class="border px-2 py-1 w-full"
          type="text"
          :placeholder="$t('note') + ' ' + (index + 1)"
          v-model="notes[index].value"
        />
      </div>
    </div>
    <div>
      <div class="font-bold mb-2">{{ $t("calculator-c2-title") }}</div>
      <div v-for="(note, index) in notes" :key="index" class="mb-2">
        <input
          class="border px-2 py-1 w-full"
          type="text"
          :placeholder="$t('note-weight') + ' ' + (index + 1)"
          v-model="notes[index].weight"
        />
      </div>
    </div>
  </div>
  <div
    class="flex ml-6 mr-6 mb-6 sm:flex-row flex-col justify-center sm:space-x-4 sm:space-y-0 space-y-4"
  >
    <button
      @click="addRow"
      class="font-mono bg-gray-50 border border-black hover:bg-gray-200 transition-colors text-black py-2 px-4 w-full sm:w-auto"
    >
      {{ $t("add-row") }}
    </button>
    <button
      @click="removeRow"
      class="font-mono bg-gray-50 border border-black hover:bg-gray-200 transition-colors text-black py-2 px-4 w-full sm:w-auto"
    >
      {{ $t("remove-row") }}
    </button>
    <button
      @click="calculate"
      class="font-mono bg-cyan-300 border border-black hover:bg-cyan-400 transition-colors text-black py-2 px-4 w-full sm:w-auto"
    >
      {{ $t("calculate") }}
    </button>
  </div>
  <div class="font-normal font-mono mt-2 ml-6 mb-10">{{ $t("result-message") }}: {{ result !== null ? result.toFixed(2) : "" }}</div>
</template>

<script>
export default {
  data() {
    return {
      notes: [{ value: "", weight: "" }],
      result: null,
    };
  },
  methods: {
    addRow() {
      this.notes.push({ value: "", weight: "" });
    },
    removeRow() {
      this.notes.pop();
    },
    calculate() {
      let totalWeight = 0;
      let weightedSum = 0;

      for (const note of this.notes) {
        if (note.value && note.weight) {
          const value = parseFloat(note.value);
          const weight = parseFloat(note.weight);

          if (!isNaN(value) && !isNaN(weight)) {
            weightedSum += value * weight;
            totalWeight += weight;
          }
        }
      }

      if (totalWeight === 0) {
        // No se pueden realizar cálculos si el total de los pesos es cero
        this.result = null;
        return;
      }

      /*
      const weightedAverage = weightedSum / totalWeight;
      this.result = weightedAverage;
      alert(`Weighted Average: ${weightedAverage.toFixed(2)}`);
      */

      if (totalWeight === 0) {
        this.result = null;
        return;
      }

      const weightedAverage = weightedSum / totalWeight;
      this.result = weightedAverage;
    },
  },
  filters: {
    formatNumber(value) {
      return value.toFixed(2);
    },
  },
};
</script>
