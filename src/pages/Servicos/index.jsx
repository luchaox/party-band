import React from "react"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from './../../components/Card'
import { Menu } from './../../components/Menu';
import { Footer } from './../../components/Footer';

export function Servicos() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/servicos2')
            .then((resposta) => {
                setCards(resposta.data)
            })
    }, [])


    return(
        <>
            <Menu paginaAtual={"Home"} />
    

             <div
                    className='d-flex justify-content-around'
                >
                    {
                        cards.map((element, index) =>
                            <Card
                                titulo={element.titulo}
                                descricao={element.descricao} 
                            />
                        )
                    }



                </div>


                <Footer />

        </>
    )

}