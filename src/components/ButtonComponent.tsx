/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ButtonComponent  () {

    const handleAlert = (e:any) => {
        alert('Olá')
        e.target.textValue = 'Olá'
        console.log(e.target)
    }

    return (
        <>
         {/* Evento onclick */}
         <button onClick={ handleAlert }>Salvar</button>
        </>
    )
}