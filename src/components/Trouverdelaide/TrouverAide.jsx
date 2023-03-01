
import ViolencesConjugales from './ViolencesConjugales';
import ViolencesSexuelles from './ViolencesSexuelles';
import AutresViolences from "./AutresTypesViolences";
import AidePsychoSociale from "./AidePsychoSociale";

import './Trouverdelaide.css';

const TrouverAide = () => {

    return(
        <div className='container-trouver-aide'>
            <div>
                <ViolencesConjugales />
            </div>
            <div>
                <ViolencesSexuelles />
            </div>
            <div>
                <AutresViolences />
            </div>
            <div>
                <AidePsychoSociale />
            </div>
        </div>

        
    )
};

export default TrouverAide ;