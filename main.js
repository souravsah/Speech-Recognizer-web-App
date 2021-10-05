const texts=document.querySelector(".texts");
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.interimResults=true;

let p=document.createElement('p');
recognition.addEventListener('result',(e)=>{
    const text=Array.from(e.results).map((result)=>result[0])
    .map((result)=>result.transcript)
    .join('')
    p.innerText=text;
    texts.appendChild(p);
    console.log(text)
    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='HII'
            texts.appendChild(p);
        }
        if(text.includes('hello')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='HII'
            texts.appendChild(p);
        }
        if(text.includes('I am')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='Hello,How can I help you...'
            texts.appendChild(p);
        }
        if(text.includes('YouTube')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='Opening....'
            texts.appendChild(p);
            window.open(`https://youtube.com`)
        }
        if(text.includes('clear')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='Clearing....'
            texts.appendChild(p);
            texts.innerHTML=" ";
            // window.open(`https://youtube.com`)
        }
        p=document.createElement('p');
    }
})
recognition.addEventListener('end',()=>{
    recognition.start()
})
recognition.start()











  