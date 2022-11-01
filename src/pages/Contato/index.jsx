import { Menu } from "../../components/Menu"
import { Footer } from "../../components/Footer"
import { useRef } from "react";

export const Contato = () => {

    const refForm = useRef();

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

        } else {
            refForm.current.classList.add('was-validated')
        }

    }


    return (
        <>
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