import emailjs from 'emailjs-com';
import './index.scss';
import { useState } from 'react';


export function Contato () {

        
       const[emailCliente,setEmailCliente] = useState('') 
       const[assunto, setAssunto] = useState('')
       const[mensagemEmail, setMensagemEmail] = useState('')


    function EnviarEmail(){
        if(!emailCliente || !assunto || !mensagemEmail){   // eu que to documentando, validação se todos os inputs estão preenchidos
            console.log('preencha todos os campos') 
            alert("preencha todos os campos ") // se nao, aparece um window alert
            return
        }

        // função do email js, que chama o método send, pra  fazer o ENVIO de um email
        emailjs.send(
            'service_jfyt0xr',         
            'template_4ildg3d',         
            {
              email: emailCliente,   
              subject: assunto,     
              message: mensagemEmail
                        
            },
            
            'X7rGGiXe092ksd_LO'       
        ).then(function(response) {
            console.log('Email enviado com sucesso:', response.status, response.text);

            alert('Enviado com sucesso!');

            setAssunto('')
            setEmailCliente('')
            setMensagemEmail('')
        })
            
     
    }
   


    return (
        <div className="main-contato">
            <div className="tittle-contato">
                <div className="text-contato">
                    <h1>Contato</h1>
                    <h3>Construa seus sonhos conosco</h3>
                </div>
              
                <div className="columns-animation">
                    <div className="columns1"></div>
                    <div className="columns2"></div>
                </div>

            </div>

            <div className="conteiner-contato">
                <input value={emailCliente} onChange={(e) => setEmailCliente(e.target.value)} type="email" name="" id="" placeholder='Digite seu email' className='Email-user' />
                <input value={assunto} onChange={(e) => setAssunto(e.target.value)} type="text" className='Assunto' placeholder='Digite o assunto' />
                <textarea value={mensagemEmail} onChange={(e) => setMensagemEmail(e.target.value)} className='mensagem' name="" id="" placeholder='Digite sua mensagem'></textarea>
            </div>
            <button onClick={EnviarEmail} className='send-email'>Enviar</button>
        </div>
    );
}