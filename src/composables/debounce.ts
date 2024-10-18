import { ref, Ref, watch, onUnmounted } from "vue";

export function useDebounce<T>(value: Ref<T>, delay = 300): Ref<T> {
  const debouncedValue = ref(value.value) as Ref<T>;
  let timeout: ReturnType<typeof setTimeout>;

  const updateDebouncedValue = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      debouncedValue.value = value.value;
    }, delay);
  };

  watch(value, updateDebouncedValue, { immediate: true });

  onUnmounted(() => {
    clearTimeout(timeout);
  });

  return debouncedValue;
}
