

export const Card = (props) => {
    return(
        <>
        <div
            className='card text-center'
            style={{
                width: '18rem'
            }}
        >
            <div
                className='card-body'
            >
                <h5 className='card-title'>
                    {props.titulo}
                </h5>
                <p className='card-text'>
                    {props.descricao}
                </p>

            </div>

        </div>

    </>
    )
}