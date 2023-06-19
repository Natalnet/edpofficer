
import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function listar() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch('/api/listusers');
    const data = await res.json();
    console.log("pegou os dados....")
    setState(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h2>Lista de usuários </h2>
      {
        state.map((e) => (
          <a key={e.id}>
            <h3> {e.name}</h3>
            <li>{e.email}</li>
            <li>{e.password}</li>
          </a>
        ))
      }
      <Link href="/">Voltar</Link>
    </div>
    
  )
}