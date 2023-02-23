import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
//...



const Multiplayer = () => {

    return (
        <>
            <div className="container_Audio_big">
                <h1 >Ta voix compte </h1>
                <p>Elles vous racontent, sans mâcher leurs mots, comment elles s’en sont sorties de situations désagréables, voir dangereuses :<br/>
                 Si vous voulez partager une expérience positive dont vous êtes fière avec d’autres femmes, contactez notre secrétariat pour prendre rendez-vous pour un enregistrement.</p>
                <div className="container_Audio_small">
                    <div className='audioSelf'>
                        <h2>Vélo volé</h2>
                        <h5> Posté le 29 juin 2011</h5>
                        <AudioPlayer
                            src="../assets/audios/velo_vole.mp3"
                            onPlay
                            controls
                        /></div>
                    <div className='audioSelf'>
                        <h2>10 Ans apres</h2>
                        <h5> Posté le 29 juin 2011</h5>
                        <AudioPlayer
                            src="../assets/audios/10_ans_apres_la_violence_conjugale.mp3"
                            onPlay
                            controls
                        /></div>
                    <div className='audioSelf'>
                        <h2>Agressée par un commercant</h2>
                        <h5>Posté le 29 juin 2011</h5>
                        <AudioPlayer
                            src="../assets/audios/Agressee_par_un_commercant.mp3"
                            onPlay
                            controls
                        />
                    </div>
                    <div className='audioSelf'>
                        <h2>Des excuses ou une griffe </h2>
                        <h5>Posté le 18 septembre 2009</h5>
                        <AudioPlayer
                            src="../assets/audios/des_excuses_ou_une_griffe.mp3"
                            onPlay
                            controls
                        /></div>
                         <div className='audioSelf'>
                        <h2>Drageurs/Agresseurs</h2>
                        <h5>Posté le 18 septembre 2009</h5>
                        <AudioPlayer
                            src="../assets/audios/Dragueur_agresseur.mp3"
                            onPlay
                            controls
                        /></div>
                         <div className='audioSelf'>
                        <h2>Glisser hors du pull </h2>
                        <h5>Posté le 18 septembre 2009</h5>
                        <AudioPlayer
                            src="../assets/audios/glissee_hors_du_pull.mp3"
                            onPlay
                            controls
                        /></div>
                </div>
            </div>
        </>
    )

}
export default Multiplayer;
