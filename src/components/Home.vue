<template>
    <header class="kp_header">
    </header>
    <main class="kp_main">
        <div class="kp_desktop">

            <!-- Window Internet -->
            <div class="kp_animation_full-screen"></div>
            <div class="kp_window--container" id="kp_iframe--container">
                <div class="kp_window--title-zone">
                    <div class="kp_window--title-zon--title">
                        <p class="kp_p">{{ projetActuel.titre }} - {{ projetActuel.compagnie }}</p>
                    </div>
                    <div class="kp_full--zone">
                        <div class="kp_icon_zone  kp_icon_zone--reduct"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                        <div class="kp_icon_zone  kp_icon_zone--resize"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                        <div class="kp_icon_zone  kp_icon_zone--close" ><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
                    </div>
                </div>
                <div class="kp_window--border">
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
                        <h1 class="kp_h1">{{ projetActuel.titre }}</h1>
                        <p class="kp_projet-annee">{{ projetActuel.annee }}</p>
                        
                        <p class="kp_p  kp_projet_description">{{ projetActuel.description }}</p>
                        <ul class="kp_projet-technos">
                            <li v-for="technologie in projetActuel.techno" :key="technologie"
                                :class="['kp_projet-technos', `kp_projet-technos--${technologie.toLowerCase()}`]">
                                {{ technologie }}
                            </li>
                        </ul>
                    </article>
                </div>
                
                <div class="resize-handle"></div>
            </div>
            <!-- Window Internet -->

            <div class="kp_folder--un-ico  kp_folder--projets">
                <div class="kp_folder--un-ico-container-img">
                    <img class="kp_folder--img" src="/images/folder.png" alt="close">
                </div>
                <p class="kp_folder--un-ico-container-text">
                    Mes projets Cybertek
                </p>
            </div>
        </div>

        <div class="kp_notification__zone">
            <div class="kp_notification--titre">
                <p class="kp_notification--titre-p">
                    <span class="kp_notification--titre-span">
                        Démarrer
                    </span>
                </p>
                <div>
                    <img class="kp_menu_start--img" src="/images/logo-2024.png" alt="">
                </div>
            </div>
        </div>
        <div class="kp_full_screen">passer en plein écran</div>
    </main>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
      data() {
          return {
              projets: [],
              projetActuel: null
          };
      },
      created() {
          this.chargerProjets();
      },
      methods: {
          chargerProjets() {
              axios.get('/projets.json')
              .then(response => {
                  this.projets = response.data;
                  this.projetActuel = this.projets[0]; // Initialiser avec le premier projet
              })
              .catch(error => {
                  console.error('Erreur lors du chargement des projets:', error);
              });
          },
          changerProjet(index) {
              this.projetActuel = this.projets[index];
          },
      },
      mounted() {
          console.log('mounted exécuté');
          const script = document.createElement('script');
          script.src = '/script.js'; // Utilise le chemin relatif depuis la racine
          script.onload = () => {
              console.log('Script externe chargé et exécuté');
          };
          this.$nextTick(() => {
              document.body.appendChild(script);
          });
      }
  };
</script>
  
  <style>
  /* Tes styles ici */
  </style>
  