<template>
        <!-- folder projects -->
        <section class="kp_quisuisje  kp_z-index  kp_changed__id  kp_item__window"  id="kp_quisuisje">
        <div class="kp_element--title">
            <div class="kp_element--icon-title   kp_element--enable">
                <p class="kp_ascii--titre  ">
                    <div class="kp_element_title--icn"><img class="kp_icon_zone--img" src="/images/cv.png" alt="reduct"></div><span>Kévin Prévost - Mon parcours</span>
                </p>
            </div>
            <div class="kp_element--incons-zone">
                <div class="kp_icon_zone  kp_icon_zone--reduct  kp_icon--reduct-quisuisje" id="kp_action--reduct--quisuisje"><img class="kp_icon_zone--img" src="/images/reduct_icn.svg" alt="reduct"></div>
                <div class="kp_icon_zone  kp_icon_zone--resize  kp_icon--resize-quisuisje" id="kp_action--resize--quisuisje"><img class="kp_icon_zone--img" src="/images/resize_icn.svg" alt="resize"></div>
                <div class="kp_icon_zone  kp_icon_zone--close   kp_icon--close-quisuisje"  id="kp_action--close--quisuisje"><img class="kp_icon_zone--img" src="/images/close_icn.svg" alt="close"></div>
            </div>
        </div>
        <div class="kp_folder-projects-zone-texte  kp_quisuisje--texte  kp_element--enable">
            <div class="kp_quisuisje--content">
                
                
                <!-- -->
                <article class="kp_cv-experience--line">
                    <div class="kp_cv-experience-line">
                        <div class="kp_cv-experience-line--content">
                            <div class="kp_compagnie-btn">
                                <div class="kp_compagnie-img-nom">
                                    <div class="kp_cv-experience-line--logo"><img src="/images/sites/kevinprevost.png" class="kp_img-cv" alt="Kévin Prévost"></div>
                                    <div class="kp_cv-experience-line--entreprise">
                                        <div class="kp_cv-experience-line--date  kp_p-black  kp_h5  kp_bold">2010 - aujourd'hui</div>
                                        <div class="kp_cv-experience-line--title  kp_p-black  kp_h4">Développeur Front-end Back-end / Webdesigner / Intégrateur / UI-UX Designer</div>
                                        <div class="kp_cv-experience-line--company  kp_p-black  kp_h6">Freelance</div>
                                        <div class="kp_cv-experience-line--poste  kp_p-black">Québec, Paris, Bordeaux</div>
                                    </div>
                                </div>
                                <button class="kp_btn-cv  kp_btn-cv--afficher"  @click="toggleShow">
                                    {{ buttonText }}
                                </button>
                                <button class="kp_btn-cv  kp_btn-cv--masquer"  @click="toggleShow">
                                    Maquer les informations
                                </button>
                            </div>
                            
                           <div class="kp_content--cv">
                                <ul class="kp_cv-ul">
                                    <li class="kp_cv-li  kp_p-black">Responsable des Développeurs Front-end, Integrateurs et Webdesigner. </li>
                                    <li class="kp_cv-li  kp_p-black">Intégration CSS, développement Front-end en collaboration avec l'équipe Back-end. </li>
                                    <li class="kp_cv-li  kp_p-black">Optimisation multi supports (responsive) de l'ensemble des affichages pour une meilleure expérience utilisateur.</li>
                                    <li class="kp_cv-li  kp_p-black">Gestion d'équipe basée sur une organisation et une communication permanente pour tenir les délais annoncés et trouver des solutions aux éventuels problèmes rencontrés. </li>
                                    <li class="kp_cv-li  kp_p-black">Mise en place de points quotidiens et hebdomadaires pour s'assurer de la bonne avancée de chaque projet. </li>
                                    <li class="kp_cv-li  kp_p-black">Création et gestion d'un espace Notion pour simplifier les échanges concernant les projets et l'équipe. </li>
                                    <li class="kp_cv-li  kp_p-black">Communication interservices pour la gestion des projets.</li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--code">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/js.png" class="kp_img-techno" alt="Javascript">
                                        <p class="kp_projet-techno--text">
                                            Javascript
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/html5.png" class="kp_img-techno" alt="Html5">
                                        <p class="kp_projet-techno--text">
                                            HTML5
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/css3.png" class="kp_img-techno" alt="Html5">
                                        <p class="kp_projet-techno--text">
                                            CSS3
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/vuejs.png" class="kp_img-techno" alt="Vue.js">
                                        <p class="kp_projet-techno--text">
                                            Vue.js
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/typescript.png" class="kp_img-techno" alt="TypeScript">
                                        <p class="kp_projet-techno--text">
                                            Type script
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/php.png" class="kp_img-techno" alt="Php">
                                        <p class="kp_projet-techno--text">
                                            PHP
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/mysql.png" class="kp_img-techno" alt="MySQL">
                                        <p class="kp_projet-techno--text">
                                            MySQL
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/threejs.png" class="kp_img-techno" alt="Three.js">
                                        <p class="kp_projet-techno--text">
                                            Three.js
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/python.png" class="kp_img-techno" alt="Python">
                                        <p class="kp_projet-techno--text">
                                            Python
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/json.png" class="kp_img-techno" alt="Json">
                                        <p class="kp_projet-techno--text">
                                            Json
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/ajax.png" class="kp_img-techno" alt="Ajax">
                                        <p class="kp_projet-techno--text">
                                            Ajax
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--visuel">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/figma.png" class="kp_img-techno" alt="Figma">
                                        <p class="kp_projet-techno--text">
                                            Figma
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/webflow.png" class="kp_img-techno" alt="webflow">
                                        <p class="kp_projet-techno--text">
                                            webflow
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/xd.png" class="kp_img-techno" alt="Adobe XD">
                                        <p class="kp_projet-techno--text">
                                            Adobe XD
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/photoshop.png" class="kp_img-techno" alt="Photoshop">
                                        <p class="kp_projet-techno--text">
                                            Photoshop
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/illustrator.png" class="kp_img-techno" alt="Illustrator">
                                        <p class="kp_projet-techno--text">
                                            Illustrator
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/notion.png" class="kp_img-techno" alt="Notion">
                                        <p class="kp_projet-techno--text">
                                            Notion
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--cms">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/wordpress.png" class="kp_img-techno" alt="Wordpress">
                                        <p class="kp_projet-techno--text">
                                            Wordpress
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/cakephp.png" class="kp_img-techno" alt="Cake Php">
                                        <p class="kp_projet-techno--text">
                                            Cake PHP
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/woocommerce.png" class="kp_img-techno" alt="Woo commerce">
                                        <p class="kp_projet-techno--text">
                                            Woocommerce
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--outils">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/visualstudiocode.png" class="kp_img-techno" alt="Visual Studio Code">
                                        <p class="kp_projet-techno--text">
                                            VS Code
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/git.png" class="kp_img-techno" alt="Git">
                                        <p class="kp_projet-techno--text">
                                            Git
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/github.png" class="kp_img-techno" alt="GitHub">
                                        <p class="kp_projet-techno--text">
                                            GitHub
                                        </p>
                                    </li>
                                </ul>
                           </div>
                           
                        </div>                        
                    </div>
                </article>
                <!-- -->

                <!-- -->
                <article class="kp_cv-experience--line">
                    <div class="kp_cv-experience-line">
                        <div class="kp_cv-experience-line--content">
                            <div class="kp_compagnie-btn">
                                <div class="kp_compagnie-img-nom">
                                    <div class="kp_cv-experience-line--logo"><img src="/images/sites/cybertek.png" class="kp_img-cv" alt="Cybertek"></div>
                                    <div class="kp_cv-experience-line--entreprise">
                                        <div class="kp_cv-experience-line--date  kp_p-black  kp_h5  kp_bold">2021 - 2024</div>
                                        <div class="kp_cv-experience-line--title  kp_p-black  kp_h4">Responsable Cellule Créative & Développeur Front-end</div>
                                        <div class="kp_cv-experience-line--company  kp_p-black  kp_h6">GROUPE CYBERTEK</div>
                                        <div class="kp_cv-experience-line--poste  kp_p-black">Bordeaux</div>
                                    </div>
                                </div>
                                <button class="kp_btn-cv  kp_btn-cv--afficher"  @click="toggleShow">
                                    {{ buttonText }}
                                </button>
                                <button class="kp_btn-cv  kp_btn-cv--masquer"  @click="toggleShow">
                                    Maquer les informations
                                </button>
                            </div>

                            <div class="kp_content--cv">
                                <ul class="kp_cv-ul">
                                    <li class="kp_cv-li  kp_p-black">Responsable des Développeurs Front-end, Integrateurs et Webdesigner. </li>
                                    <li class="kp_cv-li  kp_p-black">Intégration CSS, développement Front-end en collaboration avec l'équipe Back-end. </li>
                                    <li class="kp_cv-li  kp_p-black">Optimisation multi supports (responsive) de l'ensemble des affichages pour une meilleure expérience utilisateur.</li>
                                    <li class="kp_cv-li  kp_p-black">Gestion d'équipe basée sur une organisation et une communication permanente pour tenir les délais annoncés et trouver des solutions aux éventuels problèmes rencontrés. </li>
                                    <li class="kp_cv-li  kp_p-black">Mise en place de points quotidiens et hebdomadaires pour s'assurer de la bonne avancée de chaque projet. </li>
                                    <li class="kp_cv-li  kp_p-black">Création et gestion d'un espace Notion pour simplifier les échanges concernant les projets et l'équipe. </li>
                                    <li class="kp_cv-li  kp_p-black">Communication interservices pour la gestion des projets.</li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--code">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/js.png" class="kp_img-techno" alt="Javascript">
                                        <p class="kp_projet-techno--text">
                                            Javascript
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/html5.png" class="kp_img-techno" alt="Html5">
                                        <p class="kp_projet-techno--text">
                                            HTML5
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/css3.png" class="kp_img-techno" alt="CSS3">
                                        <p class="kp_projet-techno--text">
                                            CSS3
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/aspnet.png" class="kp_img-techno" alt="ASP.NET">
                                        <p class="kp_projet-techno--text">
                                            C# Razor
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--visuel">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/figma.png" class="kp_img-techno" alt="Figma">
                                        <p class="kp_projet-techno--text">
                                            Figma
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/photoshop.png" class="kp_img-techno" alt="Photoshop">
                                        <p class="kp_projet-techno--text">
                                            Photoshop
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/illustrator.png" class="kp_img-techno" alt="Illustrator">
                                        <p class="kp_projet-techno--text">
                                            Illustrator
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/notion.png" class="kp_img-techno" alt="Notion">
                                        <p class="kp_projet-techno--text">
                                            Notion
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--outils">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/visualstudio.png" class="kp_img-techno" alt="Visual Studio">
                                        <p class="kp_projet-techno--text">
                                            Visal&nbsp;Studio
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/azuredevops.png" class="kp_img-techno" alt="Azure DevOps">
                                        <p class="kp_projet-techno--text">
                                            Azure&nbsp;DevOps
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/git.png" class="kp_img-techno" alt="Git">
                                        <p class="kp_projet-techno--text">
                                            Git
                                        </p>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>                        
                    </div>
                </article>
                <!-- -->

                <!-- -->
                <article class="kp_cv-experience--line">
                    <div class="kp_cv-experience-line">
                        <div class="kp_cv-experience-line--content">                            
                            <div class="kp_compagnie-btn">
                                <div class="kp_compagnie-img-nom">
                                    <div class="kp_cv-experience-line--logo"><img src="/images/sites/shopiles.png" class="kp_img-cv" alt="Shopiles"></div>
                                    <div class="kp_cv-experience-line--entreprise">
                                        <div class="kp_cv-experience-line--date  kp_p-black  kp_h5  kp_bold">2016 - 2017</div>
                                        <div class="kp_cv-experience-line--title  kp_p-black  kp_h4">Développeur web</div>
                                        <div class="kp_cv-experience-line--company  kp_p-black  kp_h6">Shopîles - Neadly</div>
                                        <div class="kp_cv-experience-line--poste  kp_p-black">Bordeaux</div>
                                    </div>
                                </div>
                                <button class="kp_btn-cv  kp_btn-cv--afficher"  @click="toggleShow">
                                    {{ buttonText }}
                                </button>
                                <button class="kp_btn-cv  kp_btn-cv--masquer"  @click="toggleShow">
                                    Maquer les informations
                                </button>
                            </div>

                            <div class="kp_content--cv">
                                <ul class="kp_cv-ul">
                                    <li class="kp_cv-li  kp_p-black">Développement de solutions, Front-end/Back-end pour les différents sites de la compagnie. </li>
                                    <li class="kp_cv-li  kp_p-black">Mise en place d'outils pour simplifier la gestion de projets.</li>
                                    <li class="kp_cv-li  kp_p-black">Création d'une API et d'un service de paiement simplifié pour les entreprises.</li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--code">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/js.png" class="kp_img-techno" alt="Javascript">
                                        <p class="kp_projet-techno--text">
                                            Javascript
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/html5.png" class="kp_img-techno" alt="Html5">
                                        <p class="kp_projet-techno--text">
                                            HTML5
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/css3.png" class="kp_img-techno" alt="CSS3">
                                        <p class="kp_projet-techno--text">
                                            CSS3
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/php.png" class="kp_img-techno" alt="PHP">
                                        <p class="kp_projet-techno--text">
                                            Php
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/mysql.png" class="kp_img-techno" alt="MySQL">
                                        <p class="kp_projet-techno--text">
                                            MySql
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--cms">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/cakephp.png" class="kp_img-techno" alt="cakephp">
                                        <p class="kp_projet-techno--text">
                                            Cakephp
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--outils">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/sublimtext.png" class="kp_img-techno" alt="Sublim Text 3">
                                        <p class="kp_projet-techno--text">
                                            SublimText
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/gitkraken.png" class="kp_img-techno" alt="Git Kraken">
                                        <p class="kp_projet-techno--text">
                                            Git Kraken
                                        </p>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>                        
                    </div>
                </article>
                <!-- -->

                <!-- -->
                <article class="kp_cv-experience--line">
                    <div class="kp_cv-experience-line">
                        <div class="kp_cv-experience-line--content">
                            <div class="kp_compagnie-btn">
                                <div class="kp_compagnie-img-nom">
                                    <div class="kp_cv-experience-line--logo"><img src="/images/sites/scalian.png" class="kp_img-cv" alt="Shopiles"></div>
                                    <div class="kp_cv-experience-line--entreprise">
                                        <div class="kp_cv-experience-line--date  kp_p-black  kp_h5  kp_bold">2016</div>
                                        <div class="kp_cv-experience-line--title  kp_p-black  kp_h4">Développeur web</div>
                                        <div class="kp_cv-experience-line--company  kp_p-black  kp_h6">Scalian</div>
                                        <div class="kp_cv-experience-line--poste  kp_p-black">Bordeaux</div>
                                    </div>
                                </div>
                                <button class="kp_btn-cv  kp_btn-cv--afficher"  @click="toggleShow">
                                    {{ buttonText }}
                                </button>
                                <button class="kp_btn-cv  kp_btn-cv--masquer"  @click="toggleShow">
                                    Maquer les informations
                                </button>
                            </div>
                           
                            <div class="kp_content--cv">
                                <ul class="kp_cv-ul">
                                    <li class="kp_cv-li  kp_p-black">Développement de solutions Front-end/Back-end pour plusieurs des sites gérés par la compagnie.</li>
                                    <li class="kp_cv-li  kp_p-black">Échange avec plusieurs prestataires de services pour adapter leurs problèmes à nos solutions.</li>
                                    <li class="kp_cv-li  kp_p-black">Correction de base de données corrompues et nettoyage de code pour une meilleure optimisation.</li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--code">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/js.png" class="kp_img-techno" alt="Javascript">
                                        <p class="kp_projet-techno--text">
                                            Javascript
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/html5.png" class="kp_img-techno" alt="Html5">
                                        <p class="kp_projet-techno--text">
                                            HTML5
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/css3.png" class="kp_img-techno" alt="CSS3">
                                        <p class="kp_projet-techno--text">
                                            CSS3
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/php.png" class="kp_img-techno" alt="PHP">
                                        <p class="kp_projet-techno--text">
                                            Php
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/mysql.png" class="kp_img-techno" alt="MySQL">
                                        <p class="kp_projet-techno--text">
                                            MySql
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--outils">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/phpstorm.png" class="kp_img-techno" alt="PHP Storm">
                                        <p class="kp_projet-techno--text">
                                            Php Storm
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/git.png" class="kp_img-techno" alt="Git">
                                        <p class="kp_projet-techno--text">
                                            Git
                                        </p>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>                        
                    </div>
                </article>
                <!-- -->

                <!-- -->
                <article class="kp_cv-experience--line">
                    <div class="kp_cv-experience-line">
                        <div class="kp_cv-experience-line--content">
                            <div class="kp_compagnie-btn">
                                <div class="kp_compagnie-img-nom">
                                    <div class="kp_cv-experience-line--logo"><img src="/images/sites/wedemain.png" class="kp_img-cv" alt="GSEdition"></div>
                                    <div class="kp_cv-experience-line--entreprise">
                                        <div class="kp_cv-experience-line--date  kp_p-black  kp_h5  kp_bold">2013 - 2016</div>
                                        <div class="kp_cv-experience-line--title  kp_p-black  kp_h4">Développeur web</div>
                                        <div class="kp_cv-experience-line--company  kp_p-black  kp_h6">GS Editions</div>
                                        <div class="kp_cv-experience-line--poste  kp_p-black">Issy-les-Moulineaux</div>
                                    </div>
                                </div>
                                <button class="kp_btn-cv  kp_btn-cv--afficher"  @click="toggleShow">
                                    {{ buttonText }}
                                </button>
                                <button class="kp_btn-cv  kp_btn-cv--masquer"  @click="toggleShow">
                                    Maquer les informations
                                </button>
                            </div>
                            <div class="kp_content--cv">
                                <ul class="kp_cv-ul">
                                    <li class="kp_cv-li  kp_p-black">Développement Front-end/Back-end pour différents clients de la société. </li>
                                    <li class="kp_cv-li  kp_p-black">Échange avec plusieurs prestataires de services pour adapter leurs problèmes à nos solutions.</li>
                                    <li class="kp_cv-li  kp_p-black">Correction de base de données corrompues et nettoyage de code pour une meilleure optimisation.</li>
                                    <li class="kp_cv-li  kp_p-black">Développement de plusieurs back offices Front-end/Back-end. </li>
                                    <li class="kp_cv-li  kp_p-black">Réalisation de plusieurs newsletters responsives.</li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--code">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/js.png" class="kp_img-techno" alt="Javascript">
                                        <p class="kp_projet-techno--text">
                                            Javascript
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/html5.png" class="kp_img-techno" alt="Html5">
                                        <p class="kp_projet-techno--text">
                                            HTML5
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/css3.png" class="kp_img-techno" alt="CSS3">
                                        <p class="kp_projet-techno--text">
                                            CSS3
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/php.png" class="kp_img-techno" alt="PHP">
                                        <p class="kp_projet-techno--text">
                                            Php
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/mysql.png" class="kp_img-techno" alt="MySQL">
                                        <p class="kp_projet-techno--text">
                                            MySql
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos    kp_projet-technos--cms">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/wordpress.png" class="kp_img-techno" alt="Wordpress">
                                        <p class="kp_projet-techno--text">
                                            Wordpress
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/woocommerce.png" class="kp_img-techno" alt="Woo commerce">
                                        <p class="kp_projet-techno--text">
                                            Woocommerce
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--outils">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/sublimtext.png" class="kp_img-techno" alt="Sublim Text 3">
                                        <p class="kp_projet-techno--text">
                                            SublimText
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/git.png" class="kp_img-techno" alt="Git">
                                        <p class="kp_projet-techno--text">
                                            Git
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </article>
                <!-- -->

                <!-- -->
                <article class="kp_cv-experience--line">
                    <div class="kp_cv-experience-line">
                        <div class="kp_cv-experience-line--content">
                            <div class="kp_compagnie-btn">
                                <div class="kp_compagnie-img-nom">
                                    <div class="kp_cv-experience-line--logo"><img src="/images/sites/saintefoy.png" class="kp_img-cv" alt="GSEdition"></div>
                                    <div class="kp_cv-experience-line--entreprise">
                                        <div class="kp_cv-experience-line--date  kp_p-black  kp_h5  kp_bold">2013</div>
                                        <div class="kp_cv-experience-line--title  kp_p-black  kp_h4">Développeur web</div>
                                        <div class="kp_cv-experience-line--company  kp_p-black  kp_h6">Cégep de Sainte-Foy</div>
                                        <div class="kp_cv-experience-line--poste  kp_p-black">Québec</div>
                                    </div>
                                </div>
                                <button class="kp_btn-cv  kp_btn-cv--afficher"  @click="toggleShow">
                                    {{ buttonText }}
                                </button>
                                <button class="kp_btn-cv  kp_btn-cv--masquer"  @click="toggleShow">
                                    Maquer les informations
                                </button>
                            </div>
                            
                            <div class="kp_content--cv">
                                <ul class="kp_cv-ul">
                                    <li class="kp_cv-li  kp_p-black">Développement Front-end de l'ensemble des fonctionnalités d'une solution de gestion des élèves. </li>
                                    <li class="kp_cv-li  kp_p-black">Réalisation des médias et liaison à la base de données.</li>
                                    <li class="kp_cv-li  kp_p-black">Optimisation multi supports (responsive) de l'ensemble des affichages pour une meilleure expérience utilisateur.</li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--code">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/js.png" class="kp_img-techno" alt="Javascript">
                                        <p class="kp_projet-techno--text">
                                            Javascript
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/html5.png" class="kp_img-techno" alt="Html5">
                                        <p class="kp_projet-techno--text">
                                            HTML5
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/css3.png" class="kp_img-techno" alt="CSS3">
                                        <p class="kp_projet-techno--text">
                                            CSS3
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/php.png" class="kp_img-techno" alt="PHP">
                                        <p class="kp_projet-techno--text">
                                            Php
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/mysql.png" class="kp_img-techno" alt="MySQL">
                                        <p class="kp_projet-techno--text">
                                            MySql
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos  kp_projet-technos--visuel">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/photoshop.png" class="kp_img-techno" alt="Photoshop">
                                        <p class="kp_projet-techno--text">
                                            Photoshop
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/illustrator.png" class="kp_img-techno" alt="Illustrator">
                                        <p class="kp_projet-techno--text">
                                            Illustrator
                                        </p>
                                    </li>
                                </ul>
                                <ul class="kp_cv-experience-line--technos  kp_projet-technos   kp_projet-technos--outils">
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/sublimtext.png" class="kp_img-techno" alt="Sublim Text 3">
                                        <p class="kp_projet-techno--text">
                                            SublimText
                                        </p>
                                    </li>
                                    <li class="kp_li-techno">
                                        <img src="/images/logos-technos/git.png" class="kp_img-techno" alt="Git">
                                        <p class="kp_projet-techno--text">
                                            Git
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>                        
                    </div>
                </article>
                <!-- -->
                

            </div>
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
                buttonText: 'Afficher les informations'  // Texte initial du bouton
            };
        },
        methods: {
            toggleShow(event) {
                const parentElement = event.target.parentElement;
                parentElement.classList.toggle('kp-cv--show');
                // event.target.classList.toggle('kp-cv--btn-hide');
            }
        },
        mounted() {
        },
    };
