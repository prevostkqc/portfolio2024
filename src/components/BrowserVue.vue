<template>
    <section class="kp_window--container  kp_z-index  kp_changed__id  kp_item__window" id="kp_iframe--container">
            <div class="kp_window--title-zone  kp_element--title">
                <div class="kp_window--title-zon--title   kp_element--enable">
                    <p class="kp_p">{{ projetActuel.titre }} - {{ projetActuel.compagnie }}</p>
                </div>
                <div class="kp_element--incons-zone">
                <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-browser"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-browser"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-browser"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
            </div>
            </div>
            <div class="kp_window--border   kp_element--enable">
                <div class="kp_internet--onglets">
                    <button v-for="(projet, index) in projets" :key="projet.titre"  :class="'kp_projet-btn  kp_projet-btn--' + projet.id" @click="changerProjet(index)">
                        {{ projet.titre }}
                    </button>
                    <div class="kp_internet--favorites">
                    </div>
                </div> 
                <iframe :src="projetActuel.url" width="600" height="400" frameborder="0" class="kp_iframe--projet"></iframe>
                
                <article class="kp_un-projet" v-if="projetActuel">
                    
                    <div class="kp_icon_zone  kp_un-projet--close" ><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
                    <h2 class="kp_h2">{{ projetActuel.titre }} - {{ projetActuel.compagnie }}</h2>
                    <span class="kp_projet-annee  kp_h4">{{ projetActuel.annee }}</span>
                    
                    <p class="kp_p  kp_projet_description">{{ projetActuel.description }}</p>
                    <ul class="kp_projet-technos">
                        <li v-for="technologie in projetActuel.techno" :key="technologie"
                            :class="['kp_projet-techno', `kp_projet-techno--${technologie.toLowerCase()}`]">
                            {{ technologie }}
                        </li>
                    </ul>
                </article>
                <div class="kp_information-projet  kp_information-projet--hide">
                    <p class="kp_information--p">Afficher les informations concernant ce projet</p>
                </div>
            </div>
            <div class="resize-handle"></div>
        </section>
        <!-- Window Internet -->
  </template>
  
  <script>
  export default {
    name: 'Browser'
  }
  </script>
  
  <style scoped>
  /* Ton style ici */
  </style>