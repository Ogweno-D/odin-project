import React from 'react'

const Greetings = () => {
    //React App Example 
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
    
    const chemists = people.filter( person=> person.profession ==='chemist' )

    const listItems = chemists.map( person => 
        <li key={person.id}>

        <p>
        <b> {person.name} </b>
        { '' + person.profession  +  ''} 
        known for {person.profession}
        </p>
        </li>
        
        )



    // List rendering for Animals.
    // const animal = ['Lion', "Cow", "Snake"];
    // const animalList =animal.map((animal)=> <li key={animal}>{animal}</li> ) 
  return (

    <div className='text-3xl flex flex-col justify-center items-center py-4 p-2'>


    <ul>
        {listItems}
    </ul>



        {/* <div>
            <h1>Animals: </h1>

            <ul>
                {animalList}
            </ul>
       </div>
 */}

    </div>
  )
}

export default Greetings