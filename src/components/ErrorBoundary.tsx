import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error('App Error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
          <h1 className="text-xl font-semibold text-slate-800 mb-2">加载出错</h1>
          <p className="text-slate-600 text-center mb-4 max-w-sm">
            若使用 Safari 隐私模式，请关闭后重试。数据需在普通模式下才能保存。
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-bjj-primary text-white rounded-lg"
          >
            刷新页面
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
