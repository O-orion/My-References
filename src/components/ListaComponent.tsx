import './lista.css'

export default function Lista() {
    return (
        <div className='lista-container'>
            <button className='lista-button'>Nova Referência</button>
            <table className='lista-tabela'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Local</th>
                        <th>Local</th>
                        <th> </th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>IEEE</td>
                        <td>Link</td>
                        <td>Link</td>
                        <td>
                            <button>a</button>
                            <button>a</button>
                        </td>
                    </tr>
                    <tr>
                        <td>IEEE</td>
                        <td>Link</td>
                        <td>Link</td>
                        <td>
                            <button>a</button>
                            <button>a</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
