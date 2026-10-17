/**
 * Textos finales de la landing, literales del documento
 * docs/ARVEN Comercializadora — Textos de la landing page.docx
 * Datos de contacto y horario: src/config/site.ts.
 */
import { site, fullAddress } from '../config/site';

export const nav = {
  links: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Productos', href: '#productos' },
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
    'Distribuimos insumos industriales y gestionamos tu cadena de suministro, tus pagos a proveedores y tu logística. Un solo aliado para que tu operación no se detenga.',
  primary: 'Solicitar cotización',
  secondary: 'Conocer servicios',
};

export const trust = [
  { icon: 'LayoutGrid', value: '4 líneas de negocio', label: 'para cubrir tu operación de punta a punta' },
  { icon: 'Boxes', value: '8 categorías de insumos', label: 'para planta, almacén y oficinas' },
  { icon: 'Factory', value: '7 sectores industriales', label: 'atendidos en Querétaro y el Bajío' },
  { icon: 'Handshake', value: '1 solo aliado', label: 'con una factura y un ejecutivo asignado' },
];

export const services = {
  eyebrow: 'SERVICIOS',
  title: 'Cuatro soluciones, un solo aliado para tu operación',
  intro: 'Cubrimos desde el insumo que necesita tu personal hasta el pago a tus proveedores y la entrega en tu planta.',
  cta: 'Cotizar este servicio',
  items: [
    {
      icon: 'PackageCheck',
      title: 'Distribución de insumos industriales',
      text: 'Equipo de protección personal, calzado de seguridad, uniformes, herramienta, consumibles y más, de marcas confiables y con cumplimiento de la normatividad mexicana.',
      href: '#productos',
    },
    {
      icon: 'Network',
      title: 'Soluciones de cadena de suministro',
      text: 'Diseñamos cómo se abastece tu planta con kits por puesto de trabajo, reabastecimiento programado, compras consolidadas y reportes de consumo. Menos órdenes de compra y menos riesgo de desabasto.',
      href: '#cadena-de-suministro',
    },
    {
      icon: 'Wallet',
      title: 'Tercerización de pagos',
      text: 'Gestionamos y pagamos a tus proveedores por ti. Concentras tus compras en una sola factura de ARVEN, simplificas tus cuentas por pagar y liberas a tu equipo de trámites administrativos.',
      href: '#pagos-y-logistica',
    },
    {
      icon: 'Truck',
      title: 'Logística',
      text: 'Coordinamos recolecciones con tus proveedores, consolidamos envíos y entregamos en tu planta, almacén u oficinas en la fecha acordada, incluso en varias sedes.',
      href: '#pagos-y-logistica',
    },
  ],
};

export const products = {
  eyebrow: 'PRODUCTOS',
  title: 'Un catálogo pensado para la operación industrial',
  intro:
    'Desde el equipo que protege a tu personal hasta los consumibles que mantienen tus líneas activas, con marcas confiables y productos que cumplen con la normatividad mexicana.',
  items: [
    {
      icon: 'HardHat',
      title: 'Equipo de protección personal',
      text: 'Cascos, lentes, guantes, protección auditiva y respiratoria, chalecos de alta visibilidad y arneses. Cumplimiento con NOM-017-STPS.',
    },
    {
      icon: 'Footprints',
      title: 'Calzado de seguridad',
      text: 'Botas y zapatos dieléctricos, con casquillo, antiderrapantes e impermeables para cada tipo de riesgo.',
    },
    {
      icon: 'Shirt',
      title: 'Uniformes industriales',
      text: 'Camisolas, pantalones, overoles, chamarras y playeras tipo polo, con bordado o estampado de tu logo.',
    },
    {
      icon: 'Wrench',
      title: 'Herramienta',
      text: 'Herramienta manual y eléctrica, medición y accesorios para mantenimiento y producción.',
    },
    {
      icon: 'Cog',
      title: 'Consumibles industriales',
      text: 'Abrasivos, cintas, adhesivos, lubricantes, tornillería y artículos de soldadura.',
    },
    {
      icon: 'SprayCan',
      title: 'Limpieza e higiene',
      text: 'Químicos, papel, jarciaría y dispensadores para planta, oficinas y comedores.',
    },
    {
      icon: 'Package',
      title: 'Empaque y embalaje',
      text: 'Cajas, película estirable, flejes, etiquetas y tarimas.',
    },
    {
      icon: 'BriefcaseBusiness',
      title: 'Oficina y corporativo',
      text: 'Papelería, consumibles de impresión, mobiliario y cafetería para áreas administrativas.',
    },
  ],
  note: '¿No encuentras lo que buscas? Conseguimos productos especiales y compras únicas bajo pedido.',
  cta: 'Cotizar productos',
};

