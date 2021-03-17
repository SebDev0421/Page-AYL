import React ,{useState,useEffect}from 'react'
import molecular from './Images/molecular.png'
import chat from './Images/chat.png'
import idea from './Images/idea.png'
import next from './Images/next.png'
import logo from './Images/logo.png'
import phone from './Images/phone.png'
import pos from './Images/pos.png'
import qualityAir from './Images/qualityAir.jpg'
import qualityWater from './Images/qualityWater.jpg'
import qualityNoise from './Images/qualityNoise.jpg'
import motorVol from './Images/MotorVol.png'

import './App.css';
import Whatsapp from './Components/Whatsapp';
import mapboxgl from 'mapbox-gl';

var index = 1;

function Baner1 () {
  return(
    <div className = "containerBaner1">
        <img src={logo}/>
        <div className = "textContainer">
          <p className = "title">Consultoria ambiental</p>
          <p className = "legend">Brindamos el mejor servicio a nuestros clientes brindando siempre la mejor calidad en el area ambiental</p>
          <div
           className = "button"
          >
            <p>Ver mas</p>
          </div>
        </div>
    </div>
  )
}

function Baner2 () {
  return(
    <div className = "containerBaner1">
      <div className = "textContainer">
        <h1>Equipos y calibradores</h1>
        <p className = "legend">Renta de equipos para mediciones ambientales</p>
        <p className = "legend">Contamos con el equipo que nesecites en tus mediciones de aire,agua y sonido</p>
        <p className = "legend">Calibradores para todos los equipos</p>
        <div
         className = "button"
        >
          <p>Ver mas</p>
        </div>
      </div>
    </div>
  )
}

function Baner3 () {
  return(
    <div className = "containerBaner1">
      <div>
        <h1>Desarrollo e investigacion</h1>
        <p>Consultoria ambiental</p>
        <p>Brindamos el mejor servicio a nuestros clientes brindando siempre la mejor calidad</p>
        <div>
          <p>Ver mas</p>
        </div>
      </div>
    </div>
  )
}

function Baner4 () {
  return(
    <div className = "containerBaner1">
      <div>
        <h1>Negocios</h1>
        <p>Consultoria ambiental</p>
        <p>Brindamos el mejor servicio a nuestros clientes brindando siempre la mejor calidad</p>
        <div>
          <p>Ver mas</p>
        </div>
      </div>
    </div>
  )
}

const center = {
  lat: 4.6683423,
  lng: -74.0664103,
  zoom: 17
};

const locationGet = {
  lat: 4.6684484,
  lng: -74.0662445,
  zoom: 17
};

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Via2lsbGVyMDQyMSIsImEiOiJjanppdmd3cjEwM2pzM2NwcDl5eDhybjkzIn0.gnjw9ThqB1MPnxSYeMXojg';


