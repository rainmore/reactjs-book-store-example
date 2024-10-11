import { toast, ToastOptions } from 'react-toastify'

enum ToastType {
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARN = 'WARN',
  SUCCESS = 'SUCCESS',
}

class ToastService {
  success(msg: string): void {
    toast.success(msg, this.getDefaultOptions(ToastType.SUCCESS))
  }

  info(msg: string): void {
    toast.info(msg, this.getDefaultOptions(ToastType.INFO))
  }

  error(msg: string): void {
    toast.error(msg, this.getDefaultOptions(ToastType.ERROR))
  }

  warn(msg: string): void {
    toast.warn(msg, this.getDefaultOptions(ToastType.WARN))
  }

  private getDefaultOptions(toastType: ToastType): ToastOptions {
    return {
      position: 'bottom-right',
    }
  }
}

export const toastService = new ToastService()
