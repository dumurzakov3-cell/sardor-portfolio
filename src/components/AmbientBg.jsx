export default function AmbientBg() {
  return (
    <>
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0 rounded-full"
        style={{
          width: 'min(600px, 90vw)',
          height: 'min(600px, 90vw)',
          background: 'rgba(255, 101, 0, 0.10)',
          filter: 'blur(110px)',
        }}
      />
      <div
        className="fixed right-0 pointer-events-none z-0 rounded-full"
        style={{
          top: '66%',
          width: 'min(480px, 70vw)',
          height: 'min(480px, 70vw)',
          background: 'rgba(41, 72, 109, 0.20)',
          filter: 'blur(100px)',
        }}
      />
    </>
  )
}
