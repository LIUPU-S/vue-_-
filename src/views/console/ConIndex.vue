<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    console.log(store.state.app.count);

    const { state } = useStore();
    console.log(state.app.count);
  },
};
</script>
