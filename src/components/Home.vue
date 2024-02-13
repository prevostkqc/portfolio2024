<template>
    <div>
      <article class="kp_un-projet" v-if="projetActuel">
        <h1>{{ projetActuel.titre }}</h1>
        <ul class="kp_projet-technos">
          <li v-for="technologie in projetActuel.techno" :key="technologie"
              :class="['kp_projet-technos', `kp_projet-technos--${technologie.toLowerCase()}`]">
            {{ technologie }}
          </li>
        </ul>
        <p class="kp_projet-annee">{{ projetActuel.annee }}</p>
      </article>
  
      <!-- Boutons pour changer de projet -->
      <button v-for="(projet, index) in projets" :key="projet.titre" @click="changerProjet(index)">
        Afficher {{ projet.titre }}
      </button>
    </div>
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
        // Remplacer './assets/projets.json' par '/assets/projets.json' si nécessaire
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
      }
    }
  };
  </script>
  
  <style>
  /* Tes styles ici */
  </style>
  