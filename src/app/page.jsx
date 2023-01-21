"use client"

// Import module
import Image from 'next/image';
import { useState } from 'react';

// Import media
import profile from '../../public/profile.jpg';

// Main function
export default function Home() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

      <Header />
      <Hero />
      <App />

    </div>
  )
}

// Checkbox class
function Checkbox(props) {
  return (
    <label>
      <input type='checkbox' checked={props.checked} onChange={props.onChange} style={props.style} id={props.id} className='checkbox' />
      {props.label}
    </label>
  );
}

// Dropdown class
function Select(props) {
  const [list, setItems] = useState(props.items)

  return (

    <select className='select' id={props.id} style={props.style} onChange={props.onChange} defaultValue={props.selected}>
    
      <option value="" disabled >{props.placeholder}</option>
      {
        list.map((object, i) => <option value={object} key={i}> {object} </option>)
      }
    </select>

  );
}

// Link
function OpenLink(props){
  return (
    <a href={props.href} target='_blank' style={props.style} rel="noreferrer">
      {props.children}
    </a>
  )
}

// Header
function Header(){
  return (
    <div className='header'>
      Ramadhan&apos;s Portofolio
    </div>
  )
}

// Hero
function Hero(){
  return (
    <div className='hero'>
      <div className='column'>

        <div style={{height: '350px', background: 'white'}} >
          <Image src={profile} width={300} alt='Profile picture'/>
          <div className='info'>Writer</div>
        </div>

          <div style={{ display: 'inline', color: 'white', margin: '1% 5%', textAlign: 'left', fontSize: 'x-large', width: '60%' }}>
            <div>
              Hi! I am <strong>Ramadhan</strong>. 
              A GIScience Enthusiast. Final year cartography and remote sensing undergraduate program student from <OpenLink href='https://kpj.geo.ugm.ac.id/en/halaman-muka-en/' style={{ color: 'white' }}>Universitas Gadjah Mada</OpenLink>.
              Fall 2021, I enrolled in ITC, University of Twente with <OpenLink href='https://iisma.kemdikbud.go.id/info/' style={{ color: 'white' }}>IISMA Scholarship</OpenLink> . 
              I run <OpenLink href='https://www.youtube.com/channel/UCriIjJx7ItREQ3PsCkbwOVg' style={{ color: 'white' }}>Youtube channel</OpenLink> about GIS and remote sensing software tutorial. 
              I like to explore urban remote sensing and coastal & flood risk spatial modelling. 
              I love playing pick-up basketball on weekeend. 
              Indoor, I usually play strategy and simulation video games such as Stellaris and Cities Skylines.
            </div>
            <div style={{ margin: '2% auto 0'}}>

              <OpenLink href='https://www.linkedin.com/in/ramiqcom'>
                <img src='https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-White-Dark-Background-Logo.wine.svg' 
                  style={{height: '10vh'}} 
                  alt='Linkedin'
                />
              </OpenLink>
              
              <OpenLink href='https://www.youtube.com/channel/UCriIjJx7ItREQ3PsCkbwOVg'>
                <img src='https://fdn.gsmarena.com/imgroot/news/21/02/youtube-android-4k-playback-option/-1220x526/gsmarena_000.jpg' 
                  style={{height: '10vh'}} 
                  alt='Youtube'
                />
              </OpenLink>

              <OpenLink href='https://ramiqcom.users.earthengine.app/'>
                <img src='https://paradacreativa.es/wp-content/uploads/2021/08/Que-es-Google-Earth-Engine.jpg' 
                  style={{height: '10vh'}} 
                  alt='Earth Engine'
                />
              </OpenLink>

              <OpenLink href='https://www.instagram.com/ramiqcom/'>
                <img src='https://blog.ipleaders.in/wp-content/uploads/2019/01/Instagram-logo-1011468.jpg' 
                  style={{height: '10vh'}} 
                  alt='Instagram'
                />
              </OpenLink>

              <OpenLink href='https://github.com/ramiqcom'>
                <img src='https://allvectorlogo.com/img/2021/12/github-logo-vector.png' 
                  style={{height: '10vh'}} 
                  alt='GitHub'
                />
              </OpenLink>
             
            </div>      
        </div>

      </div>
    </div>
  )
}

// App section
function App(){
  return (
    <div style={{ padding: '1% 3%' }}>
      
      <div style={{ fontSize: '40px', fontWeight: 'bold' }}>
        Check my app!
      </div>

      <div style={{ margin: '2% auto', width: '100%', display: 'flex'}}>

        <OpenLink href='https://rsqa.ramiqcom.xyz/'>
          <button className='button'>Remote Sensing Quick Analysis <br /> (Earth Engine)</button>
        </OpenLink>

        <OpenLink href='https://rsqa-next.vercel.app/'>
          <button className='button'>Remote Sensing Quick Analysis <br /> (Next JS)</button>
        </OpenLink>

        <OpenLink href='https://webgis-payung.vercel.app/'>
          <button className='button'>WebGIS Desa Payung</button>
        </OpenLink>

        <OpenLink href='https://next-carbon.vercel.app/'>
          <button className='button'>Fairatmos&apos; Carbon Calculator <br /> (JARVIS)</button>
        </OpenLink>
        
        <OpenLink href='https://flood.ramiqcom.xyz/'>
          <button className='button'>Multi Temporal Flood Risk Prediction <br/></button>
        </OpenLink>

      </div>
      
    </div>
  )
}