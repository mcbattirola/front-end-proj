import React, { Component } from "react";

class ExtraInformation extends Component {
  render() {
    return (
      <div className="proposta-de-valor">
        <div className="container-fluid">
          <div className="boxes">
            <div className="box-proposta">
              <p className="title">
                E se algo <span>der errado</span>?
              </p>
              <p className="desc">
                Oferecemos garantia contra danos para você ter certeza que está
                seguro.
              </p>
              <a href="./garantia/">Saiba mais</a>
            </div>
            <div className="divisor-box" />
            <div className="box-proposta">
              <div className="header-proposta-box">
                <p className="title">
                  Profissionais <span>verificados</span>
                </p>
              </div>
              <p className="desc">
                Verificamos <strong>antecedentes criminais</strong>, referências
                profissionais e muito mais.
              </p>
              <a href="./profissionais-verificados/">Saiba mais</a>
            </div>
            <div className="divisor-box" />
            <div className="box-proposta">
              <div className="header-proposta-box">
                <p className="title">
                  Pagamento <span>na plataforma</span>
                </p>
              </div>
              <p className="desc">
                Pague em até 6x no seu cartão de crédito direto no app ou no
                site.
              </p>
              <a href="./pagamento/">Saiba mais</a>
            </div>
            <div className="divisor-box" />
            <div className="box-proposta">
              <div className="header-proposta-box">
                <p className="title">
                  Central de <span>ajuda</span>
                </p>
              </div>
              <p className="desc">
                Te ajudamos antes, durante ou depois do seu pedido, 24 horas por
                dia
              </p>
              <a href="./pagamento/">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraInformation;
