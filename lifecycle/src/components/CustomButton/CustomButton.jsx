import { useEffect } from "react"

const CustomButton=({buttonTitle,onClick})=>{

useEffect(()=>{
console.log('ekrana Geldi')

return()=>{
    console.log('Ekrandan gitti',buttonTitle)
}

},[])

    return(<button onClick={onClick}>{buttonTitle}</button>)
}

export default CustomButton