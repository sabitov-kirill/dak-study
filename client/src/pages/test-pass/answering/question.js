import RadioSelector from '../../../patterns/common/radio-selector'

export default function Question(props) {
    const options = props.question.options.map((option, index) => {
        return (
            <>
                <input
                    type='radio'
                    value={option}
                    id={option + 'Button'}
                    onClick={() => props.selectAnswer(index)}
                    name={props.question.text}
                    className='radioButton'
                    required
                />
                <label htmlFor={option + 'Button'}>{option}</label>
                <br />
            </>
        )
    })

    return (
        <div>
            <p>{props.question.text}</p>
            {options}
        </div>
    );
}