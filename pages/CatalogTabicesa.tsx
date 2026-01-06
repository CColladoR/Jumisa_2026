import React from 'react';
import { TABICESA_CATALOG, CATALOG_DOWNLOADS } from '../constants';
import ProductTable from '../components/ProductTable';
import { Download } from 'lucide-react';

const CatalogTabicesa: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Grupo Jumisa</span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Gama Tabicesa</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Especialistas en Termoarcilla® y ladrillos perforados. Aislamiento térmico y acústico superior para la edificación moderna.
          </p>

          {/* Download Button */}
          <a 
            href={CATALOG_DOWNLOADS.tabicesa} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
          >
            <Download size={20} />
            Descargar Catálogo PDF
          </a>
        </div>

        <div className="space-y-8">
          {TABICESA_CATALOG.map((category, idx) => (
            <ProductTable key={idx} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogTabicesa;