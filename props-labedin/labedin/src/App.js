import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemButtonTwitter from './components/ImagemButton/ImagemButtonTwitter';
import ImagemButtonLinkedin from './components/ImagemButton/ImagemButtonLinkedin';
import EuNaFoto from './imgs/eu.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={EuNaFoto} 
          nome="RickHardBR - Dev. Jr." 
          descricao="Olá, eu sou o Ricardo Ribeiro de Macedo Filho, mas pode me chamar de RickHard ou apenas Rick. Tenho 50 anos e estou entrando no mercado da programação. Fazendo o curso FullSteck na Labenu"
        />
        
        <ImagemButtonLinkedin
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais no Linkedin"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>     
        <CardGrande 
          imagem="https://bts.com.br/wp-content/uploads/2021/02/cropped-logo-1.png"
          nome="BTS LUMINOSOS E SISTEMAS DE IDENTIFICACAO LTDA " 
          descricao="A BTS desenvolve e implanta projetos de sinalização de grande porte. "
          cargo="Cargo: T.I / Manutenção (Informática - Elétrica - Predial"
          inicio="Início: 2016"
          termino="Situação: empregado"
        />

        <CardGrande 
          imagem="https://paraisopolis.com.br/imagens/logo-topo-g.png"
          nome="SBS - NET - TURBO NET" 
          descricao="A SBS-NET é uma das maiores provedoras de internet via fibra da região "
          cargo="Cargo: T.I / Manutenção Informática"
          inicio="Início: 2012"
          termino="Situação: Saída em 2015"
        />
       <h2>Meus Contatos</h2>
      </div>
      <div className="page-section-container-small">
      <CardPequeno 
          imagem1="https://img2.gratispng.com/20180621/rrh/kisspng-arroba-symbol-at-sign-ampersand-email-sign-5b2bdf448b8f02.1725479315296018605716.jpg"
          email1="rickhard@bol.com.br"
          imagem2="https://i.pinimg.com/564x/61/56/09/615609007befa5a982b949a1145c343b.jpg"
          email2="(35)9-9135-6134" 
          
        />
        </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook"
        />        

        <ImagemButtonTwitter
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter"           
        />        
      </div>
    </div>
  );
}

export default App;
