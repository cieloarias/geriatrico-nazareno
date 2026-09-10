/* ==========================================================================
   I18N — Spanish (default / authoritative) + English (secondary)
   Applies to elements with [data-i18n="key"] (textContent),
   [data-i18n-html="key"] (innerHTML, for short bits with <br>/<b>), and
   [data-i18n-attr="attr:key"] (sets an attribute, e.g. placeholder/aria-label).
   ========================================================================== */

const I18N = {
  es: {
    "nav.inicio": "Inicio",
    "nav.nosotros": "Nosotros",
    "nav.servicios": "Servicios",
    "nav.residencias": "Residencias",
    "nav.staff": "Staff Médico",
    "nav.galeria": "Galería",
    "nav.blog": "Blog",
    "nav.contacto": "Contacto",
    "nav.agendar": "Agendar visita",
    "nav.brandSmall": "Residencia geriátrica",

    "cta.agendarVisita": "Agendar una visita",
    "cta.conocerResidencias": "Conocer nuestras residencias",
    "cta.verServicios": "Ver servicios",
    "cta.hablarWhatsapp": "Hablar por WhatsApp",
    "cta.verStaff": "Ver staff médico",
    "cta.solicitarPlanes": "Solicitar planes",
    "cta.verGaleria": "Ver galería",
    "cta.leerMas": "Leer más",
    "cta.verTodo": "Ver todo el blog",
    "cta.llamar": "Llamar ahora",
    "cta.enviarMensaje": "Enviar mensaje",
    "cta.verSede": "Ver esta sede",
    "cta.verMapa": "Ver ubicación",
    "cta.volver": "Volver",

    "home.eyebrow": "Casa de reposo · San Borja, Lima",
    "home.heroTitle": "Un hogar donde cada persona mayor vive con dignidad y calidez",
    "home.heroLede": "Casa de Reposo y Residencia Geriátrica Señor de Nazareno: atención médica, enfermería y cuidado humano las 24 horas, en dos residencias dentro de San Borja.",
    "home.badge1n": "2",
    "home.badge1t": "Residencias en San Borja",
    "home.badge2n": "7",
    "home.badge2t": "Áreas de atención integral",
    "home.badge3n": "24/7",
    "home.badge3t": "Enfermería en cada piso",

    "home.trust1t": "Atención personalizada",
    "home.trust1p": "Cada residente recibe un plan de cuidado propio, pensado para su bienestar físico, mental y social.",
    "home.trust2t": "Experiencia y calidad",
    "home.trust2p": "Profesionales de la salud debidamente acreditados y sistemas de atención integral pensados para el adulto mayor.",
    "home.trust3t": "Permisos y regulaciones",
    "home.trust3p": "Autorizados por la Dirección de Salud Lima Centro (MINSA), MIMP, la Municipalidad de San Borja e INDECI.",

    "home.aboutEyebrow": "Quiénes somos",
    "home.aboutTitle": "Una familia dedicada al bienestar del adulto mayor",
    "home.aboutTitleDynamicHtml": "<span class=\"dyn-label\">Quiénes somos</span><span class=\"dyn-main\">Una familia dedicada al bienestar del <em>adulto mayor</em></span>",
    "home.aboutBody": "Somos una entidad autorizada por la Dirección de Salud Lima Centro del Ministerio de Salud, conformada por profesionales de la salud debidamente acreditados. Nuestras residencias están ubicadas en las mejores zonas de San Borja: cálidas, acogedoras, con áreas comunes, comedores interiores y al aire libre, y estaciones de enfermería en cada piso.",
    "home.aboutCta": "Conocer más sobre nosotros",

    "home.servicesEyebrow": "Servicios",
    "home.servicesTitle": "Cuidado integral, en cada detalle",
    "home.servicesTitleHtml": "Cuidado integral, en cada etapa de la <em>vida</em>",
    "home.servicesLede": "Programas de atención que promueven el ejercicio físico, la motivación psíquica y la integración social de cada residente.",

    "home.sedesEyebrow": "Residencias",
    "home.sedesTitle": "Estamos cerca de ti y tu familia",
    "home.sedesTitleHtml": "Dos hogares, la misma <em>vocación</em>",
    "home.sedesLede": "Dos residencias hermanas en San Borja, con el mismo equipo y los mismos estándares de cuidado.",

    "home.staffEyebrow": "Staff médico",
    "home.staffTitle": "Siempre listos para cuidarte",
    "home.staffLede": "Profesionales acreditados, especializados en la atención del adulto mayor.",

    "home.testiEyebrow": "Testimonios",
    "home.testiTitle": "Lo que dicen las familias que confían en nosotros",
    "home.testiTitleHtml": "Lo que dicen<br>las familias que<br><em>confían en nosotros</em>",
    "home.testiLede": "Historias reales de familias que han encontrado en Nazareno un hogar seguro, humano y lleno de vida.",

    "home.certEyebrow": "Confianza",
    "home.certTitle": "Nuestras certificaciones",

    "home.blogEyebrow": "Blog",
    "home.blogTitle": "Contenido escrito por profesionales, para tu familia",
    "home.blogLede": "Nuestro staff de especialistas comparte artículos para que te mantengas informado sobre tu salud y la de tu familia.",

    "home.lifeEyebrow": "Vida en Nazareno",
    "home.lifeTitle": "Más allá del cuidado médico, un hogar",
    "home.lifeTitleHtml": "Historias reales, momentos que <em>inspiran</em>",
    "home.lifeLede": "Actividades, celebraciones y momentos compartidos junto al equipo que acompaña a nuestros residentes cada día.",

    "home.galleryEyebrow": "Galería",
    "home.galleryTitle": "Así se vive el día a día en Nazareno",
    "home.galleryTitleDynamicHtml": "<span class=\"dyn-label\">Galería</span><span class=\"dyn-main\">Así se vive el día a día en <em>Nazareno</em></span>",

    "home.ctaBandTitle": "¿Tienes alguna consulta? Contáctanos ahora",
    "home.ctaBandLede": "Con gusto resolvemos tus dudas y coordinamos una visita a cualquiera de nuestras sedes.",

    "about.eyebrow": "Nosotros",
    "about.title": "¿Quiénes somos?",
    "about.lede": "Somos una familia dedicada al bienestar y la felicidad de cada persona que forma parte de nuestro hogar.",
    "about.body1": "Somos una entidad que cuenta con la autorización de la Dirección de Salud Lima Centro del Ministerio de Salud y está conformada por profesionales de la salud debidamente acreditados. Para brindar un servicio de calidad, se han elaborado modernos sistemas de atención integral que permiten ofrecer a nuestros residentes programas de atención que promueven el ejercicio físico, la motivación psíquica y la integración social.",
    "about.body2": "Nuestras residencias están ubicadas en las mejores zonas de San Borja, cálidas y acogedoras. La casa cuenta con áreas comunes, cocina, comedores al interior y al aire libre, y salas de recibo con estaciones de enfermería en cada piso.",
    "about.approachEyebrow": "Nuestro enfoque",
    "about.approachTitle": "Cuidado integral, pensado para cada persona",
    "about.approachTitleHtml": "Cuidado integral, pensado para <em>cada persona</em>",
    "about.residenceEyebrow": "La Residencia",
    "about.residenceTitle": "Diseñada para el adulto mayor",
    "about.residenceBody": "Ha sido diseñada y construida especialmente para el adulto mayor. Cumplimos con todas las certificaciones solicitadas por el Ministerio de Salud, el Ministerio de la Mujer y Poblaciones Vulnerables, la Municipalidad de San Borja y el INDECI.",
    "about.teamEyebrow": "Nuestro equipo",
    "about.teamTitle": "Personas dedicadas a cuidar personas",
    "about.teamTitleHtml": "Personas dedicadas a cuidar <em>personas</em>",
    "about.teamBody": "Nuestro equipo está compuesto por profesionales comprometidos y dedicados, que se esfuerzan por brindar un cuidado personalizado y de excelencia — desde el staff médico hasta enfermería, terapia y cocina.",

    "services.eyebrow": "Servicios",
    "services.title": "Conoce nuestros servicios",
    "services.lede": "El mismo cuidado integral está disponible en ambas sedes: alojamiento, salud, nutrición, actividad y bienestar.",
    "services.stat": "áreas de atención integral, disponibles en ambas sedes",
    "services.expandHint": "Toca para ver más",

    "sedes.eyebrow": "Residencias",
    "sedes.title": "Dos residencias, una misma familia",
    "sedes.titleDynamicHtml": "<span class=\"dyn-label\">Dos residencias</span><span class=\"dyn-main\">una misma <em>familia</em></span>",
    "sedes.lede": "Conoce cada sede: su ubicación, sus servicios y cómo llegar.",
    "sedes.stat": "sedes hermanas en San Borja, con el mismo equipo y estándares",
    "sedes.statYears": "años de experiencia cuidando al adulto mayor",
    "sedes.addressLabel": "Dirección",
    "sedes.phoneLabel": "Teléfonos",
    "sedes.servicesLabel": "Servicios en esta sede",

    "staff.eyebrow": "Staff médico",
    "staff.title": "Conoce a los médicos de nuestra residencia",
    "staff.lede": "Siempre listos para cuidarte. Profesionales acreditados por el Colegio Médico del Perú, especializados en la atención del adulto mayor.",
    "staff.stat": "médicos acreditados por el Colegio Médico del Perú (CMP)",
    "staff.teamTitle": "El equipo detrás de cada médico",
    "staff.teamTitleDynamicHtml": "<span class=\"dyn-label\">Nuestro equipo</span><span class=\"dyn-main\">El equipo detrás de cada <em>médico</em></span>",
    "staff.teamBody": "Personal de enfermería presente en cada piso, las 24 horas, listo para responder de inmediato ante cualquier necesidad de los residentes.",
    "staff.specialty": "Especialidad",
    "staff.attention": "Tipo de atención",
    "staff.location": "Atiende en",
    "staff.formation": "Trayectoria y formación",
    "staff.interest": "Área de interés",

    "gallery.eyebrow": "Galería",
    "gallery.title": "Así es la vida en Nazareno",
    "gallery.titleHtml": "Así es la vida<br>en <em>Nazareno</em>",
    "gallery.lede": "Instalaciones, actividades y momentos compartidos con nuestros residentes.",
    "gallery.stat": "momentos reales capturados dentro de nuestras dos residencias",

    "blog.eyebrow": "Blog",
    "blog.title": "Últimas publicaciones",
    "blog.lede": "Lee artículos escritos por profesionales sobre el cuidado del adulto mayor.",
    "blog.stat": "artículos escritos por nuestro equipo de profesionales",
    "blog.externalNote": "Este artículo continúa en el sitio original",
    "blog.backToBlog": "Volver al blog",
    "blog.relatedTitle": "Más artículos",
    "blog.featuredTag": "Destacado",

    "contact.eyebrow": "Contacto",
    "contact.title": "Conversemos sobre el cuidado de tu familiar",
    "contact.lede": "Escríbenos, llámanos o coordina una visita. Con gusto te acompañamos en esta decisión.",
    "contact.formTitle": "Déjanos tu mensaje",
    "contact.formLede": "Llena el formulario y nuestro equipo responderá a la brevedad.",
    "contact.fieldNombres": "Nombres",
    "contact.fieldApellidos": "Apellidos",
    "contact.fieldTelefono": "Teléfono de contacto",
    "contact.fieldCorreo": "Correo electrónico",
    "contact.fieldComentario": "Mensaje",
    "contact.placeholderNombres": "Ingresa tu nombre",
    "contact.placeholderApellidos": "Ingresa tus apellidos",
    "contact.placeholderTelefono": "Indica un teléfono de contacto",
    "contact.placeholderCorreo": "Déjanos tu email",
    "contact.placeholderComentario": "Escribe aquí tu mensaje...",
    "contact.submit": "Enviar",
    "contact.formNote": "Al enviar este formulario, aceptas nuestra política de privacidad.",
    "contact.whatsappTitle": "WhatsApp",
    "contact.whatsappBody": "La forma más rápida de contactarnos.",
    "contact.phoneTitle": "Teléfono",
    "contact.phoneBody": "Llámanos en horario de atención.",
    "contact.locationTitle": "Ubicación",
    "contact.locationBody": "Dos sedes en San Borja, Lima.",
    "contact.successTitle": "¡Gracias por escribirnos!",
    "contact.successBody": "Hemos registrado tu mensaje. Nuestro equipo te contactará a la brevedad. Si prefieres una respuesta inmediata, escríbenos por WhatsApp.",

    "footer.tagline": "Atención integral y especializada para personas mayores, en un entorno seguro, cómodo y lleno de calidez humana.",
    "footer.linksTitle": "Navegación",
    "footer.sedesTitle": "Residencias",
    "footer.contactTitle": "Contacto",
    "footer.legalTitle": "Legal",
    "footer.rights": "Todos los derechos reservados.",
    "footer.libro": "Libro de Reclamaciones",
    "footer.privacidad": "Política de Privacidad",
    "footer.datos": "Protección de Datos Personales",
    "footer.objetos": "Gestión de Objetos Encontrados",
    "footer.derechos": "Derechos y Deberes",

    "common.callUs": "Llámanos",
    "common.writeUs": "Escríbenos",
    "common.readMoreBlog": "Leer nota completa en el sitio original",
    "common.langNote": "El español es el idioma oficial de este sitio.",
    "common.skip": "Saltar al contenido principal",
    "common.close": "Cerrar",
    "common.back": "Atrás",
    "common.reducedMotionNote": "Las animaciones se han reducido según tu preferencia del sistema."
  },

  en: {
    "nav.inicio": "Home",
    "nav.nosotros": "About Us",
    "nav.servicios": "Services",
    "nav.residencias": "Locations",
    "nav.staff": "Medical Staff",
    "nav.galeria": "Gallery",
    "nav.blog": "Blog",
    "nav.contacto": "Contact",
    "nav.agendar": "Schedule a visit",
    "nav.brandSmall": "Residential care home",

    "cta.agendarVisita": "Schedule a visit",
    "cta.conocerResidencias": "Explore our residences",
    "cta.verServicios": "View services",
    "cta.hablarWhatsapp": "Chat on WhatsApp",
    "cta.verStaff": "Meet our medical staff",
    "cta.solicitarPlanes": "Request pricing plans",
    "cta.verGaleria": "View gallery",
    "cta.leerMas": "Read more",
    "cta.verTodo": "View all articles",
    "cta.llamar": "Call now",
    "cta.enviarMensaje": "Send message",
    "cta.verSede": "View this location",
    "cta.verMapa": "View location",
    "cta.volver": "Back",

    "home.eyebrow": "Residential care home · San Borja, Lima",
    "home.heroTitle": "A home where every older adult lives with dignity and warmth",
    "home.heroLede": "Casa de Reposo y Residencia Geriátrica Señor de Nazareno: medical care, nursing, and human care around the clock, across two residences in San Borja.",
    "home.badge1n": "2",
    "home.badge1t": "Residences in San Borja",
    "home.badge2n": "7",
    "home.badge2t": "Comprehensive care areas",
    "home.badge3n": "24/7",
    "home.badge3t": "Nursing on every floor",

    "home.trust1t": "Personalized attention",
    "home.trust1p": "Every resident receives their own care plan, designed for their physical, mental, and social well-being.",
    "home.trust2t": "Experience and quality",
    "home.trust2p": "Duly accredited healthcare professionals and comprehensive care systems designed for older adults.",
    "home.trust3t": "Permits and regulations",
    "home.trust3p": "Authorized by the Dirección de Salud Lima Centro (Ministry of Health), MIMP, the Municipality of San Borja, and INDECI.",

    "home.aboutEyebrow": "Who we are",
    "home.aboutTitle": "A family devoted to the well-being of older adults",
    "home.aboutTitleDynamicHtml": "<span class=\"dyn-label\">Who we are</span><span class=\"dyn-main\">A family devoted to the well-being of <em>older adults</em></span>",
    "home.aboutBody": "We are an entity authorized by the Dirección de Salud Lima Centro of the Ministry of Health, made up of duly accredited healthcare professionals. Our residences are located in some of San Borja's best areas: warm and welcoming, with common areas, indoor and outdoor dining rooms, and nursing stations on every floor.",
    "home.aboutCta": "Learn more about us",

    "home.servicesEyebrow": "Services",
    "home.servicesTitle": "Comprehensive care, in every detail",
    "home.servicesTitleHtml": "Comprehensive care, at every stage of <em>life</em>",
    "home.servicesLede": "Care programs that encourage physical exercise, mental motivation, and social integration for every resident.",

    "home.sedesEyebrow": "Locations",
    "home.sedesTitle": "Close to you and your family",
    "home.sedesTitleHtml": "Two homes, the same <em>calling</em>",
    "home.sedesLede": "Two sister residences in San Borja, with the same team and the same standards of care.",

    "home.staffEyebrow": "Medical staff",
    "home.staffTitle": "Always ready to care for you",
    "home.staffLede": "Accredited professionals, specialized in the care of older adults.",

    "home.testiEyebrow": "Testimonials",
    "home.testiTitle": "What families who trust us have to say",
    "home.testiTitleHtml": "What families<br>who trust us<br><em>have to say</em>",
    "home.testiLede": "Real stories from families who have found in Nazareno a safe, human home full of life.",

    "home.certEyebrow": "Trust",
    "home.certTitle": "Our certifications",

    "home.lifeEyebrow": "Life at Nazareno",
    "home.lifeTitle": "Beyond medical care, a home",
    "home.lifeTitleHtml": "Real stories, moments that <em>inspire</em>",
    "home.lifeLede": "Activities, celebrations, and shared moments with the team that accompanies our residents every day.",

    "home.blogEyebrow": "Blog",
    "home.blogTitle": "Content written by professionals, for your family",
    "home.blogLede": "Our team of specialists shares articles to help you stay informed about your health and your family's.",

    "home.galleryEyebrow": "Gallery",
    "home.galleryTitle": "Everyday life at Nazareno",
    "home.galleryTitleDynamicHtml": "<span class=\"dyn-label\">Gallery</span><span class=\"dyn-main\">Everyday life at <em>Nazareno</em></span>",

    "home.ctaBandTitle": "Have a question? Get in touch today",
    "home.ctaBandLede": "We're happy to answer your questions and help you schedule a visit to either of our locations.",

    "about.eyebrow": "About Us",
    "about.title": "Who we are",
    "about.lede": "We are a family devoted to the well-being and happiness of everyone who becomes part of our home.",
    "about.body1": "We are an entity authorized by the Dirección de Salud Lima Centro of the Ministry of Health, made up of duly accredited healthcare professionals. To provide quality service, we have built modern, comprehensive care systems that offer our residents programs promoting physical exercise, mental motivation, and social integration.",
    "about.body2": "Our residences are located in some of San Borja's best areas — warm and welcoming. The house has common areas, a kitchen, indoor and outdoor dining rooms, and reception areas with nursing stations on every floor.",
    "about.approachEyebrow": "Our approach",
    "about.approachTitle": "Comprehensive care, built around each person",
    "about.approachTitleHtml": "Comprehensive care, built around <em>each person</em>",
    "about.residenceEyebrow": "The Residence",
    "about.residenceTitle": "Designed for older adults",
    "about.residenceBody": "Designed and built specifically for older adults. We comply with all certifications required by the Ministry of Health, the Ministry of Women and Vulnerable Populations, the Municipality of San Borja, and INDECI.",
    "about.teamEyebrow": "Our team",
    "about.teamTitle": "People dedicated to caring for people",
    "about.teamTitleHtml": "People dedicated to caring for <em>people</em>",
    "about.teamBody": "Our team is made up of committed, dedicated professionals who strive to provide personalized, excellent care — from medical staff to nursing, therapy, and the kitchen.",

    "services.eyebrow": "Services",
    "services.title": "Explore our services",
    "services.lede": "The same comprehensive care is available at both locations: lodging, health, nutrition, activity, and well-being.",
    "services.stat": "areas of comprehensive care, available at both locations",
    "services.expandHint": "Tap to read more",

    "sedes.eyebrow": "Locations",
    "sedes.title": "Two residences, one family",
    "sedes.titleDynamicHtml": "<span class=\"dyn-label\">Two residences</span><span class=\"dyn-main\">one <em>family</em></span>",
    "sedes.lede": "Get to know each location: where it is, what it offers, and how to get there.",
    "sedes.stat": "sister locations in San Borja, with the same team and standards",
    "sedes.statYears": "years of experience caring for older adults",
    "sedes.addressLabel": "Address",
    "sedes.phoneLabel": "Phone",
    "sedes.servicesLabel": "Services at this location",

    "staff.eyebrow": "Medical staff",
    "staff.title": "Meet our residence's doctors",
    "staff.lede": "Always ready to care for you. Professionals accredited by the Peruvian Medical Association (CMP), specialized in the care of older adults.",
    "staff.stat": "doctors accredited by the Peruvian Medical Association (CMP)",
    "staff.teamTitle": "The team behind every doctor",
    "staff.teamTitleDynamicHtml": "<span class=\"dyn-label\">Our team</span><span class=\"dyn-main\">The team behind every <em>doctor</em></span>",
    "staff.teamBody": "Nursing staff present on every floor, around the clock, ready to respond immediately to any resident's needs.",
    "staff.specialty": "Specialty",
    "staff.attention": "Type of care",
    "staff.location": "Practices in",
    "staff.formation": "Background & education",
    "staff.interest": "Area of interest",

    "gallery.eyebrow": "Gallery",
    "gallery.title": "Life at Nazareno",
    "gallery.titleHtml": "This is life<br>at <em>Nazareno</em>",
    "gallery.lede": "Facilities, activities, and moments shared with our residents.",
    "gallery.stat": "real moments captured across our two residences",

    "blog.eyebrow": "Blog",
    "blog.title": "Latest articles",
    "blog.lede": "Read articles written by professionals about caring for older adults.",
    "blog.stat": "articles written by our team of professionals",
    "blog.externalNote": "This article continues on the original site",
    "blog.backToBlog": "Back to blog",
    "blog.relatedTitle": "More articles",
    "blog.featuredTag": "Featured",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your family member's care",
    "contact.lede": "Write to us, call us, or schedule a visit. We're glad to walk alongside you through this decision.",
    "contact.formTitle": "Send us a message",
    "contact.formLede": "Fill out the form and our team will get back to you shortly.",
    "contact.fieldNombres": "First name",
    "contact.fieldApellidos": "Last name",
    "contact.fieldTelefono": "Contact phone",
    "contact.fieldCorreo": "Email address",
    "contact.fieldComentario": "Message",
    "contact.placeholderNombres": "Enter your first name",
    "contact.placeholderApellidos": "Enter your last name",
    "contact.placeholderTelefono": "Enter a contact phone number",
    "contact.placeholderCorreo": "Leave us your email",
    "contact.placeholderComentario": "Write your message here...",
    "contact.submit": "Send",
    "contact.formNote": "By submitting this form, you agree to our privacy policy.",
    "contact.whatsappTitle": "WhatsApp",
    "contact.whatsappBody": "The fastest way to reach us.",
    "contact.phoneTitle": "Phone",
    "contact.phoneBody": "Call us during business hours.",
    "contact.locationTitle": "Location",
    "contact.locationBody": "Two locations in San Borja, Lima.",
    "contact.successTitle": "Thank you for reaching out!",
    "contact.successBody": "We've received your message and our team will contact you shortly. For an immediate response, write to us on WhatsApp.",

    "footer.tagline": "Comprehensive, specialized care for older adults, in a safe, comfortable environment full of human warmth.",
    "footer.linksTitle": "Navigation",
    "footer.sedesTitle": "Locations",
    "footer.contactTitle": "Contact",
    "footer.legalTitle": "Legal",
    "footer.rights": "All rights reserved.",
    "footer.libro": "Complaints Book",
    "footer.privacidad": "Privacy Policy",
    "footer.datos": "Personal Data Protection Policy",
    "footer.objetos": "Lost Property Policy",
    "footer.derechos": "Rights & Responsibilities",

    "common.callUs": "Call us",
    "common.writeUs": "Write to us",
    "common.readMoreBlog": "Read the full article on the original site",
    "common.langNote": "Spanish is the official language of this site.",
    "common.skip": "Skip to main content",
    "common.close": "Close",
    "common.back": "Back",
    "common.reducedMotionNote": "Animations have been reduced according to your system preference."
  }
};

