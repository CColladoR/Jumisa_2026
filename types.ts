import React from 'react';

export interface TableColumn {
  header: string;
  accessor: string;
  subHeader?: string; // For grouped columns like "Ud. por paquete" -> "Madera" | "Plastificado"
}

export interface ProductRow {
  [key: string]: string | number;
}

export interface ProductCategory {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  columns: TableColumn[];
  data: ProductRow[];
}

export interface CompanyInfo {
  name: string;
  address: string;
  zipCity: string;
  phone: string;
  email: string;
  instagram: string;
  logoUrl: string;
}