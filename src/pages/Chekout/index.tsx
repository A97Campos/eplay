import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { InfoGroup, Row, TabButton } from './style'

import boletoImg from '../../assets/images/barcode.png'
import cardImg from '../../assets/images/credit-card.png'
import { useState } from 'react'

export const Chekout = () => {
  const [payWithCard, setPayWithCard] = useState(true)
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
        <>
          <div>
            <TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
            >
              <img src={boletoImg} alt="Boleto bancário" />
              Boleto bancário
            </TabButton>
            <TabButton
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
            >
              <img src={cardImg} alt="Cartão de crédito" />
              Cartão de crédito
            </TabButton>
          </div>
          {payWithCard ? (
            <div>
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            </div>
          ) : (
            <>
              <Row>
                <InfoGroup>
                  <label htmlFor="cardOwner">Nome do titular do cartão</label>
                  <input type="text" id="cardOwner" />
                </InfoGroup>
                <InfoGroup>
                  <label htmlFor="cpfCardOwner">Cpf do titular do cartão</label>
                  <input type="text" id="cpfCardOwner" />
                </InfoGroup>
              </Row>
              <Row marginTop="16px">
                <InfoGroup>
                  <label htmlFor="cardDisplayName">Nome do cartão</label>
                  <input type="text" id="cardDisplayName" />
                </InfoGroup>
                <InfoGroup>
                  <label htmlFor="">Numero do cartão</label>
                  <input type="text" id="cardNumber" />
                </InfoGroup>
                <InfoGroup maxWidth="123px">
                  <label htmlFor="expiresMonth">Mês do vencimento</label>
                  <input type="text" id="expiresMonth" />
                </InfoGroup>
                <InfoGroup maxWidth="123px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input type="text" id="expiresYear" />
                </InfoGroup>
                <InfoGroup maxWidth="48px">
                  <label htmlFor="cardCode">CVV</label>
                  <input type="text" id="cardCode" />
                </InfoGroup>
              </Row>
              <Row>
                <InfoGroup maxWidth="116px">
                  <label htmlFor="installments">Parcelamento</label>
                  <select id="installments">
                    <option>1x de R$ 200</option>
                    <option>2x de R$ 200</option>
                    <option>3x de R$ 200</option>
                  </select>
                </InfoGroup>
              </Row>
            </>
          )}
        </>
      </Card>

      <Button title="finalizar compra" type="button">
        Finalizar Compra
      </Button>
    </div>
  )
}
