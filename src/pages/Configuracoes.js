import React, { useState } from 'react';
import Input from '../components/Input';
import Menu from '../components/Menu';

const ConfiguracaoSeção = ({ title, items }) => (
    <div>
        <h1>{title}</h1>
        {items.map((item, index) => (
            <div className='container-vertical' key={index}>
                <p>{item.label}</p>
                <Input placeholder={item.placeholder} />
            </div>
        ))}
    </div>
);

export default function Configuracoes() {
    const veiculosConfig = [
        { label: 'Número de Veículos tipo: A', placeholder: 'Ex: 2' },
        { label: 'Número de Veículos tipo: B', placeholder: 'Ex: 2' },
        { label: 'Número de Veículos tipo: C', placeholder: 'Ex: 2' },
        { label: 'Número de Veículos tipo: D', placeholder: 'Ex: 2' },
        { label: 'Número de Veículos tipo: E', placeholder: 'Ex: 2' }
    ];

    const appConfig = [
        { label: 'Máximo de aulas que o aluno pode marcar por vez!', placeholder: 'Recomendado: 4' },
        { label: 'Mínimo de Horas que tem que ter de diferença para desmarcar uma aula', placeholder: 'Recomendado: 3' },
        { label: 'Máximo de Aulas Marcadas por dia (não aplicado a pessoas com superioridade no cadastro)', placeholder: 'Recomendado: 3' }
    ];

    return (
        <div className='container vw-100'>
            <div className='container-fluid max-1200'>  
                <div className='container-vertical'>
                    <Menu />
                </div>
                
                <div className='container-rolagem'>
                <h1>Configurações da Sua Autoescola:</h1>
                    <div>
                    <ConfiguracaoSeção title="Configurações do App" items={appConfig} />
                    </div>
                    <div className='container-horizontal'>
                        <ConfiguracaoSeção title="Veículos:" items={veiculosConfig} />         
                    </div>
                </div>
            </div>
        </div>
    );
}
