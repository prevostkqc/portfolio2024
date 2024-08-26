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
        position: fixed;
        bottom:50px;
        right: 30px;
        z-index: 1000;
    }
    .kp_clipy--img{
        width:100%;
        filter: drop-shadow(2px 4px 4px black);
    }
    
    
    @media screen and (max-width: 900px){
        .kp_clipy {
            width: 50px;
            bottom: 50px;
            right: 10px;
        }
        .kp_clipy--bulle{
            max-width: 50vw;
            min-width: 50vw;
        }
        .kp_clipy--bulle::after{
            right: 40px;
        }
    }
</style>