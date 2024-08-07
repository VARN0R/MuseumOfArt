export default interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