export const solutions = {
  eyebrow: 'CADENA DE SUMINISTRO',
  title: 'Soluciones de cadena de suministro',
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

export const paymentsLogistics = {
  eyebrow: 'PAGOS Y LOGÍSTICA',
  title: 'Tus pagos y tus entregas, resueltos',
  columns: [
    {
      icon: 'Wallet',
      title: 'Tercerización de pagos',
      bullets: [
        'Pagamos a tus proveedores en tiempo y forma',
        'Una sola factura CFDI 4.0 por todas tus compras',
        'Menos altas de proveedores y menos trámites en cuentas por pagar',
        'Condiciones de pago acordadas con tu empresa',
      ],
    },
    {
      icon: 'Truck',
      title: 'Logística',
      bullets: [
        'Entregas programadas en planta, almacén u oficinas',
        'Recolección con tus proveedores y consolidación de envíos',
        'Distribución a varias sedes en Querétaro y el Bajío',
        'Seguimiento de cada entrega por tu ejecutivo',
      ],
    },
  ],
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
    { icon: 'Handshake', title: 'Un solo aliado', text: 'Insumos, cadena de suministro, pagos y logística en una sola relación comercial.' },
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
    {
      title: 'Cuéntanos qué necesitas.',
      text: 'Envíanos tu lista, requisición o el perfil de tus puestos de trabajo por WhatsApp, teléfono o correo.',
    },
    {
      title: 'Recibe tu cotización.',
      text: 'Te enviamos una propuesta formal con precios, tiempos de entrega y alternativas.',
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
  text: 'ARVEN Comercial es una empresa de Querétaro dedicada a la distribución de insumos industriales, las soluciones de cadena de suministro, la tercerización de pagos y la logística para la industria y los corporativos. Combinamos un catálogo integral con procesos modernos de compra, pago y entrega para que nuestros clientes tengan lo que necesitan, cuando lo necesitan. Nuestro compromiso es simple: que la operación de tu planta nunca se detenga.',
  mission:
    'Simplificar el abastecimiento de la industria y los corporativos con insumos confiables, una cadena de suministro eficiente, pagos ordenados y entregas puntuales, para que cada cliente opere de forma segura y continua.',
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

export const ctaBand = {
  title: '¿Listo para simplificar el abastecimiento de tu planta?',
  text: 'Escríbenos por WhatsApp, llámanos o envíanos un correo y recibe una cotización formal.',
  primary: 'Cotizar por WhatsApp',
  secondary: 'Llamar ahora',
};

export const contact = {
  eyebrow: 'CONTACTO',
  title: 'Solicita tu cotización',
  text: 'Envíanos tu requerimiento por el medio que prefieras. Si ya tienes una lista o requisición, compártela por WhatsApp o correo y un ejecutivo de ARVEN te responderá con una cotización formal.',
  address: fullAddress,
  hours: site.hours.display,
  directions: 'Cómo llegar',
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
      a: 'Atendemos desde compras únicas hasta programas de abastecimiento. Tu ejecutivo te comparte las condiciones de entrega según tu volumen.',
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
    {
      q: '¿Qué es la tercerización de pagos?',
      a: 'Es un servicio en el que ARVEN gestiona y realiza los pagos a tus proveedores en tu nombre. Tú recibes una sola factura consolidada y simplificas tu proceso de cuentas por pagar.',
    },
    {
      q: '¿Qué servicios de logística ofrecen?',
      a: 'Coordinamos recolecciones con tus proveedores, consolidamos envíos y entregamos en tu planta, almacén u oficinas, incluso en varias sedes.',
    },
  ],
};

export const footer = {
  tagline: 'Distribución de insumos industriales, cadena de suministro, tercerización de pagos y logística en Querétaro.',
  services: services.items.map((i) => ({ label: i.title, href: i.href })),
  products: ['EPP', 'Calzado de seguridad', 'Uniformes', 'Herramienta', 'Consumibles', 'Limpieza', 'Empaque'],
  company: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Industrias', href: '#industrias' },
    { label: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
    { label: 'Contacto', href: '#contacto' },
  ],
  rights: 'Todos los derechos reservados.'
};
