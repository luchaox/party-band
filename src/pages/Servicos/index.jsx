import React from "react"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from './../../components/Card'
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
        </>
    )

}