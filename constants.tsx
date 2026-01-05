import React from 'react';
import { ProductCategory, CompanyInfo } from './types';
import { BrickWall, Layers, box, Grid, Square } from 'lucide-react';

export const COMPANY_INFO: CompanyInfo = {
  name: "Juárez y Millas, S.A.",
  address: "Ctra. de la Estación, s/n",
  zipCity: "45529 Yuncler (Toledo)",
  phone: "925 531 000",
  email: "jumisa@jumisa.es",
  instagram: "https://www.instagram.com/juarezymillas/",
  logoUrl: "https://raw.githubusercontent.com/CColladoR/Jumisa_Recursos/refs/heads/main/Nuevo%20Logo%20Jumisa.jpg"
};

export const INTEREST_LINKS = [
  { name: "Tabicesa", url: "https://www.tabicesa.es/" },
  { name: "Hispalyt", url: "https://www.hispalyt.es/es" },
  { name: "Consorcio de Termoarcilla", url: "https://www.termoarcilla.com/" },
  { name: "Venta de parcelas", url: "https://www.luzyvolumen.com/" },
];

// --- JUMISA DATA ---

export const JUMISA_CATALOG: ProductCategory[] = [
  {
    title: "Ladrillos Cerámicos",
    description: "Ladrillos de alta calidad para cerramientos y estructuras.",
    imageUrl: "https://raw.githubusercontent.com/CColladoR/Jumisa_Recursos/main/Ceramico-10.png",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso unitario (kg)", accessor: "weight" },
      { header: "Ud. Paquete (Madera)", accessor: "u_wood" },
      { header: "Ud. Paquete (Plastif.)", accessor: "u_plast" },
      { header: "Peso Paquete (Madera)", accessor: "w_wood" },
      { header: "Peso Paquete (Plastif.)", accessor: "w_plast" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Cerámico de 7", dims: "240x115x68", weight: 1.66, u_wood: 416, u_plast: 448, w_wood: 691, w_plast: 744, u_m2: "1 pie: 100 / ½ pie: 50" },
      { name: "Cerámico de 7 S1", dims: "240x107x68", weight: 1.47, u_wood: 468, u_plast: "-", w_wood: 688, w_plast: "-", u_m2: "1 pie: 104 / ½ pie: 50" },
      { name: "Cerámico de 10", dims: "240x115x98", weight: 2.35, u_wood: 288, u_plast: 308, w_wood: 677, w_plast: 724, u_m2: "1 pie: 72 / ½ pie: 36" },
      { name: "Cerámico de 10 S1", dims: "240x107x98", weight: 2.09, u_wood: 324, u_plast: "-", w_wood: 677, w_plast: "-", u_m2: "1 pie: 76 / ½ pie: 36" },
    ]
  },
  {
    title: "Ladrillos Huecos",
    description: "Soluciones ligeras y resistentes.",
    imageUrl: "https://raw.githubusercontent.com/CColladoR/Jumisa_Recursos/main/Hueco-doble.png",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso unitario (kg)", accessor: "weight" },
      { header: "Ud. Paquete (Madera)", accessor: "u_wood" },
      { header: "Peso Paquete (Madera)", accessor: "w_wood" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Hueco doble", dims: "245x115x78", weight: 1.8, u_wood: 384, w_wood: 691, u_m2: 35 },
    ]
  },
  {
    title: "Rasillones",
    description: "Elementos planos de gran formato.",
    imageUrl: "https://raw.githubusercontent.com/CColladoR/Jumisa_Recursos/main/Rasillones.png",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso unitario (kg)", accessor: "weight" },
      { header: "Ud. por paquete", accessor: "u_packet" },
      { header: "Peso por paquete (kg)", accessor: "w_packet" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Rasillón 40x20x4", dims: "400x200x40", weight: 2.6, u_packet: 250, w_packet: 650, u_m2: 12.5 },
      { name: "Rasillón 50x20x4", dims: "500x200x40", weight: 3.2, u_packet: 250, w_packet: 800, u_m2: 10 },
      { name: "Rasillón 40x20x7", dims: "395x185x65", weight: 3.6, u_packet: 150, w_packet: 540, u_m2: 13.7 },
      { name: "Rasillón 50x20x7", dims: "495x185x65", weight: 4.45, u_packet: 150, w_packet: 668, u_m2: 11 },
    ]
  },
  {
    title: "Machihembrados",
    description: "Tableros cerámicos para cubiertas.",
    imageUrl: "https://raw.githubusercontent.com/CColladoR/Jumisa_Recursos/main/Tableros-machihembrados.png",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso unitario (kg)", accessor: "weight" },
      { header: "Ud. por paquete", accessor: "u_packet" },
      { header: "Peso por paquete (kg)", accessor: "w_packet" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Machihembrado 70x20x3,5", dims: "700x200x35", weight: 4.35, u_packet: 140, w_packet: 609, u_m2: 7.1 },
      { name: "Machihembrado 80x25x4", dims: "800x250x40", weight: 6.7, u_packet: 100, w_packet: 670, u_m2: 5 },
      { name: "Machihembrado 100x25x4", dims: "1000x250x40", weight: 8.4, u_packet: 96, w_packet: 806, u_m2: 4 },
    ]
  }
];

