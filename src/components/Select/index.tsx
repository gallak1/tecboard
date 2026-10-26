import './select.css';

export function Select({itens, ...props}) {
    return (
        <select className='select-form' {...props} defaultValue="">
            <option value="" disabled className='select-placeholder'>Selecione uma opção</option>
            {itens.map((item: any) => {
                return (
                    <option key={item.id} value={item.id}>{item.nome}</option>
                )
            })}
        </select>
    )
}