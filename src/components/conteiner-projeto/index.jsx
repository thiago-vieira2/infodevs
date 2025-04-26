import './index.scss';
import javascript from '../../assets/img/javascript.svg'
import sql from '../../assets/img/sql.svg'
import react from '../../assets/img/image 29.svg'

export function Conteiner_projeto({ tittle_projeto, text_projeto, img_projeto1, img_projeto2, img_projeto3 }) {
    return (
        <div className="main_projeto">
            <div className="texto-conteiner">
                <h3>{tittle_projeto}</h3>
                <p>{text_projeto}</p>
            </div>

            <div className="ferramentas">
                <div className="ferramentas1">
                    <img src={img_projeto1} alt="Ferramenta 1" />
                </div>
                <div className="ferramentas2">
                    <img src={img_projeto2} alt="Ferramenta 2" />
                </div>
                <div className="ferramentas3">
                    <img src={img_projeto3} alt="Ferramenta 3" />
                </div>
            </div>
        </div>
    );
}
