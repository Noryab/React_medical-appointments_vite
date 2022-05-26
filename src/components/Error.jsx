const Error = ({message}) => {
  return (
    <div className='text-center font-bold text-white mb-3 rounded-md p-3 uppercase bg-red-400 text-xs'>
        <p>{message}</p>
    </div> 
  )
}

export default Error