</script>

<style scoped>
    .kp_quisuisje{
        background: white;
        width: 60vw;
        height: 60vh;
        left:90px;
        top: 10vh;
        display: none;
        max-width: 930px;
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
        gap: 20px;
        margin-bottom: 20px;
        align-items: center;
    }
    .kp_img-cv{
        width: 85px;
        height: 85px;
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
    .kp_cv-experience--line{
        padding: 20px;
        border-bottom: solid 2px #000000;
    }
    .kp_cv-experience--line:nth-child(odd){
        background-color: #FCFCFC;
    }
    .kp_cv-ul{
        width: calc(100% - 20px);
        border-top: solid 1px #c1c1c1;
        padding: 10px;
        margin-top: 10px;
    }
    .kp_li-techno{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        width: 80px;

        


        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        width: 100px;
        border: solid 1px;
        padding: 10px 5px;
        border-radius: 9px;
    }
    .kp_projet-technos{
        gap: 15px;
        flex-wrap: wrap;
    }
    .kp_content--cv{
        max-height: 0px !important;
        overflow: hidden;
        transition: 0.3s;
    }
    .kp_btn-cv{
        background: #0053e3;
        padding: 10px 15px;
        border-radius: 5px;
        border: solid 1px #000000;
        cursor: pointer;
        box-shadow: inset 0 0 13px rgb(67, 129, 195);
        color: white;
        text-decoration: none;
        height: -moz-fit-content;
        height: fit-content;
        margin: 10px 0;
        display: block;
        width: -moz-fit-content;
        width: fit-content;
    }
    
    .kp_btn-cv:hover{
        background: #003f9e;

    }
    .kp_compagnie-btn{
        display: flex;
        flex-direction: column;
    }
    .kp-cv--show ~ .kp_content--cv{
        max-height: 1000px !important;
        overflow: hidden;
    }
    .kp_btn-cv--masquer{
        display: none;
    }
    .kp-cv--show .kp_btn-cv--masquer{
        display: block;
    }
    .kp-cv--show .kp_btn-cv--afficher{
        display:none;
    }
    .kp_projet-technos--outils li{
        border: solid 2px #ff3535;
    }
    .kp_projet-technos--outils li:hover{
        background: #ffcfcf;
    }
    .kp_projet-technos--cms li{
        border: solid 2px #ffa303;
    }
    .kp_projet-technos--cms li:hover{
        background : #ffdfa9;
    }
    .kp_projet-technos--code li{
        border: solid 2px #291beb;
    }
    .kp_projet-technos--code li:hover{
        background: #d4d1ff;
    }
    .kp_projet-technos--visuel li{
        border: solid 2px #16b139;
    }
    .kp_projet-technos--visuel li:hover{
       background: #ceffd9;
    }
</style>