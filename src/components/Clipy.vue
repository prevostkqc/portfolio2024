<template>
    <!-- Clipy -->
        <article class="kp_clipy">
            <img class="kp_clipy--img" src="/images/clipy.gif" alt="Clipy">
        </article>
        <div class="kp_clipy--bulle">
            Bonjour, je suis Clipy, votre assistant personnel.
            <br>Comment puis-je vous aider&nbsp;?
        </div>
    <!-- Clipy -->
</template>

<script>
    export default {
        name: 'Clipy',
        data() {
            return {
            };
        },
        methods: {
        },
        mounted() {
        },
    };
</script>

<style scoped>
    .kp_clipy{
        width:70px;
        position: absolute;
        bottom:70px;
        right: 30px;
        z-index: 1000;
    }
    .kp_clipy--img{
        width:100%;
    }
</style>