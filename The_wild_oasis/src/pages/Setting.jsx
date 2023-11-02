import UpdateSettingsForm from "../features/settings/UpdateSettingsForm"
import { useSetting } from "../features/settings/useSettings"
import Spinner from "../ui/Spinner"

const Setting = () => {
  const {data , isLoading , error } = useSetting()
  
  if(isLoading) {
    return <Spinner/>
  }
  if(error) {
    return <div> some thing went wrong !</div>
  }
  return (
    <> 
    <h1>Update Hotel Settings</h1>
     <UpdateSettingsForm data = {data}/>
    </>
  )
}

export default Setting