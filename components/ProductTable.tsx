import React from 'react';
import { ProductCategory } from '../types';

interface Props {
  category: ProductCategory;
}

const ProductTable: React.FC<Props> = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-12">
      <div className="bg-slate-50 px-6 py-4 border-b border-orange-200 flex items-center justify-between">
        <div className="flex items-center">
            <div className="w-2 h-8 bg-orange-600 mr-3 rounded-sm"></div>
            <div>
            <h2 className="text-2xl font-bold text-slate-800">{category.title}</h2>
            {category.description && (
                <p className="text-slate-500 text-sm mt-1">{category.description}</p>
            )}
            </div>
        </div>
      </div>
      
      <div className="flex flex-col xl:flex-row">
          <div className="flex-grow overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white text-sm uppercase tracking-wider">
                  {category.columns.map((col, idx) => (
                    <th key={idx} className="px-6 py-3 border-r border-slate-700 last:border-0 font-semibold">
                      {col.header}
                      {col.subHeader && <span className="block text-xs text-orange-300 normal-case mt-1">{col.subHeader}</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {category.data.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-orange-50 transition-colors even:bg-slate-50">
                    {category.columns.map((col, colIdx) => (
                      <td key={colIdx} className={`px-6 py-4 text-sm text-slate-700 border-r border-slate-100 last:border-0 ${colIdx === 0 ? 'font-medium text-slate-900' : ''}`}>
                        {row[col.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Image Section */}
          {category.imageUrl && (
              <div className="xl:w-1/3 min-w-[300px] bg-slate-50 p-6 flex items-center justify-center border-t xl:border-t-0 xl:border-l border-slate-200">
                  <div className="relative group">
                     <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 rounded-full filter blur-xl transition-opacity duration-500"></div>
                     <img 
                        src={category.imageUrl} 
                        alt={category.title} 
                        className="relative z-10 max-h-64 w-auto object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500" 
                     />
                  </div>
              </div>
          )}
      </div>
    </div>
  );
};

export default ProductTable;