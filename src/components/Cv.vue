<template>
        <!-- folder projects -->
        <section class="kp_quisuisje  kp_z-index  kp_changed__id  kp_item__window"  id="kp_quisuisje">
        <div class="kp_element--title">
            <div class="kp_element--icon-title   kp_element--enable">
                <p class="kp_ascii--titre  ">
                    <div class="kp_element_title--icn"><img class="kp_icon_zone--img" src="/images/folder.png" alt="reduct"></div><span>Kévin Prévost - Mon parcours</span>
                </p>
            </div>
            <div class="kp_element--incons-zone">
                <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-folder-projects" id="kp_action--reduct--folder-projects"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-folder-projects" id="kp_action--resize--folder-projects"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-folder-projects"  id="kp_action--close--folder-projects"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
            </div>
        </div>
        <div class="kp_folder-projects-zone-texte  kp_quisuisje--texte  kp_element--enable">
            <article class="kp_quisuisje--content">
                
                <div class="kp_cv-experience--line">
                    <div class="kp_cv-experience-line">
                        <div class="kp_cv-experience-line--content">
                            <div class="kp_compagnie-img-nom">
                                <div class="kp_cv-experience-line--logo"><img src="/images/sites/cybertek.png" class="kp_img-cv" alt="Cybertek"></div>
                                <div class="kp_cv-experience-line--entreprise">
                                    <div class="kp_cv-experience-line--title  kp_p-black  kp_h4">Responsable Cellule Créative & Développeur Front-end</div>
                                    <div class="kp_cv-experience-line--company  kp_p-black  kp_h6">GROUPE CYBERTEK</div>
                                    <div class="kp_cv-experience-line--date  kp_p-black">2021 - 2024</div>
                                    <div class="kp_cv-experience-line--poste  kp_p-black">Bordeaux</div>
                                </div>
                            </div>
                            <ul>
                                <li class="kp_cv-li  kp_p-black">Responsable des Développeurs Front-end, Integrateurs et Webdesigner. </li>
                                <li class="kp_cv-li  kp_p-black">Intégration CSS, développement Front-end en collaboration avec l'équipe Back-end. </li>
                                <li class="kp_cv-li  kp_p-black">Optimisation multi supports (responsive) de l'ensemble des affichages pour une meilleure expérience utilisateur.</li>
                                <li class="kp_cv-li  kp_p-black">Gestion d'équipe basée sur une organisation et une communication permanente pour tenir les délais annoncés et trouver des solutions aux éventuels problèmes rencontrés. </li>
                                <li class="kp_cv-li  kp_p-black">Mise en place de points quotidiens et hebdomadaires pour s'assurer de la bonne avancée de chaque projet. </li>
                                <li class="kp_cv-li  kp_p-black">Création et gestion d'un espace Notion pour simplifier les échanges concernant les projets et l'équipe. </li>
                                <li class="kp_cv-li  kp_p-black">Communication interservices pour la gestion des projets.</li>
                            </ul>
                            <ul class="kp_cv-experience-line--technos  kp_projet-technos">
                                <li>
                                    <img src="/images/logos-technos/js.png" class="kp_img-techno" alt="Javascript">
                                    <p class="kp_projet-techno--text">
                                        Javascript
                                    </p>
                                </li>
                                <li>
                                    <img src="/images/logos-technos/html5.png" class="kp_img-techno" alt="Html5">
                                    <p class="kp_projet-techno--text">
                                        HTML5
                                    </p>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                </div>
                

            </article>
        </div>
        <div class="resize-handle"></div>
    </section>
    <!-- folder projects -->
</template>

<script>
    export default {
        name: 'Cv',
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
    .kp_quisuisje{
        background: white;
    }
    .kp_quisuisje--content{
        background: white;
        height:100%;
        overflow: hidden;
        overflow-y: scroll;
    }
    .kp_quisuisje--texte {
        background: #ffffff;
        border: solid 1px #b5b5b5;
        position: absolute;
        top: 36px;
        left: 0;
        right: 0;
        bottom: 0;
        height: calc(100% - 37px);
    }
    .kp_compagnie-img-nom{
        display: flex;
        gap: 10px;
    }
    .kp_img-cv{
        width: 65px;
        height: 65px;
    }
    .kp_cv-li{
        padding-left: 20px;
        position: relative;
        line-height: 1.3;
    }
    .kp_cv-li:before{
        content: "•";
        position: absolute;
        left: 0;
        color: #000;
    }
</style>