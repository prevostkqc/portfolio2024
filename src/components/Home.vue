<template>
    <header class="kp_header">
    </header>
    <main class="kp_main">
        <section class="kp_desktop">

            <article class="kp_folder--un-ico  kp_folder--projets">
                <div class="kp_folder--un-ico-container-img">
                    <img class="kp_folder--img" src="/images/folder.png" alt="Mes projets">
                </div>
                <p class="kp_folder--un-ico-container-text">
                    Mes réalisations
                </p>
            </article>
            <article class="kp_folder--un-ico  kp_folder--img-txt  kp_folder--text">
                <div class="kp_folder--un-ico-container-img">
                    <img class="kp_folder--img" src="/images/text.png" alt="Ma tete">
                </div>
                <p class="kp_folder--un-ico-container-text">
                    autoportrait.txt
                </p>
            </article>   
            <article class="kp_folder--un-ico  kp_folder--terminal">
                <div class="kp_folder--un-ico-container-img">
                    <div class="kp_terminal--icn">KP:\</div>
                </div>
                <p class="kp_folder--un-ico-container-text">
                    Qui suis-je ?
                </p>
            </article>

            <article class="kp_card-pokemon">
                <div class="kp_card-pokemon--container">
                    <img class="kp_card-pokemon--img" src="/images/card_poke_2.png" alt="carte pokémon">
                    <div class="kp_card-pokemon--holo"></div>
                    <div class="kp_card-pokemon--glow">
                    </div>
                    <img class="kp_card-pokemon--img" src="/images/card_poke_1.png" alt="carte pokémon">
                </div>
                <!-- <div class="kp_card-pokemon--glow">
                </div> -->
            </article>

        </section>


        <!-- Terminal -->
        <section class="kp_terminal  kp_z-index  kp_terminal--show  kp_window--show  kp_changed__id  kp_item__window" id="kp_terminal">
            <div class="kp_element--title">
                <div class="kp_element--icon-title   kp_element--enable">
                    <p class="kp_ascii--titre  ">
                        <div class="kp_terminal--icn">KP:\</div><span>Kévin Prévost - Développeur front-end</span>
                    </p>
                </div>
                <div class="kp_element--incons-zone">
                    <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-terminal" id="kp_action--reduct--terminal"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                    <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-terminal" id="kp_action--resize--terminal"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                    <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-terminal"  id="kp_action--close--terminal"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
                </div>
            </div>
            <div class="kp_terminal_zone-texte  kp_element--enable">
                <p class="kp_terminal--texte">
                </p>
            </div>
            <div class="resize-handle"></div>
        </section>
        <!-- Terminal -->


        

        
        <section class="kp_browser  kp_z-index  kp_browser--show  kp_changed__id kp_element--action--close kp_item__window" id="kp_browser">
            <div class="kp_element--title">
                <div class="kp_element--icon-title">
                    <p class="kp_element--title-p  kp_element--enable">
                       <div class="kp_element_title--icn"><img class="kp_icon_zone--img" src="/images/text.png" alt="reduct"></div><span>{{ projetActuel.titre }} - {{ projetActuel.compagnie }}</span>
                    </p>
                </div>
                <div class="kp_element--incons-zone">
                    <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-browser" id="kp_action--reduct--browser"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                    <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-browser" id="kp_action--resize--browser"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                    <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-browser"  id="kp_action--close--browser"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
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

                <div class="kp_browser-content--iframe">
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
               
            </div>
            <div class="resize-handle"></div>
        </section>
        <!-- Window Internet -->



        <!-- Texte image -->
        <section class="kp_image_ascii  kp_z-index  kp_changed__id  kp_text  kp_item__window"  id="kp_text">
            <div class="kp_element--title">
                <div class="kp_element--icon-title">
                    <p class="kp_element--title-p   kp_element--enable">
                       <div class="kp_element_title--icn"><img class="kp_icon_zone--img" src="/images/text.png" alt="reduct"></div><span>Kévin Prévost - autoportrait.txt</span>
                    </p>
                </div>
                <div class="kp_element--incons-zone">
                    <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-text" id="kp_action--reduct--text"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                    <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-text" id="kp_action--resize--text"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                    <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-text"  id="kp_action--close--text"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
                </div>
            </div>
                <pre class="kp_image_ascii--content  kp_element--enable">                                                                                                     
                                            .=#@@@@@@#=.                                             
                                        .@@@@@@@@@@@@@@@@@.                                          
                                    .@@@@@@@@@@@@@@@@@@@@@@@@.                                       
                                  #@@@@@@@@%%%############@@@@@:                                     
                                 @@@@@%###******************%@@@.                                    
                                @@@#****++++++***+**+++*+*****###                                    
                               @@****++++++++++++++++++++++++***##                                   
                             .@#**+++++++++++++++++++++++==++++*+*                                   
                             =#++++++++======+++++++===========++++                                  
                             **++++++++++===+++++===========---=+*=.                                 
                             **+++++++++++++++=====-========-----==-                                 
                             +**+++++=============*####**+++=-----+=                                 
                             =**++++============++*###*++++==--:::=+=                                
                             ***+++++**+++====-===+*##**+==#=--:::-== =:=                            
                             ##*++#%%%%%#*++=----=+##*@@@=**=----::-*-::+:                           
                             -#*#%#*###%##*++=---++**=##%-=------::::---:::                          
                             +%%**#**#@####*+==--==+***+==-------:::.-=-:-.                          
                              *#*%#*%#@@#***++=-:---=+====------:::...-==:.                          
                              ****#****#****++=-:::::---------::::...:-=---                          
                              +++++++++**++**+=---::::--------::::...:::::.                          
                              *+++++++++++++*++=---:::------::::::..:-::::                           
                              +*++++++++++++++==--:::-=----:::::::..:-:++                            
                               *+========+++++==---@=:--=--::::::::.----                             
                               ++========+++##*+=:-:--------::::::::--:.                             
                               .*+======++++*%##*****#*##+=--::::::-:--                              
                                +++=====+#%@@@%%@%%##******++=-:::--::=                              
                                 +*+++++#%%%%**++=+=====+*##*=-:::----=                              
                                 =#*+++*##%#%%##*++=---::-=++=------:--                              
                                  =#**+*#%*+*+*++==--::-:---=*+-=--+=--                              
                                   %%***##**********=---:-++++*+**=++=:                              
                                   +@%##%@%#+++++++=-----=+######**+==..                             
                                    +@@@@@@##*+++==+----=+=+####%#*++:...                            
                                     @@@@@@@%###*+=+++==+++*#****+++:.....-                          
                                    **@@@@@@@%%##*+*#*++****###*+++:::.....##@@%.                    
                                   @@@@@@@@@@@@@#%%%%##**##**%%*+-::.......##%%%#*####.              
                               .@@@@@@@@@*@@@@@%@@%@#%%#%#**##+::::::.....:%#%%%###%%%%%%##+##%*.    
                        .=@@@@@@@@@@@@@@@*+++%@@%@@%@@@%%#+-:::::::::.....#%%%%%####%%%%%%#*#%%%#*###
                 =%@@@@@@@@@@@@@@@@@@@@@@**+++====++++===--:::::::::....:-%%@@%%%##%%%%%%#*##%%%%%###
             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@++++====------::::::::::.....::#%%@@########%@%####%%%%%%%#
           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*+++===----:-:::::::::::..:..:*%%@@#########%@%######%%%%%%
        =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*==++==---::::::::::::....:::=%%@@%###%%####%@#*######%%%%%
     *%%@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=-=====---:-:::::::::::::::-*%%@@###%%#####%@########%#%%%
  @%%%%@@@@@%%@@@@@@@@@@@@@@@@@@@@@%%@@@@@+-----------:::::::::::::::+%@@@@###@@####%%@##########%%%%
