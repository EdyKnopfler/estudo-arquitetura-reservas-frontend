'use client';

import { SyntheticEvent, useCallback, useState } from "react";

import './login.scss';
import { INVALID_CREDENTIALS } from "../../lib/config";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginResult, setLoginResult] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  const doLogin = useCallback(async (event: SyntheticEvent) => {
    event.preventDefault()

    try {
      const retorno = await signIn(
        'credentials', { email, password, redirect: false })

      if (retorno?.error) {
        if (retorno.error === INVALID_CREDENTIALS) {
          setLoginResult('invalid')
        } else {
          console.error(retorno.error)
          setLoginResult('error')
        }

        return
      }

      router.replace(searchParams.get('callbackUrl') || '/flight-going')
      setLoginResult('')
    } catch (error) {
      console.error(error)
      setLoginResult('error')
    }
  }, [email, password, router, searchParams])

  return (
    <div className="Login">
      <h1>Entre e garanta sua reserva</h1>
      <form className="formDiv" onSubmit={doLogin}>
        {loginResult === 'error' &&
          <p className="loginError">
            Serviço indisponível, aguarde uns instantes e tente novamente.
          </p>
        }
        {loginResult === 'invalid' &&
          <p className="loginError">Dados de login incorretos.</p>
        }
        <label>
          <span>E-mail</span>
          <input type="text" name="email"
            onChange={(e) => setEmail(e.target.value)} /> 
        </label>
        <label>
          <span>Senha</span>
          <input type="password" name="senha"
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div className="buttonsDiv">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}