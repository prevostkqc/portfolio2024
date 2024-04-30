<template>
    <header class="kp_header">
    </header>
    <main class="kp_main">
        <section class="kp_desktop">

            <article class="kp_folder--un-ico  kp_folder--terminal">
                <div class="kp_folder--un-ico-container-img">
                    <div class="kp_terminal--icn">KP:\</div>
                </div>
                <p class="kp_folder--un-ico-container-text">
                    Qui suis-je ?
                </p>
            </article>
            <article class="kp_folder--un-ico  kp_folder--folder-projects">
                <div class="kp_folder--un-ico-container-img">
                    <img class="kp_folder--img" src="/images/folder.png" alt="Mes projets">
                </div>
                <p class="kp_folder--un-ico-container-text">
                    Mes réalisations
                </p>
            </article>
            <article class="kp_folder--un-ico  kp_folder--quisuisje">
                <div class="kp_folder--un-ico-container-img">
                    <img class="kp_folder--img" src="/images/cv.png" alt="Mon parcours">
                </div>
                <p class="kp_folder--un-ico-container-text">
                    Mon parcours
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
            <article class="kp_folder--un-ico  kp_folder--pokemon">
                <div class="kp_folder--un-ico-container-img">
                    <img class="kp_folder--img" src="/images/pokecard_icn.png" alt="Ma passion">
                </div>
                <p class="kp_folder--un-ico-container-text">
                    Ma passion
                </p>
            </article>

            <Clipy />
        </section>

        

        <!-- Card Pokémon -->
        <section class="kp_pokemon  kp_z-index  kp_changed__id  kp_pokemon  kp_item__window"  id="kp_pokemon">
            <div class="kp_element--title">
                <div class="kp_element--icon-title   kp_element--enable">
                    <p class="kp_ascii--titre  ">
                        <div class="kp_element_title--icn"><img class="kp_icon_zone--img" src="/images/pokecard_icn.png" alt="reduct"></div><span>Kévin Prévost - Ma passion</span>
                    </p>
                </div>
                <div class="kp_element--incons-zone">
                    <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-pokemon" id="kp_action--reduct--pokemon"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                    <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-pokemon" id="kp_action--resize--pokemon"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                    <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-pokemon"  id="kp_action--close--pokemon"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
                </div>
            </div>
            <div class="kp_pokemon_zone-texte  kp_element--enable">
                <p class="kp_texte-carte">
                    Ayant grandi dans les années 90, je n'ai pas échappé à la folie Pokémon.<br>
                    Après avoir développé deux jeux amateurs en Ruby pour honorer la passion de mon enfance, cela m'a laissé un attachement particulier.<br>
                    J'ai conservé ma collection de cartes d'enfance, qui contient des raretés toujours très recherchées de nos jours.
                </p>
                <article class="kp_card-pokemon">
                    <div class="kp_card-pokemon--container">
                        <img class="kp_card-pokemon--img" src="/images/card_poke_2.png" alt="carte pokémon">
                        <div class="kp_card-pokemon--holo">
                            <div class="kp_card-pokemon--glow">
                            </div>
                        </div>
                        <img class="kp_card-pokemon--img  kp_card-pokemon--cadre" src="/images/card_poke_1.png" alt="carte pokémon">
                        <div class="kp_card-pokemon--glow2">
                        </div>
                    </div>
                </article>
            </div>
            <div class="resize-handle"></div>
        </section>
        
        <!-- Card Pokémon -->
        

        <!-- folder projects -->
        <section class="kp_folder-projects  kp_z-index  kp_changed__id  kp_folder-projects  kp_item__window"  id="kp_folder-projects">
            <div class="kp_element--title">
                <div class="kp_element--icon-title   kp_element--enable">
                    <p class="kp_ascii--titre  ">
                        <div class="kp_element_title--icn"><img class="kp_icon_zone--img" src="/images/folder.png" alt="reduct"></div><span>Kévin Prévost - Mes réalisations</span>
                    </p>
                </div>
                <div class="kp_element--incons-zone">
                    <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-folder-projects" id="kp_action--reduct--folder-projects"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                    <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-folder-projects" id="kp_action--resize--folder-projects"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                    <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-folder-projects"  id="kp_action--close--folder-projects"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
                </div>
            </div>
            <div class="kp_folder-projects-zone-texte  kp_element--enable">
                <article class="kp_card-folder-projects">
                   
                    <div class="kp_line-projet">
                        <div class="kp_line-year">
                            Plusieurs pages réalisées pour des PC Gamer
                        </div>
                        <!-- Cybertek PC -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('CybertekPcGamer');">
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/cybertek.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                PC Gamer<br/>2024 - 2021
                            </p>
                        </article>
                    </div>

                    <div class="kp_line-projet">
                        <div class="kp_line-year">
                            Sites dont j'étais responsable pour le Groupe Cybertek
                        </div>
                        <!-- Cybertek -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Cybertek');">
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/cybertek.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Cybertek<br/>2024 - 2021
                            </p>
                        </article>


                        <!-- Cybertek Pro -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Cybertekpro');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/cybertekpro.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Cybertek Pro<br/>2024 - 2022
                            </p>
                        </article>

                        <!-- Mred -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Mred');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/mred.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Mred<br/>2024 - 2022
                            </p>
                        </article>
                        


                        <!-- Picata -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Picata');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/picata.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Picata<br/>2024 - 2022
                            </p>
                        </article>


                        <!-- Grosbill -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Grosbill');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/grosbill.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Grosbill<br/>2024 - 2021
                            </p>
                        </article>
                    </div>

                    



                    <div class="kp_line-projet">
                        <div class="kp_line-year">
                            Projets réalisés plus tôt dans ma carrière
                        </div>
                        
                        
                        <!-- Pokémon Opale -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Opale');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/opale.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Opale<br/>2024 - 2018
                            </p>
                        </article>


                        <!-- KusmiTea -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Kusmitea');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/kusmitea.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                KusmiTea<br/>2021 - 2020
                            </p>
                        </article>

                        
                        <!-- Shopiles -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Sophiles');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/shopiles.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Shopiles<br/>2017 - 2016
                            </p>
                        </article>


                        <!-- MagAuchan -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('MagAuchan');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/auchan.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Mag Auchan<br/>2016 - 2013
                            </p>
                        </article>
                        


                        <!-- Wedemain -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('Wedemain');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/wedemain.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                WeDemain<br/>2020 - 2016
                            </p>
                        </article>
                        
                        


                        <!-- Les Canardises -->
                        <article class="kp_folder--un-ico  kp_folder--projets"  @click="setCompagnieProjet('LesCanardises');" >
                            <div class="kp_folder--un-ico-container-img">
                                <img class="kp_folder--img" src="/images/raccourcis/lescanardises.png" alt="Mes projets">
                            </div>
                            <p class="kp_folder--un-ico-container-text  kp_folder--un-ico-container-text--black">
                                Canardises<br/>2010 - 2013
                            </p>
                        </article>
                    </div>


                </article>
            </div>
            <div class="resize-handle"></div>
        </section>
        <!-- folder projects -->


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



        <Cv />
        


    <!-- Window Internet -->
    <section class="kp_browser  kp_z-index  kp_browser--show  kp_changed__id  kp_element--action--close  kp_item__window" id="kp_browser">
        <div class="kp_element--title">
            <div class="kp_element--icon-title">
                <p class="kp_element--title-p  kp_element--enable">
                    <div class="kp_element_title--icn"><img class="kp_icon_zone--img" :src="`/images/sites/${projetActuel.icn}.png`"  alt="Projet"></div><span>{{ projetActuel.compagnie }} - {{ projetActuel.titre }}</span>
                </p>
            </div>
            <div class="kp_element--incons-zone">
                <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-browser" id="kp_action--reduct--browser"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-browser" id="kp_action--resize--browser"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-browser"  id="kp_action--close--browser"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
            </div>
        </div>
        
        <div class="kp_window--border   kp_element--enable">
            <div class="kp_internet--onglets" id="kp_internet--onglets">
                <button  v-for="projet in projetsFiltres" :key="projet.id" :class="'kp_projet-btn kp_projet-btn--' + projet.id" @click="changerProjet(projet)">
                    <img class="kp_icn-onglet" :src="`/images/sites/${projetActuel.icn}.png`"   alt="projet">{{ projet.titre }}
                </button>
                <div class="kp_internet--favorites">
                </div>
            </div> 

            <div class="kp_browser-content--iframe">
                <iframe :src="projetActuel.url" width="600" height="400" frameborder="0" class="kp_iframe--projet"></iframe>
            </div>
            
        </div>
        <div class="resize-handle"></div>
    </section>
    <div class="kp_clipy--bulle  kp_clipy--bulle-projet  kp_clipy--hide">
        <article class="kp_un-projet" v-if="projetActuel">
            <div class="kp_icon_zone  kp_un-projet--close" ><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
            <h2 class="kp_h2  kp_projet-desc--h2">{{ projetActuel.titre }} - {{ projetActuel.compagnie }}</h2>
            <span class="kp_projet-annee  kp_h4">{{ projetActuel.annee }}</span>
            
            <p class="kp_p  kp_projet_description">{{ projetActuel.description }}</p>
            <ul class="kp_projet-technos">
                <li v-for="technologie in projetActuel.techno" :key="technologie"
                    :class="['kp_projet-techno', `kp_projet-techno--${technologie.toLowerCase()}`]">
                    <img :src="`/images/logos-technos/${technologie}.png`" class="kp_img-techno" alt="{{technologie}}">
                    <p class="kp_projet-techno--text">
                        {{ technologie }}
                    </p>
                </li>
            </ul>
        </article>
    </div>
    <div class="kp_information-projet  kp_clipy--bulle   kp_information-projet--hide">
        <p class="kp_information--p">Afficher les informations concernant ce projet</p>
    </div>
    <!-- Window Internet -->
 

        
        <Browser />
        <Autoportrait />
        <Personnaliser />


        
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

                    <article class="kp_menu__barre-etat--ico  kp_menu__barre-etat--contact">
                        <a class="kp_hrefmailto" href="mailto:contact@kevinprevost.fr?subject=Contact depuis kevinprevost.fr&body=Nom : %0D%0APrénom : %0D%0ATéléphone : %0D%0ACompagnie (facultatif) : %0D%0A%0D%0ADescription du projet : %0D%0A%0D%0A%0D%0A%0D%0A"></a>
                        <div class="kp_menu__barre-etat--un-ico-container-img">
                            <img class="kp_menu__barre-etat--img" src="/images/mail.png" alt="Me contacter">
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

                    

                    <article class="kp_menu__barre-etat--ico  kp_menu__barre-etat--quisuisje" >
                        <div class="kp_menu__barre-etat--un-ico-container-img">
                            <img class="kp_menu__barre-etat--img" src="/images/cv.png" alt="Mon parcours">
                        </div>
                        <div>
                            <p class="kp_menu__barre-etat--un-ico-container--text">
                                Mon parcours
                            </p>
                            <p class="kp_menu__barre-etat--un-ico-container--desc">
                                Consulter mon parcours
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
                <article class="kp_barre-une-app  kp_barre-une-app--folder-projects" id="kp_barre-app--folder-projects">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/folder.png" alt="Mes projets"></div>
                    <p class="kp_barre-une-app--title">Mes réalisations</p>
                </article>
                <article class="kp_barre-une-app  kp_barre-une-app--browser" id="kp_barre-app--browser">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/icn_internet.png" alt="Mes projets"></div>
                    <p class="kp_barre-une-app--title">Internet</p>
                </article>
                <article class="kp_barre-une-app  kp_barre-une-app--text" id="kp_barre-app--text">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/text.png" alt="Mes projets"></div>
                    <p class="kp_barre-une-app--title">Autoportrait</p>
                </article>
                <article class="kp_barre-une-app  kp_barre-une-app--profil" id="kp_barre-app--profil">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/text.png" alt="Mes projets"></div>
                    <p class="kp_barre-une-app--title">Profil</p>
                </article>
                <article class="kp_barre-une-app  kp_barre-une-app--pokemon" id="kp_barre-app--pokemon">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/pokecard_icn.png" alt="Ma passion"></div>
                    <p class="kp_barre-une-app--title">Ma passion</p>
                </article>
                <article class="kp_barre-une-app  kp_barre-une-app--quisuisje" id="kp_barre-app--quisuisje">
                    <div class="kp_barre-une-app--icn"><img class="kp_barre-une-app--img" src="/images/cv.png" alt="Mon parcours"></div>
                    <p class="kp_barre-une-app--title">Mon parcours</p>
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

    <!-- <div class="kp_splash">
        <img src="/images/logo-2024.png" class="kp_logo-open" alt="Logo Kévin Prévost">
        <audio autoplay>
            <source src="/audio/start.mp3" type="audio/mp3">
            Impossible de jouer le son
        </audio>
    </div> -->
    
  </template>
  
  <script>
    import axios from 'axios';
    import Browser from './Browser.vue';
    import Autoportrait from './Autoportrait.vue';
    import Personnaliser from './Personnaliser.vue';
    import Clipy from './Clipy.vue';
    import Cv from './Cv.vue';

    export default {
        data() {
            return {
                projets: [],
                compagnieProjet: "",
                projetActuel: null
            };
        },
        components: {
            Browser,
            Autoportrait,
            Personnaliser,
            Clipy,
            Cv
        },
        computed: {
            // Filtre les projets en fonction de la compagnie sélectionnée
            projetsFiltres() {
                if (this.compagnieProjet) {
                    return this.projets.filter(projet => projet.compagnie === this.compagnieProjet);
                }
                return this.projets;
            }
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
            changerProjet(projet) {
                this.projetActuel = projet;
            },
            
            setCompagnieProjet(compagnie) {
               this.compagnieProjet = compagnie;
            }
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
  