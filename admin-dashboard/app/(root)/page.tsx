import { Button } from "@/components/ui/button";
import  {UserButton} from "@clerk/nextjs"
const  SetupPage = ()=> {
  return (
<div className="p-4 bg">
   <UserButton afterSignOutUrl="/"/>
</div>
  )
}

export default SetupPage