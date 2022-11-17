import React, { useState } from 'react'



const ArrayTopic = () => {
  const [data, setData] = useState<string[] | number[]>([])


  // function with return string array 

  let FucArr: () => string[]

  FucArr = () => {
    return ["laher ", "asif"]
  }


  //  return array type function 


  // let FuncArr : (()=>string)[]


  // Error 
  //   let add_Func: ((a: number, b: number) => number)[]
  // Variable 'add_Func' is used before being assigned.

  let add_Func: ((a: number, b: number) => number)[] = []
  let add = (a: number, b: number) => a + b
  add_Func.push(add)


  // Multi dimentional array 

  let Ar: number[][]

  Ar = [
    [2, 4, 5, 6],
    [3, 5, 7, 9]
  ]

  // spread and rest array 

  // spread

  let city: string[]
  city = ["fsd", "lhr", "mlt"]
  let country: string[]
  country = ["pk", 'sudia', "turkey"]
  let sp =  [...city , ...country]
  console.log("spread " , sp )


  // rest operator 

  let func = ( ...a:number[]) => {
    return a 
  }
  func(1, 2, 4, 5, 6, 7)
  return (
    <div>ArrayTopic</div>
  )
}

export default ArrayTopic