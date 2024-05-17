import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {

  const data = [
    {image: "https://upload.wikimedia.org/wikipedia/en/2/2b/Imagine_Dragons_-_%22Demons%22_%28Official_Single_Cover%29.jpg", name: "Demons", artist: "Imagine Dragons", added: false},
    {image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Mockingbird_%28Eminem_song%29_cover.jpg", name: "Mockingbird", artist: "Eminem", added: false},
    {image: "https://upload.wikimedia.org/wikipedia/en/3/34/Avicii_Nights_Artwork.png", name: "The Nights", artist: "Avicii", added: false},
    {image: "https://upload.wikimedia.org/wikipedia/en/d/da/Avicii_Wake_Me_Up_Official_Single_Cover.png", name: "Wake me up", artist: "Avicii", added: false}
  ]

  const [songData, setSongData] = useState(data);

  const addToFavourite = (songIndex)=> {
    setSongData((prev)=>{
      return prev.map((item, index)=>{
        if(index == songIndex){
           return {...item, added: !item.added}
        }

        return item
      })
    })

  }

  return (
    <div className='w-full h-screen bg-zinc-300'>
      <Navbar data={songData} />
      <div className='px-20 flex flex-wrap gap-10 mt-10'>
      {songData.map((item, index)=>(
          <Card key={index} clickHandler = {addToFavourite} index = {index} image={item.image} name={item.name} artist={item.artist} added={item.added}/>
      ))}
      </div>
    </div>
  )
}

export default App