function App() {

  let [press1,setPress1] = useState(false)
  let [press2,setPress2] = useState(false)
  let [press3,setPress3] = useState(false)
  let [press4,setPress4] = useState(false)
  let [imgShow, setImgShow] = useState("baner1")
  let [banerView,setBanerView] = useState(Baner1)

  useEffect(()=>{


    
    
    setPress1(true)
    setInterval(()=>{
      index ++;
      if(index > 4)
       index = 1
      
       if(index === 1){
        setPress1(true)
        setPress2(false)
        setPress3(false)
        setPress4(false)
        setImgShow("baner1")
        setBanerView(Baner1)
       }
       else if(index === 2){
        setPress1(false)
        setPress2(true)
        setPress3(false)
        setPress4(false)
        setImgShow("baner2")
        setBanerView(Baner2)
       }else if(index === 3){
        setPress1(false)
        setPress2(false)
        setPress3(true)
        setPress4(false)
        setImgShow("baner3")
        setBanerView(Baner3)
       }else{
        setPress1(false)
        setPress2(false)
        setPress3(false)
        setPress4(true)
        setImgShow("baner4")
        setBanerView(Baner4)
       }

    },6000)

    /* const map = new mapboxgl.Map({
      container : "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center : [center.lng,center.lat],
      zoom: center.zoom
  })

  
  var marker = new mapboxgl.Marker()
                    .setLngLat([locationGet.lng,locationGet.lat])
                    .addTo(map); */
  },[])

  return (
    <div className="App">
      <div className = "information">
        <div className = "logo-container">
          <img src={logo}/>
          <div className = "container-text">
            <div className = "phone">
              <img src = {pos}/>
              <div>
                <p>Nuestra ubicacion</p>
                <p>Cra 27a #76-71 Bogotá D.C</p>
              </div>
            </div>
            <div className = "phone">
              
                <img src = {phone}/>
              
              <div>
                <p>Telefono</p>
                <p>(+57)320 4742600</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className = "header">
        <div className = "containerHeader">
          <div className="logoContainer">
            {/* logo here */}
            
          </div>
          <div className = "menuContainer">
            {/* Menu */}
            <p>INICIO</p>
            <p>EMPRESA</p>
            <p>SERVICIOS</p>
            <p>CONTACTO</p>
          </div>
        </div>
      </div>
      <div className = {imgShow}>
        {banerView}
      </div>
     
      <div className = "containerControls">
        <div className = "controlsImage">
          <div
           className = "roundButton"
           style = {press1 ? {backgroundColor:'black'} : {backgroundColor: 'rgba(0,0,0,0)'}}
           onClick = {()=>{
             setPress1(true)
             setPress2(false)
             setPress3(false)
             setPress4(false)
             setImgShow("baner1")
             setBanerView(Baner1)
           }}
          ></div>
          <div
           className = "roundButton"
           style = {press2 ? {backgroundColor:'black'} : {backgroundColor: 'rgba(0,0,0,0)'}}
           onClick = {()=>{
            setPress1(false)
            setPress2(true)
            setPress3(false)
            setPress4(false)
            setImgShow("baner2")
            setBanerView(Baner2)
           }}
          ></div>
          <div
           className = "roundButton"
           style = {press3 ? {backgroundColor:'black'} : {backgroundColor: 'rgba(0,0,0,0)'}}
           onClick = {()=>{
            setPress1(false)
            setPress2(false)
            setPress3(true)
            setPress4(false)
            setImgShow("baner3")
            setBanerView(Baner3)
           }}
           
          
          ></div>
          <div
           className = "roundButton"
           style = {press4 ? {backgroundColor:'black'} : {backgroundColor: 'rgba(0,0,0,0)'}}
           onClick = {()=>{
            setPress1(false)
            setPress2(false)
            setPress3(false)
            setPress4(true)
            setImgShow("baner4")
            setBanerView(Baner4)
           }}
          ></div>
        </div>
        </div>


        <div className = "container-cardServices">
          <div className = "cardServices">
            <img src={molecular}/>
            <h2>Portafolio de  Servicios</h2>
            <p>A&L Consultorias S.A.S le ofrece todos una amplia gama de servicios en ingenieria ambiental y electronica</p>
            <div className = "button-more">
              
              <b>Ver mas</b>
              <img src={next} style = {{width:50,height:50,marginLeft:20}}/>
            </div>
          </div>

          <div className = "cardServices">
            <img src={idea}/>
            <h2>Desarrollo</h2>
            <p>A&L Consultorias S.A.S te ofrece la posibilidad de desarrollar proyectos y soluciones en electronica, software, energias, ambiental</p>
            <div className = "button-more">
              
              <b>Ver mas</b>
              <img src={next} style = {{width:50,height:50,marginLeft:20}}/>
            </div>
          </div>

          <div className = "cardServices">
            <img src={chat}/>
            <h2>Contactanos</h2>
            <p>A&L Consultorias S.A.S estaria feliz de ponernos en contactos e incontrar soluciones juntos</p>
            <div className = "button-more">
              
              <b>Ver mas</b>
              <img src={next} style = {{width:50,height:50,marginLeft:20}}/>
            </div>
          </div>
          
        </div>

        <div
         className = "services-show"
        >
            <div className = "card-show">
              
                <img src = {qualityAir}/>
                <div className = "container-text-card">
                  <h2>Calidad de aire</h2>
                  <p>Tenemos para ofrecerte todo lo que nesecitas para tus muestreos en la calidad de aire</p>
                  <p>Muestreadores PM 2.5</p>
                  <p>Muestreadores PM10 de alto volumen</p>
                  <p>Calibradores PM2.5</p>
                  <p>RACK de gases</p>
                </div>
            </div>

            <div className = "card-show">
              
                <img src={qualityWater} style={{
                  borderRadius:15,width:400,height:150
                }}/>
                <div className = "container-text-card">
                  <h2>Calidad de aguas</h2>
                  <p>Consigue aca el equipo para medir todos los paramtros en calidad de agua</p>
                  <p>HQ40d multiparemtro</p>
                  <p>Caudalimetros</p>
                </div>
            </div>

            <div className = "card-show">
              
                <img src={qualityNoise} style={{
                  borderRadius:15,width:400,height:300
                }}/>
                <div className = "container-text-card">
                  <h2>Calidad de ruido</h2>

                </div>
            </div>

            <div className = "card-show">
              <img src={motorVol  } style={{
                  borderRadius:15,width:400,height:300
                }}/>
                <div className = "container-text-card">
                  <h2>Insumos</h2>
                  <p>Tienes equipos, tambien tenemos insumos a la venta para que puedas tener tus equipos al dia</p>
                  <p>Bombas de vacio</p>
                  <p>Escobillas</p>
                  <p>Plumillas</p>
                  <p>Y mucho mas, conoce nuestro catalogo de insumos</p>
                </div>
            </div>

            <div className = "card-show">
              <div>
                <img/>
                <div>
                  <h2>Mantenimientos</h2>
                </div>
              </div>
            </div>

            <div className = "card-show">
              <div>
                <img/>
                <div>
                  <h2>Desarrollo e investigacion</h2>
                </div>
              </div>
            </div>

        </div>


        {/* <div id = "contact-us">
            <h2>Nuestra sede</h2>
            <div className = "map-container">
            <div className = "descriptionloc">
              <p>Dirección cra 27a # 76 -02 barrio santa sofia</p> 
              <p>Telefono 573787281</p>
              <p>Celular 3227228892</p>
              <p>Correo aylconsultoria@gmail.com</p>
              <div className = "how-arrive"
                   onClick = {()=>{
                       window.open("https://www.google.com/maps/dir//4.6683772,-74.0662615/@4.6681366,-74.0685307,17z/data=!4m2!4m1!3e0?hl=es-419");
                   }}
              >
               <p>Como llegar </p>
               <img src = {pos} style = {{width:30,height:30}}/>
              </div>
            </div>

            <div id = "map" style={{
              width:'40%',height:200,backgroundColor:'#000'
            }}/>
            
            </div>
            </div>
            
            <h1>hola</h1> */}
        
        <Whatsapp/>
        
    </div>
  );
}

export default App;
