import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
//...



const Multiplayer = (props) => {
    
        const { nom, description, photo}= props;
    return (
        <>
            
                <div className="container_Audio_small col-md-8">
                    <div className='audioSelf'>
                        <h2>{nom}</h2>
                        <h5>{description} </h5>
                        <AudioPlayer
                            src={photo}
                            onPlay
                            controls
                        /></div>
                </div>
            
        </>
    )

}
export default Multiplayer;
