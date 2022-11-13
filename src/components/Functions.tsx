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
        type === "laher" ?
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


    let returnStringFunc : ()  => string

    let withParameterFunc : (names:string[] , index : number ) => number



    return (
        <div style={{ fontSize: '2rem', marginTop: '2rem' }}>
            Learn Functions
        </div>
    )
}

export default Functions