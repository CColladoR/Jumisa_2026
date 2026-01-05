import React from 'react';
import { TABICESA_CATALOG } from '../constants';
import ProductTable from '../components/ProductTable';

const CatalogTabicesa: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Grupo Jumisa</span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Gama Tabicesa</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Especialistas en Termoarcilla® y ladrillos perforados. Aislamiento térmico y acústico superior para la edificación moderna.
          </p>
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