export const required = (value)=>{
    if (value) return undefined
    return 'field is required'
}
export const lengthCreator=(maxLength)=>(value)=>{
    if (value && value.length > maxLength) return `max lengtn is ${maxLength} symbols`
    return undefined   
}