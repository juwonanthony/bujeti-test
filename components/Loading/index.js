import React from 'react'
import { Spin } from 'antd'
import cs from 'classnames'
import { LoadingOutlined } from '@ant-design/icons'

const Loading = ({ size = 55, color = '#BFFF0B', isPage, className }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size, color }} spin />

  return (
    <div
      className={cs(
        'flex items-center justify-center',
        {
          ['isPage']: isPage,
        },
        { [className]: className }
      )}
    >
      <Spin indicator={antIcon} />
    </div>
  )
}
export default Loading
