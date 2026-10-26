import './button.css';

export function Button(props: any) {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}