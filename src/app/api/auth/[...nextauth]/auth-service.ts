'use server';

import { JsonWebTokenError, verify } from 'jsonwebtoken';
import { BACKEND_URL } from "../../../../lib/config";

export type LoginResposta = {
  id: string;
  name: string; 
  email: string; 
  token: string;
 }

export async function autenticarNoBackend(
  email: string, senha: string): Promise<LoginResposta | null> {

  const resposta = await fetch(
    `${BACKEND_URL}/usuarios/autenticar`,
    {
      cache: 'no-store',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    }
  )

  if (resposta.status === 200) {
    const conteudo = await resposta.json()
    console.log('resposta do backend', conteudo)

    try {
      const payload = <any>verify(
        conteudo.token, process.env.NEXTAUTH_SECRET!)
      console.log('obtemos', payload)
      return {
        id: payload.id,
        name: payload.nome,
        email: payload.email,
        token: conteudo.token,
      }
    } catch (erro) {
      if (erro instanceof JsonWebTokenError) {
        return null
      }
      throw erro
    }
  }

  return null
}
