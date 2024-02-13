var app = new Vue({
    el: '#app',
    data: {
      projets: [],
      projetActuel: null,
    },
    methods: {
        async chargerProjets() {
            try {
                
                const response = await fetch('./assets/projets.json');
                const data = await response.json();
                this.projets = data;
                this.projetActuel = this.projets[0]; // Initialiser avec le premier projet
            } catch (error) {
                console.error('Erreur de chargement des projets:', error);
            }
        },
        changerProjet(index) {
            this.projetActuel = this.projets[index];
        }
    },
    created() {
      this.chargerProjets();
    },
  });