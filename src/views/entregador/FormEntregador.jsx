import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import { Button, Container, Divider, Form, FormField, Icon, Radio, Select } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormEntregador() {
    return (
        <div>

        <MenuSistema tela={'entregador'} />
            

            <div style={{ padding: '3%' }}>
                <Container textAlign="justified">
                <h1><span style={{ color: 'gray' }}>Entregador <Icon name="angle double right" /></span> Cadastro</h1>
                <Divider />

                <Form>
                    <Form.Group>
                        <Form.Input label='Nome' placeholder='' width={8} required />

                        <Form.Input label='CPF' placeholder='' width={4} required>
                            <InputMask
                                required
                                mask="999.999.999-99"
                            />
                        </Form.Input>

                        <Form.Input label='RG' placeholder='' width={4} />
                    </Form.Group>


                    <Form.Group>
                        <Form.Input label='DT Nascimento' placeholder='Ex.: 11/09/2001' width={4}>
                            <InputMask
                                required
                                mask="99/99/9999"
                            />
                        </Form.Input>
                        <Form.Input label='Fone Celular' placeholder='' width={4} />
                        <Form.Input label='Fone Fixo' placeholder='' width={4} />
                        <Form.Input label='QTD Entregas Realizadas' placeholder='' width={4} />
                        <Form.Input label='Valor Por Frete' placeholder='' width={4} />
                    </Form.Group>


                    <Form.Group>
                        <Form.Input label='Rua' width={12} />

                        <Form.Input label='Número' width={4} />
                    </Form.Group>


                    <Form.Group>
                        <Form.Input label='Bairro' width={7} />

                        <Form.Input label='Cidade' width={7} />

                        <Form.Input label='CEP' width={2} />
                    </Form.Group>


                    <Form.Group>
                        <Container >
                            <label htmlFor="SelectUF" style={{ fontWeight: 'bold' }}>UF</label><br />
                            <Select label='UF' width={16} fluid labeled='uf' placeholder={'Selecione'} options={[{ key: '1', value: '1', text: '1' }]} id='SelectUF' />
                        </Container>
                    </Form.Group>


                    <Form.Group>
                        <Form.Input label='Complemento' width={16} />
                    </Form.Group>


                    <Form.Group>
                        <Form.Input label='Complemento' width={16} />
                    </Form.Group>

                    <Form.Group>
                        <Container width={10}>
                            <span style={{ fontWeight: 'bold' }}>Ativo: </span>

                            <Radio
                                label='Choose this'
                                name='radioGroup'
                                value='this'
                            />
                            <span style={{marginRight: '30px'}}>   </span>
                            <Radio
                                style={{ maginLeft: '30px' }}
                                label='Or that'
                                name='radioGroup'
                                value='that'
                                floated='right'
                            />
                        </Container>
                    </Form.Group>

                    <Container fluid>
                        <Button content='Listar' icon='reply' labelPosition='left' color='yellow' basic style={{ borderRadius: '999px' }} />

                        <Button content='Salvar' icon='save' labelPosition='left' color='blue' basic circular floated='right' />
                    </Container>
                </Form>
            </Container>
            </div>
        </div>
    )
}
