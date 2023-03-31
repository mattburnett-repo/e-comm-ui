function ErrorFallback({ error }: any) {
  //   return <div>This is a stub for the ErrorFallback element. </div>

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>Error: {error}</pre>
    </div>
  )
}

export default ErrorFallback
