import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { SignInFlow } from "../types"
import { useState } from "react"

interface SignUpCardProps {
  setState: (state: SignInFlow) => void
}

const SignUpCard = ({setState}: SignUpCardProps) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
  <Card className="w-full h-full p-7 flex flex-col justify-center items-center lg:flex-row gap-[30px] lg:gap-[100px]">
    <CardHeader>
        <CardTitle>Mirai</CardTitle>
        <CardDescription>Welcome Back! Login to Continue</CardDescription>
    </CardHeader>
    <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
            <Input className="w-[300px] lg:w-full" disabled={false} placeholder="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        </form>
        <form className="space-y-2.5">
            <Input disabled={false} placeholder="Password" type="password" className="w-full" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </form>
        <form className="space-y-2.5">
            <Input disabled={false} placeholder="Confirm Password" type="password" className="w-full" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </form>
        <Button type="submit" className="w-full" size="default">Sign Up</Button>
        <Separator/>
        <div className="flex flex-col lg:flex-row gap-[20px]">
          <Button className="w-full space-x-2" disabled={false} onChange={() => {}} variant="outline"><FcGoogle/> <p>Continue With Google</p></Button>
          <Button className="w-full space-x-2" disabled={false} onChange={() => {}} variant="outline"><FaGithub/> <p>Continue With GitHub</p></Button>
        </div>
        <p className="text-muted-foreground">
          Already have an account <span onClick={() => setState("signIn")} className="hover:text-sky-600 hover:underline cursor-pointer">Sign In</span>?
        </p>
    </CardContent>
  </Card>
  )
}

export default SignUpCard