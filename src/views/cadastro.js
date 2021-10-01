import React from 'react'
import Card from '../components/card'
import { withRouter } from 'react-router-dom'
import FormGroup from '../components/form-group'

class Cadastro extends React.Component{

    state = {
        nome: '',
        email:'',
        senha:'',
        senhaRepete:''
    }
    cadastrar = () => {
        console.log(this.state)

    }
    cancelar = () => {

        this.props.history.push("/login")
    }

    render(){
        return(


            <div className="container"> 
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup Label="Nome: *" htmlFor="inputNome">
                                    <input type="text"
                                        id="inputNome"
                                        className="form-control"
                                        nome="nome"
                                        onChange={e => this.setState({nome: e.target.value})} />
                                </FormGroup>
                                <FormGroup Label="Email: *" htmlFor="inputEmail">
                                    <input type="email"
                                        id="inputEmail"
                                        className="form-control"
                                        nome="email"
                                        onChange={e => this.setState({email: e.target.value})} />
                                </FormGroup>
                                <FormGroup Label="Senha: *" htmlFor="inputSenha">
                                    <input type="password"
                                        className="form-control"
                                        id="inputSenha"
                                        nome="senha"
                                        onChange={e => this.setState({senha: e.target.value})} />
                                </FormGroup>
                                <FormGroup Label="Repita a senha: *" htmlFor="inputRepitaSenha">
                                    <input type="password"
                                        className="form-control"
                                        id="inputRepitaSenha"
                                        nome="senha"
                                        onChange={e => this.setState({senhaRepete: e.target.value})} />
                                </FormGroup>
                                <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                                <button onClick={this.cancelar} className="btn btn-danger">Cancelar</button>


                            </div>
                        </div>
                    </div>
    
                </Card>
             </div>
        
        )   

    }

}

export default withRouter (Cadastro)