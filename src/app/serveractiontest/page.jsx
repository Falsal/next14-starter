// import { sayHello } from '@/lib/action'

const ServerActionTestPage = () => {

    const actionInComponent = async ()=>{
        "use server"

        console.log("it works ! (inside same test page ) ")
    }
  return (
    <div>
        <form action={actionInComponent}>
            <button>Test me</button>
        </form>
    </div>
  )
}

export default ServerActionTestPage