// Este archivo arma las páginas usando js/datos.js. No hace falta editarlo.

const params = new URLSearchParams(location.search);
const main = document.getElementById("contenido");

// ---------- Herramientas básicas ----------
const buscar = (lista, id) => lista.find((x) => x.id === id);
const obrasDe = (categoria) => OBRAS.filter((o) => o.categoria === categoria.id);

function el(etiqueta, clase, contenido) {
  const nodo = document.createElement(etiqueta);
  if (clase) nodo.className = clase;
  if (contenido !== undefined) nodo.textContent = contenido;
  return nodo;
}

function enlace(destino, clase, contenido) {
  const a = el("a", clase, contenido);
  a.href = destino;
  return a;
}

function aplicarColor(nodo, categoria) {
  nodo.style.setProperty("--color", categoria.color);
  nodo.style.setProperty("--texto", categoria.texto);
}

// Muestra una imagen (.jpg) o un video (.mp4) según la extensión.
function crearMedia(archivo, completo = false) {
  if (archivo.toLowerCase().endsWith(".mp4")) {
    const video = el("video");
    video.src = completo ? archivo : archivo + "#t=0.5";
    video.playsInline = true;
    video.preload = "metadata";
    video.controls = completo;
    video.muted = !completo;
    return video;
  }
  const img = el("img");
  img.src = archivo;
  img.alt = "";
  img.loading = "lazy";
  return img;
}

// ---------- Piezas que se repiten en varias páginas ----------
function tarjeta(obra) {
  const a = enlace(`obra.html?id=${obra.id}`, "tarjeta");
  a.append(crearMedia(obra.archivos[0]), el("span", "tarjeta-titulo", obra.titulo));
  return a;
}

function rejilla(obras) {
  const div = el("div", "rejilla");
  obras.forEach((o) => div.append(tarjeta(o)));
  return div;
}

function noEncontrado() {
  main.append(el("p", "aviso", "No encontramos esta página. Volvé al inicio desde el menú."));
}

function pintarCabecera() {
  const cabecera = document.getElementById("cabecera");
  const menu = el("nav");
  CATEGORIAS.forEach((c) => menu.append(enlace(`categoria.html?c=${c.id}`, "", c.nombre)));
  cabecera.append(enlace("index.html", "logo", SITIO.nombre), menu);
}

// ---------- Las 3 páginas ----------
function paginaInicio() {
  document.title = SITIO.nombre;
  CATEGORIAS.forEach((categoria) => {
    const banda = el("section", "banda");
    aplicarColor(banda, categoria);
    banda.append(
      enlace(`categoria.html?c=${categoria.id}`, "banda-titulo", categoria.nombre),
      rejilla(obrasDe(categoria).slice(0, 4))
    );
    main.append(banda);
  });
}

function paginaCategoria() {
  const categoria = buscar(CATEGORIAS, params.get("c"));
  if (!categoria) return noEncontrado();
  document.title = `${categoria.nombre} – ${SITIO.nombre}`;

  const encabezado = el("section", "encabezado");
  aplicarColor(encabezado, categoria);
  encabezado.append(el("h1", "titulo-pagina", categoria.nombre));

  const obras = el("section", "contenido-pagina");
  obras.append(rejilla(obrasDe(categoria)));
  main.append(encabezado, obras);
}

function paginaObra() {
  const obra = buscar(OBRAS, params.get("id"));
  if (!obra) return noEncontrado();
  const categoria = buscar(CATEGORIAS, obra.categoria);
  document.title = `${obra.titulo} – ${SITIO.nombre}`;

  const encabezado = el("section", "encabezado");
  aplicarColor(encabezado, categoria);
  const ficha = el("dl");
  ficha.append(el("dt", "", "Cliente"), el("dd", "", obra.cliente));
  encabezado.append(
    enlace(`categoria.html?c=${categoria.id}`, "volver", `Volver a ${categoria.nombre}`),
    el("h1", "titulo-pagina", obra.titulo),
    ficha,
    el("p", "descripcion", obra.descripcion)
  );

  const galeria = el("section", "galeria");
  obra.archivos.forEach((archivo) => galeria.append(crearMedia(archivo, true)));
  main.append(encabezado, galeria);
}

// ---------- Arranque ----------
const paginas = { inicio: paginaInicio, categoria: paginaCategoria, obra: paginaObra };
pintarCabecera();
paginas[document.body.dataset.pagina]();
