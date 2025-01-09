import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { InfoGroup, Row } from './style'

export const Chekout = () => {
  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InfoGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" id="fullName" />
            </InfoGroup>
            <InfoGroup>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </InfoGroup>
            <InfoGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </InfoGroup>
          </Row>
          <h3>Dados de entrega - conteúdo digital</h3>
          <Row>
            <InfoGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="email" id="deliveryEmail" />
            </InfoGroup>
            <InfoGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input type="email" id="confirmDeliveryEmail" />
            </InfoGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <p>
            Ao optar por essa forma de pagamento, é importante lembrar que a
            confirmação pode levar até 3 dias úteis, devido aos prazos
            estabelecidos pelas instituições financeiras. Portanto, a liberação
            do código de ativação do jogo adquirido ocorrerá somente após a
            aprovação do pagamento do boleto.
          </p>
        </div>
      </Card>

      <Button title="finalizar compra" type="button">
        Finalizar Compra
      </Button>
    </div>
  )
}
