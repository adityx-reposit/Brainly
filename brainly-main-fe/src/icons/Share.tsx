
interface ShareIconProps{
  size:"sm"|"md"|"lg"

}

const sizeVariant={
  "sm":"size-2 ml-2",
  "md":"size-4 ml-3",
  "lg":"size-4 ml-4"
}
const ShareIcon=(props:ShareIconProps)=>{
    return(
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={sizeVariant[props.size]}>
    <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
  </svg>
    )
}