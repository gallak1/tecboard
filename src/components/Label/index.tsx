import './label.css';

export function Label(props: any) {
    return (
        <label className='label-form' htmlFor="{props.htmlFor}">
            {props.children}
        </label>
    )
}