const I18N_DEFAULT_LANG = "es";

function getLang(){
  try{
    return localStorage.getItem("nazareno_lang") || I18N_DEFAULT_LANG;
  }catch(e){ return I18N_DEFAULT_LANG; }
}

function setLang(lang){
  try{ localStorage.setItem("nazareno_lang", lang); }catch(e){}
  applyI18n(lang);
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function t(key, lang){
  lang = lang || getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
}

function applyI18n(lang){
  lang = lang || getLang();
  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "es");

  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var key = el.getAttribute("data-i18n");
    el.textContent = t(key, lang);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function(el){
    var key = el.getAttribute("data-i18n-html");
    el.innerHTML = t(key, lang);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(function(el){
    var pairs = el.getAttribute("data-i18n-attr").split(",");
    pairs.forEach(function(pair){
      var parts = pair.split(":");
      var attr = parts[0].trim();
      var key = parts[1].trim();
      el.setAttribute(attr, t(key, lang));
    });
  });

  document.querySelectorAll(".lang-switch button").forEach(function(btn){
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });
  document.querySelectorAll(".lang-switch").forEach(function(el){
    el.setAttribute("data-active", lang);
  });
}

/* Applies translations to whatever static [data-i18n] markup already exists
   in the page body at parse time (hero copy, section headings, etc).
   Header/footer are injected later by partials.js, which re-applies i18n
   and binds the lang-switch buttons itself once that markup exists. */
document.addEventListener("DOMContentLoaded", function(){
  applyI18n(getLang());
});
