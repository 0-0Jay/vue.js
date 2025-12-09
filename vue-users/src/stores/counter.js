import { ref, computed } from "vue";
import { defineStore } from "pinia";

// 관습적으로 use + id값 + Store 로 함수명 정의
export const useCounterStore = defineStore(
  "counter",
  () => {
    // 해당 저장소가 가지는 state, getters, actions 정의
    // state : ref 함수 사용
    const count = ref(0);
    // getters : computed 함수 사용
    const doubleCount = computed(() => count.value * 2);
    // actions : 일반 함수 사용
    function increment() {
      count.value++;
    }
    // return 안에 정의된 항목이 외부에 노출되는 항목
    return { count, doubleCount, increment };
  },
  {
    persist: true,
  }
);
