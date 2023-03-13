import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const goHome = () => {
    const navigate = useNavigate()
    navigate('/')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="大哥，页面不存在"
      extra={
        <Button onClick={goHome} type="primary">
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
