import React from "react";
import Link from "next/link";
import Base from "@layouts/Baseof";
import theme from "@config/theme.json";
import Image from "next/image";

const Sobre = () => {
  return (
    <Base>
      <section className="">
        <div className="container">
          <div className="flex justify-center">
            <Image
              src="/images/about.svg"
              width="700"
              height="200"
              alt="imageabout"
              className="max-w-full h-auto"
              priority="true"
            />
          </div>
          <div className="mt-10 lg:mt-0 mb-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              <h1 className="h1 text-left lg:text-[55px]">Sobre nós</h1>
                  <p className="text-justify mb-5 text-lg font-400 text-dark dark:text-darkmode-light">
                    Na edpOfficer, entendemos os desafios que a sua empresa
                    enfrenta para se manter em conformidade com as rigorosas
                    exigências legais da LGPD. É por isso que estamos aqui para
                    simplificar esse processo para você. Nossa missão é ajudá-lo
                    a navegar pelo universo da proteção de dados de forma
                    eficiente e segura, para que você possa se concentrar no que
                    realmente importa: o crescimento e o sucesso do seu negócio.
                    Nossos especialistas altamente qualificados são apaixonados
                    por proteger a privacidade dos seus clientes e garantir que
                    suas operações estejam em total conformidade com as leis de
                    proteção de dados. O que nos destaca é o nosso compromisso
                    em entender a singularidade da sua empresa. Não acreditamos
                    em soluções genéricas, pois sabemos que cada negócio possui
                    necessidades específicas. Ao escolher a edpOfficer, você
                    terá um atendimento personalizado, orientado para as suas
                    demandas e o tamanho do seu empreendimento. Nossa abordagem
                    é transparente, e trabalhamos em estreita colaboração com
                    você para garantir que todas as etapas da conformidade sejam
                    compreendidas e implementadas de forma eficaz. Desde a
                    análise inicial das práticas de proteção de dados da sua
                    empresa até a elaboração de políticas sob medida, oferecemos
                    soluções abrangentes que asseguram a conformidade contínua e
                    a tranquilidade de saber que seus dados estão em mãos
                    seguras. Confie na edpOfficer para lidar com a complexidade
                    da LGPD, enquanto você se concentra no que faz de melhor:
                    fazer o seu negócio prosperar. Entre em contato conosco hoje
                    mesmo e descubra como podemos ajudá-lo a garantir a proteção
                    dos seus dados e o sucesso contínuo da sua empresa.
                  </p>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Sobre;
