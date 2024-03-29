import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, formActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { ChangeEvent, useEffect } from 'react';




export const FormStep3 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=> {
        if(state.name=== ''){
            navigate('/');
        }else{
            dispatch({
                type: formActions.setCurrentStep,
                payload: 3
            }) 
        }
         
    }, []);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: formActions.setEmail,
            payload: e.target.value
        })    
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: formActions.setGithub,
            payload: e.target.value
        })    
    }

    const handleSubmit = () => {
        if(state.email === ''){
            alert("Campo E-mail é obrigatório");
        }else if(state.github === ''){
            alert("Campo GitHub é obrigatório"); 
        }
        else{
            alert("Cadastro efetuado com sucesso. Aguarde um possível retorno para a próxima etapa do processo seletivo.");
            console.log(state);
        }
        
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3 </p>
                <h1> Legal {state.name}, onde te achamos? </h1>
                <p>Preencha com seus dados os campos abaixo para conseguirmos entrar em contato. </p>

                <hr/>

                <label>
                    Qual o seu e-mail?
                    <input type="email" 
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu GitHub? 
                    <input type="url" 
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleSubmit}> Enviar </button>

            </C.Container>
        </Theme>
    )
}