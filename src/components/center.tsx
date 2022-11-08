export default function Center({ children, height }) {
  return (
    <div className="flex items-center justify-center" style={{ height }}>
      {children}
    </div>
  )
}
