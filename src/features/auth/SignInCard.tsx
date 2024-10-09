import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const SignInCard = () => {
  return (
  <Card className="w-full h-full p-7 flex flex-col justify-center items-center md:flex-row gap-[30px] md:gap-[100px]">
    <CardHeader>
        <CardTitle>Mirai</CardTitle>
        <CardDescription>Welcome Back! Login to Continue</CardDescription>
    </CardHeader>
    <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
            <Input className="w-[300px]" disabled={false} placeholder="Email" type="email" required={true} value="" onChange={() => {}}/>
        </form>
        <form className="space-y-2.5">
            <Input disabled={false} placeholder="Password" type="password" required={true} value="" onChange={() => {}}/>
        </form>
        <Button type="submit" className="w-full" size="default">Login</Button>
    </CardContent>
  </Card>
  )
}

export default SignInCard