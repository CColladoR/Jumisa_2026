import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-10 pb-6 border-t-8 border-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-slate-300 mb-2 max-w-xs">
              Fabricantes de productos cerámicos para la construcción comprometidos con la calidad.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  {COMPANY_INFO.address}<br/>
                  {COMPANY_INFO.zipCity}
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-slate-300 hover:text-white transition">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white transition">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
             <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2 inline-block">Síguenos</h3>
             <a 
                href={COMPANY_INFO.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center text-slate-300 hover:text-orange-400 transition group"
             >
               <div className="bg-slate-800 p-2 rounded-full group-hover:bg-slate-700 transition mr-3">
                 <Instagram size={24} />
               </div>
               <span>@juarezymillas</span>
             </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;