import { useEffect, useState } from 'react'
import { axios } from '@/utils'
import { useAuth } from '@/hooks/useAuth'

const Dashboard = () => {
  const [data, setData] = useState([])
  const auth = useAuth()
  useEffect(() => {
    axios.get('/funnycoder').then((res) => {})
  }, [])
  return (
    <div>
      <h1>{auth.user.email}</h1>
    </div>
  )
}
export default Dashboard
