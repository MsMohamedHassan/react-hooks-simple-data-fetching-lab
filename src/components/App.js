// create your App component here
import { React, useState, useEffect} from "react"

function App(){
    const [randomDogImage, setRandomDogImage] = useState(false)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => setRandomDogImage(data.message), console.log(randomDogImage))
    
}, [])

return <div>
   {(!randomDogImage) ? <p>Loading...</p>:<img src={randomDogImage} alt="A Random Dog"></img>}    
</div>
}

export default App