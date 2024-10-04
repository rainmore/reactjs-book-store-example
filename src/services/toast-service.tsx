import toast from 'react-hot-toast'

export enum ToastType {
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARN = 'WARN',
  SUCCESS = 'SUCCESS',
}

class ToastService {
  toast(msg: string, toastType: ToastType): void {
    // toast.custom((t) => (
    //   <div className={`${this.buildClassName(toastType)}`}>
    //     <button className="delete" onClick={() => toast.dismiss(t.id)}></button>
    //     <div class="block">{msg}</div>
    //   </div>
    // ))

    console.log(this.buildClassName(toastType))
    toast(msg, {
      duration: 400000,
      position: 'top-center',
      className: this.buildClassName(toastType),
    })
  }

  private buildClassName(toastType: ToastType): string {
    const className = ['notification!']
    switch (toastType) {
      case ToastType.ERROR:
        className.push('is-danger!')
        break
      case ToastType.SUCCESS:
        className.push('is-success!')
        break
      case ToastType.WARN:
        className.push('is-warning!')
        break
      case ToastType.INFO:
        // do nothing
        break
    }
    return className.join(' ')
  }

  success(msg: string): void {
    // toast.success(msg)
    this.toast(msg, ToastType.SUCCESS)
  }

  info(msg: string): void {
    // toast(msg)
    this.toast(msg, ToastType.INFO)
  }

  error(msg: string): void {
    // toast.error(msg)
    this.toast(msg, ToastType.ERROR)
  }

  warn(msg: string): void {
    // toast(msg)
    this.toast(msg, ToastType.WARN)
  }
}

export const toastService = new ToastService()
