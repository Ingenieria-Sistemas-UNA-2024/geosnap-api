import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mountain } from 'lucide-react';
import { RefAttributes, useRef } from "react";

export default function Login({ onLogin }: { onLogin: (email:string, password:string) => void }) {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLogin = () => {
    if(emailRef.current && emailRef.current.value != "" && passwordRef.current && passwordRef.current.value != ""){
      onLogin(emailRef.current.value, passwordRef.current.value)
    }else{
      alert("Todos los espacios son obligatorios")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <Mountain className="h-8 w-8 text-[#693CA5]" />
            <h2 className="text-2xl font-bold tracking-tight">Geo-Snap</h2>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="m@example.com" required ref={emailRef}/>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
            </div>
            <Input id="password" type="password" required ref={passwordRef}/>
          </div>
          <Button type="submit" className="w-full bg-[#693CA5] text-white hover:bg-[#5a3185] focus:ring-[#693CA5]" onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </div>
      </div>
    </div>
  )
}