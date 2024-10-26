import { toast, ToastOptions } from 'react-toastify'

class ToastService {

  private config: ToastOptions = {
    position: 'bottom-right',
  }

  success(msg: string): void {
    toast.success(msg, this.config)
  }

  info(msg: string): void {
    toast.info(msg, this.config)
  }

  error(msg: string): void {
    toast.error(msg, this.config)
  }

  warn(msg: string): void {
    toast.warn(msg, this.config)
  }

}

export const toastService = new ToastService()
