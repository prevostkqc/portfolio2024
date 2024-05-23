<template>
    <!-- Satrting -->
    <div class=""></div>
        <section class="kp_starting">
            <div class="kp_ecran-container">
                <img class="kp_ecran  kp_ecran--step1" src="images/ecran_eteint.png" alt="écran">
                <img class="kp_ecran  kp_ecran--step0  kp_ecran--step3" src="images/ecran2.png" alt="écran click">
                <img class="kp_ecran  kp_ecran--step0  kp_ecran--step2" src="images/ecran1.png" alt="écran click">
                <img class="kp_ecran  kp_ecran--step0  kp_ecran--step5" src="images/ecran41.png" alt="écran click">
                <img class="kp_ecran  kp_ecran--step0  kp_ecran--step4" src="images/ecran5.png" alt="écran click">
                <img class="kp_ecran  kp_ecran--step0  kp_ecran--step6" src="images/ecran6.png" alt="écran click">
            </div>
        </section>
    <!-- Satrting -->
</template>

<script>
    export default {
        name: 'Starting',
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
    .kp_starting{
        width: 100vw;
        height: 100vh;
        background: rgb(0, 0, 0);
        background-image: url('/public/images/windows-spring.jpg');
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        z-index: 99999;
        display: flex;
        overflow: hidden;
        animation : fadeIn 1s 3.5s forwards;
    }
    .kp_ecran-container{
        width: 60vw;
        height: 90vh;
        top: 0;
        left: 0;
        margin: auto;
        position: relative;
        padding-top: 10vh;
        max-width: 1200px;
        animation: entrerdanslecran 2.5s 3s forwards;
    }

    .kp_ecran{
        position: absolute;
        width: 100%;
        pointer-events: none;
    }
    .kp_ecran--step1{
        filter: drop-shadow(0 0 2.5rem #000);
    }
    .kp_ecran--step0  {
        opacity:0;
    }
    .kp_ecran--step2{
        animation: step2 0.5s 0.5s forwards;
    }
    .kp_ecran--step3{
        animation: step3 0.1s 0.5s forwards;
    }
    .kp_ecran--step4{
        animation: step4 0.5s 1s forwards;
    }
    .kp_ecran--step5{
        animation: step5 1s 0.5s forwards;
    }
    .kp_ecran--step6{
        animation: step6 0.5s 1.5s forwards;
    }
    @keyframes step2 {
        0%{
            opacity: 1;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }   
    @keyframes step3 {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 1;
        }
    }   
    @keyframes step4 {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }   
    @keyframes step5 {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }   
    @keyframes step6 {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes fadeIn {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
            pointer-events: none;
        }
    }
    @keyframes entrerdanslecran {
        0%{
            transform: scale(1);
            opacity: 1;
            top: 0;
        }
        20%{
            opacity: 0;
        }
        100%{
            opacity: 0;
            transform: scale(10);
            top: 40%;
        }
    }
    @keyframes entrerdanslecranmobile {
        0%{
            transform: scale(1);
            opacity: 1;
            top:25vh;
        }
        20%{
            opacity: 0;
        }
        100%{
            opacity: 0;
            transform: scale(10);
            top: 300%;
        }
    }
    @media screen and (max-width: 900px){
        
        .kp_ecran-container{
            animation: entrerdanslecranmobile 2.5s 3s forwards;
            top: 25vh;
        }
    }
</style>