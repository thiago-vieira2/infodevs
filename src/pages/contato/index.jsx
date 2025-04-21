import './index.scss';

export function Contato () {
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
                <input type="email" name="" id="" placeholder='Digite seu email' className='Email-user' />
                <input type="text" className='Assunto' placeholder='Digite o assunto' />
                <textarea className='mensagem' name="" id="" placeholder='Digite sua mensagem'></textarea>
            </div>
            <button className='send-email'>Enviar</button>
        </div>
    );
}