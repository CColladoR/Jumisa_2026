import React from 'react';
import { Factory, Award, Truck, ExternalLink, MapPin } from 'lucide-react';
import { INTEREST_LINKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Elegant brick pattern background */}
        <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea580c'%3E%3Cpath d='M0 0h28v13H0V0zm30 0h28v13H30V0zM0 15h13v13H0V15zm15 0h28v13H15V15zm30 0h13v13H45V15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
        </div>
        
        {/* Radial gradient overlay to soften edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Construyendo Futuro <br/>
            <span className="text-orange-500">Ladrillo a Ladrillo</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Fabricación y comercialización de productos cerámicos de alta calidad desde Toledo para el mundo.
          </p>
        </div>
      </section>

      {/* Intro & Plants Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 relative inline-block">
              Nuestros Centros Productivos
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform translate-y-2"></span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-4xl mx-auto">
              En nuestros dos centros productivos situados en <strong>Yuncler (Jumisa 1)</strong> y <strong>Pantoja (Jumisa 2)</strong>, 
              ambos en la provincia de Toledo, fabricamos y comercializamos productos cerámicos para la construcción, 
              siempre comprometidos con la calidad, tanto en lo que se refiere a la fabricación, 
              como en todo lo relacionado con la atención a nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
             {/* Plant 1 */}
            <div className="bg-slate-50 rounded-xl p-8 border-l-8 border-orange-600 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
               <div className="flex-grow">
                   <div className="flex items-center mb-4">
                     <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <Factory className="text-orange-600 w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-800">Jumisa 1</h3>
                   </div>
                   <p className="text-slate-600 mb-2 font-semibold">Yuncler, Toledo</p>
                   <p className="text-slate-500 mb-6">
                     Sede central y planta de producción especializada. Innovación constante en procesos de cocción y moldeado.
                   </p>
               </div>
               
               {/* Map Embed Plant 1 */}
               <div className="mt-auto rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <iframe 
                    width="100%" 
                    height="250" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=40.037467,-3.903191&hl=es&z=15&output=embed"
                    title="Mapa Jumisa 1"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  <a 
                    href="https://www.google.com/maps/place/Ju%C3%A1rez+y+Millas,+S.A.+-+Jumisa+1/@40.037467,-3.903191,15z/data=!4m6!3m5!1s0xd41fb2a669553c9:0xde8fa97edd675b52!8m2!3d40.0374665!4d-3.9031913!16s%2Fg%2F1tdzbqny?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-orange-600 font-semibold text-sm hover:bg-orange-50 transition-colors border-t border-slate-100"
                  >
                    <MapPin size={16} />
                    Ver ubicación en Google Maps
                  </a>
               </div>
            </div>

            {/* Plant 2 */}
            <div className="bg-slate-50 rounded-xl p-8 border-l-8 border-slate-700 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
               <div className="flex-grow">
                   <div className="flex items-center mb-4">
                     <div className="bg-slate-200 p-3 rounded-full mr-4">
                        <Factory className="text-slate-700 w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-800">Jumisa 2</h3>
                   </div>
                   <p className="text-slate-600 mb-2 font-semibold">Pantoja, Toledo</p>
                   <p className="text-slate-500 mb-6">
                     Centro productivo de alta capacidad. Ampliación de nuestra capacidad logística y de stock.
                   </p>
               </div>

               {/* Map Embed Plant 2 */}
               <div className="mt-auto rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <iframe 
                    width="100%" 
                    height="250" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=40.032586,-3.832228&hl=es&z=15&output=embed"
                    title="Mapa Jumisa 2"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  <a 
                    href="https://www.google.com/maps?ll=40.032586,-3.832228&z=15&t=m&hl=es&gl=ES&mapclient=embed&cid=11848613382607353349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors border-t border-slate-100"
                  >
                    <MapPin size={16} />
                    Ver ubicación en Google Maps
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                 <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                 <h3 className="text-xl font-bold mb-2">Calidad Certificada</h3>
                 <p className="text-slate-600">Cumplimos con todas las normativas europeas (CE) para garantizar la seguridad de su obra.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                 <Truck className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                 <h3 className="text-xl font-bold mb-2">Logística Eficiente</h3>
                 <p className="text-slate-600">Distribución rápida desde el centro de la península a cualquier punto.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                 <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-orange-100 rounded-full text-orange-600 text-xl font-bold">CE</div>
                 <h3 className="text-xl font-bold mb-2">Marcado CE</h3>
                 <p className="text-slate-600">Todos nuestros productos cuentan con la declaración de prestaciones correspondiente.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Interest Links Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Enlaces de Interés</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INTEREST_LINKS.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-orange-500 hover:shadow-md transition-all group"
                  >
                     <span className="font-semibold text-slate-700 group-hover:text-orange-700 transition-colors">{link.name}</span>
                     <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
                  </a>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;