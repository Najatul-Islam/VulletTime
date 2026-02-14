
const Container = ({className, children}) => {
  return (
    <div className={` max-w-312.5 p-20 m-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