@@@%%%%%@%@@%%@@@@@%%@@@@@@%@@@@@@@%%@@@@@@=-------:::::::::::::::::+%@@@@%###@@####%%@**########%##%
%@@%%%%@@%@@%%@@@@%%@@@@@@%%@@@@@@@%#%@@%@@@+----:-:::::::::::::::-*%%@@@@###%@%####%%@*############%
%%@@%%%@@%@@%%%%%%#@@%@@@%#%%%%@@@@%##@@%%%@@%----:::::::-:::::::-@%@@@@@@##%%@%%###%@%*#######*####%
%%%@%%%%@%@@@%%%%#@@%%@@@#%%%%%%@@@###%@@%#@@@@+-:--:::::-:::::-*%@@@@@@@%*%%%@%%%###@#**####***#**#%
%%%%%%%%@@%@%%%##@@%%@@@##%%%##%@@@####@@@%%%%@@@*--:-::---:--+%@@@@@@@@@#*%#%%%%###%%#*####****#***%
%%@%%%%%@@#@%%%#@@#%%%%##%%%#%%#%@@##%#%@@@%#%%%@@%#:---:---*%%%%@@@%@@@@*#%%#%%%%##%%#*####****#***%
#%%@%%%%@@@@%##@@#%%%%%#####%###%@@#####%@@@%%%@%%%%%%=--+@@@@@@@@@#%@@@#*#%##%%%%##%%**#####**#****%
%#%%@@%#%@@@##%@%%%%%%##%%######%@%###%#%%@@@@%%%%#%%%%%%%%@@@@@@@#%@@@%###%##%%%%%%%%**#####**#****%</pre>
            
            <div class="resize-handle"></div>
        </section>
        <!-- Texte image -->


        

        <!-- Profil -->
        <section class="kp_z-index  kp_changed__id  kp_profil  kp_item__window  kp_element--action--close"  id="kp_profil">
            <div class="kp_element--title">
                <div class="kp_element--icon-title">
                    <p class="kp_element--enable">
                       <div class="kp_ascii--icn"><img class="kp_icon_zone--img" src="/images/text.png" alt="reduct"></div>
                       <span>Kévin Prévost - Mon Profil</span>
                    </p>
                </div>
                <div class="kp_element--incons-zone">
                    <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-profil" id="kp_action--reduct--profil"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                    <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-profil" id="kp_action--resize--profil"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                    <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-profil"  id="kp_action--close--profil"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
                </div>
            </div>
            <div class="kp_element_container--part-content  kp_element--enable  kp_element__profil--container">
                <div class="kp_element__main-content">
                    <div class="kp_element_zone__profil--left">
                        
                        <div class="kp_menu__barre-etat--photo-container  kp_menu__barre-etat--photo-container-profil">
                            <img class="kp_menu__barre-etat--photo  kp_menu__barre-etat--photo-profil" src="/images/kevinprevost.jpg" alt="Kévin Prévost">
                        </div>
                        <p class="kp_title--ssmenu-profil">xxx</p>
                    </div>
                    <div class="kp_element_zone__profil--right">
                        <p class="kp_title--ssmenu-profil">xxx</p>

                    </div>
                </div>
                
                
            </div>
          
            
            <div class="resize-handle"></div>
        </section>
        <!-- Profil -->


        
         <!-- Window Full -->
         <div class="kp_animation_full-screen"></div>
        <div class="kp_anti-hover--full"></div>


        <!-- Menu open -->
        <section class="kp_menu__barre-etat">
            <div class="kp_menu__barre-etat--titre">
                <div class="kp_menu__barre-etat--photo-container">
                    <img class="kp_menu__barre-etat--photo" src="/images/kevinprevost.jpg" alt="Kévin Prévost">
                </div>
                <p class="kp_titre-profil-barre">Kévin Prévost - Développeur front-end</p>
            </div>
            <div class="kp_menu__barre-etat--container">
                <div class="kp_menu__barre-etat--content-left">

                    <article class="kp_menu__barre-etat--ico  kp_menu__barre-etat--projet">
                        <div class="kp_menu__barre-etat--un-ico-container-img">
                            <img class="kp_menu__barre-etat--img" src="/images/folder.png" alt="Mes projets">
                        </div>
                        <div>
                            <p class="kp_menu__barre-etat--un-ico-container--text">
                                Mes réalisations
                            </p>
                            <p class="kp_menu__barre-etat--un-ico-container--desc">
                                Consulter mes projets
                            </p>

                        </div>
                    </article>

                    <article class="kp_menu__barre-etat--ico  kp_menu__barre-etat--projet">
                        <div class="kp_menu__barre-etat--un-ico-container-img">
                            <img class="kp_menu__barre-etat--img" src="/images/mail.png" alt="Mes projets">
                        </div>
                        <div>
                            <p class="kp_menu__barre-etat--un-ico-container--text">
                                Me contacter
                            </p>
                            <p class="kp_menu__barre-etat--un-ico-container--desc">
                                Envoyez-moi un message
                            </p>

                        </div>
                    </article>
                    
                    <article class="kp_menu__barre-etat--ico  kp_menu__barre-etat--projet">
                        <div class="kp_menu__barre-etat--un-ico-container-img">
                            <img class="kp_menu__barre-etat--img" src="/images/linkedin.png" alt="Mes projets">
                        </div>
                        <div>
                            <p class="kp_menu__barre-etat--un-ico-container--text">
                                Mon parcours
                            </p>
                            <p class="kp_menu__barre-etat--un-ico-container--desc">
                                Par où je suis passé
                            </p>

                        </div>
                    </article>

                </div>
                <div class="kp_menu__barre-etat--content-right">

                </div>
            </div>
        </section>

         <!-- Barre de notifications -->
        <section class="kp_notification__zone">
            <div class="kp_notification__demarrer">
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
            
            <div class="kp_notification--applications">
                <article class="kp_barre-une-app  kp_barre-une-app--terminal  kp_barre-une-app--open  kp_barre-une-app--show" id="kp_barre-app--browser">
                    <div class="kp_barre-une-app--icn  kp_terminal--icn">KP:\</div>
                    <p class="kp_barre-une-app--title">Qui suis-je ?</p>
                </article>
                <article class="kp_barre-une-app  kp_barre-une-app--browser" id="kp_barre-app--browser">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/folder.png" alt="Mes projets"></div>
                    <p class="kp_barre-une-app--title">Mes réalisations</p>
                </article>
                <article class="kp_barre-une-app  kp_barre-une-app--text" id="kp_barre-app--text">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/text.png" alt="Mes projets"></div>
                    <p class="kp_barre-une-app--title">Autoportrait</p>
                </article>
                <article class="kp_barre-une-app  kp_barre-une-app--profil" id="kp_barre-app--profil">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/text.png" alt="Mes projets"></div>
                    <p class="kp_barre-une-app--title">Profil</p>
                </article>
            </div>
            
            <div class="kp_notification--zone">
                
                <div id="kp_lang__user">
                </div>
                <div id="kp_battery__user--img">
                        <img class="kp_battery--img" src="/images/icn_battery100.png" alt="Batterie">
                </div>
                <div id="kp_battery__user">
                </div>
                <div class="kp_date-heure">
                    <div class="kp_date-heure--heure"></div>
                </div>
                <div class="kp_date-heure--date"></div>
            </div>
        </section>
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
            async chargerProjets() {
                try {
                    const response = await axios.get('/projets.json');
                    this.projets = response.data;
                    this.projetActuel = this.projets[0]; // Initialiser avec le premier projet
                } catch (error) {
                    console.error('Erreur lors du chargement des projets:', error);
                }
            },
            changerProjet(index) {
                this.projetActuel = this.projets[index];
            },
        },
        mounted() {
            const script = document.createElement('script');
            script.src = '/script.js';
            script.onload = () => {
            if (window.animerTexteTerminal) {
                window.animerTexteTerminal();
            }
            };
            this.$nextTick(() => {
                document.body.appendChild(script);
            });
        }
    };
  </script>
  
  
  <style>
  </style>
  