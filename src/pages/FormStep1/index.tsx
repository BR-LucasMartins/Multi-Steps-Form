import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, formActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { ChangeEvent, useEffect } from 'react';




export const FormStep1 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=> {
        dispatch({
            type: formActions.setCurrentStep,
            payload: 1
        })  
    }, [])

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step2');
        }else{
            alert("Campo Nome não preenchido.")
        }
        
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: formActions.setName,
            payload: e.target.value
        })    
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3 </p>
                <h1> Vamos começar com seu nome </h1>
                <p>Preencha o cmapo abaixo com seu nome </p>

                <hr/>

                <label>
                    Seu nome completo 
                    <input type="text" 
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}> Próximo </button>

            </C.Container>
        </Theme>
    )
}