// --- TABICESA DATA ---

export const TABICESA_CATALOG: ProductCategory[] = [
  {
    title: "Ladrillos Huecos (Tabicesa)",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso (kg)", accessor: "weight" },
      { header: "Uds/Palet (Madera)", accessor: "u_wood" },
      { header: "Peso Palet (Madera)", accessor: "w_wood" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Ladrillo hueco doble", dims: "240x112x80", weight: 1.85, u_wood: 384, w_wood: 710, u_m2: 32 },
      { name: "Ladrillo hueco triple Andalucía", dims: "234x100x100", weight: 2.00, u_wood: 344, w_wood: 688, u_m2: "½ pie: 35 / 1 pie: 76" },
    ]
  },
  {
    title: "Ladrillos Perforados",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso (kg)", accessor: "weight" },
      { header: "Uds/Palet (Plastif.)", accessor: "u_plast" },
      { header: "Peso Palet (Plastif.)", accessor: "w_plast" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Ladrillo cerámico de 10", dims: "235x109x97", weight: 2.00, u_plast: 288, w_plast: 576, u_m2: "½ pie: 36 / 1 pie: 72" },
      { name: "Ladrillo cerámico de 10 Andalucía", dims: "224x103x97", weight: 1.80, u_plast: 324, w_plast: 583, u_m2: "½ pie: 39 / 1 pie: 78" },
    ]
  },
  {
    title: "Termoarcilla® de 14",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso (kg)", accessor: "weight" },
      { header: "Unidades por palet", accessor: "u_pallet" },
      { header: "Peso por palet (Kg.)", accessor: "w_pallet" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Pieza base", dims: "300x190x144", weight: 7.15, u_pallet: 90, w_pallet: 644, u_m2: 16.6 },
      { name: "Terminación", dims: "300x190x144", weight: 7.50, u_pallet: 90, w_pallet: 650, u_m2: "-" },
      { name: "Media", dims: "150x190x144", weight: 4.20, u_pallet: 180, w_pallet: 660, u_m2: "-" },
      { name: "Esquina de 14/29", dims: "309x190x144", weight: 8.20, u_pallet: 90, w_pallet: 820, u_m2: "-" },
      { name: "Modulación de 14/29", dims: "100/50x190x144", weight: 8.20, u_pallet: "180/90", w_pallet: 650, u_m2: "-" },
    ]
  },
  {
    title: "Termoarcilla® de 19",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso (kg)", accessor: "weight" },
      { header: "Unidades por palet", accessor: "u_pallet" },
      { header: "Peso por palet (Kg.)", accessor: "w_pallet" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Pieza base", dims: "300x190x192", weight: 8.8, u_pallet: 75, w_pallet: 660, u_m2: 16.6 },
      { name: "Terminación", dims: "300x190x192", weight: 9.30, u_pallet: 75, w_pallet: 720, u_m2: "-" },
      { name: "Media", dims: "150x190x192", weight: 5.10, u_pallet: 150, w_pallet: 750, u_m2: "-" },
      { name: "Esquina", dims: "357x190x192", weight: 11.10, u_pallet: 75, w_pallet: 900, u_m2: "-" },
      { name: "Modulación", dims: "100/50x190x192", weight: 10.10, u_pallet: "150/75", w_pallet: 730, u_m2: "-" },
    ]
  },
  {
    title: "Termoarcilla® de 24",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso (kg)", accessor: "weight" },
      { header: "Unidades por palet", accessor: "u_pallet" },
      { header: "Peso por palet (Kg.)", accessor: "w_pallet" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Pieza base", dims: "300x190x240", weight: 11.05, u_pallet: 60, w_pallet: 663, u_m2: 16.6 },
      { name: "Terminación", dims: "300x190x240", weight: 12.40, u_pallet: 60, w_pallet: 720, u_m2: "-" },
      { name: "Media", dims: "150x190x240", weight: 6.60, u_pallet: 120, w_pallet: 700, u_m2: "-" },
      { name: "Esquina", dims: "405x190x240", weight: 15.10, u_pallet: 40, w_pallet: 635, u_m2: "-" },
      { name: "Modulación", dims: "100/50x190x240", weight: 13.60, u_pallet: "120/60", w_pallet: 780, u_m2: "-" },
    ]
  },
  {
    title: "Termoarcilla® de 29",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso (kg)", accessor: "weight" },
      { header: "Unidades por palet", accessor: "u_pallet" },
      { header: "Peso por palet (Kg.)", accessor: "w_pallet" },
      { header: "Ud/m² de muro", accessor: "u_m2" },
    ],
    data: [
      { name: "Pieza base", dims: "300x190x288", weight: 12.9, u_pallet: 45, w_pallet: 581, u_m2: 16.6 },
      { name: "Terminación", dims: "300x190x288", weight: 13.90, u_pallet: 45, w_pallet: 665, u_m2: "-" },
      { name: "Media", dims: "150x190x288", weight: 7.80, u_pallet: 90, w_pallet: 670, u_m2: "-" },
      { name: "Esquina de 14/29", dims: "309x190x144", weight: 8.20, u_pallet: 90, w_pallet: 820, u_m2: "-" },
      { name: "Modulación de 14/29", dims: "100/50x190x144", weight: 8.20, u_pallet: "180/90", w_pallet: 650, u_m2: "-" },
    ]
  },
  {
    title: "Termoarcilla® - Piezas de chapado",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso unitario (kg)", accessor: "weight" },
      { header: "Unidades por palet", accessor: "u_pallet" },
      { header: "Peso por palet (Kg.)", accessor: "w_pallet" },
    ],
    data: [
      { name: "Alto 19 - espesor 6", dims: "300x190x60", weight: 4.00, u_pallet: 180, w_pallet: 720 },
      { name: "Alto 19 - espesor 10", dims: "300x190x97", weight: 5.15, u_pallet: 135, w_pallet: 695 },
    ]
  },
  {
    title: "Termoarcilla® - Zunchos",
    columns: [
      { header: "Nombre de la pieza", accessor: "name" },
      { header: "Dimensiones (mm)", accessor: "dims" },
      { header: "Peso unitario (kg)", accessor: "weight" },
      { header: "Unidades por palet", accessor: "u_pallet" },
      { header: "Peso por palet (Kg.)", accessor: "w_pallet" },
    ],
    data: [
      { name: "Zuncho de 10", dims: "190x190x97", weight: 3.00, u_pallet: 200, w_pallet: 560 },
      { name: "Zuncho de 14", dims: "190x190x144", weight: 4.40, u_pallet: 150, w_pallet: 495 },
      { name: "Zuncho de 19", dims: "190x190x192", weight: 6.20, u_pallet: 100, w_pallet: 600 },
      { name: "Zuncho de 24", dims: "190x190x240", weight: 6.40, u_pallet: 100, w_pallet: 600 },
      { name: "Zuncho de 29", dims: "190x190x288", weight: 6.70, u_pallet: 75, w_pallet: 550 },
    ]
  }
];