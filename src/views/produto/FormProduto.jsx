import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";

export default function Produto() {
    return (
        <div>
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2><span style={{ color: 'darkgray' }}>Produto  <Icon name="angle double right"></Icon></span> Cadastro</h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group>
                                <Form.Input label='Título' placeholder='Informe o título do produto' width={10} fluid required />

                                <Form.Input label='Código do Produto' placeholder='Informe o código do produto' width={6} fluid required />
                            </Form.Group>

                            <Form.Group>
                                <Form.TextArea label='Descrição' placeholder='Informe a descrição do produto' width={16} fluid />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input label='Valor Unitário' width={6} fluid required />

                                <Form.Input label='Tempo de Entrege Máximo em Minutos' width={5} fluid />

                                <Form.Input label='Tempo de Entrege Mínimo em Minutos' width={5} fluid />

                            </Form.Group>
                        </Form>
                    </div>

                    <Container fluid>
                        <Button content='Listar' icon='reply' labelPosition='left' color='yellow' basic style={{ borderRadius: '999px' }} />

                        <Button content='Salvar' icon='save' labelPosition='left' color='blue' basic circular floated='right'/>
                    </Container>

                </Container>
            </div>
        </div>
    )
}
