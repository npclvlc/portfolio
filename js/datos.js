// =====================================================
//  AQUÍ CARGÁS TU CONTENIDO. No hace falta tocar nada más.
// =====================================================

const SITIO = {
  nombre: "Tu Nombre",
};

// Cada categoría tiene un color de fondo y el color de su texto.
const CATEGORIAS = [
  { id: "videoclips",    nombre: "videoclips",    color: "#2B3AF0", texto: "#FFFFFF" },
  { id: "flyers",        nombre: "flyers",        color: "#FF5C9E", texto: "#1A1A24" },
  { id: "merchandising", nombre: "merchandising", color: "#D9F24A", texto: "#1A1A24" },
];

// Cada obra: copiá un bloque { ... }, pegalo abajo y cambiá los datos.
//  - id:        nombre corto, sin espacios ni tildes (ej: "clip-banda-x")
//  - categoria: tiene que ser uno de los id de arriba
//  - archivos:  lista de .jpg / .mp4. El PRIMERO se usa como portada.
const OBRAS = [
  {
    id: "videoclip-ejemplo-1",
    categoria: "videoclips",
    titulo: "Videoclip de ejemplo 1",
    cliente: "Nombre del cliente",
    descripcion: "Acá va la descripción del proyecto.",
    archivos: ["media/videoclips/ejemplo-1/01.jpg", "media/videoclips/ejemplo-1/02.jpg"],
  },
  {
    id: "videoclip-ejemplo-2",
    categoria: "videoclips",
    titulo: "Videoclip de ejemplo 2",
    cliente: "Nombre del cliente",
    descripcion: "Acá va la descripción del proyecto.",
    archivos: ["media/videoclips/ejemplo-2/01.jpg", "media/videoclips/ejemplo-2/02.jpg"],
  },
  {
    id: "flyer-ejemplo-1",
    categoria: "flyers",
    titulo: "Flyer de ejemplo 1",
    cliente: "Nombre del cliente",
    descripcion: "Acá va la descripción del proyecto.",
    archivos: ["media/flyers/ejemplo-1/01.jpg", "media/flyers/ejemplo-1/02.jpg"],
  },
  {
    id: "flyer-ejemplo-2",
    categoria: "flyers",
    titulo: "Flyer de ejemplo 2",
    cliente: "Nombre del cliente",
    descripcion: "Acá va la descripción del proyecto.",
    archivos: ["media/flyers/ejemplo-2/01.jpg", "media/flyers/ejemplo-2/02.jpg"],
  },
  {
    id: "merch-ejemplo-1",
    categoria: "merchandising",
    titulo: "Merchandising de ejemplo 1",
    cliente: "Nombre del cliente",
    descripcion: "Acá va la descripción del proyecto.",
    archivos: ["media/merchandising/ejemplo-1/01.jpg", "media/merchandising/ejemplo-1/02.jpg"],
  },
  {
    id: "merch-ejemplo-2",
    categoria: "merchandising",
    titulo: "Merchandising de ejemplo 2",
    cliente: "Nombre del cliente",
    descripcion: "Acá va la descripción del proyecto.",
    archivos: ["media/merchandising/ejemplo-2/01.jpg", "media/merchandising/ejemplo-2/02.jpg"],
  },
];
