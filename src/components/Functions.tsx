import React from 'react'

const Functions = () => {


    // required arguments

    const singTwo = (sing: string, song: string) => {
        return sing + " " + song
    }


    // console.log(singTwo("new" , "saddy")) //WORK ok 
    // console.log(singTwo("new and saddy")) //WORK not ok 

    // Optional paranament
    const announceSong = (song: string, singer?: string) => {
        return song + " " + singer

    }
    console.log(announceSong("new")) //WORK ok 
    console.log(announceSong("new", undefined)) //WORK ok 


    // default value in parameter 

    const defaultSong = (song: string, rating = 0) => {
        return `${song}/${rating}`
    }

    console.log(defaultSong("laher", 12))

    // Reset Paramenters

    const RestParameter = (type: string, ...names: string[]) => {
        for (const song of names) {
            console.log(`${song}, by ${type}`);
        }
    }

    console.log(RestParameter("data", "laher", "asif", "new", "helllw"))




    const checkCond = (type: string, index: number) => {
        return type === "laher" ?
            index
            : undefined
    }


    // function explicit return type 

    const add = (first: number | string, second: number | string): number | string => {
        if (typeof first === "number" && typeof second === "number") {
            return first + second
        }
        else {
            return first + " " + second
        }
    }

    //   console.log(add(30, 20))

    // rturn undefinded value 
    const addUndefine = (first: number | string, second: number | string): number | undefined => {
        if (typeof first === "number" && typeof second === "number") {
            return first + second
        }
        else {
            return undefined
        }
    }

    // Functions types 

    let returnStringFunc: () => string

    let withParameterFunc: (names: string[], index: number) => number

    withParameterFunc = (songs, i) => {
        return 2
    }

    returnStringFunc = () => {
        return "my name is laher asif "
    }



    //    function return using alies 

    type var1 = (abc: number) => string

    const myFunc = (var2: var1) => {
        console.log(var2(1234))
    }

    myFunc((abc) => "laherasif")


    // Overrides functions with litterlas

    // const func1 = (name: string, address: string , nameData: "name" | "laher") => {
    //     console.log(name + "" + address)
    // }
    // const func1 = (name: string, address: string, phone: number) => {
    //     console.log(name + "" + address + "" + phone)

    // }
    // const func1 = (name: string, address: string, lastname: string, midname: string) => {
    //     console.log(name + "" + address + "" + lastname + "" + midname)
    // }

    // func1("lahera" , "check no 67 j.b sadhar" , "name")


    return (
        <div style={{ fontSize: '2rem', marginTop: '2rem' }}>
            Learn Functions
        </div>
    )
}

export default Functions