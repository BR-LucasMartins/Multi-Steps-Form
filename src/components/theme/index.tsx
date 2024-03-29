import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {

    const {state} = useForm();
    return (
        <C.Container>
                <C.Area>
                    <Header/>
                    <C.Steps>
                        <C.Sidebar> 
                            <SidebarItem 
                                title="Pessoal"
                                description="Se identifique"
                                icon="profile"
                                path="/"
                                selected={(state.currentStep === 1)}
                            />
                            <SidebarItem 
                                title="Profissional"
                                description="Seu nível de esxperiência"
                                icon="book"
                                path="/step2"
                                selected={state.currentStep === 2}
                            />
                            <SidebarItem 
                                title="Contatosl"
                                description="Como te encontrar"
                                icon="mail"
                                path="/step3"
                                selected={state.currentStep === 3}
                            />
                        </C.Sidebar>
                        <C.Page> 
                            {children}
                        </C.Page>
                    </C.Steps>
                </C.Area>
        </C.Container>
    );
} 