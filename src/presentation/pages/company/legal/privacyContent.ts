export type PrivacyTable = {
  headers: [string, string, string]
  rows: [string, string, string][]
}

export type PrivacySection = {
  title: string
  paragraphs: string[]
  table?: PrivacyTable
}

export type PrivacyBundle = {
  badge: string
  pageTitle: string
  firmName: string
  tagline: string
  lastUpdated: string
  disclaimer: string
  sections: PrivacySection[]
}

const es: PrivacyBundle = {
  badge: "Protección de Datos Personales",
  pageTitle: "Aviso de Privacidad Integral",
  firmName: "Stratium Legal — Cumplimiento Legal Corporativo en México",
  tagline: "La ley no espera. Tu empresa tampoco.",
  lastUpdated: "Última actualización: 4 de junio de 2026 — Versión 1.0",
  disclaimer:
    "Este Aviso se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento. Para ejercer tus derechos ARCO escribe a privacidad@stratiumlegal.com.",
  sections: [
    {
      title: "I. Identidad y datos de contacto del responsable",
      paragraphs: [
        "STRATIUM LEGAL (en lo sucesivo, «Stratium», «el Responsable», «Nosotros» o «la Firma»), es una firma de servicios legales corporativos especializada en cumplimiento legal corporativo para empresas en México, que opera bajo un modelo de prestación de servicios 100% remoto (remote-first) conforme al marco legal de los Estados Unidos Mexicanos, y es responsable del tratamiento de sus datos personales de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante, la «LFPDPPP») y su Reglamento.",
        "Stratium opera bajo un modelo de atención completamente digital, sin domicilio físico de atención al público. Todos los servicios se prestan de forma remota, con entrega de documentos en formato digital con plena validez legal. Los canales de contacto del Responsable son:",
        "• Sitio web: https://stratiumlegal.com",
        "• Correo electrónico general: info@stratiumlegal.com",
        "• Correo electrónico para asuntos de privacidad y ejercicio de derechos ARCO: privacidad@stratiumlegal.com",
        "• WhatsApp institucional (disponible en el sitio web)",
        "El presente Aviso de Privacidad Integral tiene como propósito informarle sobre el tratamiento que se dará a sus datos personales cuando estos sean recabados, utilizados, almacenados, transferidos o tratados de cualquier otra forma por Stratium, ya sea a través de nuestro sitio web, formularios de contacto, correo electrónico, WhatsApp o cualquier otra tecnología o medio electrónico.",
      ],
    },
    {
      title: "II. Datos personales que se recaban",
      paragraphs: [
        "Stratium podrá recabar y tratar las siguientes categorías de datos personales, dependiendo del plan de servicio contratado (Starter, Cumplimiento Mensual o Soft Landing) y la relación jurídica que se establezca:",
        "A. Datos de identificación",
        "• Nombre completo (nombres y apellidos) de los socios, accionistas, administradores y representantes legales.",
        "• Razón social o denominación de la persona moral que el titular represente o en cuyo beneficio se contraten los servicios.",
        "• Registro Federal de Contribuyentes (RFC) y Cédula de Identificación Fiscal del cliente.",
        "• Clave Única de Registro de Población (CURP) del cliente.",
        "• Número de identificación oficial (INE/IFE, pasaporte, cédula profesional u otra identificación válida vigente).",
        "• Nacionalidad, lugar de nacimiento y fecha de nacimiento.",
        "• Estado civil.",
        "• Datos migratorios (en el caso de personas físicas extranjeras vinculadas al servicio de Soft Landing).",
        "B. Datos de contacto",
        "• Domicilio particular y/o fiscal del cliente.",
        "• Número de teléfono fijo y móvil.",
        "• Correo electrónico personal y/o corporativo.",
        "• Número de WhatsApp.",
        "• Datos de contacto de representantes legales, apoderados o personas autorizadas.",
        "C. Datos laborales y profesionales",
        "• Cargo, puesto o función que desempeña el titular dentro de la organización del cliente.",
        "• Nombre de la empresa o entidad para la que labora.",
        "• Cédula profesional (cuando sea relevante para la prestación de los servicios).",
        "• Datos del personal del cliente necesarios para la gestión laboral en el marco del Plan Cumplimiento Mensual (contratos de trabajo, altas y bajas ante el IMSS, información de seguridad social).",
        "• Información migratoria y laboral de personal extranjero (en el marco del Plan Soft Landing).",
        "D. Datos patrimoniales y financieros",
        "• Datos bancarios para facturación y pago de servicios (CLABE interbancaria, número de cuenta, institución bancaria).",
        "• Información fiscal complementaria para la emisión de comprobantes fiscales digitales por Internet (CFDI).",
        "• Régimen fiscal y domicilio fiscal del cliente.",
        "• Estructura accionaria, aportaciones de capital y variaciones de capital social (necesarios para la elaboración de libros corporativos y actas de asamblea).",
        "• Información sobre la situación patrimonial del cliente cuando sea estrictamente necesaria para el servicio contratado (por ejemplo, en diagnósticos de viabilidad legal del Plan Soft Landing o en regularizaciones corporativas).",
        "E. Datos sensibles",
        "Como regla general, Stratium no recaba datos personales sensibles. Sin embargo, en situaciones excepcionales derivadas de la naturaleza del servicio legal contratado, podría ser necesario el tratamiento de datos sensibles, por ejemplo: información de salud de trabajadores del cliente en el marco de la gestión laboral del Plan Cumplimiento Mensual (altas ante el IMSS), datos relativos al origen nacional o estatus migratorio en el marco del Plan Soft Landing, o antecedentes penales de directivos cuando la legislación de prevención de lavado de dinero así lo requiera. En todos los casos, Stratium solicitará el consentimiento expreso y por escrito del titular conforme al artículo 9 de la LFPDPPP, y dichos datos serán tratados con medidas de seguridad reforzadas.",
        "F. Datos recabados de manera automática",
        "Cuando usted accede a nuestro sitio web (https://stratiumlegal.com), podremos recabar de manera automática:",
        "• Dirección IP y tipo de navegador.",
        "• Sistema operativo y tipo de dispositivo utilizado.",
        "• Páginas visitadas, tiempo de permanencia, fuente de tráfico y patrones de navegación.",
        "• Datos de cookies y tecnologías de rastreo similares (web beacons, pixel tags, scripts de analítica).",
        "• Datos de geolocalización aproximada.",
        "• Identificadores únicos de dispositivos.",
        "• Datos proporcionados voluntariamente a través de los formularios de contacto y consulta gratuita del sitio web (nombre, correo electrónico, tipo de servicio requerido, mensaje).",
      ],
    },
    {
      title: "III. Finalidades del tratamiento",
      paragraphs: [
        "A. Finalidades primarias (necesarias para la relación jurídica)",
        "• Prestación de los servicios legales corporativos contratados conforme al plan seleccionado por el Cliente: constitución de sociedades mercantiles y civiles, elaboración y actualización de libros corporativos, celebración de asambleas de accionistas, regularización corporativa, cambios societarios, mantenimiento anual y acompañamiento integral a empresas extranjeras.",
        "• Identificación y verificación de la identidad del cliente, sus socios, accionistas, administradores y representantes legales.",
        "• Celebración, cumplimiento y administración del contrato de prestación de servicios profesionales y la Propuesta de Servicios correspondiente.",
        "• Redacción de actas constitutivas, estatutos sociales, actas de asamblea ordinarias y extraordinarias, libros corporativos (libro de registro de acciones, libro de actas de asamblea, libro de variaciones de capital), contratos individuales de trabajo, reglamentos interiores de trabajo y demás documentación legal corporativa.",
        "• Gestión de trámites ante autoridades y registros públicos, incluyendo: Registro Público de Comercio, Servicio de Administración Tributaria (SAT), Instituto Mexicano del Seguro Social (IMSS), Instituto del Fondo Nacional de la Vivienda para los Trabajadores (INFONAVIT), Instituto Mexicano de la Propiedad Industrial (IMPI), Instituto Nacional del Derecho de Autor (INDAUTOR) e Instituto Nacional de Migración (INM).",
        "• Facturación, cobranza y gestión de pagos por los servicios proporcionados, incluyendo la emisión de CFDI.",
        "• Cumplimiento de obligaciones fiscales, contables y regulatorias aplicables a Stratium conforme al CFF y demás legislación fiscal vigente.",
        "• Comunicación con el cliente a través de correo electrónico, WhatsApp y la plataforma digital para la gestión de los asuntos encomendados, incluyendo la entrega de propuestas en 24 horas.",
        "• Gestión laboral integral: elaboración de contratos de trabajo, altas, bajas y modificaciones ante el IMSS, elaboración de reglamentos interiores de trabajo y códigos de conducta (Plan Cumplimiento Mensual).",
        "• Asesoría sobre régimen fiscal aplicable a inversionistas y empresas extranjeras, acompañamiento en apertura bancaria, gestión de poderes notariales y orientación en regulación laboral y migratoria (Plan Soft Landing).",
        "• Cumplimiento de obligaciones en materia de prevención de lavado de dinero y financiamiento al terrorismo.",
        "• Atención de solicitudes de consulta gratuita realizadas a través del sitio web o WhatsApp.",
        "• Archivo, conservación y resguardo de expedientes legales digitales conforme a las disposiciones aplicables.",
        "B. Finalidades secundarias (no necesarias)",
        "• Envío de boletines informativos, alertas legales, actualizaciones regulatorias y recordatorios de obligaciones legales (asambleas, renovación de poderes, vencimientos de contratos, presentaciones ante autoridades).",
        "• Invitaciones a eventos, seminarios, webinars y actividades de capacitación organizadas por Stratium.",
        "• Evaluación de la calidad de los servicios prestados mediante encuestas de satisfacción.",
        "• Elaboración de estadísticas internas y análisis de mercado para la mejora continua de los servicios.",
        "• Mercadotecnia y publicidad de los servicios de Stratium.",
        "Si usted no desea que sus datos personales sean tratados para las finalidades secundarias, puede manifestar su negativa enviando un correo electrónico a privacidad@stratiumlegal.com con el asunto «Negativa finalidades secundarias». La negativa no podrá ser motivo para negarle los servicios legales que solicita o contrata.",
      ],
    },
    {
      title: "IV. Transferencias de datos personales",
      paragraphs: [
        "Stratium podrá transferir sus datos personales a los siguientes terceros, nacionales o internacionales, para las finalidades que se indican:",
        "En caso de que los datos personales sean transferidos a terceros ubicados fuera de México (por ejemplo, en el marco del Plan Soft Landing para la coordinación con asesores de la empresa extranjera en su país de origen), Stratium se asegurará de que dichos terceros asuman las mismas obligaciones de protección de datos que corresponden al Responsable, de conformidad con los artículos 36 y 37 de la LFPDPPP.",
      ],
      table: {
        headers: ["Destinatario", "Finalidad", "Consentimiento"],
        rows: [
          [
            "Autoridades judiciales, administrativas, fiscales y regulatorias (SAT, IMSS, INFONAVIT, INM)",
            "Cumplimiento de obligaciones legales, requerimientos oficiales, inscripciones y trámites obligatorios",
            "No requerido (art. 37, fr. II, LFPDPPP)",
          ],
          [
            "Notarios públicos y corredores públicos",
            "Formalización de actos jurídicos: constitución de sociedades, protocolización de actas, otorgamiento de poderes notariales",
            "No requerido (art. 37, fr. VII, LFPDPPP)",
          ],
          [
            "Registro Público de Comercio, IMPI, INDAUTOR",
            "Inscripción de sociedades, registro de marcas, patentes y derechos de autor",
            "No requerido (art. 37, fr. II, LFPDPPP)",
          ],
          [
            "Instituto Nacional de Migración (INM)",
            "Gestiones migratorias para personal extranjero (Plan Soft Landing)",
            "No requerido (art. 37, fr. II, LFPDPPP)",
          ],
          [
            "IMSS, INFONAVIT, SAR",
            "Altas, bajas y modificaciones de trabajadores del cliente (Plan Cumplimiento Mensual)",
            "No requerido (art. 37, fr. II, LFPDPPP)",
          ],
          [
            "Instituciones financieras y bancarias",
            "Procesamiento de pagos, facturación, acompañamiento en apertura de cuenta bancaria corporativa (Plan Soft Landing)",
            "No requerido (art. 37, fr. VII, LFPDPPP)",
          ],
          [
            "Proveedores de servicios tecnológicos (almacenamiento en la nube, firma electrónica, gestión documental, analítica web)",
            "Operación segura de la Firma, almacenamiento y gestión eficiente de la información del cliente, análisis de uso del sitio web",
            "No requerido (art. 37, fr. VII, LFPDPPP)",
          ],
          [
            "Consultores fiscales, contables y migratorios externos",
            "Apoyo especializado en la prestación de servicios, particularmente en materia fiscal para extranjeros y cumplimiento fiscal-corporativo",
            "Requiere consentimiento expreso",
          ],
          [
            "Abogados corresponsales y especialistas externos",
            "Prestación integral de servicios legales que requieran conocimiento especializado fuera del ámbito corporativo",
            "Requiere consentimiento expreso",
          ],
        ],
      },
    },
    {
      title: "V. Mecanismos y medios para ejercer derechos ARCO",
      paragraphs: [
        "Usted o su representante legal tienen derecho a ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO) respecto de sus datos personales, así como a revocar el consentimiento otorgado para su tratamiento, de conformidad con los artículos 28 al 35 de la LFPDPPP y los correlativos de su Reglamento.",
        "Para el ejercicio de cualquiera de estos derechos, usted deberá presentar una solicitud por medios electrónicos, dirigida al área de Protección de Datos Personales de Stratium:",
        "• Correo electrónico: info@stratiumlegal.com",
        "• Asunto sugerido: «Ejercicio de derechos ARCO — [Nombre del titular]»",
        "La solicitud deberá contener:",
        "I. Nombre completo del titular y correo electrónico u otro medio electrónico para comunicarle la respuesta.",
        "II. Copia digitalizada de documento oficial vigente que acredite la identidad del titular (y, en su caso, del representante legal, acompañado del instrumento que acredite la representación).",
        "III. Descripción clara y precisa de los datos personales respecto de los cuales se busca ejercer alguno de los derechos ARCO.",
        "IV. Cualquier otro elemento o documento que facilite la localización de los datos personales.",
        "V. En caso de solicitudes de rectificación, la indicación de las modificaciones a realizarse y la documentación que sustente la petición.",
        "Stratium dará respuesta en un plazo máximo de veinte (20) días hábiles contados a partir de la recepción de la solicitud completa. Este plazo podrá ampliarse por otros veinte (20) días hábiles en los casos previstos por la LFPDPPP. En caso de resultar procedente, la solicitud se hará efectiva dentro de los quince (15) días hábiles siguientes a la comunicación de la respuesta.",
      ],
    },
    {
      title: "VI. Mecanismos para revocar el consentimiento",
      paragraphs: [
        "Usted podrá revocar su consentimiento para el tratamiento de sus datos personales en cualquier momento, sin efectos retroactivos, enviando su solicitud a privacidad@stratiumlegal.com. Su solicitud deberá indicar si la revocación es total o parcial, especificando las finalidades respecto de las cuales desea revocar su consentimiento.",
        "La revocación podría implicar la imposibilidad de continuar con la prestación de los servicios legales contratados o la gestión de trámites en curso. Stratium podrá conservar los datos personales cuando exista obligación legal de retención (por ejemplo, la obligación de conservación de documentación corporativa por diez años conforme al artículo 38 del Código de Comercio) o cuando sea necesario para el ejercicio o la defensa de reclamaciones legales.",
      ],
    },
    {
      title: "VII. Opciones y medios para limitar el uso o divulgación de datos",
      paragraphs: [
        "Si desea limitar el uso o divulgación de sus datos personales, puede enviar su solicitud al correo electrónico info@stratiumlegal.com, indicando de forma específica las limitaciones que desea imponer.",
        "Si no desea recibir comunicaciones comerciales, boletines o material promocional, podrá solicitar su inscripción en nuestra lista de exclusión enviando un correo a info@stratiumlegal.com con el asunto «Lista de exclusión».",
      ],
    },
    {
      title: "VIII. Uso de cookies y tecnologías de rastreo",
      paragraphs: [
        "El sitio web de Stratium (https://stratiumlegal.com) utiliza cookies y tecnologías similares para recopilar información sobre su actividad de navegación, mejorar su experiencia de usuario, personalizar el contenido y realizar análisis estadísticos del tráfico web.",
        "Los tipos de cookies que utilizamos son:",
        "• Cookies esenciales: necesarias para el funcionamiento básico del sitio web, la seguridad de la sesión y el correcto despliegue de los formularios de contacto y consulta gratuita. No pueden desactivarse.",
        "• Cookies de rendimiento y analíticas: recopilan información anónima sobre cómo los visitantes utilizan el sitio web, incluyendo fuente de tráfico, páginas más visitadas y tiempo de permanencia. Pueden incluir herramientas de analítica de terceros.",
        "• Cookies de funcionalidad: permiten recordar las preferencias del usuario, como el idioma seleccionado (español u otros idiomas disponibles en el sitio).",
        "Usted puede deshabilitar o eliminar las cookies a través de la configuración de su navegador de internet. La deshabilitación de cookies esenciales podría afectar el funcionamiento del sitio web y limitar el acceso a los formularios de contacto.",
      ],
    },
    {
      title: "IX. Medidas de seguridad",
      paragraphs: [
        "Stratium implementa y mantiene medidas de seguridad administrativas, técnicas y físicas rigurosas para proteger sus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado, en cumplimiento de los artículos 19 de la LFPDPPP y 60 de su Reglamento. Entre las medidas implementadas se encuentran:",
        "• Cifrado de datos personales en tránsito y en reposo mediante protocolos de estándar industrial (TLS/SSL, AES-256).",
        "• Control de acceso basado en roles y autenticación multifactor para el acceso a sistemas que contienen datos personales y expedientes digitales de clientes.",
        "• Políticas internas de privacidad y capacitación continua del equipo legal (actualmente integrado por los Lics. Diego Lazcano, Esteban Santiago Viñas Caballero y Diego Solano García) en materia de protección de datos.",
        "• Acuerdos de confidencialidad con todos los colaboradores, socios, prestadores de servicios y terceros que tengan acceso a datos personales.",
        "• Evaluaciones periódicas de riesgos y vulnerabilidades en los sistemas de información y plataformas digitales.",
        "• Procedimientos documentados de respuesta a incidentes de seguridad y notificación de vulneraciones.",
        "• Respaldos periódicos de la información y planes de recuperación ante desastres.",
        "• Almacenamiento seguro de expedientes digitales con acceso restringido y trazabilidad de acceso.",
      ],
    },
    {
      title: "X. Procedimiento de notificación de vulneraciones",
      paragraphs: [
        "En caso de que ocurra una vulneración de seguridad que afecte de forma significativa los derechos patrimoniales o morales de los titulares, Stratium informará de manera inmediata al titular afectado, de conformidad con el artículo 20 de la LFPDPPP. La notificación incluirá al menos:",
        "• La naturaleza del incidente de seguridad.",
        "• Los datos personales comprometidos.",
        "• Las acciones correctivas realizadas de forma inmediata.",
        "• Las recomendaciones al titular para proteger sus intereses.",
        "• Los medios de contacto para obtener mayor información (info@stratiumlegal.com y privacidad@stratiumlegal.com).",
      ],
    },
    {
      title: "XI. Derecho a presentar quejas ante el INAI",
      paragraphs: [
        "Si usted considera que su derecho a la protección de datos personales ha sido vulnerado por alguna conducta u omisión de Stratium, podrá interponer la queja o denuncia correspondiente ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI), a través de su sitio web www.inai.org.mx o al teléfono 800 835 4324.",
      ],
    },
    {
      title: "XII. Modificaciones al aviso de privacidad",
      paragraphs: [
        "Stratium se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento. Cualquier modificación se hará de su conocimiento a través de:",
        "• Publicación de la versión actualizada en nuestro sitio web: https://stratiumlegal.com/privacidad",
        "• Comunicación directa vía correo electrónico a la dirección que el titular haya proporcionado.",
        "Le recomendamos revisar periódicamente el contenido del presente Aviso de Privacidad para estar informado sobre cómo protegemos y tratamos sus datos personales.",
      ],
    },
    {
      title: "XIII. Consentimiento",
      paragraphs: [
        "Al proporcionar sus datos personales a Stratium, ya sea a través de nuestro sitio web, formularios de consulta gratuita, correo electrónico, WhatsApp o cualquier otro medio electrónico, y al no manifestar oposición al presente Aviso de Privacidad, usted consiente que sus datos personales sean tratados conforme a los términos aquí establecidos.",
        "Para el tratamiento de datos personales sensibles, o en los casos en que así lo requiera la legislación aplicable, Stratium recabará su consentimiento expreso y por escrito mediante el formato correspondiente.",
      ],
    },
    {
      title: "XIV. Legislación aplicable y jurisdicción",
      paragraphs: [
        "El presente Aviso de Privacidad se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento, los Lineamientos del Aviso de Privacidad y demás disposiciones aplicables vigentes en los Estados Unidos Mexicanos. Para la interpretación y cumplimiento del presente Aviso, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que por razón de domicilio presente o futuro pudiera corresponderles.",
      ],
    },
  ],
}

/**
 * Por ahora el Aviso de Privacidad solo está disponible en español.
 * La firma del getter se mantiene por consistencia con `getTermsFictionalContent`;
 * cuando existan traducciones, basta con añadir los bundles y ramificar por `locale`.
 */
export function getPrivacyContent(_locale: string): PrivacyBundle {
  return es
}
