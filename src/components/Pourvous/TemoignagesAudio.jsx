import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
//...



const Multiplayer = () => {

    return (
        <>
            <div className="container_Audio_big">
                <h1 >Nos Temoignages audios</h1>
                <div className="container_Audio_small">
                    <div className='audioSelf'>
                        <h2>Vélo Volé</h2>
                        <h5> Posté le 29 juin 2011</h5>
                        <AudioPlayer
                            src="../assets/audios/velo_vole.mp3"
                            onPlay
                            controls
                        /></div>
                    <div className='audioSelf'>
                        <h2>10 Ans Apres</h2>
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
                        <h2>Crie et reste debout</h2>
                        <h5>Posté le 18 septembre 2009</h5>
                        <AudioPlayer
                            src="../assets/audios/crie_et_reste_debout.mp3"
                            onPlay
                            controls
                        /></div>
                </div>
            </div>
        </>
    )

}
export default Multiplayer;
