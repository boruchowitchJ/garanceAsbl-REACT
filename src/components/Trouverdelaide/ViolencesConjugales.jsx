// import { Outlet, Link } from "react-router-dom";

import './Trouverdelaide.css';
// il te manquait juste le rel="noreferrer" apres ton taget blank mais tout est top;)
const ViolencesConjugales = () => {
    return (
        <div className="container-violences-conjugales">
            <div className="violence-conjugales-belgique">
                <h1 className="title-violence-conjugale">En cas de violence conjugale</h1>

                <h2>Belgique</h2>
                <p>Ligne d’écoute gratuite et dans l’anonymat au <strong className="strong-yellow">0800 30 030 </strong>(en français)</p>
                <p>Ligne d’écoute gratuite et dans l’anonymat au <strong className="strong-yellow">0800 55 552</strong> (en espagnol)</p>
            
                <h3>Maisons d’accueil avec adresse sécrète :</h3>
                <ul>
                    <li><a href="https://www.cpvcf.org/" target="_blank" rel="noreferrer">Centre de Prévention des Violences Conjugales et Familiales</a> , Bruxelles.</li>
                    <li><a href="https://www.cvfe.be/" target="_blank" rel="noreferrer"> Collectif Contre les violences familiales et l’exclusion</a> , Liège</li>
                    <li> Pour une liste des maisons d’accueil pour femmes en difficulté : <a href="http://www.ama.be/" target="_blank" rel="noreferrer">   Association des maisons d’accueil</a></li>
                </ul>
            
                <h3>Services de consultation :</h3>
                <ul>
                    <li><a href="https://www.prevention1170.be/" target="_blank" rel="noreferrer">CIVIF</a> , Bruxelles.</li>
                    <li><a href="https://www.namur.be/fr/ma-ville/social/cohesion-sociale/prevention-et-securite/violences-intrafamilliales-d-une-rive-a-lautre" target="_blank" rel="noreferrer">D’une Rive à l’autre </a> , Namur.</li>
                </ul>
                <p>Pour trouver de l’aide dans d’autres pays que ceux mentionnés, veuillez consulter la base de données européenne <a className="strong-yellow" href="https://wave-network.org/"  target="_blank" rel="noreferrer">WAVE</a>.</p>
            </div>
            <div className="violence-conjugales-autres">
                <div class="redBox">
                    <h3>France</h3>
                    <p>Ligne d’écoute gratuite et dans l’anonymat : <strong className="strong-yellow">39 19</strong></p>
                    <a className="strong-yellow-exept" href="https://www.solidaritefemmes.org/" target="_blank" rel="noreferrer">Fédération nationale Solidarité Femmes</a>
                </div>
                <div className="redBox">
                    <div>
                        <h3>Luxembourg</h3>
                        <a className="strong-yellow-exept" href="https://fed.lu/wp/" target="_blank" rel="noreferrer">Femmes en détresee</a>
                    </div>
                    <div>
                        <h3>Suisse</h3>
                        <a className="strong-yellow-exept" href="https://www.frauenhaeuser.ch/fr" target="_blank" rel="noreferrer">Fédération Solidarité Femmes de Suisse et de Liechtenstein</a>
                        <a className="strong-yellow-exept" href="https://www.violencequefaire.ch/" target="_blank" rel="noreferrer">www.violencequefaire.ch/</a><span class="span-center">(pour adultes).</span>
                    </div>  
                </div>
                <div class="redBox">
                    <h3>Canada</h3>
                    <a className="strong-yellow-exept"href="https://www.aimersansviolence.com/" target="_blank" rel="noreferrer">Aimer sans violence</a><span class="span-center">(pour ados).</span> 
                    <a className="strong-yellow-exept" href="https://fmhf.ca/" target="_blank" rel="noreferrer">Fédération des ressources hébergement pour femmes violentées et en difficulté du Québec</a> <span class="span-center">(pour adultes).</span>
                    <a className="strong-yellow-exept" href="https://sosviolenceconjugale.ca/fr" target="_blank" rel="noreferrer">SOS Violence Conjugale</a><span class="span-center">Site de la ligne d’écoute.</span>  
                </div>
        </div>
        <div class="container-violences-sexuelles">
            <div className="violences-sexuelles-belgique">
                <h1 className="title-violence-sexuelle">En cas de violence sexuelle</h1>
                <h2>Belgique</h2>
                <p><a href="https://www.guidesocial.be/sosviol/page.php?page=1" target="_blank" rel="noreferrer">SOS Viol</a>, Bruxelles.</p>
                <p>Pour trouver de l’aide dans d’autres pays que ceux mentionnés, veuillez consulter la base de données européenne <a href="https://wave-network.org/" target="_blank" rel="noreferrer">WAVE</a>.</p>
            </div>
            <div className="violence-sexuelles-autres">
                <div className="redBox">
                    <h3>France</h3>
                    <p>Ligne d’écoute gratuite et dans l’anonymat : <strong class="strong-yellow">0800 05 95 95</strong></p>
                    <a className="strong-yellow-exept" href="https://www.planning-familial.org/fr" target="_blank" rel="noreferrer">Confédération du Mouvement français pour le planning familial</a> 
                    <a className="strong-yellow-exept" href="https://cfcv.asso.fr/" target="_blank" rel="noreferrer">Collectif féministe contre le viol.</a>
                    <a className="strong-yellow-exept" href="https://www.sosviol.com/" target="_blank" rel="noreferrer">SOS Viol</a><span class="span-center">, Marseille.</span> 
                    <a className="strong-yellow-exept" href="https://facealinceste.fr/" target="_blank" rel="noreferrer">Association internationale des victimes d’inceste.</a> 
                </div>
                <div className="redBox">
                    <h3>Suisse</h3>
                    <a className="strong-yellow-exept" href="https://viol-secours.ch/" target="_blank" rel="noreferrer">Viol Secours.</a><span class="span-center">, Genève.</span>
                    <a className="strong-yellow-exept" href="https://cfcv.asso.fr/" target="_blank" rel="noreferrer">Centre de consultation pour les victimes d’abus sexuel</a><span className="span-center">, Genève.</span>
                </div> 
                <div className="redBox">
                    <h3>Canada</h3>
                    <a className="strong-yellow-exept" href="http://www.rqcalacs.qc.ca/" target="_blank" rel="noreferrer">Centres d’aide et de lutte contre les agressions à caractère sexuel.</a>
                    <a className="strong-yellow-exept" href="https://cpivas.com/" target="_blank" rel="noreferrer">CPIVAS</a>
                </div> 
            </div>    
        </div> 
        <div className="container-violences-autres">
            <div className="violences-autres-belgique">
                <h1 className="title-violence-autre">En cas de tout autre type de violence</h1>
                
                <h2>Belgique</h2>

                <h3>Aide aux victimes d’infraction</h3>
                
                <p> Liste des <a className="strong-yellow-exept" href="https://justitie.belgium.be/language_selection_page?destination=/node/1706" target="_blank" rel="noreferrer">services d’aide aux victimes d’infraction </a>, en fin de page.</p>
                <p>Les<a className="strong-yellow-exept" href="https://aideetreclassement.be/" target="_blank" rel="noreferrer">services d’aide aux victimes en Wallonie</a>.</p>

                <h3>Discrimination</h3>

                <p>Sur base du genre : <a className="strong-yellow-exept" href="https://igvm-iefh.belgium.be/nl">Institut pour l’Egalité des femmes et des hommes</a></p>
                <p>Pour tout autre raison : <a className="strong-yellow-exept" href="https://www.unia.be/fr">Centre pour l’Egalité des chances et la lutte contre le racisme</a></p>
                <p>Pour racisme : <a className="strong-yellow-exept" href="https://mrax.be/"></a>Mouvement contre le racisme, l’antisémitisme et la xenophobie.</p>

                <h3>Mutilations génitales et mariage forcé.</h3>

                <p><a className="strong-yellow-exept" href="https://www.gams.be/">GAMS Belgique</a></p>
                <p><a className="strong-yellow-exept" href="https://www.intact-association.org/fr/">Intact asbl</a></p>

                <h3>Violences faites aux enfants</h3>

                <p><a className="strong-yellow-exept" href="https://childfocus.be/fr-be/">CHILD FOCUS</a></p>
                <p><a className="strong-yellow-exept" href="http://www.federationsosenfants.be/">Equipes SOS Enfants</a></p>
                <p><a className="strong-yellow-exept" href="https://www.asblkaleidos.be/">Kaleidos asbl</a></p>

                <h3>Violences faites aux femmes lesbiennes, bisexuelles</h3>

                <p><a className="strong-yellow-exept" href="http://rainbowhouse.be/fr/">Rainbow House</a></p>

                <h3>Violences faites aux personnes âgées</h3>

                <p><a className="strong-yellow-exept" href="http://www.respectseniors.be/">Respect Séniors</a> , Wallonie.</p>
                <p><a className="strong-yellow-exept" href="http://www.rifvel.be/">Viellir en liberté.</a></p>

                <h3>Violences faites aux personnes aux genres fluides, trans et intersexes</h3>

                <p><a className="strong-yellow-exept" href="https://www.genrespluriels.be/">Genres Pluriels.</a></p>

                <h3>Violences faites aux personnes prostituées</h3>

                <p><a className="strong-yellow-exept" href="https://www.alias-bru.be/">Alias</a> , prostitutuion masculine.</p>
                <p><a className="strong-yellow-exept" href="https://espacep.be/">Espace P...</a></p>
                <p><a className="strong-yellow-exept" href="https://pag-asa.be/">Pag-Asa</a>, traite des êtres humains.</p>
            </div>
            <div className="violence-autres-autres">
                <div className="redBox">
                    <h3>France</h3>
                    
                    <p><a className="strong-yellow-exept" href="http://www.sosfemmes.com/" target="_blank">SOS Femmes</a> - annuaire de services d’aide pour femmes</p> 

                    <h4>Aide aux victimes</h4>
                    <p><a className="strong-yellow-exept" href="https://www.france-victimes.fr/" target="_blank">CInstitut national d’aide aux victimes et de médiation.</a> - liste de services par département</p>

                    <h4>Discrimination</h4>
                    <p><a className="strong-yellow-exept" href="https://www.lacimade.org/" target="_blank">CIMADE</a></p> 
                    <p><a className="strong-yellow-exept" href="https://www.defenseurdesdroits.fr/fr/institution/competences/lutte-contre-discriminations" target="_blank">HALDE.</a></p>
                    <p><a className="strong-yellow-exept" href="https://www.sos-homophobie.org/" target="_blank">SOS Homophobie.</a></p>
                    <p><a className="strong-yellow-exept" href="https://www.sos-homophobie.org/" target="_blank">SOS Racisme.</a></p>
                    
                    <h4>Harcèlement et violences au travail</h4>

                    <p><a className="strong-yellow-exept" href="https://www.avft.org/">Association européenne contre les violences faites aux femmes au travail</a></p>
                </div>
                <div className="redBox">
                    <h3>Suisse</h3>
                    
                    <a className="strong-yellow-exept" href="https://www.opferhilfe-schweiz.ch/fr/" target="_blank">Centres de consultation LAVI</a>
                    <h4>Harcèlement au travail</h4>
                    <a className="strong-yellow-exept" href="https://www.non-c-non.ch/" target="_blank">Non c'est non.</a>
                    <h4>Violences faites aux enfants</h4>
                    <p><a className="strong-yellow-exept" href="https://www.disno.ch/">Dis No.</a></p>
                    <p><a className="strong-yellow-exept" href="http://www.fjfnet.ch/Violence.php">Violence et Famille.</a></p>
                </div> 
                <div className="redBox">
                    <h3>Canada</h3>
                    
                    <a className="strong-yellow-exept" href="https://cavac.qc.ca//" target="_blank" rel="noreferrer">Centres d’aide aux victimes d’actes criminels.</a>
                </div> 
            </div>
        </div>   
    </div>
    )
};

export default ViolencesConjugales;