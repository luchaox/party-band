import { Menu } from "../../components/Menu"
import { Footer } from "../../components/Footer"
import { useRef } from "react";
import { useState } from "react";
import { Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Contato = () => {

    const navigate = useNavigate()
    const refForm = useRef();
    const [showToast, setShowToast] = useState(false);

    function submitForm(e) {
        e.preventDefault();

        if(refForm.current.checkValidity()) {

            let obj = new Object;
            for (let index = 0; index < refForm.current.length; index++) {

                const id = refForm.current[index]?.id;
                const value = refForm.current[index]?.value;
                
                if(id === 'botao') break;

                obj[id] = value
                
            }

            console.log(obj)

            axios.post('http://localhost:3001/contatos', obj).then((res) => {
                console.log(res)

                setShowToast(true)
                refForm.current['nome'].value = ''
                refForm.current['email'].value = ''
                refForm.current['descricao'].value = ''
                refForm.current.classList.remove('was-validated') 

                setTimeout(() => {
                    navigate('/listagem')
                }, 2000);
                
            })
            .catch((err) => {
                console.log(err)
            })


        } else {
            refForm.current.classList.add('was-validated')
        }

    }


    return (
        <>

            <Toast
                onClose={() => { setShowToast(false) }}
                show={showToast}
                delay={3000}
                autohide
                bg={'success'}
                style={{
                    position: 'absolute',
                    zIndex: 3,
                    right: 0,
                }}
            >
                <Toast.Header>Sucesso!</Toast.Header>
                <Toast.Body
                    style={{
                        color: '#fff'
                    }}
                >
                    {"Email enviado com sucesso!"}
                </Toast.Body>

            </Toast>
            <Menu paginaAtual={'Contato'} />
            <div 
                className="container"
            >

                <div 
                    style={{
                        display: 'flex',
                        flexDirection:'column',
                        alignItems: 'center',
                        paddingTop: 20
                    }}
                >
                    <h2>Contato</h2>
                    <p>
                        Envie uma mensagem ou fale pelo WhatsApp (99) 99999-9999
                    </p>
                </div>
                <hr />

                <form
                    className="row g-3 needs-validation"
                    noValidate
                    style={{
                        paddingBottom: 20
                    }}
                    onSubmit={(e) => submitForm(e)}
                    ref={refForm}
                >
                    <div
                        className="col-md-6"
                    >
                        <label
                            htmlFor="nome"
                            className="form-label"
                        >
                            Nome
                        </label>
                        <input 
                            type='text'
                            className="form-control"
                            placeholder="Digite seu nome"
                            id="nome"
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor, digite seu nome.
                        </div>
                    </div>


                    <div
                        className="col-md-6"
                    >
                        <label
                            htmlFor="email"
                            className="form-label"
                        >
                            Email
                        </label>
                        <input 
                            type='text'
                            className="form-control"
                            placeholder="Digite seu email"
                            id="email"
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor, digite seu email.
                        </div>
                    </div>

                    <div
                        className="col-md-6"
                    >
                        <label
                            htmlFor="descricao"
                            className="form-label"
                        >
                            Descrição
                        </label>
                        <textarea 
                            className="form-control"
                            id="descricao"
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor, digite uma descrição.
                        </div>
                    </div>

                    


                    <div
                        className="col-md-12"
                    >
                        <button
                            className="btn btn-primary"
                            type="submit"
                            id="botao"
                        >
                            Enviar
                        </button>
                    </div>

                </form>


            </div>

            <Footer />
            
        </>

        )
    }