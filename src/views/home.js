import React from 'react'
//import { withRouter } from 'react-router-dom'

class Home extends React.Component{

    state = {

        servicoIdEscolhido: null,
        servicoNameEscolhido: null
    }
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Esse é seu sistema de Serviços IZIW</p>
                    <p className="lead">Através do nosso sistema você é capaz de contratar o serviço em minutos! O seu serviço escolhido foi - {this.state.servicoIdEscolhido} <b>referente a {this.state.servicoNamescolhido}</b></p>
                    <hr className="my-4" />
                    <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#/cadastro" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                        <a className="btn btn-danger btn-lg" href="/" role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
                    </p>
                </div>
            </div>



        )

    }

}

export default Home