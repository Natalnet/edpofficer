import React from "react";
import Link from "next/link";
import Base from "@layouts/Baseof";
import Image from "next/image"; 
import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

const Contato = () => {
  return (
    <Base>
    <section className="section lg:mt-16">
      <div className="container">
        <div className="row relative pb-16">
          <div className="lg:col-6">
            <h1 className="h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]" >Entre em contato para tirar dúvidas e conhecer mais sobre o nosso trabalho.</h1> 
          </div>
          <div className="contact-form-wrapper rounded border border-border p-6 dark:border-darkmode-border lg:col-6">
            <h2>
              Envie-nos uma
              <span className="ml-1.5 inline-flex items-center text-primary">
                mensagem
                <BsArrowRightShort />
              </span>
            </h2>
            <form
              className="contact-form mt-12"
              method="POST"
              action={"form_action"}
            >
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="name">
                  Nome Completo
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  type="text"
                  placeholder="Insira seu nome completo"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="email">
                  Email
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="subject">
                  Assunto
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="message">
                  Insira sua mensagem aqui
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <textarea
                  className="form-textarea w-full"
                  placeholder=""
                  rows="7"
                />
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Enviar"
              />
            </form>
          </div>
        </div>
        <div className="row">
            <div className="md:col-6 lg:col-4">
              <Link
                href={`tel:${"+211234565523"}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaUserAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {"+211234565523"}
                </p>
              </Link>
            </div>
            <div className="md:col-6 lg:col-4">
              <Link
                href={`mailto:${"edpofficer23@gmail.com"}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaEnvelope />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {"edpofficer23@gmail.com"}
                </p>
              </Link>
            </div>
            <div className="md:col-6 lg:col-4">
              <span
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaMapMarkerAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {"UFRN, Campus Universitário Natal, RN   Brasil"}
                </p>
              </span>
            </div>
        </div>
      </div>
      </section>
    </Base>
  );
};

export default Contato;
