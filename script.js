let speech= new SpeechSynthesisUtterance();

let addVoices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    addVoices= window.speechSynthesis.getVoices();
    speech.voice=addVoices[0];

    addVoices.forEach((voice, i) => (voiceSelect.options[i]= new Option(voice.name, i)
    )
        
    );
};


voiceSelect.addEventListener("change", ()=>{
    speech.voice=addVoices[voiceSelect.value];
})

const btn= document.querySelector("button");
btn.addEventListener("click", ()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

