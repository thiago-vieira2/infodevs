import { useEffect } from 'react';
import './index.scss'

export function Sobre() {


    return (
        



        <div className="main-sobre">
            <div className="sobre-nos">

               

                <div className="text-sobre">

                    <h1>
                        Sobre nós
                    </h1>

                    <div className="historia">
                        <h3>Historia</h3>
                        <p>A Info Devs nasceu como um projeto de TCC no curso de Informática e se tornou uma empresa focada no desenvolvimento de sites e sistemas eficientes. Nosso objetivo é entregar soluções rápidas, personalizadas e alinhadas às necessidades de cada cliente.</p>

                    </div>
                </div>

                <div className="columns-animation">
                    <div className="columns1">
                        
                    </div>

                    <div className="columns2">

                    </div>
                </div>
            </div>
            <div className="diferenciais">
                <div className="columns-animation">
                    <div className="columns1">

                    </div>

                    <div className="columns2">

                    </div>
                </div>

                <h3>Difencial</h3>

                <ul className="diferenciais">
                    <li> Desenvolvimento ágil – Entregamos projetos com rapidez e eficiência</li>
                    <li> Personalização total – Criamos soluções sob medida para cada cliente</li>
                    <li>Tecnologia moderna – Utilizamos as melhores ferramentas do mercado</li>
                    <li>Suporte próximo – Atendimento direto e acompanhamento do projeto</li>
                </ul>
            </div>
        </div>
    );
}