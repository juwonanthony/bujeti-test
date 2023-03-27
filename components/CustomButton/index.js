import { Button } from 'react-bootstrap'
import cs from 'classnames'

const CustomButton = ({ withoutBg = false, className, fullWidth = false, children, ...props }) => {
  return (
    <Button
      className={cs(
        withoutBg ? 'customButtonWithoutBg' : 'customButton',
        { [className]: className },
        { ['width-full']: fullWidth }
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
export default CustomButton
