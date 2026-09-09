/* ==========================================================================
   SITE DATA — Geriátrico Señor de Nazareno
   Real content migrated from https://www.geriatriconazareno.com/
   (see /websiteInfo.txt for full source documentation & provenance).
   Spanish is the authoritative source; English is a professional
   translation. No fabricated services, staff, stats, or certifications.
   ========================================================================== */

const SITE_DATA = {

  brand: {
    name: "Geriátrico Señor de Nazareno",
    fullName: "Casa de Reposo y Residencia Geriátrica Señor de Nazareno",
    logo: "assets/images/brand/logo-wide.png",
    phoneDisplay: "+51 978 653 991",
    phoneSecondary: "(+511) 744 57 11",
    telHref: "tel:+51978653991",
    whatsapp: {
      agendar: "https://wa.link/64zu2j",
      info: "https://wa.link/bae8y7",
      planes: "https://wa.link/htq4tt"
    },
    social: {
      facebook: "https://www.facebook.com/people/RESIDENCIA-GERIATRICA-SE%C3%91OR-DE-NAZARENO/100063781891285/",
      instagram: "https://www.instagram.com/geriatriconazareno/",
      tiktok: "https://www.tiktok.com/@geriatrico_nazareno"
    },
    legal: {
      libroReclamaciones: "https://www.geriatriconazareno.com/libro/libro-de-reclamaciones.html",
      privacidad: "https://www.geriatriconazareno.com/politica-privacidad",
      proteccionDatos: "https://www.geriatriconazareno.com/politica-corporativa-proteccion-datos-personales",
      objetosEncontrados: "https://www.geriatriconazareno.com/politica-de-gestion-de-objetos-encontrados",
      derechosDeberes: "https://www.geriatriconazareno.com/derechos-y-deberes"
    },
    /* Cinematic 3D render of the real San Borja building, commissioned by
       the client (OpenArt) — used as the hero's dominant visual. */
    heroVideo: {
      mp4: "assets/videos/hero-residencia.mp4",
      poster: "assets/videos/hero-poster.jpg"
    }
  },

  /* ---- SERVICES (7 real services, both sedes) ---- */
  services: [
    {
      icon: "home",
      image: "assets/images/gallery/11.jpg",
      es: { title: "Alojamiento", short: "Habitaciones cálidas y acogedoras, adaptadas a las necesidades del adulto mayor, con áreas comunes, comedores interiores y al aire libre.", long: "Cada habitación está pensada para el descanso y la independencia: camas ajustables, buena iluminación y espacio suficiente para desplazarse con comodidad, incluso con silla de ruedas o andador." },
      en: { title: "Lodging", short: "Warm, comfortable rooms adapted to the needs of older adults, with common areas and indoor and outdoor dining rooms.", long: "Every room is designed for rest and independence: adjustable beds, good lighting, and enough space to move comfortably, including with a wheelchair or walker." }
    },
    {
      icon: "cross",
      image: "assets/images/gallery/4.jpg",
      es: { title: "Atención médica", short: "Seguimiento médico continuo a cargo de profesionales de la salud debidamente acreditados.", long: "Nuestro equipo médico realiza seguimiento continuo a cada residente, coordinando de cerca con la familia y manteniéndolos informados sobre cualquier novedad relevante." },
      en: { title: "Medical care", short: "Ongoing medical follow-up provided by duly accredited healthcare professionals.", long: "Our medical team follows up closely with every resident, coordinating with families and keeping them informed of anything relevant." }
    },
    {
      icon: "pulse",
      image: "assets/images/gallery/14.jpg",
      es: { title: "Enfermería", short: "Estaciones de enfermería en cada piso, para una atención cercana y oportuna en todo momento.", long: "Personal de enfermería presente en cada piso, las 24 horas, listo para responder de inmediato ante cualquier necesidad de los residentes." },
      en: { title: "Nursing", short: "Nursing stations on every floor, ensuring close and timely attention at all times.", long: "Nursing staff present on every floor, around the clock, ready to respond immediately to any resident's needs." }
    },
    {
      icon: "clipboard",
      image: "assets/images/gallery/1.jpg",
      es: { title: "Evaluación médica", short: "Valoración geriátrica integral para diseñar un plan de cuidado personalizado para cada residente.", long: "Antes y durante la estadía, evaluamos el estado físico, cognitivo y social de cada residente para ajustar su plan de cuidado a medida que sus necesidades cambian." },
      en: { title: "Medical evaluation", short: "Comprehensive geriatric assessment used to design a personalized care plan for each resident.", long: "Before and throughout each stay, we assess each resident's physical, cognitive, and social condition to adjust their care plan as their needs change." }
    },
    {
      icon: "meal",
      image: "assets/images/gallery/6.jpg",
      es: { title: "Elaboración y selección de comidas", short: "Menús preparados y seleccionados pensando en la nutrición y el gusto de cada residente.", long: "Comidas preparadas a diario en nuestra cocina, con menús balanceados que consideran restricciones médicas y preferencias personales de cada residente." },
      en: { title: "Meal preparation & selection", short: "Menus prepared and chosen with each resident's nutrition and preferences in mind.", long: "Meals are prepared daily in our own kitchen, with balanced menus that take each resident's medical restrictions and personal preferences into account." }
    },
    {
      icon: "therapy",
      image: "assets/images/gallery/5.jpg",
      es: { title: "Terapia ocupacional", short: "Programas que promueven el ejercicio físico, la motivación psíquica y la integración social.", long: "Actividades grupales diarias — juegos, manualidades y ejercicio suave — diseñadas para mantener activa la mente y el cuerpo, y fortalecer los lazos entre residentes." },
      en: { title: "Occupational therapy", short: "Programs that encourage physical exercise, mental motivation, and social integration.", long: "Daily group activities — games, crafts, and gentle exercise — designed to keep the mind and body active, and to strengthen bonds between residents." }
    },
    {
      icon: "laundry",
      image: "assets/images/gallery/9.jpg",
      es: { title: "Lavandería", short: "Servicio de lavandería incluido, para que las familias no tengan que preocuparse por esta tarea.", long: "Nos encargamos de la ropa de cada residente como parte del servicio, para que las familias puedan enfocarse en lo que más importa: el tiempo juntos." },
      en: { title: "Laundry", short: "Included laundry service, so families never have to worry about this task.", long: "We take care of each resident's laundry as part of the service, so families can focus on what matters most: time together." }
    }
  ],

  /* ---- SEDES / LOCATIONS ---- */
  sedes: [
    {
      slug: "san-borja",
      badge: { es: "Sede principal", en: "Main location" },
      es: { name: "Sede San Borja", desc: "Nuestra sede principal, ubicada en una de las mejores zonas de San Borja. Cuenta con áreas comunes, cocina, comedores interiores y al aire libre, y estaciones de enfermería en cada piso." },
      en: { name: "San Borja Location", desc: "Our main residence, located in one of San Borja's best areas. It has common areas, a kitchen, indoor and outdoor dining rooms, and nursing stations on every floor." },
      address: "Av. Las Artes Norte 1249, San Borja, Perú",
      mapImage: "assets/images/sedes/mapa-san-borja.webp",
      photo: "assets/images/sedes/sede-san-borja.jpg",
      photoAlt: "assets/images/gallery/16.jpg",
      phones: ["+51 978 653 991", "(+511) 744 57 11"]
    },
    {
      slug: "salvador-dali",
      badge: { es: "Segunda residencia", en: "Second residence" },
      es: { name: "Sede Salvador Dalí", desc: "Nuestra segunda residencia, hermana de la sede San Borja, con la misma calidez, el mismo equipo y los mismos estándares de atención." },
      en: { name: "Salvador Dalí Location", desc: "Our second residence, sister to the San Borja location, with the same warmth, the same team, and the same standards of care." },
      address: "Salvador Dalí 490, San Borja, Perú",
      mapImage: "assets/images/sedes/mapa-salvador-dali.webp",
      photo: "assets/images/gallery/16.jpg",
      photoAlt: "assets/images/gallery/13.jpg",
      photoNote: "Foto interior representativa de nuestras residencias (no es la fachada de esta sede específica) — ver websiteInfo.txt",
      video: "assets/videos/residencia-dali.mp4",
      videoPoster: "assets/videos/residencia-dali-poster.jpg",
      phones: ["+51 978 653 991", "(+511) 744 57 11"]
    }
  ],

  /* ---- STAFF MÉDICO — real, verbatim from medico-single.php / medico-single2.php ---- */
  staff: [
    {
      photo: "assets/images/staff/dra-ernestina-palomino.webp",
      name: "Dra. Ernestina Palomino Sulca",
      cmp: "CMP 45073",
      es: {
        specialty: "Medicina",
        attention: "Particular",
        location: "San Borja",
        formation: ["Universidad Ricardo Palma", "Diplomado en Geriatría y Gerontología"],
        interest: "Atención del Adulto Mayor"
      },
      en: {
        specialty: "Medicine",
        attention: "Private",
        location: "San Borja",
        formation: ["Universidad Ricardo Palma", "Postgraduate Diploma in Geriatrics and Gerontology"],
        interest: "Care of Older Adults"
      }
    },
    {
      photo: "assets/images/staff/dr-daniel-arias.webp",
      name: "Dr. Daniel Arias Cerquin",
      cmp: "CMP 29814",
      es: {
        specialty: "Medicina General",
        attention: "Particular",
        location: "San Borja",
        formation: ["Universidad San Martín de Porres, Lima, Perú"],
        interest: "Atención del Adulto Mayor"
      },
      en: {
        specialty: "General Medicine",
        attention: "Private",
        location: "San Borja",
        formation: ["Universidad San Martín de Porres, Lima, Peru"],
        interest: "Care of Older Adults"
      }
    }
  ],

  /* ---- TESTIMONIALS — verbatim, positive ones only (see websiteInfo.txt) ---- */
  testimonials: [
    {
      name: "Humberto Valdivia Yoplac",
      es: "Permanente y cálida atención las 24 horas.",
      en: "Ongoing, warm care around the clock."
    },
    {
      name: "Patricia Boza",
      es: "Realmente es una casa excepcional. Profesionales A1. Muchísimo amor en la atención. Personal altamente calificado. Información valiosa a los familiares, oportunos. Un local impecable, muy organizados. Humanidad a todo nivel. Acceso a los doctores (dueños), dedicados. Recomendable a todo nivel en toda su máxima expresión.",
      en: "It's truly an exceptional home. Top-tier professionals. So much love in the care they give. Highly qualified staff. Valuable, timely information for families. An impeccable, well-organized facility. Humanity at every level. Direct access to the doctors (who are also the owners), and dedicated. Highly recommended in every respect."
    },
    {
      name: "Liz Palomino",
      es: "Buen cuidado para el adulto mayor.",
      en: "Good care for older adults."
    }
  ],

  /* ---- CERTIFICATIONS — real badge images, no fabricated issuing bodies ---- */
  certifications: [
    { img: "assets/images/certifications/cert-1.webp", alt: "Certificación Geriátrico Señor de Nazareno 1" },
    { img: "assets/images/certifications/cert-2.webp", alt: "Certificación Geriátrico Señor de Nazareno 2" },
    { img: "assets/images/certifications/cert-3.webp", alt: "Certificación Geriátrico Señor de Nazareno 3" },
    { img: "assets/images/certifications/cert-4.webp", alt: "Certificación Geriátrico Señor de Nazareno 4" }
  ],

  /* ---- GALLERY — 22 real photos. Captions below are our own descriptive
     labels of real, visually-verified photo content (none existed on the
     source site) — not fabricated claims. ---- */
  gallery: [
    { img: "assets/images/gallery/1.jpg", es: "Sala de monitoreo y seguridad", en: "Monitoring and security desk" },
    { img: "assets/images/gallery/2.jpg", es: "Fachada de la sede San Borja", en: "San Borja location façade" },
    { img: "assets/images/gallery/3.jpg", es: "Nuestro equipo de enfermería y médico", en: "Our nursing and medical team", span: "wide" },
    { img: "assets/images/gallery/4.jpg", es: "Personal médico en la residencia", en: "Medical staff at the residence" },
    { img: "assets/images/gallery/5.jpg", es: "Residentes en una actividad recreativa", en: "Residents in a recreational activity", span: "tall" },
    { img: "assets/images/gallery/6.jpg", es: "Servicio de alimentación para residentes", en: "Meal service for residents" },
    { img: "assets/images/gallery/7.jpg", es: "Terraza al aire libre", en: "Outdoor terrace" },
    { img: "assets/images/gallery/8.jpg", es: "Recepción de la residencia", en: "Residence lobby", span: "wide" },
    { img: "assets/images/gallery/9.jpg", es: "Pasillos interiores, amplios y luminosos", en: "Bright, spacious interior corridors" },
    { img: "assets/images/gallery/10.jpg", es: "Sala de estar común", en: "Common living room" },
    { img: "assets/images/gallery/11.jpg", es: "Habitación adaptada para el adulto mayor", en: "Room adapted for older adults", span: "tall" },
    { img: "assets/images/gallery/12.jpg", es: "Baño adaptado con barras de apoyo", en: "Adapted bathroom with grab bars" },
    { img: "assets/images/gallery/13.jpg", es: "Sala de estar común", en: "Common living room" },
    { img: "assets/images/gallery/14.jpg", es: "Estación de enfermería", en: "Nursing station" },
    { img: "assets/images/gallery/15.jpg", es: "Comedor al aire libre", en: "Outdoor dining area" },
    { img: "assets/images/gallery/16.jpg", es: "Vista interior de la residencia", en: "Interior view of the residence", span: "tall" },
    { img: "assets/images/gallery/17.jpg", es: "Terraza y zona de comedor exterior", en: "Terrace and outdoor dining area" },
    { img: "assets/images/gallery/18.jpg", es: "Habitación de un residente", en: "A resident's room" },
    { img: "assets/images/gallery/19.jpg", es: "Habitación con sala de estar propia", en: "Room with its own sitting area" },
    { img: "assets/images/gallery/navidad1.jpg", es: "Celebración navideña con nuestros residentes", en: "Christmas celebration with our residents" },
    { img: "assets/images/gallery/navidad2.jpg", es: "Celebración navideña con nuestros residentes", en: "Christmas celebration with our residents", span: "wide" },
    { img: "assets/images/gallery/navidad3.jpg", es: "Celebración navideña con nuestros residentes", en: "Christmas celebration with our residents" }
  ],

  /* ---- LIFE AT NAZARENO — a warmer, human-first curated subset (distinct
     from the medical/service imagery) for the homepage's emotional
     storytelling section. All real photos, reused from the gallery. ---- */
  lifeAtNazareno: [
    { img: "assets/images/gallery/5.jpg", es: "Juegos que conectan", en: "Games that connect" },
    { img: "assets/images/gallery/navidad2.jpg", es: "Momentos que reconfortan", en: "Moments of comfort" },
    { img: "assets/images/gallery/6.jpg", es: "Nutrición con cariño", en: "Nourishment, with care" },
    { img: "assets/images/gallery/navidad3.jpg", es: "Pequeños momentos, grandes alegrías", en: "Small moments, great joys" },
    { img: "assets/images/gallery/3.jpg", es: "El equipo que los acompaña cada día", en: "The team by their side every day" },
    { img: "assets/images/gallery/13.jpg", es: "Espacios comunes para compartir", en: "Common spaces made for sharing" }
  ],

  /* ---- BLOG — 16 real articles. `body` present only where full text was
     captured from source; otherwise `externalUrl` points to the live
     original article so no content is lost or fabricated. ---- */
  blog: [
    {
      slug: "entorno-seguro-adaptado",
      image: "assets/images/blog/blog1.webp",
      es: { title: "La importancia de un entorno seguro y adaptado para personas mayores", dek: "En nuestro geriátrico, nos aseguramos de ofrecer un entorno diseñado no solo para garantizar la seguridad física, sino también para promover la comodidad y el bienestar integral de nuestros residentes." },
      en: { title: "The Importance of a Safe, Adapted Environment for Older Adults", dek: "At our residence, we make sure to offer an environment designed not only to guarantee physical safety, but also to promote comfort and the overall well-being of our residents." },
      body: {
        es: [
          "En nuestro geriátrico, nos aseguramos de ofrecer un entorno diseñado no solo para garantizar la seguridad física, sino también para promover la comodidad y el bienestar integral de nuestros residentes. Aquí te compartimos en detalle cómo logramos este objetivo:",
          "Prevención de accidentes en cada rincón — Sabemos que las caídas son uno de los principales riesgos para las personas mayores. Por ello, todos nuestros espacios cuentan con pisos antideslizantes, pasamanos ergonómicos y excelente iluminación, incluso en horarios nocturnos. Además, nuestras puertas y pasillos son lo suficientemente amplios para permitir un fácil acceso, incluso para personas con sillas de ruedas o andadores.",
          "Habitaciones personalizadas y seguras — Cada residente encuentra en nuestras instalaciones una habitación que se adapta a sus necesidades específicas. Las camas son ajustables, lo que facilita su uso diario tanto para el residente como para el personal médico. Los baños, equipados con barras de apoyo y duchas a nivel del suelo, permiten mayor independencia sin comprometer la seguridad.",
          "Zonas comunes que invitan al disfrute — Creemos que la seguridad no debe sacrificar la comodidad. Por ello, nuestras áreas comunes están diseñadas con mobiliario seguro y acogedor, pensado para promover la interacción social y el entretenimiento. Estas áreas incluyen espacios para leer, jugar, o simplemente disfrutar de una conversación agradable en un entorno tranquilo.",
          "Tecnología al servicio del cuidado — La tecnología es nuestra aliada para garantizar el bienestar de los residentes. Contamos con sistemas de monitoreo y alarmas conectadas que permiten una rápida respuesta del personal ante cualquier emergencia. Además, nuestro equipo realiza revisiones periódicas para asegurarse de que todo esté en óptimas condiciones.",
          "Cuidando el bienestar emocional — Un entorno seguro va más allá de lo físico. Para nosotros, también es esencial ofrecer tranquilidad emocional tanto a los residentes como a sus familias. Saber que sus seres queridos están en un lugar seguro y adaptado les brinda la confianza de que están recibiendo el mejor cuidado posible.",
          "En nuestro geriátrico, la seguridad, la comodidad y el cuidado van de la mano para ofrecer una experiencia única y adaptada a las necesidades de cada residente.",
          "¿Te gustaría conocer más? ¡Agenda una visita hoy mismo! Ven y descubre cómo nuestro espacio está pensado para el bienestar integral de tus seres queridos."
        ],
        en: [
          "At our residence, we make sure to offer an environment designed not only to guarantee physical safety, but also to promote comfort and the overall well-being of our residents. Here's a detailed look at how we achieve that:",
          "Preventing accidents in every corner — We know that falls are one of the main risks for older adults. That's why all of our spaces have slip-resistant floors, ergonomic handrails, and excellent lighting, even at night. Our doors and hallways are also wide enough to allow easy access, including for residents using wheelchairs or walkers.",
          "Personalized, safe rooms — Every resident has a room adapted to their specific needs. Beds are adjustable, making daily use easier for both residents and medical staff. Bathrooms, equipped with grab bars and level-entry showers, allow for greater independence without compromising safety.",
          "Common areas that invite enjoyment — We believe safety shouldn't come at the expense of comfort. Our common areas are designed with safe, welcoming furniture meant to encourage social interaction and enjoyment — spaces to read, play, or simply enjoy a pleasant conversation in a calm setting.",
          "Technology in service of care — Technology is our ally in ensuring residents' well-being. We have monitoring systems and connected alarms that allow staff to respond quickly to any emergency, along with periodic reviews to make sure everything stays in optimal condition.",
          "Caring for emotional well-being — A safe environment goes beyond the physical. For us, it's just as essential to offer emotional peace of mind to residents and their families alike. Knowing a loved one is in a safe, adapted place gives families the confidence that they are receiving the best possible care.",
          "At our residence, safety, comfort, and care go hand in hand to offer a unique experience tailored to each resident's needs.",
          "Would you like to know more? Schedule a visit today and discover how our space is designed for the complete well-being of your loved ones."
        ]
      }
    },
    {
      slug: "prevencion-de-caidas",
      image: "assets/images/blog/blog2.webp",
      es: { title: "Prevención de caídas: creando entornos seguros para personas mayores", dek: "En nuestro geriátrico, la seguridad es una prioridad absoluta. Las caídas son uno de los riesgos más comunes para los adultos mayores, y por eso hemos implementado medidas específicas para minimizar este peligro." },
      en: { title: "Fall Prevention: Creating Safe Environments for Older Adults", dek: "At our residence, safety is an absolute priority. Falls are one of the most common risks for older adults, which is why we've implemented specific measures to minimize this danger." },
      externalUrl: "https://www.geriatriconazareno.com/prevencion-de-caidas-creando-entornos-seguros-para-personas-mayores.php"
    },
    {
      slug: "beneficios-cuidados-geriatricos",
      image: "assets/images/blog/blog5.webp",
      es: { title: "Beneficios de los cuidados geriátricos: ¿por qué elegirlos para tus seres queridos?", dek: "Los cuidados geriátricos son esenciales para garantizar que las personas mayores reciban la atención que necesitan en cada etapa de su vida." },
      en: { title: "Benefits of Geriatric Care: Why Choose It for Your Loved Ones?", dek: "Geriatric care is essential to ensuring older adults receive the attention they need at every stage of life." },
      externalUrl: "https://www.geriatriconazareno.com/beneficios-de-los-cuidados-geriatricos-por-que-elegirlos-para-tus-seres-queridos"
    },
    {
      slug: "areas-recreativas",
      image: "assets/images/blog/b1.webp",
      es: { title: "Áreas Recreativas en Geriátricos: Espacios para el Bienestar y la Conexión", dek: "El bienestar integral de los adultos mayores va más allá del cuidado médico; también incluye ofrecer espacios que fomenten la recreación, la socialización y el ejercicio mental." },
      en: { title: "Recreational Areas in Geriatric Homes: Spaces for Well-Being and Connection", dek: "The overall well-being of older adults goes beyond medical care — it also means offering spaces that encourage recreation, socializing, and mental exercise." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "banos-adaptados",
      image: "assets/images/blog/b2.webp",
      es: { title: "Baños Adaptados: Cómo Diseñarlos para Evitar Accidentes en Adultos Mayores", dek: "Los baños son espacios esenciales en cualquier hogar o casa de reposo, pero también representan uno de los lugares más propensos a accidentes, especialmente para los adultos mayores." },
      en: { title: "Adapted Bathrooms: How to Design Them to Prevent Accidents in Older Adults", dek: "Bathrooms are essential spaces in any home or residence, but they're also among the places most prone to accidents, especially for older adults." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "beneficios-emocionales",
      image: "assets/images/blog/b3.webp",
      es: { title: "Beneficios Emocionales de una Casa de Reposo: Un Refugio de Tranquilidad y Bienestar", dek: "En una sociedad que avanza a un ritmo vertiginoso, encontrar un espacio de paz y tranquilidad se vuelve fundamental para nuestra salud emocional." },
      en: { title: "Emotional Benefits of a Residential Home: A Refuge of Calm and Well-Being", dek: "In a fast-paced society, finding a space of peace and calm becomes essential to our emotional health." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "lazos-familiares",
      image: "assets/images/blog/b9.webp",
      es: { title: "Fortaleciendo Lazos Familiares: Una Guía para Mantener Conexiones Significativas desde el Geriátrico", dek: "Los lazos familiares son fundamentales para el bienestar emocional y la calidad de vida de nuestros adultos mayores." },
      en: { title: "Strengthening Family Bonds: A Guide to Meaningful Connection from the Residence", dek: "Family bonds are essential to the emotional well-being and quality of life of our older adults." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "nutricion-tercera-edad-guia",
      image: "assets/images/blog/nutri.webp",
      es: { title: "Nutrición en la Tercera Edad: Guía Completa para una Alimentación Saludable", dek: "La nutrición juega un papel fundamental en la calidad de vida de nuestros adultos mayores. Esta guía completa te ayudará a comprender sus necesidades nutricionales específicas." },
      en: { title: "Nutrition in Older Age: A Complete Guide to Healthy Eating", dek: "Nutrition plays a fundamental role in our older adults' quality of life. This complete guide will help you understand their specific nutritional needs." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "estadisticas-cuidado-adultos-mayores",
      image: "assets/images/blog/blog6.webp",
      es: { title: "Estadísticas Relevantes sobre el Cuidado de Adultos Mayores", dek: "Las estadísticas nos ayudan a comprender mejor la importancia de tomar decisiones informadas sobre el cuidado de nuestros adultos mayores." },
      en: { title: "Relevant Statistics on the Care of Older Adults", dek: "Statistics help us better understand the importance of making informed decisions about the care of our older adults." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "senales-momento-geriatrico",
      image: "assets/images/blog/blog7.webp",
      es: { title: "Señales que Indican que es Momento de Considerar un Geriátrico: Guía Completa para Familias", dek: "Tomar la decisión de trasladar a un ser querido a un geriátrico es uno de los momentos más desafiantes para cualquier familia." },
      en: { title: "Signs It May Be Time to Consider a Residence: A Complete Guide for Families", dek: "Deciding to move a loved one into residential care is one of the most challenging moments a family can face." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "rol-personal-medico-cuidado",
      image: "assets/images/blog/blog8.webp",
      es: { title: "El rol del personal médico y de cuidado en Señor de Nazareno", dek: "En Señor de Nazareno, entendemos que nuestro personal médico y de cuidado es el corazón de nuestra casa de reposo." },
      en: { title: "The Role of Medical and Caregiving Staff at Señor de Nazareno", dek: "At Señor de Nazareno, we understand our medical and care staff are the heart of our residence." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "mitos-verdades-cuidado-geriatrico",
      image: "assets/images/blog/cccc.jpg",
      es: { title: "Mitos y verdades sobre el cuidado geriátrico", dek: "Cuando se habla de geriátricos, a menudo surgen ideas preconcebidas que no reflejan la realidad." },
      en: { title: "Myths and Truths About Geriatric Care", dek: "When people talk about residential care, preconceived ideas often come up that don't reflect reality." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "nutricion-adecuada-tercera-edad",
      image: "assets/images/blog/ss.jpg",
      es: { title: "La importancia de una nutrición adecuada en la tercera edad", dek: "En la etapa de la tercera edad, la alimentación juega un papel crucial en mantener la salud y garantizar una buena calidad de vida." },
      en: { title: "The Importance of Proper Nutrition in Older Age", dek: "In older age, diet plays a crucial role in maintaining health and ensuring a good quality of life." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "actividades-recreativas-beneficios",
      image: "assets/images/blog/blog4.jpg",
      es: { title: "Beneficios de las actividades recreativas para adultos mayores", dek: "A medida que las personas envejecen, mantenerse activo no solo es beneficioso para la salud física, sino también para el bienestar emocional y social." },
      en: { title: "Benefits of Recreational Activities for Older Adults", dek: "As people age, staying active benefits not only physical health but also emotional and social well-being." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "consejos-elegir-casa-reposo-lima",
      image: "assets/images/blog/b31.webp",
      es: { title: "Consejos para elegir la mejor casa de reposo en Lima", dek: "Tomar la decisión de ingresar a un ser querido en una casa de reposo es un acto de amor y responsabilidad." },
      en: { title: "Tips for Choosing the Best Residential Home in Lima", dek: "Deciding to place a loved one in residential care is an act of love and responsibility." },
      externalUrl: "https://www.geriatriconazareno.com/blog.php"
    },
    {
      slug: "datos-curiosos-envejecimiento",
      image: "assets/images/blog/111.webp",
      es: { title: "Datos Curiosos sobre Envejecimiento Saludable: Un Viaje de Bienestar y Sabiduría", dek: "El envejecimiento no es un destino, sino un viaje fascinante lleno de posibilidades y aprendizajes." },
      en: { title: "Fun Facts About Healthy Aging: A Journey of Well-Being and Wisdom", dek: "Aging isn't a destination — it's a fascinating journey full of possibility and learning." },
      externalUrl: "https://www.geriatriconazareno.com/datos-curiosos-sobre-envejecimiento-saludable-un-viaje-de-bienestar-y-sabiduria.php"
    }
  ]
};
