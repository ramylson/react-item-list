import React from 'react';

const Item = ({ titulo, descricao, estoque, endereco_img }) => {
  return (
    <div className='produto'>
      <h2>{titulo}</h2>
      <img className='img-produto' src={endereco_img} alt={titulo} />
      <p>{descricao}</p>
      <button>Ver detalhes</button>
      <p>Em estoque: {estoque}</p>

    </div>
  );
};

export default Item;