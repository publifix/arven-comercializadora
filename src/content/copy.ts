/**
 * Textos finales de la landing, literales del documento
 * docs/ARVEN Comercializadora — Textos de la landing page.docx
 * Los datos entre corchetes vienen de src/config/site.ts.
 */
import { site, fullAddress } from '../config/site';

const s = site.stats;

export const nav = {
  links: [
    { label: 'Productos', href: '#productos' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Industrias', href: '#industrias' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],
  cta: 'Solicitar cotización',
};

export const hero = {
  eyebrow: 'PROVEEDOR INDUSTRIAL EN QUERÉTARO',
  title: 'Suministro industrial que mantiene tu planta en marcha',
  subtitle:
    'Abastecemos a la industria y a corporativos con equipo de protección personal, calzado de seguridad, uniformes, herramienta y consumibles. Un solo proveedor, entregas a tiempo y control total de tus compras.',
  primary: 'Solicitar cotización',
  secondary: 'Conocer productos',
};

export const trust = [
  { icon: 'CalendarCheck', value: `+${s.years} años`, label: 'de experiencia en suministro industrial' },
  { icon: 'PackageSearch', value: `+${s.products} productos`, label: 'disponibles en catálogo' },
  { icon: 'Truck', value: `${s.deliveryHours} h`, label: 'tiempo de entrega en Querétaro y zona metropolitana' },
  { icon: 'UserCheck', value: '1 ejecutivo', label: 'asignado a cada cuenta' },
];

export const products = {
  eyebrow: 'PRODUCTOS',
  title: 'Un catálogo pensado para la operación industrial',
  intro:
    'Desde el equipo que protege a tu personal hasta los consumibles que mantienen tus líneas activas. Seleccionamos marcas confiables y productos que cumplen con la normatividad mexicana.',
  items: [
    {
      icon: 'HardHat',
      title: 'Equipo de protección personal',
      text: 'Cascos, lentes, guantes, protección auditiva y respiratoria, chalecos de alta visibilidad y arneses. Cumplimiento con NOM-017-STPS.',
      need: 'EPP',
    },
    {
      icon: 'Footprints',
      title: 'Calzado de seguridad',
      text: 'Botas y zapatos dieléctricos, con casquillo, antiderrapantes e impermeables para cada tipo de riesgo.',
      need: 'Calzado',
    },
    {
      icon: 'Shirt',
      title: 'Uniformes industriales',
      text: 'Camisolas, pantalones, overoles, chamarras y playeras tipo polo, con bordado o estampado de tu logo.',
      need: 'Uniformes',
    },
    {
      icon: 'Wrench',
      title: 'Herramienta',
      text: 'Herramienta manual y eléctrica, medición y accesorios para mantenimiento y producción.',
      need: 'Herramienta',
    },
    {
      icon: 'Cog',
      title: 'Consumibles industriales',
      text: 'Abrasivos, cintas, adhesivos, lubricantes, tornillería y artículos de soldadura.',
      need: 'Consumibles',
    },
    {
      icon: 'SprayCan',
      title: 'Limpieza e higiene',
      text: 'Químicos, papel, jarciaría y dispensadores para planta, oficinas y comedores.',
      need: 'Limpieza',
    },
    {
      icon: 'Package',
      title: 'Empaque y embalaje',
      text: 'Cajas, película estirable, flejes, etiquetas y tarimas.',
      need: 'Empaque',
    },
    {
      icon: 'BriefcaseBusiness',
      title: 'Oficina y corporativo',
      text: 'Papelería, consumibles de impresión, mobiliario y cafetería para áreas administrativas.',
      need: 'Oficina',
    },
  ],
  note: '¿No encuentras lo que buscas? Conseguimos productos especiales y compras únicas bajo pedido.',
  cta: 'Cotizar productos',
};

export const solutions = {
  eyebrow: 'SOLUCIONES',
  title: 'Más que un proveedor, un sistema de abastecimiento',
  intro:
    'Diseñamos la forma de surtir tu planta para que compres menos veces, con menos trámites y sin quedarte sin inventario.',
  items: [
    {
      icon: 'UsersRound',
      title: 'Kits por puesto de trabajo',
      text: 'Definimos junto con tu área de seguridad el EPP, el calzado y el uniforme de cada puesto. Cada ingreso o reposición se surte completo, con una sola orden.',
    },
    {
      icon: 'CalendarClock',
      title: 'Reabastecimiento programado',
      text: 'Establecemos mínimos y máximos de tus consumibles críticos y te surtimos con entregas calendarizadas, antes de que se agoten.',
    },
    {
      icon: 'Layers',
      title: 'Compras consolidadas',
      text: 'Concentra en ARVEN varias categorías y proveedores. Recibe una sola factura y un solo punto de contacto.',
    },
    {
      icon: 'Ruler',
      title: 'Uniformes corporativos personalizados',
      text: 'Diseño, tallaje del personal, bordado o estampado y entrega por colaborador.',
    },
    {
      icon: 'Search',
      title: 'Compras especiales',
      text: 'Localizamos productos fuera de catálogo, refacciones o marcas específicas que tu operación requiera.',
    },
    {
      icon: 'ChartColumn',
      title: 'Reportes de consumo',
      text: 'Te entregamos el detalle de lo que consume cada área o centro de costos para controlar tu presupuesto.',
    },
  ],
  cta: 'Diseñar mi programa de abastecimiento',
};

export const industries = {
  eyebrow: 'INDUSTRIAS',
  title: 'Conocemos el ritmo de tu industria',
  intro:
    'Atendemos plantas y corporativos en Querétaro y el Bajío, con productos y tiempos adaptados a cada sector.',
  items: [
    { title: 'Automotriz y autopartes', text: 'EPP y consumibles para líneas de producción de alto ritmo.' },
    { title: 'Aeroespacial', text: 'Insumos con trazabilidad para procesos de alta precisión.' },
    { title: 'Alimentos y bebidas', text: 'Uniformes, higiene y protección que cumplen normas sanitarias.' },
    { title: 'Manufactura y metalmecánica', text: 'Herramienta, abrasivos y protección para trabajo pesado.' },
    { title: 'Logística y almacenes', text: 'Alta visibilidad, calzado y empaque para centros de distribución.' },
    { title: 'Construcción y mantenimiento', text: 'Equipo para trabajos en altura, obra y mantenimiento industrial.' },
    { title: 'Corporativos y oficinas', text: 'Papelería, limpieza y uniformes para áreas administrativas.' },
  ],
};

export const why = {
  eyebrow: 'POR QUÉ ARVEN',
  title: 'Compras más simples, operación sin interrupciones',
  items: [
    { icon: 'Boxes', title: 'Un solo proveedor', text: 'Concentra EPP, uniformes, herramienta y consumibles en una sola relación comercial.' },
    { icon: 'Clock', title: 'Entregas puntuales', text: 'Cumplimos fechas y entregamos directamente en tu planta o almacén.' },
    { icon: 'Headset', title: 'Ejecutivo asignado', text: 'Una persona que conoce tu cuenta y responde rápido.' },
    { icon: 'BadgeCheck', title: 'Calidad certificada', text: 'Productos de marcas reconocidas que cumplen con las NOM aplicables.' },
    { icon: 'Tags', title: 'Precios competitivos', text: 'Condiciones por volumen y convenios anuales de precio.' },
    { icon: 'FileCheck', title: 'Administración en regla', text: 'Cotizaciones formales, facturación CFDI 4.0, alta como proveedor y crédito empresarial.' },
  ],
  closing: 'Tú te enfocas en producir. Nosotros nos encargamos de que nada te falte.',
};

export const process = {
  eyebrow: 'CÓMO TRABAJAMOS',
  title: 'De tu requerimiento a tu planta en 4 pasos',
  steps: [
    { title: 'Cuéntanos qué necesitas.', text: 'Envíanos tu lista, requisición o el perfil de tus puestos de trabajo.' },
    {
      title: 'Recibe tu cotización.',
      text: `Te enviamos una propuesta formal con precios, tiempos de entrega y alternativas, en menos de ${s.quoteHours} horas hábiles.`,
    },
    {
      title: 'Surtimos y entregamos.',
      text: 'Preparamos tu pedido y lo entregamos en tu planta, almacén u oficina en la fecha acordada.',
    },
    {
      title: 'Damos seguimiento.',
      text: 'Tu ejecutivo confirma la entrega, atiende cambios o garantías y te avisa cuando toca reabastecer.',
    },
  ],
  cta: 'Iniciar mi cotización',
};

export const about = {
  eyebrow: 'NOSOTROS',
  title: 'El aliado de abastecimiento de la industria queretana',
  text: 'ARVEN Comercializadora es una empresa de Querétaro especializada en el suministro de insumos para la industria y corporativos. Combinamos un catálogo integral con procesos de compra modernos para que nuestros clientes tengan lo que necesitan, cuando lo necesitan. Nuestro compromiso es simple: que la operación de tu planta nunca se detenga por falta de suministro.',
  mission:
    'Abastecer a la industria y a los corporativos con insumos confiables, entregas puntuales y un servicio cercano, para que cada cliente opere de forma segura y continua.',
  vision:
    'Ser la comercializadora industrial de referencia en el Bajío, reconocida por su eficiencia, su cumplimiento y su capacidad de anticiparse a las necesidades de cada planta.',
  values: [
    { title: 'Cumplimiento', text: 'Lo que prometemos, lo entregamos a tiempo y completo.' },
    { title: 'Seguridad', text: 'Cada producto que vendemos protege a quien lo usa.' },
    { title: 'Honestidad', text: 'Precios claros, información transparente y facturación en regla.' },
    { title: 'Servicio', text: 'Respondemos rápido y damos seguimiento hasta resolver.' },
    { title: 'Mejora continua', text: 'Buscamos siempre una forma más eficiente de abastecer.' },
  ],
};

export const purchaseTypes = ['Compra única', 'Compra recurrente', 'Programa de abastecimiento'] as const;

export const ctaBand = {
  title: '¿Listo para simplificar el abastecimiento de tu planta?',
  text: `Envíanos tu requerimiento y recibe una cotización formal en menos de ${s.quoteHours} horas hábiles.`,
  primary: 'Solicitar cotización',
  secondary: 'Escribir por WhatsApp',
};

export const contact = {
  eyebrow: 'CONTACTO',
  title: 'Solicita tu cotización',
  text: 'Completa el formulario y un ejecutivo de ARVEN se pondrá en contacto contigo. Si ya tienes una lista o requisición, adjúntala.',
  needs: ['EPP', 'Calzado', 'Uniformes', 'Herramienta', 'Consumibles', 'Limpieza', 'Empaque', 'Oficina', 'Otro'],
  submit: 'Enviar solicitud',
  success: `Gracias, recibimos tu solicitud. Un ejecutivo de ARVEN te contactará en menos de ${s.quoteHours} horas hábiles.`,
  error: 'No pudimos enviar tu solicitud. Revisa los campos marcados o escríbenos por WhatsApp.',
  details: [
    { icon: 'Phone', label: 'Teléfono', value: site.contact.phoneDisplay, kind: 'tel' },
    { icon: 'MessageCircle', label: 'WhatsApp', value: site.contact.whatsappDisplay, kind: 'wa' },
    { icon: 'Mail', label: 'Correo', value: site.contact.email, kind: 'mail' },
    { icon: 'MapPin', label: 'Dirección', value: fullAddress, kind: 'text' },
    {
      icon: 'Clock',
      label: 'Horario',
      value: `Lunes a viernes de ${site.hours.weekdays} h, sábados de ${site.hours.saturday} h`,
      kind: 'text',
    },
  ],
};

export const faq = {
  eyebrow: 'PREGUNTAS FRECUENTES',
  title: 'Resolvemos tus dudas',
  items: [
    {
      q: '¿En qué zonas entregan?',
      a: 'Entregamos en Querétaro y su zona metropolitana, incluidos los principales parques industriales. Para otros estados del Bajío, consúltanos tiempos y condiciones.',
    },
    {
      q: '¿Manejan pedido mínimo?',
      a: `[Validar con cliente] Atendemos desde compras únicas hasta programas de abastecimiento. El pedido mínimo para entrega sin costo es de ${site.minimumOrder}.`,
    },
    {
      q: '¿Facturan y pueden darnos crédito?',
      a: 'Sí. Emitimos facturas CFDI 4.0 y ofrecemos crédito empresarial sujeto a autorización.',
    },
    {
      q: '¿Pueden darse de alta como proveedor en mi empresa?',
      a: 'Sí. Te entregamos la documentación necesaria para el alta en tu portal de proveedores.',
    },
    {
      q: '¿Los productos cumplen con las NOM?',
      a: 'Trabajamos con marcas que cumplen con las normas oficiales mexicanas aplicables, como la NOM-017-STPS para equipo de protección personal.',
    },
    {
      q: '¿Pueden personalizar uniformes con nuestro logo?',
      a: 'Sí. Hacemos bordado y estampado, tomamos tallas al personal y entregamos por colaborador.',
    },
    {
      q: '¿Qué pasa si un producto llega con defecto o en la talla equivocada?',
      a: 'Lo cambiamos sin costo de acuerdo con nuestra política de garantías. Tu ejecutivo gestiona el cambio.',
    },
    {
      q: '¿Consiguen productos que no están en su catálogo?',
      a: 'Sí. Con nuestro servicio de compras especiales localizamos marcas, refacciones o productos específicos.',
    },
  ],
};

export const footer = {
  tagline: 'Suministro industrial para plantas y corporativos en Querétaro y el Bajío.',
  products: ['EPP', 'Calzado de seguridad', 'Uniformes', 'Herramienta', 'Consumibles', 'Limpieza', 'Empaque'],
  company: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Industrias', href: '#industrias' },
    { label: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
    { label: 'Contacto', href: '#contacto' },
  ],
  rights: 'Todos los derechos reservados.',
};
