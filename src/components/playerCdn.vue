<template>
  <div id="player"></div>
</template>

<script>
export default {
  setup(props) {
    const init = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://videocdn.tv/storage/default_players/7352.js";
      document.head.appendChild(script);
    };
    const playerjs = () => {
      var player = new Playerjs({
        id: "player",
        file: "https://1.svetacdn.in/R2w6Nvw11JVw/movie/267",
      });
    };

    onMounted(() => {
      console.log(document.head);
      script.value = document.createElement("script");
      script.value.setAttribute("src", "/player-script/yo.js");
      document.head.appendChild(script.value);
    }),
      onUnmounted(() => {
        console.log("Удаление", script.value);
        console.log("Документ", document.head);
        document.head.removeChild(script.value);
      });
    return {
      playerjs,
      init,
    };
  },
};
</script>

<style></style>
