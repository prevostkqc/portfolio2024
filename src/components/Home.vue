<template>
    <header class="kp_header">
    </header>
    <main class="kp_main">
        <div>
            <div>
                <article class="kp_un-projet" v-if="projetActuel">
                    <h1 class="kp_h1">{{ projetActuel.titre }}</h1>
                    
                    <p class="kp_p">{{ projetActuel.description }}</p>
                    <ul class="kp_projet-technos">
                    <li v-for="technologie in projetActuel.techno" :key="technologie"
                        :class="['kp_projet-technos', `kp_projet-technos--${technologie.toLowerCase()}`]">
                        {{ technologie }}
                    </li>
                    </ul>
                    <p class="kp_projet-annee">{{ projetActuel.annee }}</p>
                </article>
            
                <!-- Boutons pour changer de projet -->
                <div class="kp_window--container" id="kp_iframe--container">
                    <div class="kp_window--title-zone">
                        <div></div>
                    </div>
                    <div class="kp_window--border">
                       <div class="kp_internet--onglets">
                           <button v-for="(projet, index) in projets" :key="projet.titre"  :class="'kp_projet-btn  kp_projet-btn--' + projet.id" @click="changerProjet(index)">
                               {{ projet.titre }}
                           </button>
                       </div> 
                        <iframe :src="projetActuel.url" width="600" height="400" frameborder="0" class="kp_iframe--projet"></iframe>
                    </div>
                </div>
            </div>
        </div>
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
  