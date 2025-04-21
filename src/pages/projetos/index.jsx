import { useState } from 'react';
import { Conteiner_projeto } from '../../components/conteiner-projeto';
import './index.scss'
import node from "../../assets/img/javascript.svg"
import react from "../../assets/img/image 29.svg"
import sql from "../../assets/img/sql.svg"
import electron from "../../assets/img/electron.svg"
import type from "../../assets/img/typescript.svg"

export function Projetos () { 

    const [projetos, setProjetos] = useState([
        {
            tittle_projeto: "Doctor Health ",  
            text_projeto : "A Doctor Health é uma plataforma online desenvolvida para facilitar o agendamento de consultas médicas, controle financeiro e atendimento remoto com web consultas. A integração com um bot de saúde permite automação no atendimento e acompanhamento de pacientes. É uma solução completa e prática para médicos e pacientes.", 
            img_projeto1: react,
            img_projeto2: node,
            img_projeto3: sql
        },
        {
            tittle_projeto: "Automação de Dados ",  
            text_projeto : "Esse projeto envolveu a criação de um bot de automação que lê dados de uma tabela Excel e preenche automaticamente os inputs no site da Nota fiscal, melhorando a eficiência e reduzindo erros manuais. A automação facilita o processo de preenchimento de formulários repetitivos, garantindo precisão e agilidade.", 
            img_projeto1: type,
            img_projeto2: node,
            img_projeto3: electron
        }
    ])


    return (
        <div className="main-projetos">
            <h1>Projetos</h1>

            <div className="container-projeto">
               {projetos.map((item,index) => {
                    return (
                        <div className="renderizar-componentes" key={index}>
                            <Conteiner_projeto tittle_projeto = {item.tittle_projeto} text_projeto= {item.text_projeto} img_projeto1= {item.img_projeto1} img_projeto2= {item.img_projeto2}img_projeto3= {item.img_projeto3}/>
                        </div>
                    );
               })}
                
                <div className="columns-top">
                    <div className="columns1"></div>
                    <div className="columns2"></div>
                    <div className="columns3"></div>
                </div>

                <div className="columns-bottom">
                    <div className="columns4"></div>
                    <div className="columns5"></div>
                    <div className="columns6"></div>
                </div>
            </div>
        </div>
    );
}