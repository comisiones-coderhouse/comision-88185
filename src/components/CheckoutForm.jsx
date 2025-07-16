//Componente Hijo
export function CheckoutForm({ onSendForm }) {

    const x = 1;

    const handleClick = () => {
        onSendForm(x)
    }


    return (
        <div>
            <button onClick={handleClick}>Comprar</button>
        </div>
    )
}