import toast, { ToastBar, Toaster } from 'react-hot-toast'
import { ToastType } from '../services/toast-service'

const ToastNotification: React.FC = () => {
  const buildClassName = (toastType: ToastType): string => {
    const className = ['notification']
    switch (toastType) {
      case ToastType.ERROR:
        className.push('is-danger')
        break
      case ToastType.SUCCESS:
        className.push('is-success')
        break
      case ToastType.WARN:
        className.push('is-warning')
        break
      case ToastType.INFO:
        // do nothing
        break
    }
    return className.join(' ')
  }

  return (
    <Toaster position="bottom-right" reverseOrder={false} gutter={8}>
      {(t) => (
        <ToastBar toast={t}>
          {({ message }) => (
            <div className={t.className}>
              {message} &nbsp;
              {t.type !== 'loading' && <button className="delete" onClick={() => toast.dismiss(t.id)} />}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  )
}

export default ToastNotification
