import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Обновляем состояние, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Можно также  логировать ошибку в сервис отчетов об ошибках.
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      // Можно отрендерить любой запасной UI
      return <h1>Something went wrong.</h1>;
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

export default ErrorBoundary;
