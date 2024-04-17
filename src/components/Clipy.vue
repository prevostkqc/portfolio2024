<template>
    <!-- Clipy -->
        <article class="kp_clipy">
            <img class="kp_clipy--img" src="/images/clipy.gif" alt="Clipy">
        </article>
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
        right: 15px;
    }
    .kp_clipy--img{
        width:100%;
    }
</style>