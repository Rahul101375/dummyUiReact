import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import * as MaterialModule from '../../common/Material'

const AudioSearchComponent = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <div>
            {
                listening ? (
                    <MaterialModule.IconButton onClick={SpeechRecognition.startListening}>
                        <MaterialModule.SettingsVoiceIcon />
                    </MaterialModule.IconButton>
                ) : (
                    <MaterialModule.IconButton onClick={SpeechRecognition.stopListening}>
                        <MaterialModule.KeyboardVoiceIcon />
                    </MaterialModule.IconButton>
                )

            }
            <MaterialModule.IconButton onClick={resetTranscript}><MaterialModule.RestartAltIcon/></MaterialModule.IconButton>
            <p>{transcript}</p>
        </div>
    );
};
export default AudioSearchComponent;