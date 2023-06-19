import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function cadastro() {

   const [formData, setFormData] = useState({
        nome:'',
        email:'',
        password:''
    })

   const [error, setError] = useState('')
    const router = useRouter()

    const handleFormEdit = (event,name ) => {
        setFormData({
            ...formData,
            [name]:event.target.value
        })
    }

    const handleForm = async (event)=> {
        try {
            event.preventDefault()
            console.log("entrando no handleForm..."+JSON.stringify(formData))
            const response = await fetch('/api/adduser', {
                method:'POST',
                body: JSON.stringify(formData),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            router.push('/')
        }catch(err){
            setError(err.message)
        }
        
    }

  
  return (
    <div>
      <h2>Cadastrar usuario</h2>
      <form onSubmit={handleForm} >
        <input type="text" placeholder="Seu nome..." required value={formData.nome} onChange={(e)=>{handleFormEdit(e,'nome')}}></input>
        <input type="email" placeholder="Seu e-mail..." required value={formData.email}  onChange={(e)=>{handleFormEdit(e,'email')}}></input>
        <input type="password" placeholder="Sua senha..." required value={formData.password}  onChange={(e)=>{handleFormEdit(e,'password')}}></input>
        <button>Cadastrar</button>
         {error && <p>{error}</p>}
      </form>
      <Link href="/listar">Listar</Link>
    </div>
  )
}