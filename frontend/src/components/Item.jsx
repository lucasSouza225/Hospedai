import React from "react";
import foto01 from "../assets/foto01.jpg";

const Item = () => {
  return (
    <a 
      href="/" 
      className="group flex flex-col gap-3 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={foto01}
          alt="Imagem da acomodação"
          className="aspect-square w-full object-cover group-hover:scale-102 transition-transform duration-300"
        />
      </div>

      <div className="px-1 pb-2">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Cabo Frio, Rio de Janeiro</h3>
          <p className="text-gray-600 line-clamp-3 leading-relaxed">
            Cobertura, duplex, em frente a praia das Dunas, Cabo Frio. As três
            suítes com ar condicionado. TV na suíte master e sala, com sky na
            sala. Cozinha equipada. Wi-fi de 120mbs da Vivo Fibra. Piscina e
            churrasqueira privativas. Estacionamento para dois carros dentro do
            prédio. Com uma área externa com vista panorâmica da praia das Dunas.
            O espaço Cobertura duplex em frente a praia das Dunas, em Cabo Frio. O
            apartamento conta com três suítes e mais um banheiro social, piscina e
            churrasqueira privativas, com uma área externa com vista panorâmica da
            praia das Dunas. Bairro calmo. Na rua lateral você encontra uma
            padaria que oferece café da manhã e alguns restaurantes. 3-5min da
            Praia do Forte (indo de carro). Cobertura fica no 4º andar.
          </p>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <p className="text-lg">
            <span className="font-bold text-gray-900">R$ 550</span>
            <span className="text-gray-600 ml-1">por noite</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default Item;