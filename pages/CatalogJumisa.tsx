import React from 'react';
import { JUMISA_CATALOG, CATALOG_DOWNLOADS } from '../constants';
import ProductTable from '../components/ProductTable';
import { Download } from 'lucide-react';

const CatalogJumisa: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center">
          <div className="text-center max-w-3xl">
             <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Catálogo de Productos</span>
             <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Gama Jumisa</h1>
             <p className="text-slate-600 text-lg mb-8">
                Soluciones tradicionales y eficientes. Ladrillos cerámicos, huecos, rasillones y machihembrados fabricados con la mejor arcilla de la Sagra.
             </p>
             
             {/* Download Button */}
             <a 
              href={CATALOG_DOWNLOADS.jumisa} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200"
             >
               <Download size={20} />
               Descargar Catálogo PDF
             </a>
          </div>
        </div>

        <div className="space-y-8">
          {JUMISA_CATALOG.map((category, idx) => (
            <ProductTable key={idx} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogJumisa;