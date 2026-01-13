import React from 'react'

const Item = () => {
  return (
    <a href='/' className='flex flex-col gap-3'>
        <img src="https://images.pexels.com/photos/4916534/pexels-photo-4916534.jpeg" alt="Imagem da acomaodaçao" className='aspect-square object-cover rounded-2xl' />
        <div>
            <h3 className='text-xl font-semibold'>Cabo frio, Rio de Janeiro</h3>
            <p className='truncate text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, commodi exercitationem explicabo aliquam ipsa, consequuntur quas esse necessitatibus dolorem expedita possimus blanditiis itaque ipsam assumenda eaque, vero magnam recusandae?</p>
            <p>
                <span className='font-bold'>R$ 550,00</span> por noite
            </p>
        </div>
    </a>

  )
}

export default Item