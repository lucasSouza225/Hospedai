import React from 'react'

const Login = () => {
    return (
        <section className='flex items-center'>

            <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 p-8" >

                <h1 className="text-3xl font-bold">Faça seu login</h1>

                <form className="flex w-full max-w-96 flex-col gap-3" >

                    <input type="email" placeholder="Digite seu e-mail" className='w-full rounded-full border border-gray-300 px-4 py-2' />
                    <input type="password" placeholder="Digite sua senha" className='w-full rounded-full border border-gray-300 px-4 py-2'/>

                    <button type="submit"className="bg-primary-400 rounded-full text-white px-4 py-2 "
                    >
                        Login
                    </button>
                </form>

                <p>Ainda não tem uma conta?
                </p>
            </div>
        </section>
    )
}

export default Login