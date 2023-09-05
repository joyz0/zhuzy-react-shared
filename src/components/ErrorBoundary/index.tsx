import { Component } from 'react'
import type { ErrorInfo, PropsWithChildren } from 'react'
import { projectName } from '../../project'
import './index.css'

type ErrorBoundaryState = {
  componentStack: string
  hasError: boolean
  errorMsg: string
}

class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  state = {
    hasError: false,
    componentStack: '',
    errorMsg: '',
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMsg: error.message }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('ErrorBoundary', error.message, errorInfo.componentStack)
    this.setState({
      componentStack: errorInfo.componentStack,
      errorMsg: error.message,
    })
  }

  render() {
    const { hasError, errorMsg, componentStack } = this.state
    if (hasError) {
      return (
        <div className={`${projectName}-error-boundary`}>
          <h3>{errorMsg}</h3>
          <pre>{componentStack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
