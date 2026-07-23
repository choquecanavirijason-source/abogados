export type TermsSection = {
  title: string
  paragraphs: string[]
}

export type TermsBundle = {
  badge: string
  pageTitle: string
  firmName: string
  tagline: string
  lastUpdated: string
  disclaimer: string
  downloadLabel: string
  downloadUrl: string
  sections: TermsSection[]
}

const DOWNLOAD_URL = "/docs/terminosycondiciones.pdf"

const es: TermsBundle = {
  badge: "Cumplimiento Legal Corporativo",
  pageTitle: "Términos y condiciones",
  firmName: "Stratium Legal — Prestación de servicios legales corporativos",
  tagline: "La ley no espera. Tu empresa tampoco.",
  lastUpdated: "Última actualización: 23 de julio de 2026 — Versión 2.0",
  disclaimer:
    "Los contenidos del sitio web, incluyendo la información sobre obligaciones legales derivadas de la LGSM, el CFF y el Código de Comercio, las referencias a artículos específicos y las cifras de multas, se proporcionan con fines informativos y no constituyen asesoría legal. Cada situación requiere análisis particular.",
  downloadLabel: "Descargar PDF",
  downloadUrl: DOWNLOAD_URL,
  sections: [
    {
      title: "1. Definiciones",
      paragraphs: [
        "Para efectos de los presentes Términos y Condiciones (en adelante, los «Términos»), los siguientes conceptos tendrán el significado que a continuación se les atribuye:",
        "«Stratium Legal» o «la Firma»: Firma de servicios legales corporativos especializada en cumplimiento legal corporativo para empresas en México, que opera bajo un modelo 100% remoto (remote-first), con presencia digital en https://stratiumlegal.com. La Firma está integrada por los socios Lic. Diego Lazcano, Lic. Esteban Santiago Viñas Caballero y Lic. Diego Solano García.",
        "«Cliente»: Toda persona física o moral, nacional o extranjera, que contrate, solicite o utilice los servicios legales proporcionados por Stratium Legal, ya sea directamente o a través de sus representantes legales, apoderados o personas autorizadas.",
        "«Servicios»: El conjunto de servicios de asesoría, consultoría, gestión y asistencia legal corporativa que Stratium Legal ofrece, organizados en los planes Starter, Cumplimiento Mensual y Soft Landing, así como los servicios adicionales descritos en la Cláusula Tercera.",
        "«Propuesta de Servicios»: Documento específico con alcance, entregables, condiciones económicas y plazos del servicio particular contratado por el Cliente, enviado dentro de las 24 horas siguientes a la solicitud de cotización. Forma parte integral de los presentes Términos.",
        "«Plataforma»: El sitio web de Stratium Legal ubicado en https://stratiumlegal.com, incluyendo los formularios de contacto, el formulario de consulta gratuita, el canal de WhatsApp, así como cualquier portal de clientes o medio electrónico operado por la Firma.",
        "«Información Confidencial»: Toda información, documentos, datos, estrategias, secretos industriales, secretos profesionales, estructura accionaria, información financiera y cualquier otro dato de naturaleza reservada que sea compartido entre las Partes con motivo de la relación profesional.",
        "«Partes»: Stratium Legal y el Cliente, conjuntamente.",
        "«Día Hábil»: Cualquier día del calendario en que las instituciones bancarias operan normalmente en la Ciudad de México.",
        "«LGSM»: Ley General de Sociedades Mercantiles.",
        "«CFF»: Código Fiscal de la Federación.",
        "«Código de Comercio»: Código de Comercio de los Estados Unidos Mexicanos.",
      ],
    },
    {
      title: "2. Objeto y aceptación",
      paragraphs: [
        "Los presentes Términos regulan la relación entre Stratium Legal y el Cliente respecto de la prestación de servicios legales corporativos, el uso de la Plataforma y cualquier interacción profesional entre las Partes.",
        "Al contratar los Servicios de Stratium Legal, al firmar o aceptar electrónicamente una Propuesta de Servicios, al realizar cualquier pago, al utilizar la Plataforma, al enviar información a través de los formularios de contacto o consulta gratuita, o al comunicarse con la Firma vía correo electrónico o WhatsApp, el Cliente manifiesta su aceptación expresa e incondicional de los presentes Términos en su totalidad. Si el Cliente no está de acuerdo, deberá abstenerse de contratar los Servicios y de utilizar la Plataforma.",
        "Los presentes Términos complementan, mas no sustituyen, la Propuesta de Servicios específica que se formalice para cada asunto. En caso de contradicción, prevalecerán las disposiciones de la Propuesta de Servicios.",
      ],
    },
    {
      title: "3. Descripción de los servicios y planes",
      paragraphs: [
        "Stratium Legal ofrece servicios legales corporativos especializados en el cumplimiento de las obligaciones establecidas por la LGSM, el CFF y el Código de Comercio para toda persona moral en México. Los servicios cubren el ciclo de vida corporativo completo, desde la constitución de la empresa hasta su mantenimiento anual continuo, y se organizan en los siguientes planes. Las condiciones económicas de cada plan se determinan mediante cotización personalizada conforme al procedimiento descrito en la Cláusula Cuarta.",
        "3.1 Plan Starter — Fundación",
        "Diseñado para emprendedores y empresas que buscan iniciar con bases legales sólidas desde el día uno. Incluye:",
        "• Constitución de sociedad mercantil (S.A. de C.V., S. de R.L. de C.V. u otra figura contemplada en la LGSM), incluyendo redacción de acta constitutiva y estatutos sociales.",
        "• Elaboración de libros corporativos iniciales: libro de registro de acciones o partes sociales (art. 128 LGSM), libro de actas de asambleas (art. 194 LGSM) y libro de variaciones de capital.",
        "• Registro de accionistas o socios fundadores con sus respectivas aportaciones de capital.",
        "• Redacción de la primera acta de asamblea constitutiva.",
        "• Entrega digital completa de toda la documentación corporativa, con plena validez legal, lista para auditoría, banco o notario.",
        "No incluye: inscripción ante el SAT (alta en RFC de la sociedad), trámites de apertura bancaria, registro de marca ante el IMPI, gastos notariales, derechos del Registro Público de Comercio ni asesoría fiscal. Estos servicios podrán contratarse de manera adicional.",
        "3.2 Plan Cumplimiento Mensual — Abogado in-house virtual",
        "Funciona como un abogado corporativo in-house sin los costos de uno. Cubre las obligaciones corporativas y laborales de la empresa de forma continua, mediante suscripción periódica. Incluye:",
        "• Preparación y formalización de la asamblea ordinaria anual de accionistas o socios (art. 178, 181 LGSM), incluyendo la actualización de todos los libros corporativos.",
        "• Revisión y actualización de poderes y apoderados legales de la sociedad.",
        "• Asesoría corporativa continua en materia de contratos mercantiles y civiles, modificaciones estatutarias, acuerdos entre socios y gobierno corporativo.",
        "• Gestión laboral integral: redacción de contratos individuales de trabajo, altas y bajas ante el IMSS, elaboración de reglamentos interiores de trabajo y códigos de conducta.",
        "• Revisión de obligaciones fiscales-corporativas y coordinación con el contador del Cliente para asegurar cumplimiento oportuno.",
        "• Soporte prioritario con tiempo de respuesta máximo de veinticuatro (24) horas en Días Hábiles.",
        "• Sistema de recordatorios de obligaciones legales periódicas: asambleas, renovación de poderes, presentaciones ante autoridades, vencimientos de contratos y demás obligaciones derivadas de la LGSM, el CFF y el Código de Comercio.",
        "La suscripción se renueva automáticamente cada periodo salvo que el Cliente notifique su cancelación con al menos quince (15) días naturales de anticipación al inicio del siguiente periodo, conforme a la Cláusula Décima Segunda.",
        "No incluye: representación ante autoridades judiciales o administrativas en litigios, gestiones migratorias, registro de marcas, opiniones legales formales sobre operaciones extraordinarias (M&A, reestructuraciones) ni servicios de auditoría fiscal.",
        "3.3 Plan Soft Landing — Empresas extranjeras",
        "Diseñado para empresas extranjeras que buscan establecerse en México de forma segura, eficiente y conforme a la legislación mexicana. Incluye:",
        "• Diagnóstico de viabilidad legal y recomendación de la estructura societaria óptima para operar en México.",
        "• Constitución de sociedad mexicana (S.A. de C.V., S.A.P.I. de C.V. u otra forma societaria adecuada) ante fedatario público.",
        "• Elaboración de libros corporativos y registro inicial de socios o accionistas.",
        "• Asesoría sobre el régimen fiscal aplicable a inversionistas y empresas extranjeras en México, en coordinación con asesores fiscales del Cliente o referidos por Stratium Legal.",
        "• Acompañamiento en el proceso de apertura de cuenta bancaria corporativa en México.",
        "• Gestión de poderes notariales para representantes legales en territorio mexicano.",
        "• Orientación general en materia de regulación laboral mexicana y requisitos migratorios para personal extranjero.",
        "No incluye: trámites migratorios directos (visas, permisos de trabajo), asesoría fiscal detallada, auditoría de la empresa extranjera ni representación ante autoridades migratorias.",
        "3.4 Servicios adicionales y especializados",
        "Además de los planes descritos, Stratium Legal ofrece los siguientes servicios que pueden contratarse de forma independiente o complementaria:",
        "• Regularización corporativa: reconstrucción del historial corporativo completo para empresas que llevan años sin actualizar libros, actas o registros. Incluye puesta al día conforme a la LGSM y el CFF.",
        "• Cambios societarios: entrada y salida de socios, aumentos y disminuciones de capital, cambio de administrador único o consejo de administración, modificación de estatutos sociales y demás actos societarios contemplados en la LGSM.",
        "• Asambleas extraordinarias de accionistas: convocatoria, acta, registro en libros corporativos y, en su caso, protocolización notarial e inscripción registral.",
        "• Servicios de propiedad intelectual, fusiones y adquisiciones, debida diligencia y contratos especializados.",
        "El alcance, entregables y condiciones económicas de estos servicios se establecerán en la Propuesta de Servicios correspondiente, la cual se entrega al Cliente dentro de las 24 horas siguientes a la solicitud.",
      ],
    },
    {
      title: "4. Proceso de contratación",
      paragraphs: [
        "La contratación de los Servicios de Stratium Legal sigue el siguiente proceso:",
        "1. Cotización en línea: el Cliente comunica sus necesidades a través del formulario del sitio web, correo electrónico (info@stratiumlegal.com) o WhatsApp institucional.",
        "2. Propuesta en 24 horas: Stratium Legal envía al Cliente una Propuesta de Servicios con alcance, entregables y condiciones económicas cerradas, sin letras chiquitas, sin costos ocultos y sin compromisos previos.",
        "3. Aceptación y pago: el Cliente acepta la Propuesta de Servicios y realiza el pago correspondiente conforme a las condiciones del plan contratado.",
        "4. Documentos entregados: Stratium Legal entrega la documentación en formato digital con plena validez legal, lista para auditoría, banco o notario desde el primer día.",
        "La consulta inicial es completamente gratuita y no genera compromiso alguno para el Cliente. Stratium Legal se compromete a responder en menos de 24 horas y a no enviar spam.",
      ],
    },
    {
      title: "5. Obligaciones del Cliente",
      paragraphs: [
        "El Cliente se obliga a:",
        "1. Proporcionar a Stratium Legal, de manera oportuna, veraz, completa y suficiente, toda la información, documentación y elementos necesarios para la adecuada prestación de los Servicios, incluyendo: datos de socios y accionistas, información fiscal, estructura accionaria, actas previas, libros corporativos existentes y demás documentación societaria.",
        "2. Informar a Stratium Legal de manera inmediata sobre cualquier cambio en su situación jurídica, corporativa, fiscal o de cualquier otra naturaleza que pueda afectar la prestación de los Servicios.",
        "3. Cubrir oportunamente los honorarios y gastos pactados, conforme a los plazos y condiciones del plan contratado y de la Propuesta de Servicios.",
        "4. Colaborar activamente con el equipo legal de Stratium en el desarrollo de los asuntos encomendados, atendiendo las solicitudes de información y las recomendaciones legales formuladas.",
        "5. No utilizar los Servicios, opiniones legales, documentación corporativa ni entregables producidos por Stratium Legal para fines ilícitos, fraudulentos o contrarios a la legislación aplicable.",
        "6. Respetar las disposiciones de confidencialidad establecidas en los presentes Términos y en la Propuesta de Servicios.",
        "7. Designar un punto de contacto autorizado para la comunicación con Stratium Legal.",
        "8. Obtener las autorizaciones corporativas internas necesarias para la contratación de los Servicios y la toma de decisiones respecto de los asuntos legales encomendados.",
      ],
    },
    {
      title: "6. Obligaciones de Stratium Legal",
      paragraphs: [
        "Stratium Legal se obliga a:",
        "1. Prestar los Servicios con la diligencia, pericia, profesionalismo y ética que exige la práctica del derecho corporativo, conforme a la LGSM, el CFF, el Código de Comercio y demás legislación aplicable.",
        "2. Asignar al asunto del Cliente abogados con la experiencia y especialización adecuadas, dentro del equipo integrado por los Lics. Diego Lazcano (corporativo, contratos y cadena de suministro), Esteban Santiago Viñas Caballero (corporativo, civil y práctica notarial) y Diego Solano García (sociedades mercantiles y franquicias).",
        "3. Entregar la Propuesta de Servicios dentro de las veinticuatro (24) horas siguientes a la solicitud de cotización, con alcance, entregables y condiciones económicas cerradas.",
        "4. Mantener al Cliente informado de manera oportuna sobre el avance de los asuntos encomendados.",
        "5. Entregar toda la documentación en formato digital con plena validez legal.",
        "6. Guardar estricta confidencialidad respecto de toda la Información Confidencial del Cliente, en los términos de la Cláusula Décima.",
        "7. Observar las normas de ética profesional, incluyendo los deberes de lealtad, independencia y secreto profesional.",
        "8. Cumplir con los tiempos de respuesta comprometidos en cada plan de servicio (24 horas en el Plan Cumplimiento Mensual).",
        "9. Identificar y comunicar oportunamente al Cliente cualquier conflicto de interés real o potencial.",
      ],
    },
    {
      title: "7. Honorarios y condiciones de pago",
      paragraphs: [
        "7.1 Determinación de honorarios",
        "Los honorarios correspondientes a cada plan y servicio se determinan mediante cotización personalizada, conforme al proceso descrito en la Cláusula Cuarta. Stratium Legal envía al Cliente una Propuesta de Servicios con condiciones económicas cerradas dentro de las veinticuatro (24) horas siguientes a la solicitud, sin letras chiquitas ni costos ocultos.",
        "Los honorarios cotizados no incluyen el Impuesto al Valor Agregado (IVA), el cual será trasladado al Cliente conforme a la legislación fiscal vigente. Los honorarios cubren asesoría personalizada y entrega digital con plena validez legal. Stratium Legal se reserva el derecho de actualizar sus honorarios para nuevas contrataciones, sin que ello afecte servicios ya contratados y pagados conforme a una Propuesta de Servicios vigente.",
        "7.2 Gastos reembolsables",
        "El Cliente cubrirá los gastos razonables y documentados, incluyendo:",
        "• Derechos y contribuciones gubernamentales (Registro Público de Comercio, SAT, IMPI, INM, IMSS, entre otros).",
        "• Gastos notariales y de corredoría pública.",
        "• Servicios de traducción, legalización y apostilla de documentos.",
        "• Gastos de mensajería y envío físico de documentos (cuando aplique).",
        "• Honorarios de consultores externos autorizados previamente por el Cliente.",
        "Los gastos reembolsables serán cotizados y comunicados al Cliente antes de incurrirse en ellos. No hay costos ocultos.",
        "7.3 Facturación y pago",
        "• Stratium Legal emitirá CFDI conforme a la legislación fiscal vigente.",
        "• El pago de los Planes Starter y Soft Landing se realiza previo a la prestación del servicio, salvo pago por etapas pactado en la Propuesta de Servicios.",
        "• El pago del Plan Cumplimiento Mensual se realiza dentro de los cinco (5) días naturales siguientes al inicio de cada periodo.",
        "• Los pagos se realizan mediante transferencia electrónica a la cuenta que Stratium Legal designe.",
        "• Todos los honorarios se expresan y liquidan en Pesos Mexicanos (MXN).",
        "7.4 Mora en el pago",
        "En caso de mora, se generarán intereses moratorios a una tasa equivalente al doble de la TIIE a 28 días vigente a la fecha de vencimiento, por día de atraso sobre el saldo insoluto. Stratium Legal podrá suspender los Servicios si el atraso excede quince (15) días naturales, previa notificación al Cliente con al menos cinco (5) Días Hábiles de anticipación.",
      ],
    },
    {
      title: "8. Propiedad intelectual",
      paragraphs: [
        "8.1 Propiedad del trabajo. Los documentos, actas constitutivas, estatutos, libros corporativos, actas de asamblea, contratos, opiniones legales y demás entregables producidos por Stratium Legal serán propiedad del Cliente una vez liquidados los honorarios correspondientes.",
        "8.2 Propiedad intelectual de la Firma. Stratium Legal conserva la titularidad de sus metodologías, modelos, plantillas, formatos, bases de datos de precedentes, herramientas de análisis, know-how profesional, marca, logotipo y contenido del sitio web. El Cliente no adquiere ningún derecho sobre estos activos.",
        "8.3 Licencia de uso. El Cliente recibe una licencia no exclusiva, intransferible y limitada para utilizar los entregables exclusivamente para los fines corporativos para los cuales fueron elaborados.",
      ],
    },
    {
      title: "9. Limitación de responsabilidad",
      paragraphs: [
        "9.1 Obligación de medios. La obligación de Stratium Legal es de medios y no de resultados. La Firma se compromete a prestar los Servicios con debida diligencia, pericia y profesionalismo, pero no garantiza un resultado específico, sentencia favorable, aprobación regulatoria ni la consecución de ningún objetivo particular.",
        "9.2 Límites. Salvo dolo, mala fe o negligencia grave, la responsabilidad total y acumulada de Stratium Legal no excederá el monto de los honorarios efectivamente pagados por el Cliente durante los doce (12) meses anteriores al evento que origine la reclamación.",
        "9.3 Exclusiones. Stratium Legal no será responsable por:",
        "• Daños indirectos, incidentales, consecuentes, punitivos o especiales, incluyendo pérdida de utilidades o daño reputacional.",
        "• Resultados adversos derivados de información incompleta, inexacta o extemporánea proporcionada por el Cliente.",
        "• Decisiones del Cliente contrarias a las recomendaciones de la Firma.",
        "• Cambios legislativos, regulatorios o jurisprudenciales posteriores a la prestación del servicio.",
        "• Actos u omisiones de terceros: autoridades, contrapartes, notarios, corredores, registros públicos.",
        "• Eventos de caso fortuito o fuerza mayor.",
        "• Multas o sanciones derivadas de incumplimientos previos a la contratación de los Servicios conforme al artículo 83 del CFF, cuya regularización es objeto de los Servicios pero cuya imposición depende exclusivamente de las autoridades fiscales.",
      ],
    },
    {
      title: "10. Secreto profesional y confidencialidad",
      paragraphs: [
        "10.1 Secreto profesional. Stratium Legal observa rigurosamente el secreto profesional abogado-cliente. Toda información comunicada por el Cliente es privilegiada y confidencial. La Firma no la revelará a terceros sin autorización expresa, salvo obligación legal imperativa, en cuyo caso informará al Cliente de manera inmediata en la medida en que la ley lo permita.",
        "10.2 Obligación de confidencialidad. Ambas Partes se obligan a mantener estricta confidencialidad respecto de toda la Información Confidencial, y a no divulgarla sin autorización previa y por escrito de la otra Parte.",
        "10.3 Excepciones. No se considerará Información Confidencial aquella que: a) sea o se convierta en información de dominio público sin incumplimiento de la Parte receptora; b) haya sido conocida previamente por la Parte receptora sin obligación de confidencialidad; c) sea recibida legítimamente de un tercero sin restricción; d) sea desarrollada independientemente por la Parte receptora; e) deba ser divulgada por mandamiento de autoridad competente.",
        "10.4 Duración. La obligación de confidencialidad permanecerá vigente durante la relación profesional y por cinco (5) años contados a partir de la terminación de los Servicios, sin perjuicio de la obligación de conservación documental de diez (10) años establecida por el artículo 38 del Código de Comercio.",
      ],
    },
    {
      title: "11. Conflicto de intereses",
      paragraphs: [
        "Stratium Legal realizará verificaciones de conflicto de interés antes de aceptar cualquier encargo profesional. En caso de conflicto, lo comunicará al Cliente de manera inmediata y podrá implementar medidas de salvaguarda o, de no ser posible, declinar la representación.",
      ],
    },
    {
      title: "12. Vigencia y terminación",
      paragraphs: [
        "12.1 Vigencia. Los presentes Términos entran en vigor a partir de su aceptación y permanecen vigentes mientras exista relación profesional entre las Partes. Para el Plan Cumplimiento Mensual, la suscripción se renueva automáticamente cada periodo. Para los Planes Starter y Soft Landing, la relación termina con la entrega completa de los entregables pactados.",
        "12.2 Cancelación por el Cliente. El Cliente podrá cancelar los Servicios en cualquier momento, mediante notificación por escrito (correo electrónico a info@stratiumlegal.com) con al menos quince (15) días naturales de anticipación. En caso de cancelación del Plan Cumplimiento Mensual, no habrá reembolso del periodo en curso. En los Planes Starter o Soft Landing, el Cliente cubrirá los honorarios devengados y los gastos ya incurridos.",
        "12.3 Terminación por Stratium Legal. Stratium Legal podrá terminar los Servicios, previa notificación por escrito, en los siguientes supuestos: a) falta de pago por más de quince (15) días naturales; b) información falsa, incompleta o engañosa proporcionada por el Cliente; c) conflicto de interés insalvable; d) solicitud de realizar actos contrarios a la ley o la ética profesional; e) deterioro irreparable de la relación de confianza; f) fuerza mayor que impida la prestación permanente de los Servicios.",
        "12.4 Efectos de la terminación. A la terminación, Stratium Legal entregará al Cliente toda la documentación corporativa generada en formato digital. Las obligaciones de confidencialidad, secreto profesional, propiedad intelectual y limitación de responsabilidad sobrevivirán la terminación.",
      ],
    },
    {
      title: "13. Uso de la plataforma y sitio web",
      paragraphs: [
        "El sitio web https://stratiumlegal.com y los formularios de contacto y consulta gratuita son propiedad de Stratium Legal. El Cliente y los visitantes se comprometen a utilizar la Plataforma únicamente para los fines autorizados. Queda prohibido: intentar acceder a información de otros clientes o áreas restringidas, realizar ingeniería inversa, introducir malware o código malicioso, utilizar la Plataforma para fines distintos a los Servicios, y compartir credenciales de acceso con personas no autorizadas.",
        "Los contenidos del sitio web, incluyendo la información sobre obligaciones legales derivadas de la LGSM, el CFF y el Código de Comercio, las referencias a artículos específicos y las cifras de multas, se proporcionan con fines informativos y no constituyen asesoría legal. Cada situación requiere análisis particular.",
      ],
    },
    {
      title: "14. Protección de datos personales",
      paragraphs: [
        "El tratamiento de datos personales del Cliente y de las personas físicas relacionadas se rige por el Aviso de Privacidad Integral de Stratium Legal, disponible en https://stratiumlegal.com/privacidad, el cual forma parte integral de los presentes Términos. Para cualquier asunto relacionado con datos personales, el Cliente puede contactar a privacidad@stratiumlegal.com.",
      ],
    },
    {
      title: "15. Anticorrupción y cumplimiento ético",
      paragraphs: [
        "Stratium Legal conduce sus actividades con apego a los más altos estándares de ética profesional y en cumplimiento de la legislación anticorrupción aplicable, incluyendo la Ley General de Responsabilidades Administrativas y, en lo aplicable, la Foreign Corrupt Practices Act (FCPA) y el UK Bribery Act. El Cliente se compromete a no solicitar actos de corrupción, soborno o tráfico de influencias.",
      ],
    },
    {
      title: "16. Caso fortuito y fuerza mayor",
      paragraphs: [
        "Ninguna de las Partes será responsable por incumplimiento derivado de eventos de caso fortuito o fuerza mayor. La Parte afectada notificará a la otra dentro de los cinco (5) Días Hábiles siguientes y realizará sus mejores esfuerzos para mitigar los efectos y reanudar el cumplimiento lo antes posible.",
      ],
    },
    {
      title: "17. Prevención de lavado de dinero",
      paragraphs: [
        "Stratium Legal se reserva el derecho de solicitar información adicional para verificar la identidad del Cliente, la procedencia lícita de sus recursos y la naturaleza de sus operaciones (KYC). La Firma podrá negarse a prestar los Servicios o terminar la relación profesional si la información es insuficiente o genera indicios de operaciones ilícitas.",
      ],
    },
    {
      title: "18. No exclusividad",
      paragraphs: [
        "Salvo pacto expreso en contrario, la relación no es exclusiva. El Cliente puede contratar otros profesionistas del derecho, y Stratium Legal puede prestar servicios a otros clientes, siempre que no exista conflicto de interés.",
      ],
    },
    {
      title: "19. Comunicaciones y notificaciones",
      paragraphs: [
        "Todas las comunicaciones y notificaciones deberán realizarse por escrito y se considerarán válidas cuando sean: a) enviadas por correo electrónico a las direcciones designadas por las Partes (info@stratiumlegal.com para Stratium Legal); b) enviadas a través de WhatsApp institucional de Stratium Legal; c) enviadas a través de la Plataforma de Stratium Legal; d) enviadas mediante firma electrónica avanzada u otro medio que garantice integridad y autenticidad.",
        "Las notificaciones surtirán efectos al Día Hábil siguiente de su recepción.",
      ],
    },
    {
      title: "20. Modificaciones",
      paragraphs: [
        "Stratium Legal se reserva el derecho de modificar los presentes Términos en cualquier momento, notificando al Cliente con al menos quince (15) días naturales de anticipación mediante publicación en la Plataforma y/o correo electrónico. La continuación del uso de los Servicios después de la entrada en vigor de las modificaciones constituirá aceptación tácita.",
      ],
    },
    {
      title: "21. Disposiciones generales",
      paragraphs: [
        "21.1 Totalidad del acuerdo. Los presentes Términos, junto con la Propuesta de Servicios y el Aviso de Privacidad Integral, constituyen la totalidad del acuerdo entre las Partes y sustituyen cualquier acuerdo previo, oral o escrito.",
        "21.2 Independencia de las cláusulas. Si cualquier disposición fuere declarada inválida, las restantes permanecerán en pleno vigor y efecto.",
        "21.3 No renuncia. La falta de ejercicio de cualquier derecho no constituirá renuncia. Toda renuncia deberá constar por escrito.",
        "21.4 Cesión. El Cliente no podrá ceder derechos u obligaciones sin consentimiento escrito de Stratium Legal. La Firma podrá asignar o subcontratar con profesionistas de confianza, manteniendo su responsabilidad ante el Cliente.",
        "21.5 Relación independiente. La relación es de prestación de servicios profesionales independientes. Nada en los presentes Términos crea sociedad, agencia, mandato, empleo ni relación laboral entre las Partes.",
      ],
    },
    {
      title: "22. Legislación aplicable y resolución de controversias",
      paragraphs: [
        "22.1 Legislación aplicable. Los presentes Términos se rigen por las leyes vigentes en los Estados Unidos Mexicanos, incluyendo la LGSM, el CFF, el Código de Comercio y demás legislación mercantil y corporativa aplicable.",
        "22.2 Mediación. Las controversias se intentarán resolver de buena fe mediante negociación directa durante treinta (30) días naturales. Si no se resuelven, las Partes podrán someterlas a mediación ante un centro reconocido en la Ciudad de México.",
        "22.3 Jurisdicción. Las Partes se someten expresamente a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que por razón de domicilio presente o futuro pudiera corresponderles.",
        "22.4 Arbitraje (alternativa). Alternativamente, las Partes podrán pactar en la Propuesta de Servicios que las controversias se resuelvan mediante arbitraje de derecho ante el Centro de Arbitraje de México (CAM) o la Cámara Internacional de Comercio (ICC), con sede en la Ciudad de México. El laudo arbitral será definitivo y obligatorio para ambas Partes.",
      ],
    },
  ],
}

const en: TermsBundle = {
  badge: "Corporate Legal Compliance",
  pageTitle: "Terms and conditions",
  firmName: "Stratium Legal — Corporate legal services",
  tagline: "The law won't wait. Neither will your company.",
  lastUpdated: "Last updated: July 23, 2026 — Version 2.0",
  disclaimer:
    "The contents of the website, including information on legal obligations arising from the LGSM, the CFF, and the Commercial Code, references to specific articles, and penalty figures, are provided for informational purposes and do not constitute legal advice. Each situation requires individual analysis.",
  downloadLabel: "Download PDF",
  downloadUrl: DOWNLOAD_URL,
  sections: [
    {
      title: "1. Definitions",
      paragraphs: [
        "For purposes of these Terms and Conditions (the “Terms”), the following terms shall have the meanings attributed to them below:",
        "“Stratium Legal” or “the Firm”: A corporate legal services firm specialized in corporate legal compliance for companies in Mexico, operating under a 100% remote (remote-first) model, with a digital presence at https://stratiumlegal.com. The Firm is composed of partners Lic. Diego Lazcano, Lic. Esteban Santiago Viñas Caballero, and Lic. Diego Solano García.",
        "“Client”: Any individual or legal entity, domestic or foreign, that contracts, requests, or uses the legal services provided by Stratium Legal, whether directly or through its legal representatives, attorneys-in-fact, or authorized persons.",
        "“Services”: The set of corporate legal advisory, consulting, management, and assistance services that Stratium Legal offers, organized into the Starter, Monthly Compliance, and Soft Landing plans, as well as the additional services described in Clause Three.",
        "“Service Proposal”: A specific document with the scope, deliverables, economic terms, and timelines of the particular service contracted by the Client, sent within 24 hours following the quote request. It forms an integral part of these Terms.",
        "“Platform”: Stratium Legal's website located at https://stratiumlegal.com, including the contact forms, the free consultation form, the WhatsApp channel, as well as any client portal or electronic medium operated by the Firm.",
        "“Confidential Information”: All information, documents, data, strategies, trade secrets, professional secrets, shareholding structure, financial information, and any other data of a reserved nature shared between the Parties in connection with the professional relationship.",
        "“Parties”: Stratium Legal and the Client, jointly.",
        "“Business Day”: Any calendar day on which banking institutions normally operate in Mexico City.",
        "“LGSM”: General Law of Commercial Companies (Ley General de Sociedades Mercantiles).",
        "“CFF”: Federal Tax Code (Código Fiscal de la Federación).",
        "“Commercial Code”: Commercial Code of the United Mexican States.",
      ],
    },
    {
      title: "2. Purpose and acceptance",
      paragraphs: [
        "These Terms govern the relationship between Stratium Legal and the Client regarding the provision of corporate legal services, the use of the Platform, and any professional interaction between the Parties.",
        "By contracting Stratium Legal's Services, by signing or electronically accepting a Service Proposal, by making any payment, by using the Platform, by submitting information through the contact or free consultation forms, or by communicating with the Firm via email or WhatsApp, the Client expresses its express and unconditional acceptance of these Terms in their entirety. If the Client does not agree, it must refrain from contracting the Services and from using the Platform.",
        "These Terms complement, but do not replace, the specific Service Proposal formalized for each matter. In the event of contradiction, the provisions of the Service Proposal shall prevail.",
      ],
    },
    {
      title: "3. Description of services and plans",
      paragraphs: [
        "Stratium Legal offers corporate legal services specialized in compliance with the obligations established by the LGSM, the CFF, and the Commercial Code for every legal entity in Mexico. The services cover the complete corporate life cycle, from incorporation of the company to its continuous annual maintenance, and are organized into the following plans. The economic terms of each plan are determined through a personalized quote in accordance with the process described in Clause Four.",
        "3.1 Starter Plan — Foundation",
        "Designed for entrepreneurs and companies seeking to start with solid legal foundations from day one. Includes:",
        "• Incorporation of a commercial company (S.A. de C.V., S. de R.L. de C.V., or another form contemplated in the LGSM), including drafting of the articles of incorporation and bylaws.",
        "• Preparation of initial corporate books: share or partnership-interest registry book (art. 128 LGSM), shareholders' meeting minutes book (art. 194 LGSM), and capital variations book.",
        "• Registration of founding shareholders or partners with their respective capital contributions.",
        "• Drafting of the first constitutive meeting minutes.",
        "• Complete digital delivery of all corporate documentation, with full legal validity, ready for audit, bank, or notary.",
        "Not included: registration before the SAT (company RFC registration), bank account opening procedures, trademark registration before IMPI, notary fees, Public Registry of Commerce duties, or tax advisory. These services may be contracted additionally.",
        "3.2 Monthly Compliance Plan — Virtual in-house lawyer",
        "It works like an in-house corporate lawyer without the cost of one. It covers the company's corporate and labor obligations on an ongoing basis, through a recurring subscription. Includes:",
        "• Preparation and formalization of the annual ordinary shareholders' or partners' meeting (art. 178, 181 LGSM), including updating of all corporate books.",
        "• Review and updating of the company's powers of attorney and legal representatives.",
        "• Ongoing corporate advisory on commercial and civil contracts, bylaw amendments, shareholder agreements, and corporate governance.",
        "• Comprehensive labor management: drafting of individual employment contracts, IMSS registrations and terminations, and preparation of internal work regulations and codes of conduct.",
        "• Review of corporate-tax obligations and coordination with the Client's accountant to ensure timely compliance.",
        "• Priority support with a maximum response time of twenty-four (24) hours on Business Days.",
        "• Reminder system for periodic legal obligations: meetings, renewal of powers of attorney, filings before authorities, contract expirations, and other obligations arising from the LGSM, the CFF, and the Commercial Code.",
        "The subscription renews automatically each period unless the Client provides notice of cancellation at least fifteen (15) calendar days before the start of the next period, in accordance with Clause Twelve.",
        "Not included: representation before judicial or administrative authorities in litigation, immigration procedures, trademark registration, formal legal opinions on extraordinary transactions (M&A, restructurings), or tax audit services.",
        "3.3 Soft Landing Plan — Foreign companies",
        "Designed for foreign companies seeking to establish themselves in Mexico safely, efficiently, and in compliance with Mexican law. Includes:",
        "• Legal feasibility assessment and recommendation of the optimal corporate structure for operating in Mexico.",
        "• Incorporation of a Mexican company (S.A. de C.V., S.A.P.I. de C.V., or another suitable corporate form) before a public notary.",
        "• Preparation of corporate books and initial registration of partners or shareholders.",
        "• Advisory on the tax regime applicable to foreign investors and companies in Mexico, in coordination with the Client's tax advisors or those referred by Stratium Legal.",
        "• Support throughout the process of opening a corporate bank account in Mexico.",
        "• Management of notarial powers of attorney for legal representatives in Mexican territory.",
        "• General guidance on Mexican labor regulation and immigration requirements for foreign personnel.",
        "Not included: direct immigration procedures (visas, work permits), detailed tax advisory, audit of the foreign company, or representation before immigration authorities.",
        "3.4 Additional and specialized services",
        "In addition to the plans described, Stratium Legal offers the following services that may be contracted independently or as a complement:",
        "• Corporate regularization: reconstruction of the complete corporate history for companies that have gone years without updating books, minutes, or records. Includes bringing them up to date in accordance with the LGSM and the CFF.",
        "• Corporate changes: entry and exit of partners, capital increases and decreases, change of sole administrator or board of directors, amendment of bylaws, and other corporate acts contemplated in the LGSM.",
        "• Extraordinary shareholders' meetings: call notice, minutes, registration in corporate books, and, where applicable, notarization and registration.",
        "• Intellectual property, mergers and acquisitions, due diligence, and specialized contract services.",
        "The scope, deliverables, and economic terms of these services will be set out in the corresponding Service Proposal, which is delivered to the Client within 24 hours of the request.",
      ],
    },
    {
      title: "4. Contracting process",
      paragraphs: [
        "Contracting Stratium Legal's Services follows this process:",
        "1. Online quote: The Client communicates its needs through the website form, email (info@stratiumlegal.com), or institutional WhatsApp.",
        "2. Proposal within 24 hours: Stratium Legal sends the Client a Service Proposal with scope, deliverables, and closed economic terms — no fine print, no hidden costs, and no prior commitments.",
        "3. Acceptance and payment: The Client accepts the Service Proposal and makes the corresponding payment in accordance with the conditions of the contracted plan.",
        "4. Documents delivered: Stratium Legal delivers the documentation in digital format with full legal validity, ready for audit, bank, or notary from day one.",
        "The initial consultation is completely free and creates no commitment for the Client. Stratium Legal commits to respond in under 24 hours and not to send spam.",
      ],
    },
    {
      title: "5. Client obligations",
      paragraphs: [
        "The Client undertakes to:",
        "1. Provide Stratium Legal, in a timely, truthful, complete, and sufficient manner, with all information, documentation, and elements necessary for the proper provision of the Services, including: partner and shareholder data, tax information, shareholding structure, prior minutes, existing corporate books, and other corporate documentation.",
        "2. Immediately inform Stratium Legal of any change in its legal, corporate, tax, or other situation that may affect the provision of the Services.",
        "3. Pay in a timely manner the agreed fees and expenses, in accordance with the terms and conditions of the contracted plan and the Service Proposal.",
        "4. Actively cooperate with the Stratium legal team in handling the assigned matters, attending to information requests and the legal recommendations made.",
        "5. Not use the Services, legal opinions, corporate documentation, or deliverables produced by Stratium Legal for unlawful, fraudulent, or unlawful purposes.",
        "6. Comply with the confidentiality provisions set forth in these Terms and in the Service Proposal.",
        "7. Designate an authorized point of contact for communication with Stratium Legal.",
        "8. Obtain the internal corporate authorizations necessary to contract the Services and to make decisions regarding the assigned legal matters.",
      ],
    },
    {
      title: "6. Stratium Legal's obligations",
      paragraphs: [
        "Stratium Legal undertakes to:",
        "1. Provide the Services with the diligence, expertise, professionalism, and ethics required by corporate law practice, in accordance with the LGSM, the CFF, the Commercial Code, and other applicable legislation.",
        "2. Assign to the Client's matter lawyers with appropriate experience and specialization, within the team made up of Lics. Diego Lazcano (corporate, contracts, and supply chain), Esteban Santiago Viñas Caballero (corporate, civil, and notarial practice), and Diego Solano García (commercial companies and franchises).",
        "3. Deliver the Service Proposal within twenty-four (24) hours of the quote request, with scope, deliverables, and closed economic terms.",
        "4. Keep the Client informed in a timely manner about the progress of the assigned matters.",
        "5. Deliver all documentation in digital format with full legal validity.",
        "6. Maintain strict confidentiality regarding all of the Client's Confidential Information, under the terms of Clause Ten.",
        "7. Observe the rules of professional ethics, including the duties of loyalty, independence, and professional secrecy.",
        "8. Comply with the response times committed in each service plan (24 hours in the Monthly Compliance Plan).",
        "9. Identify and promptly communicate to the Client any actual or potential conflict of interest.",
      ],
    },
    {
      title: "7. Fees and payment conditions",
      paragraphs: [
        "7.1 Determination of fees",
        "Fees for each plan and service are determined through a personalized quote, in accordance with the process described in Clause Four. Stratium Legal sends the Client a Service Proposal with closed economic terms within twenty-four (24) hours of the request, with no fine print or hidden costs.",
        "Quoted fees do not include Value Added Tax (VAT), which will be charged to the Client in accordance with applicable tax law. Fees include personalized advice and digital delivery with full legal validity. Stratium Legal reserves the right to update its fees for new engagements, without affecting services already contracted and paid under a valid Service Proposal.",
        "7.2 Reimbursable expenses",
        "The Client will cover reasonable and documented expenses, including:",
        "• Government duties and contributions (Public Registry of Commerce, SAT, IMPI, INM, IMSS, among others).",
        "• Notary and public broker fees.",
        "• Translation, legalization, and apostille services for documents.",
        "• Courier and physical document shipping costs (where applicable).",
        "• Fees of external consultants previously authorized by the Client.",
        "Reimbursable expenses will be quoted and communicated to the Client before being incurred. There are no hidden costs.",
        "7.3 Billing and payment",
        "• Stratium Legal will issue a CFDI (tax invoice) in accordance with applicable tax law.",
        "• Payment for the Starter and Soft Landing Plans is made prior to the provision of the service, except for staged payment agreed in the Service Proposal.",
        "• Payment for the Monthly Compliance Plan is made within five (5) calendar days following the start of each period.",
        "• Payments are made by electronic transfer to the account designated by Stratium Legal.",
        "• All fees are expressed and settled in Mexican Pesos (MXN).",
        "7.4 Late payment",
        "In the event of default, late-payment interest will accrue at a rate equivalent to twice the 28-day TIIE in effect on the due date, per day of delay on the outstanding balance. Stratium Legal may suspend the Services if the delay exceeds fifteen (15) calendar days, after notifying the Client at least five (5) Business Days in advance.",
      ],
    },
    {
      title: "8. Intellectual property",
      paragraphs: [
        "8.1 Ownership of the work. The documents, articles of incorporation, bylaws, corporate books, meeting minutes, contracts, legal opinions, and other deliverables produced by Stratium Legal will be the property of the Client once the corresponding fees are paid in full.",
        "8.2 The Firm's intellectual property. Stratium Legal retains ownership of its methodologies, models, templates, formats, precedent databases, analysis tools, professional know-how, brand, logo, and website content. The Client acquires no rights over these assets.",
        "8.3 License of use. The Client receives a non-exclusive, non-transferable, and limited license to use the deliverables exclusively for the corporate purposes for which they were prepared.",
      ],
    },
    {
      title: "9. Limitation of liability",
      paragraphs: [
        "9.1 Obligation of means. Stratium Legal's obligation is one of means and not of results. The Firm commits to providing the Services with due diligence, expertise, and professionalism, but does not guarantee a specific result, favorable judgment, regulatory approval, or the achievement of any particular objective.",
        "9.2 Limits. Except in cases of willful misconduct, bad faith, or gross negligence, Stratium Legal's total and aggregate liability will not exceed the amount of fees actually paid by the Client during the twelve (12) months prior to the event giving rise to the claim.",
        "9.3 Exclusions. Stratium Legal will not be liable for:",
        "• Indirect, incidental, consequential, punitive, or special damages, including loss of profits or reputational damage.",
        "• Adverse results arising from incomplete, inaccurate, or untimely information provided by the Client.",
        "• Client decisions contrary to the Firm's recommendations.",
        "• Legislative, regulatory, or case-law changes subsequent to the provision of the service.",
        "• Acts or omissions of third parties: authorities, counterparties, notaries, brokers, public registries.",
        "• Acts of God or force majeure events.",
        "• Fines or penalties arising from breaches prior to contracting the Services under article 83 of the CFF, whose regularization is the object of the Services but whose imposition depends exclusively on the tax authorities.",
      ],
    },
    {
      title: "10. Professional secrecy and confidentiality",
      paragraphs: [
        "10.1 Professional secrecy. Stratium Legal rigorously observes attorney-client privilege. All information communicated by the Client is privileged and confidential. The Firm will not disclose it to third parties without express authorization, except for a mandatory legal obligation, in which case it will inform the Client immediately to the extent permitted by law.",
        "10.2 Confidentiality obligation. Both Parties undertake to maintain strict confidentiality regarding all Confidential Information, and not to disclose it without the prior written authorization of the other Party.",
        "10.3 Exceptions. The following will not be considered Confidential Information: a) information that is or becomes public domain without breach by the receiving Party; b) information previously known to the receiving Party without an obligation of confidentiality; c) information legitimately received from a third party without restriction; d) information independently developed by the receiving Party; e) information that must be disclosed by order of a competent authority.",
        "10.4 Duration. The confidentiality obligation will remain in effect during the professional relationship and for five (5) years from the termination of the Services, without prejudice to the ten (10)-year document retention obligation established by article 38 of the Commercial Code.",
      ],
    },
    {
      title: "11. Conflict of interest",
      paragraphs: [
        "Stratium Legal will carry out conflict-of-interest checks before accepting any professional engagement. In the event of a conflict, it will inform the Client immediately and may implement safeguard measures or, where this is not possible, decline the representation.",
      ],
    },
    {
      title: "12. Term and termination",
      paragraphs: [
        "12.1 Term. These Terms take effect upon their acceptance and remain in force for as long as a professional relationship exists between the Parties. For the Monthly Compliance Plan, the subscription renews automatically each period. For the Starter and Soft Landing Plans, the relationship ends with the complete delivery of the agreed deliverables.",
        "12.2 Cancellation by the Client. The Client may cancel the Services at any time, by written notice (email to info@stratiumlegal.com) at least fifteen (15) calendar days in advance. In the event of cancellation of the Monthly Compliance Plan, there will be no refund for the current period. For the Starter or Soft Landing Plans, the Client will cover the fees accrued and the expenses already incurred.",
        "12.3 Termination by Stratium Legal. Stratium Legal may terminate the Services, upon written notice, in the following cases: a) non-payment for more than fifteen (15) calendar days; b) false, incomplete, or misleading information provided by the Client; c) an insurmountable conflict of interest; d) a request to perform acts contrary to the law or professional ethics; e) irreparable deterioration of the relationship of trust; f) force majeure that permanently prevents the provision of the Services.",
        "12.4 Effects of termination. Upon termination, Stratium Legal will deliver to the Client all corporate documentation generated, in digital format. The obligations of confidentiality, professional secrecy, intellectual property, and limitation of liability will survive termination.",
      ],
    },
    {
      title: "13. Use of the platform and website",
      paragraphs: [
        "The website https://stratiumlegal.com and the contact and free consultation forms are the property of Stratium Legal. The Client and visitors undertake to use the Platform solely for authorized purposes. The following is prohibited: attempting to access information of other clients or restricted areas, performing reverse engineering, introducing malware or malicious code, using the Platform for purposes other than the Services, and sharing access credentials with unauthorized persons.",
        "The contents of the website, including information on legal obligations arising from the LGSM, the CFF, and the Commercial Code, references to specific articles, and penalty figures, are provided for informational purposes and do not constitute legal advice. Each situation requires individual analysis.",
      ],
    },
    {
      title: "14. Protection of personal data",
      paragraphs: [
        "The processing of personal data of the Client and of related individuals is governed by Stratium Legal's Comprehensive Privacy Notice, available at https://stratiumlegal.com/privacidad, which forms an integral part of these Terms. For any matter related to personal data, the Client may contact privacidad@stratiumlegal.com.",
      ],
    },
    {
      title: "15. Anti-corruption and ethical compliance",
      paragraphs: [
        "Stratium Legal conducts its activities in adherence to the highest standards of professional ethics and in compliance with applicable anti-corruption legislation, including the General Law of Administrative Responsibilities and, where applicable, the Foreign Corrupt Practices Act (FCPA) and the UK Bribery Act. The Client undertakes not to request acts of corruption, bribery, or influence peddling.",
      ],
    },
    {
      title: "16. Acts of God and force majeure",
      paragraphs: [
        "Neither Party will be liable for non-performance arising from acts of God or force majeure events. The affected Party will notify the other within the following five (5) Business Days and will use its best efforts to mitigate the effects and resume performance as soon as possible.",
      ],
    },
    {
      title: "17. Anti-money laundering",
      paragraphs: [
        "Stratium Legal reserves the right to request additional information to verify the Client's identity, the lawful origin of its resources, and the nature of its operations (KYC). The Firm may refuse to provide the Services or terminate the professional relationship if the information is insufficient or raises indications of unlawful operations.",
      ],
    },
    {
      title: "18. Non-exclusivity",
      paragraphs: [
        "Unless expressly agreed otherwise, the relationship is not exclusive. The Client may engage other legal professionals, and Stratium Legal may provide services to other clients, provided there is no conflict of interest.",
      ],
    },
    {
      title: "19. Communications and notices",
      paragraphs: [
        "All communications and notices must be made in writing and will be deemed valid when they are: a) sent by email to the addresses designated by the Parties (info@stratiumlegal.com for Stratium Legal); b) sent through Stratium Legal's institutional WhatsApp; c) sent through Stratium Legal's Platform; d) sent via advanced electronic signature or another means that guarantees integrity and authenticity.",
        "Notices will take effect on the Business Day following their receipt.",
      ],
    },
    {
      title: "20. Modifications",
      paragraphs: [
        "Stratium Legal reserves the right to modify these Terms at any time, notifying the Client at least fifteen (15) calendar days in advance through publication on the Platform and/or email. Continued use of the Services after the modifications take effect will constitute tacit acceptance.",
      ],
    },
    {
      title: "21. General provisions",
      paragraphs: [
        "21.1 Entire agreement. These Terms, together with the Service Proposal and the Comprehensive Privacy Notice, constitute the entire agreement between the Parties and supersede any prior agreement, whether oral or written.",
        "21.2 Severability. If any provision is declared invalid, the remaining provisions will remain in full force and effect.",
        "21.3 No waiver. Failure to exercise any right will not constitute a waiver. Any waiver must be made in writing.",
        "21.4 Assignment. The Client may not assign rights or obligations without the written consent of Stratium Legal. The Firm may assign or subcontract to trusted professionals, maintaining its responsibility to the Client.",
        "21.5 Independent relationship. The relationship is one of independent professional services. Nothing in these Terms creates a partnership, agency, mandate, employment, or labor relationship between the Parties.",
      ],
    },
    {
      title: "22. Governing law and dispute resolution",
      paragraphs: [
        "22.1 Governing law. These Terms are governed by the laws in force in the United Mexican States, including the LGSM, the CFF, the Commercial Code, and other applicable commercial and corporate legislation.",
        "22.2 Mediation. Disputes will be attempted to be resolved in good faith through direct negotiation over thirty (30) calendar days. If they are not resolved, the Parties may submit them to mediation before a recognized center in Mexico City.",
        "22.3 Jurisdiction. The Parties expressly submit to the jurisdiction of the competent courts of Mexico City, waiving any other venue that, by reason of present or future domicile, might otherwise apply to them.",
        "22.4 Arbitration (alternative). Alternatively, the Parties may agree in the Service Proposal that disputes be resolved through arbitration at law before the Arbitration Center of Mexico (CAM) or the International Chamber of Commerce (ICC), seated in Mexico City. The arbitral award will be final and binding on both Parties.",
      ],
    },
  ],
}

const ind: TermsBundle = {
  badge: "कॉर्पोरेट कानूनी अनुपालन",
  pageTitle: "नियम और शर्तें",
  firmName: "Stratium Legal — कॉर्पोरेट कानूनी सेवाएँ",
  tagline: "कानून इंतज़ार नहीं करता। आपकी कंपनी भी नहीं।",
  lastUpdated: "अंतिम अपडेट: 23 जुलाई, 2026 — संस्करण 2.0",
  disclaimer:
    "वेबसाइट की सामग्री, जिसमें LGSM, CFF और वाणिज्यिक संहिता से उत्पन्न कानूनी दायित्वों की जानकारी, विशिष्ट अनुच्छेदों के संदर्भ और जुर्माने के आंकड़े शामिल हैं, केवल सूचनात्मक उद्देश्यों के लिए प्रदान की जाती है और यह कानूनी सलाह नहीं है। प्रत्येक स्थिति का व्यक्तिगत विश्लेषण आवश्यक है।",
  downloadLabel: "PDF डाउनलोड करें",
  downloadUrl: DOWNLOAD_URL,
  sections: [
    {
      title: "1. परिभाषाएँ",
      paragraphs: [
        "इन नियमों और शर्तों (इसके बाद 'नियम') के प्रयोजनों के लिए, निम्नलिखित अवधारणाओं का वही अर्थ होगा जो नीचे उन्हें दिया गया है:",
        "'Stratium Legal' या 'फर्म': मेक्सिको में कंपनियों के लिए कॉर्पोरेट कानूनी अनुपालन में विशेषज्ञता वाली एक कॉर्पोरेट कानूनी सेवा फर्म, जो 100% रिमोट (remote-first) मॉडल पर संचालित होती है, और जिसकी डिजिटल उपस्थिति https://stratiumlegal.com पर है। फर्म में भागीदार Lic. Diego Lazcano, Lic. Esteban Santiago Viñas Caballero और Lic. Diego Solano García शामिल हैं।",
        "'ग्राहक': कोई भी व्यक्ति या कानूनी इकाई, घरेलू या विदेशी, जो Stratium Legal द्वारा प्रदान की गई कानूनी सेवाओं को प्रत्यक्ष रूप से या अपने कानूनी प्रतिनिधियों, अधिकृत प्रतिनिधियों या अधिकृत व्यक्तियों के माध्यम से अनुबंधित, अनुरोध या उपयोग करती है।",
        "'सेवाएँ': Stratium Legal द्वारा प्रदान की जाने वाली कॉर्पोरेट कानूनी परामर्श, सलाह, प्रबंधन और सहायता सेवाओं का समूह, जो Starter, Cumplimiento Mensual और Soft Landing योजनाओं में संगठित हैं, साथ ही तीसरी धारा में वर्णित अतिरिक्त सेवाएँ।",
        "'सेवा प्रस्ताव': ग्राहक द्वारा अनुबंधित विशेष सेवा के दायरे, सुपुर्दगियों, आर्थिक शर्तों और समयसीमा के साथ एक विशिष्ट दस्तावेज़, जो कोटेशन अनुरोध के 24 घंटे के भीतर भेजा जाता है। यह इन नियमों का अभिन्न हिस्सा है।",
        "'प्लेटफ़ॉर्म': https://stratiumlegal.com पर स्थित Stratium Legal की वेबसाइट, जिसमें संपर्क फ़ॉर्म, निःशुल्क परामर्श फ़ॉर्म, WhatsApp चैनल, साथ ही फर्म द्वारा संचालित कोई भी ग्राहक पोर्टल या इलेक्ट्रॉनिक माध्यम शामिल है।",
        "'गोपनीय जानकारी': सभी जानकारी, दस्तावेज़, डेटा, रणनीतियाँ, औद्योगिक रहस्य, पेशेवर रहस्य, शेयरधारिता संरचना, वित्तीय जानकारी और पेशेवर संबंध के कारण पक्षों के बीच साझा की गई आरक्षित प्रकृति का कोई भी अन्य डेटा।",
        "'पक्ष': Stratium Legal और ग्राहक, संयुक्त रूप से।",
        "'कार्य दिवस': कोई भी कैलेंडर दिन जिस दिन बैंकिंग संस्थान मेक्सिको सिटी में सामान्य रूप से कार्य करते हैं।",
        "'LGSM': वाणिज्यिक कंपनियों का सामान्य कानून (Ley General de Sociedades Mercantiles)।",
        "'CFF': संघीय कर संहिता (Código Fiscal de la Federación)।",
        "'वाणिज्यिक संहिता': संयुक्त मैक्सिकन राज्यों की वाणिज्यिक संहिता।",
      ],
    },
    {
      title: "2. उद्देश्य और स्वीकृति",
      paragraphs: [
        "ये नियम कॉर्पोरेट कानूनी सेवाओं के प्रावधान, प्लेटफ़ॉर्म के उपयोग और पक्षों के बीच किसी भी पेशेवर संपर्क के संबंध में Stratium Legal और ग्राहक के बीच के संबंध को नियंत्रित करते हैं।",
        "Stratium Legal की सेवाओं को अनुबंधित करके, किसी सेवा प्रस्ताव पर हस्ताक्षर या इलेक्ट्रॉनिक रूप से स्वीकार करके, कोई भुगतान करके, प्लेटफ़ॉर्म का उपयोग करके, संपर्क या निःशुल्क परामर्श फ़ॉर्म के माध्यम से जानकारी भेजकर, या ईमेल या WhatsApp के माध्यम से फर्म से संवाद करके, ग्राहक इन नियमों की संपूर्णता में अपनी स्पष्ट और बिना शर्त स्वीकृति व्यक्त करता है। यदि ग्राहक सहमत नहीं है, तो उसे सेवाओं को अनुबंधित करने और प्लेटफ़ॉर्म का उपयोग करने से बचना चाहिए।",
        "ये नियम प्रत्येक मामले के लिए औपचारिक किए गए विशिष्ट सेवा प्रस्ताव के पूरक हैं, पर उसका स्थान नहीं लेते। विरोधाभास की स्थिति में, सेवा प्रस्ताव के प्रावधान प्रभावी होंगे।",
      ],
    },
    {
      title: "3. सेवाओं और योजनाओं का विवरण",
      paragraphs: [
        "Stratium Legal मेक्सिको में प्रत्येक कानूनी इकाई के लिए LGSM, CFF और वाणिज्यिक संहिता द्वारा स्थापित दायित्वों के अनुपालन में विशेषज्ञता वाली कॉर्पोरेट कानूनी सेवाएँ प्रदान करता है। ये सेवाएँ कंपनी के गठन से लेकर उसके निरंतर वार्षिक रखरखाव तक संपूर्ण कॉर्पोरेट जीवनचक्र को कवर करती हैं, और निम्नलिखित योजनाओं में संगठित हैं। प्रत्येक योजना की आर्थिक शर्तें धारा चार में वर्णित प्रक्रिया के अनुसार व्यक्तिगत कोटेशन के माध्यम से निर्धारित की जाती हैं।",
        "3.1 Starter योजना — स्थापना",
        "उन उद्यमियों और कंपनियों के लिए डिज़ाइन किया गया जो पहले दिन से ठोस कानूनी आधार के साथ शुरुआत करना चाहते हैं। इसमें शामिल है:",
        "• वाणिज्यिक कंपनी का गठन (S.A. de C.V., S. de R.L. de C.V. या LGSM में विचारित अन्य रूप), जिसमें गठन के लेख और उपनियमों का प्रारूपण शामिल है।",
        "• प्रारंभिक कॉर्पोरेट पुस्तकों की तैयारी: शेयर या साझेदारी-हित रजिस्ट्री पुस्तक (अनुच्छेद 128 LGSM), सभा की कार्यवाही पुस्तक (अनुच्छेद 194 LGSM) और पूंजी भिन्नता पुस्तक।",
        "• संस्थापक शेयरधारकों या भागीदारों का उनके संबंधित पूंजी योगदान के साथ पंजीकरण।",
        "• पहली गठन सभा की कार्यवाही का प्रारूपण।",
        "• सभी कॉर्पोरेट दस्तावेज़ों की पूर्ण डिजिटल सुपुर्दगी, पूर्ण कानूनी वैधता के साथ, ऑडिट, बैंक या नोटरी के लिए तैयार।",
        "शामिल नहीं: SAT के समक्ष पंजीकरण (कंपनी का RFC पंजीकरण), बैंक खाता खोलने की प्रक्रियाएँ, IMPI के समक्ष ट्रेडमार्क पंजीकरण, नोटरी शुल्क, वाणिज्य के सार्वजनिक रजिस्ट्री शुल्क, या कर सलाह। ये सेवाएँ अतिरिक्त रूप से अनुबंधित की जा सकती हैं।",
        "3.2 Cumplimiento Mensual योजना — वर्चुअल इन-हाउस वकील",
        "यह बिना लागत के एक इन-हाउस कॉर्पोरेट वकील की तरह काम करता है। यह कंपनी के कॉर्पोरेट और श्रम दायित्वों को आवर्ती सदस्यता के माध्यम से निरंतर रूप से कवर करता है। इसमें शामिल है:",
        "• शेयरधारकों या भागीदारों की वार्षिक साधारण सभा की तैयारी और औपचारिककरण (अनुच्छेद 178, 181 LGSM), जिसमें सभी कॉर्पोरेट पुस्तकों का अद्यतन शामिल है।",
        "• कंपनी के अधिकारपत्रों और कानूनी प्रतिनिधियों की समीक्षा और अद्यतन।",
        "• वाणिज्यिक और दीवानी अनुबंधों, उपनियम संशोधनों, भागीदारों के बीच समझौतों और कॉर्पोरेट प्रशासन के मामलों में निरंतर कॉर्पोरेट सलाह।",
        "• व्यापक श्रम प्रबंधन: व्यक्तिगत रोजगार अनुबंधों का प्रारूपण, IMSS के समक्ष पंजीकरण और समाप्ति, और आंतरिक कार्य नियमों और आचार संहिताओं की तैयारी।",
        "• कॉर्पोरेट-कर दायित्वों की समीक्षा और समय पर अनुपालन सुनिश्चित करने के लिए ग्राहक के लेखाकार के साथ समन्वय।",
        "• कार्य दिवसों पर चौबीस (24) घंटे की अधिकतम प्रतिक्रिया समय के साथ प्राथमिकता समर्थन।",
        "• आवधिक कानूनी दायित्वों के लिए अनुस्मारक प्रणाली: सभाएँ, अधिकारपत्रों का नवीनीकरण, अधिकारियों के समक्ष प्रस्तुतियाँ, अनुबंध समाप्ति, और LGSM, CFF तथा वाणिज्यिक संहिता से उत्पन्न अन्य दायित्व।",
        "सदस्यता हर अवधि स्वचालित रूप से नवीनीकृत होती है, जब तक कि ग्राहक अगली अवधि की शुरुआत से कम से कम पंद्रह (15) कैलेंडर दिन पहले, धारा बारह के अनुसार, रद्द करने की सूचना न दे।",
        "शामिल नहीं: मुकदमों में न्यायिक या प्रशासनिक अधिकारियों के समक्ष प्रतिनिधित्व, आव्रजन प्रक्रियाएँ, ट्रेडमार्क पंजीकरण, असाधारण लेनदेन (M&A, पुनर्गठन) पर औपचारिक कानूनी राय, या कर ऑडिट सेवाएँ।",
        "3.3 Soft Landing योजना — विदेशी कंपनियाँ",
        "उन विदेशी कंपनियों के लिए डिज़ाइन किया गया जो मेक्सिको में सुरक्षित, कुशल और मैक्सिकन कानून के अनुरूप स्थापित होना चाहती हैं। इसमें शामिल है:",
        "• कानूनी व्यवहार्यता निदान और मेक्सिको में संचालन के लिए इष्टतम कॉर्पोरेट संरचना की अनुशंसा।",
        "• सार्वजनिक नोटरी के समक्ष मैक्सिकन कंपनी का गठन (S.A. de C.V., S.A.P.I. de C.V. या अन्य उपयुक्त कॉर्पोरेट रूप)।",
        "• कॉर्पोरेट पुस्तकों की तैयारी और भागीदारों या शेयरधारकों का प्रारंभिक पंजीकरण।",
        "• मेक्सिको में विदेशी निवेशकों और कंपनियों पर लागू कर व्यवस्था पर सलाह, ग्राहक के कर सलाहकारों या Stratium Legal द्वारा संदर्भित सलाहकारों के समन्वय में।",
        "• मेक्सिको में कॉर्पोरेट बैंक खाता खोलने की प्रक्रिया में सहायता।",
        "• मैक्सिकन क्षेत्र में कानूनी प्रतिनिधियों के लिए नोटरी अधिकारपत्रों का प्रबंधन।",
        "• विदेशी कर्मियों के लिए मैक्सिकन श्रम विनियमन और आव्रजन आवश्यकताओं पर सामान्य मार्गदर्शन।",
        "शामिल नहीं: प्रत्यक्ष आव्रजन प्रक्रियाएँ (वीज़ा, कार्य परमिट), विस्तृत कर सलाह, विदेशी कंपनी का ऑडिट, या आव्रजन अधिकारियों के समक्ष प्रतिनिधित्व।",
        "3.4 अतिरिक्त और विशेष सेवाएँ",
        "वर्णित योजनाओं के अतिरिक्त, Stratium Legal निम्नलिखित सेवाएँ प्रदान करता है जिन्हें स्वतंत्र रूप से या पूरक रूप से अनुबंधित किया जा सकता है:",
        "• कॉर्पोरेट नियमितीकरण: उन कंपनियों के लिए संपूर्ण कॉर्पोरेट इतिहास का पुनर्निर्माण जिन्होंने वर्षों से पुस्तकें, कार्यवाही या रिकॉर्ड अद्यतन नहीं किए हैं। LGSM और CFF के अनुसार अद्यतन शामिल है।",
        "• कॉर्पोरेट परिवर्तन: भागीदारों का प्रवेश और निकास, पूंजी में वृद्धि और कमी, एकमात्र प्रशासक या निदेशक मंडल में परिवर्तन, उपनियमों का संशोधन, और LGSM में विचारित अन्य कॉर्पोरेट कार्य।",
        "• शेयरधारकों की असाधारण सभाएँ: सूचना, कार्यवाही, कॉर्पोरेट पुस्तकों में पंजीकरण और, जहाँ लागू हो, नोटरीकरण और पंजीकरण।",
        "• बौद्धिक संपदा, विलय और अधिग्रहण, सम्यक परिश्रम और विशेष अनुबंध सेवाएँ।",
        "इन सेवाओं का दायरा, सुपुर्दगियाँ और आर्थिक शर्तें संबंधित सेवा प्रस्ताव में निर्धारित की जाएँगी, जो अनुरोध के 24 घंटे के भीतर ग्राहक को सौंपा जाता है।",
      ],
    },
    {
      title: "4. अनुबंध प्रक्रिया",
      paragraphs: [
        "Stratium Legal की सेवाओं का अनुबंध निम्नलिखित प्रक्रिया का पालन करता है:",
        "1. ऑनलाइन कोटेशन: ग्राहक वेबसाइट फ़ॉर्म, ईमेल (info@stratiumlegal.com) या संस्थागत WhatsApp के माध्यम से अपनी आवश्यकताओं को बताता है।",
        "2. 24 घंटे में प्रस्ताव: Stratium Legal ग्राहक को दायरे, सुपुर्दगियों और तय आर्थिक शर्तों के साथ एक सेवा प्रस्ताव भेजता है — बिना बारीक अक्षरों, बिना छिपी लागत और बिना पूर्व प्रतिबद्धताओं के।",
        "3. स्वीकृति और भुगतान: ग्राहक सेवा प्रस्ताव को स्वीकार करता है और अनुबंधित योजना की शर्तों के अनुसार संबंधित भुगतान करता है।",
        "4. सौंपे गए दस्तावेज़: Stratium Legal दस्तावेज़ों को पूर्ण कानूनी वैधता के साथ डिजिटल प्रारूप में सौंपता है, जो पहले दिन से ऑडिट, बैंक या नोटरी के लिए तैयार होते हैं।",
        "प्रारंभिक परामर्श पूरी तरह निःशुल्क है और ग्राहक के लिए कोई प्रतिबद्धता उत्पन्न नहीं करता। Stratium Legal 24 घंटे से कम समय में जवाब देने और स्पैम न भेजने के लिए प्रतिबद्ध है।",
      ],
    },
    {
      title: "5. ग्राहक के दायित्व",
      paragraphs: [
        "ग्राहक निम्नलिखित का वचन देता है:",
        "1. Stratium Legal को समय पर, सत्य, पूर्ण और पर्याप्त रूप से सेवाओं के उचित प्रावधान के लिए आवश्यक सभी जानकारी, दस्तावेज़ीकरण और तत्व प्रदान करना, जिसमें शामिल हैं: भागीदारों और शेयरधारकों का डेटा, कर जानकारी, शेयरधारिता संरचना, पूर्व कार्यवाहियाँ, मौजूदा कॉर्पोरेट पुस्तकें और अन्य कॉर्पोरेट दस्तावेज़।",
        "2. अपनी कानूनी, कॉर्पोरेट, कर या किसी अन्य प्रकार की स्थिति में किसी भी बदलाव के बारे में Stratium Legal को तुरंत सूचित करना जो सेवाओं के प्रावधान को प्रभावित कर सकता है।",
        "3. अनुबंधित योजना और सेवा प्रस्ताव की शर्तों और अवधियों के अनुसार सहमत शुल्क और खर्चों का समय पर भुगतान करना।",
        "4. सौंपे गए मामलों के विकास में Stratium की कानूनी टीम के साथ सक्रिय रूप से सहयोग करना, जानकारी के अनुरोधों और दी गई कानूनी अनुशंसाओं पर ध्यान देना।",
        "5. Stratium Legal द्वारा उत्पादित सेवाओं, कानूनी राय, कॉर्पोरेट दस्तावेज़ या सुपुर्दगियों का उपयोग अवैध, धोखाधड़ी या लागू कानून के विपरीत उद्देश्यों के लिए न करना।",
        "6. इन नियमों और सेवा प्रस्ताव में निर्धारित गोपनीयता प्रावधानों का सम्मान करना।",
        "7. Stratium Legal के साथ संचार के लिए एक अधिकृत संपर्क बिंदु नामित करना।",
        "8. सेवाओं के अनुबंध और सौंपे गए कानूनी मामलों के संबंध में निर्णय लेने के लिए आवश्यक आंतरिक कॉर्पोरेट प्राधिकरण प्राप्त करना।",
      ],
    },
    {
      title: "6. Stratium Legal के दायित्व",
      paragraphs: [
        "Stratium Legal निम्नलिखित का वचन देता है:",
        "1. LGSM, CFF, वाणिज्यिक संहिता और अन्य लागू कानून के अनुसार, कॉर्पोरेट कानून अभ्यास द्वारा अपेक्षित परिश्रम, विशेषज्ञता, व्यावसायिकता और नैतिकता के साथ सेवाएँ प्रदान करना।",
        "2. ग्राहक के मामले में उपयुक्त अनुभव और विशेषज्ञता वाले वकील नियुक्त करना, उस टीम के भीतर जिसमें Lic. Diego Lazcano (कॉर्पोरेट, अनुबंध और आपूर्ति शृंखला), Esteban Santiago Viñas Caballero (कॉर्पोरेट, दीवानी और नोटरी अभ्यास) और Diego Solano García (वाणिज्यिक कंपनियाँ और फ़्रैंचाइज़) शामिल हैं।",
        "3. कोटेशन अनुरोध के चौबीस (24) घंटे के भीतर दायरे, सुपुर्दगियों और तय आर्थिक शर्तों के साथ सेवा प्रस्ताव सौंपना।",
        "4. सौंपे गए मामलों की प्रगति के बारे में ग्राहक को समय पर सूचित रखना।",
        "5. सभी दस्तावेज़ों को पूर्ण कानूनी वैधता के साथ डिजिटल प्रारूप में सौंपना।",
        "6. धारा दस की शर्तों के तहत ग्राहक की सभी गोपनीय जानकारी के संबंध में सख्त गोपनीयता बनाए रखना।",
        "7. वफ़ादारी, स्वतंत्रता और पेशेवर गोपनीयता के कर्तव्यों सहित पेशेवर नैतिकता के नियमों का पालन करना।",
        "8. प्रत्येक सेवा योजना में प्रतिबद्ध प्रतिक्रिया समय का पालन करना (Cumplimiento Mensual योजना में 24 घंटे)।",
        "9. किसी भी वास्तविक या संभावित हित के टकराव की पहचान करना और ग्राहक को समय पर सूचित करना।",
      ],
    },
    {
      title: "7. शुल्क और भुगतान शर्तें",
      paragraphs: [
        "7.1 शुल्क का निर्धारण",
        "प्रत्येक योजना और सेवा के शुल्क धारा चार में वर्णित प्रक्रिया के अनुसार व्यक्तिगत कोटेशन के माध्यम से निर्धारित किए जाते हैं। Stratium Legal अनुरोध के चौबीस (24) घंटे के भीतर तय आर्थिक शर्तों के साथ ग्राहक को एक सेवा प्रस्ताव भेजता है, बिना बारीक अक्षरों या छिपी लागत के।",
        "उद्धृत शुल्कों में मूल्य वर्धित कर (VAT) शामिल नहीं है, जो लागू कर कानून के अनुसार ग्राहक पर लगाया जाएगा। शुल्कों में व्यक्तिगत सलाह और पूर्ण कानूनी वैधता के साथ डिजिटल सुपुर्दगी शामिल है। Stratium Legal नए अनुबंधों के लिए अपने शुल्क अद्यतन करने का अधिकार सुरक्षित रखता है, बिना किसी वैध सेवा प्रस्ताव के तहत पहले से अनुबंधित और भुगतान की गई सेवाओं को प्रभावित किए।",
        "7.2 प्रतिपूर्ति योग्य खर्च",
        "ग्राहक उचित और प्रलेखित खर्चों को कवर करेगा, जिसमें शामिल हैं:",
        "• सरकारी शुल्क और योगदान (वाणिज्य का सार्वजनिक रजिस्ट्री, SAT, IMPI, INM, IMSS, अन्य के बीच)।",
        "• नोटरी और सार्वजनिक दलाल शुल्क।",
        "• दस्तावेज़ों के अनुवाद, वैधीकरण और एपोस्टिल सेवाएँ।",
        "• कूरियर और दस्तावेज़ों के भौतिक प्रेषण के खर्च (जहाँ लागू हो)।",
        "• ग्राहक द्वारा पूर्व अधिकृत बाहरी सलाहकारों के शुल्क।",
        "प्रतिपूर्ति योग्य खर्चों को खर्च करने से पहले ग्राहक को उद्धृत और सूचित किया जाएगा। कोई छिपी हुई लागत नहीं है।",
        "7.3 बिलिंग और भुगतान",
        "• Stratium Legal लागू कर कानून के अनुसार CFDI (कर चालान) जारी करेगा।",
        "• Starter और Soft Landing योजनाओं का भुगतान सेवा के प्रावधान से पहले किया जाता है, सिवाय सेवा प्रस्ताव में सहमत चरणबद्ध भुगतान के।",
        "• Cumplimiento Mensual योजना का भुगतान प्रत्येक अवधि की शुरुआत के बाद पाँच (5) कैलेंडर दिनों के भीतर किया जाता है।",
        "• भुगतान Stratium Legal द्वारा निर्दिष्ट खाते में इलेक्ट्रॉनिक हस्तांतरण के माध्यम से किया जाता है।",
        "• सभी शुल्क मैक्सिकन पेसो (MXN) में व्यक्त और चुकाए जाते हैं।",
        "7.4 भुगतान में चूक",
        "चूक की स्थिति में, बकाया शेष पर देरी के प्रति दिन, देय तिथि पर प्रभावी 28-दिवसीय TIIE के दोगुने के बराबर दर पर विलंब ब्याज अर्जित होगा। यदि देरी पंद्रह (15) कैलेंडर दिनों से अधिक हो जाती है, तो Stratium Legal कम से कम पाँच (5) कार्य दिवस पहले ग्राहक को सूचित करने के बाद सेवाओं को निलंबित कर सकता है।",
      ],
    },
    {
      title: "8. बौद्धिक संपदा",
      paragraphs: [
        "8.1 कार्य का स्वामित्व। Stratium Legal द्वारा उत्पादित दस्तावेज़, गठन के लेख, उपनियम, कॉर्पोरेट पुस्तकें, सभा की कार्यवाही, अनुबंध, कानूनी राय और अन्य सुपुर्दगियाँ संबंधित शुल्क का पूर्ण भुगतान होने के बाद ग्राहक की संपत्ति होंगी।",
        "8.2 फर्म की बौद्धिक संपदा। Stratium Legal अपनी पद्धतियों, मॉडलों, टेम्पलेट्स, प्रारूपों, पूर्वनिर्णय डेटाबेस, विश्लेषण उपकरणों, पेशेवर नो-हाउ, ब्रांड, लोगो और वेबसाइट सामग्री का स्वामित्व बनाए रखता है। ग्राहक इन परिसंपत्तियों पर कोई अधिकार प्राप्त नहीं करता।",
        "8.3 उपयोग लाइसेंस। ग्राहक को सुपुर्दगियों का उपयोग केवल उन कॉर्पोरेट उद्देश्यों के लिए करने हेतु एक गैर-विशिष्ट, गैर-हस्तांतरणीय और सीमित लाइसेंस प्राप्त होता है जिनके लिए वे तैयार किए गए थे।",
      ],
    },
    {
      title: "9. देयता की सीमा",
      paragraphs: [
        "9.1 साधनों का दायित्व। Stratium Legal का दायित्व साधनों का है, परिणामों का नहीं। फर्म उचित परिश्रम, विशेषज्ञता और व्यावसायिकता के साथ सेवाएँ प्रदान करने के लिए प्रतिबद्ध है, पर किसी विशिष्ट परिणाम, अनुकूल निर्णय, विनियामक अनुमोदन या किसी विशेष उद्देश्य की प्राप्ति की गारंटी नहीं देती।",
        "9.2 सीमाएँ। दुर्भावना, बुरी नीयत या घोर लापरवाही को छोड़कर, Stratium Legal की कुल और संचयी देयता दावे को जन्म देने वाली घटना से पहले के बारह (12) महीनों के दौरान ग्राहक द्वारा वास्तव में भुगतान किए गए शुल्क की राशि से अधिक नहीं होगी।",
        "9.3 अपवर्जन। Stratium Legal निम्नलिखित के लिए उत्तरदायी नहीं होगा:",
        "• अप्रत्यक्ष, आकस्मिक, परिणामी, दंडात्मक या विशेष क्षति, जिसमें लाभ की हानि या प्रतिष्ठा को नुकसान शामिल है।",
        "• ग्राहक द्वारा प्रदान की गई अधूरी, गलत या विलंबित जानकारी से उत्पन्न प्रतिकूल परिणाम।",
        "• फर्म की अनुशंसाओं के विपरीत ग्राहक के निर्णय।",
        "• सेवा के प्रावधान के बाद के विधायी, विनियामक या न्यायिक परिवर्तन।",
        "• तीसरे पक्षों के कार्य या चूक: अधिकारी, प्रतिपक्ष, नोटरी, दलाल, सार्वजनिक रजिस्ट्री।",
        "• दैवीय घटना या अप्रत्याशित घटना (force majeure)।",
        "• CFF के अनुच्छेद 83 के अंतर्गत सेवाओं के अनुबंध से पहले के उल्लंघनों से उत्पन्न जुर्माने या दंड, जिनका नियमितीकरण सेवाओं का उद्देश्य है पर जिनका अधिरोपण विशेष रूप से कर अधिकारियों पर निर्भर करता है।",
      ],
    },
    {
      title: "10. पेशेवर गोपनीयता और गुप्तता",
      paragraphs: [
        "10.1 पेशेवर गोपनीयता। Stratium Legal वकील-ग्राहक विशेषाधिकार का कड़ाई से पालन करता है। ग्राहक द्वारा संप्रेषित सभी जानकारी विशेषाधिकार प्राप्त और गोपनीय है। फर्म इसे स्पष्ट प्राधिकरण के बिना तीसरे पक्षों को प्रकट नहीं करेगी, सिवाय अनिवार्य कानूनी दायित्व के, जिस स्थिति में वह कानून द्वारा अनुमत सीमा तक ग्राहक को तुरंत सूचित करेगी।",
        "10.2 गोपनीयता दायित्व। दोनों पक्ष सभी गोपनीय जानकारी के संबंध में सख्त गोपनीयता बनाए रखने और दूसरे पक्ष के पूर्व लिखित प्राधिकरण के बिना इसे प्रकट न करने का वचन देते हैं।",
        "10.3 अपवाद। निम्नलिखित को गोपनीय जानकारी नहीं माना जाएगा: a) जो प्राप्तकर्ता पक्ष के उल्लंघन के बिना सार्वजनिक डोमेन की हो या बन जाए; b) जो गोपनीयता के दायित्व के बिना प्राप्तकर्ता पक्ष को पहले से ज्ञात हो; c) जो बिना प्रतिबंध के किसी तीसरे पक्ष से वैध रूप से प्राप्त हो; d) जो प्राप्तकर्ता पक्ष द्वारा स्वतंत्र रूप से विकसित की गई हो; e) जिसे सक्षम प्राधिकारी के आदेश से प्रकट किया जाना हो।",
        "10.4 अवधि। गोपनीयता का दायित्व पेशेवर संबंध के दौरान और सेवाओं की समाप्ति से पाँच (5) वर्ष तक प्रभावी रहेगा, वाणिज्यिक संहिता के अनुच्छेद 38 द्वारा स्थापित दस (10) वर्ष के दस्तावेज़ संरक्षण दायित्व पर प्रतिकूल प्रभाव डाले बिना।",
      ],
    },
    {
      title: "11. हित का टकराव",
      paragraphs: [
        "Stratium Legal किसी भी पेशेवर कार्यभार को स्वीकार करने से पहले हित-टकराव की जाँच करेगा। टकराव की स्थिति में, वह ग्राहक को तुरंत सूचित करेगा और सुरक्षा उपाय लागू कर सकता है या, यदि यह संभव न हो, तो प्रतिनिधित्व अस्वीकार कर सकता है।",
      ],
    },
    {
      title: "12. अवधि और समाप्ति",
      paragraphs: [
        "12.1 अवधि। ये नियम उनकी स्वीकृति पर प्रभावी होते हैं और तब तक प्रभावी रहते हैं जब तक पक्षों के बीच पेशेवर संबंध मौजूद है। Cumplimiento Mensual योजना के लिए, सदस्यता हर अवधि स्वचालित रूप से नवीनीकृत होती है। Starter और Soft Landing योजनाओं के लिए, संबंध सहमत सुपुर्दगियों की पूर्ण सुपुर्दगी के साथ समाप्त हो जाता है।",
        "12.2 ग्राहक द्वारा रद्दीकरण। ग्राहक किसी भी समय, कम से कम पंद्रह (15) कैलेंडर दिन पहले लिखित सूचना (info@stratiumlegal.com पर ईमेल) द्वारा सेवाओं को रद्द कर सकता है। Cumplimiento Mensual योजना के रद्दीकरण की स्थिति में, चालू अवधि का कोई धनवापसी नहीं होगी। Starter या Soft Landing योजनाओं में, ग्राहक अर्जित शुल्क और पहले से किए गए खर्चों को कवर करेगा।",
        "12.3 Stratium Legal द्वारा समाप्ति। Stratium Legal निम्नलिखित स्थितियों में, पूर्व लिखित सूचना के साथ, सेवाओं को समाप्त कर सकता है: a) पंद्रह (15) कैलेंडर दिनों से अधिक का भुगतान न होना; b) ग्राहक द्वारा प्रदान की गई गलत, अधूरी या भ्रामक जानकारी; c) अपरिहार्य हित-टकराव; d) कानून या पेशेवर नैतिकता के विपरीत कार्य करने का अनुरोध; e) विश्वास के संबंध का अपूरणीय क्षरण; f) अप्रत्याशित घटना जो सेवाओं के स्थायी प्रावधान को रोकती है।",
        "12.4 समाप्ति के प्रभाव। समाप्ति पर, Stratium Legal ग्राहक को उत्पन्न सभी कॉर्पोरेट दस्तावेज़ डिजिटल प्रारूप में सौंपेगा। गोपनीयता, पेशेवर गोपनीयता, बौद्धिक संपदा और देयता की सीमा के दायित्व समाप्ति के बाद भी जारी रहेंगे।",
      ],
    },
    {
      title: "13. प्लेटफ़ॉर्म और वेबसाइट का उपयोग",
      paragraphs: [
        "वेबसाइट https://stratiumlegal.com और संपर्क तथा निःशुल्क परामर्श फ़ॉर्म Stratium Legal की संपत्ति हैं। ग्राहक और आगंतुक प्लेटफ़ॉर्म का उपयोग केवल अधिकृत उद्देश्यों के लिए करने का वचन देते हैं। निम्नलिखित निषिद्ध है: अन्य ग्राहकों की जानकारी या प्रतिबंधित क्षेत्रों तक पहुँचने का प्रयास करना, रिवर्स इंजीनियरिंग करना, मैलवेयर या दुर्भावनापूर्ण कोड डालना, सेवाओं के अलावा अन्य उद्देश्यों के लिए प्लेटफ़ॉर्म का उपयोग करना, और अनधिकृत व्यक्तियों के साथ पहुँच क्रेडेंशियल साझा करना।",
        "वेबसाइट की सामग्री, जिसमें LGSM, CFF और वाणिज्यिक संहिता से उत्पन्न कानूनी दायित्वों की जानकारी, विशिष्ट अनुच्छेदों के संदर्भ और जुर्माने के आंकड़े शामिल हैं, केवल सूचनात्मक उद्देश्यों के लिए प्रदान की जाती है और यह कानूनी सलाह नहीं है। प्रत्येक स्थिति का व्यक्तिगत विश्लेषण आवश्यक है।",
      ],
    },
    {
      title: "14. व्यक्तिगत डेटा का संरक्षण",
      paragraphs: [
        "ग्राहक और संबंधित व्यक्तियों के व्यक्तिगत डेटा का प्रसंस्करण Stratium Legal की व्यापक गोपनीयता सूचना द्वारा नियंत्रित होता है, जो https://stratiumlegal.com/privacidad पर उपलब्ध है और इन नियमों का अभिन्न हिस्सा है। व्यक्तिगत डेटा से संबंधित किसी भी मामले के लिए, ग्राहक privacidad@stratiumlegal.com से संपर्क कर सकता है।",
      ],
    },
    {
      title: "15. भ्रष्टाचार-रोधी और नैतिक अनुपालन",
      paragraphs: [
        "Stratium Legal अपनी गतिविधियों को पेशेवर नैतिकता के उच्चतम मानकों का पालन करते हुए और लागू भ्रष्टाचार-रोधी कानून के अनुपालन में संचालित करता है, जिसमें प्रशासनिक जिम्मेदारियों का सामान्य कानून और, जहाँ लागू हो, Foreign Corrupt Practices Act (FCPA) तथा UK Bribery Act शामिल हैं। ग्राहक भ्रष्टाचार, रिश्वत या प्रभाव के दुरुपयोग के कृत्यों का अनुरोध न करने का वचन देता है।",
      ],
    },
    {
      title: "16. दैवीय घटना और अप्रत्याशित घटना",
      paragraphs: [
        "कोई भी पक्ष दैवीय घटना या अप्रत्याशित घटना (force majeure) से उत्पन्न गैर-निष्पादन के लिए उत्तरदायी नहीं होगा। प्रभावित पक्ष अगले पाँच (5) कार्य दिवसों के भीतर दूसरे को सूचित करेगा और प्रभावों को कम करने तथा यथाशीघ्र निष्पादन फिर से शुरू करने के अपने सर्वोत्तम प्रयास करेगा।",
      ],
    },
    {
      title: "17. मनी लॉन्ड्रिंग की रोकथाम",
      paragraphs: [
        "Stratium Legal ग्राहक की पहचान, उसके संसाधनों के वैध स्रोत और उसके संचालन की प्रकृति (KYC) को सत्यापित करने के लिए अतिरिक्त जानकारी का अनुरोध करने का अधिकार सुरक्षित रखता है। यदि जानकारी अपर्याप्त है या अवैध संचालन के संकेत उत्पन्न करती है, तो फर्म सेवाएँ प्रदान करने से इनकार कर सकती है या पेशेवर संबंध समाप्त कर सकती है।",
      ],
    },
    {
      title: "18. गैर-विशिष्टता",
      paragraphs: [
        "जब तक स्पष्ट रूप से अन्यथा सहमति न हो, संबंध विशिष्ट नहीं है। ग्राहक अन्य कानूनी पेशेवरों को नियुक्त कर सकता है, और Stratium Legal अन्य ग्राहकों को सेवाएँ प्रदान कर सकता है, बशर्ते कोई हित-टकराव न हो।",
      ],
    },
    {
      title: "19. संचार और सूचनाएँ",
      paragraphs: [
        "सभी संचार और सूचनाएँ लिखित रूप में की जानी चाहिए और वैध मानी जाएँगी जब वे: a) पक्षों द्वारा नामित पतों पर ईमेल द्वारा भेजी जाएँ (Stratium Legal के लिए info@stratiumlegal.com); b) Stratium Legal के संस्थागत WhatsApp के माध्यम से भेजी जाएँ; c) Stratium Legal के प्लेटफ़ॉर्म के माध्यम से भेजी जाएँ; d) उन्नत इलेक्ट्रॉनिक हस्ताक्षर या अखंडता और प्रामाणिकता की गारंटी देने वाले अन्य माध्यम से भेजी जाएँ।",
        "सूचनाएँ उनकी प्राप्ति के अगले कार्य दिवस पर प्रभावी होंगी।",
      ],
    },
    {
      title: "20. संशोधन",
      paragraphs: [
        "Stratium Legal किसी भी समय इन नियमों को संशोधित करने का अधिकार सुरक्षित रखता है, प्लेटफ़ॉर्म पर प्रकाशन और/या ईमेल के माध्यम से कम से कम पंद्रह (15) कैलेंडर दिन पहले ग्राहक को सूचित करते हुए। संशोधनों के प्रभावी होने के बाद सेवाओं का निरंतर उपयोग मौन स्वीकृति माना जाएगा।",
      ],
    },
    {
      title: "21. सामान्य प्रावधान",
      paragraphs: [
        "21.1 संपूर्ण समझौता। ये नियम, सेवा प्रस्ताव और व्यापक गोपनीयता सूचना के साथ, पक्षों के बीच संपूर्ण समझौते का गठन करते हैं और किसी भी पूर्व मौखिक या लिखित समझौते का स्थान लेते हैं।",
        "21.2 प्रावधानों की पृथक्करणीयता। यदि कोई प्रावधान अमान्य घोषित किया जाता है, तो शेष प्रावधान पूर्ण बल और प्रभाव में बने रहेंगे।",
        "21.3 कोई अधित्याग नहीं। किसी अधिकार का प्रयोग न करना अधित्याग नहीं माना जाएगा। कोई भी अधित्याग लिखित रूप में होना चाहिए।",
        "21.4 समनुदेशन। ग्राहक Stratium Legal की लिखित सहमति के बिना अधिकारों या दायित्वों का समनुदेशन नहीं कर सकता। फर्म विश्वसनीय पेशेवरों को समनुदेशित या उपठेका दे सकती है, ग्राहक के प्रति अपनी जिम्मेदारी बनाए रखते हुए।",
        "21.5 स्वतंत्र संबंध। यह संबंध स्वतंत्र पेशेवर सेवाओं का है। इन नियमों में कुछ भी पक्षों के बीच साझेदारी, एजेंसी, अधिदेश, रोजगार या श्रम संबंध उत्पन्न नहीं करता।",
      ],
    },
    {
      title: "22. लागू कानून और विवाद समाधान",
      paragraphs: [
        "22.1 लागू कानून। ये नियम संयुक्त मैक्सिकन राज्यों में प्रभावी कानूनों द्वारा शासित होते हैं, जिनमें LGSM, CFF, वाणिज्यिक संहिता और अन्य लागू वाणिज्यिक तथा कॉर्पोरेट कानून शामिल हैं।",
        "22.2 मध्यस्थता। विवादों को तीस (30) कैलेंडर दिनों तक प्रत्यक्ष वार्ता के माध्यम से सद्भावनापूर्वक हल करने का प्रयास किया जाएगा। यदि वे हल नहीं होते, तो पक्ष उन्हें मेक्सिको सिटी में एक मान्यता प्राप्त केंद्र के समक्ष मध्यस्थता के लिए प्रस्तुत कर सकते हैं।",
        "22.3 क्षेत्राधिकार। पक्ष स्पष्ट रूप से मेक्सिको सिटी के सक्षम न्यायालयों के क्षेत्राधिकार को स्वीकार करते हैं, और वर्तमान या भविष्य के निवास के कारण लागू होने वाले किसी अन्य क्षेत्राधिकार को त्यागते हैं।",
        "22.4 पंचाट (विकल्प)। वैकल्पिक रूप से, पक्ष सेवा प्रस्ताव में सहमत हो सकते हैं कि विवादों को मेक्सिको सिटी में स्थित Centro de Arbitraje de México (CAM) या International Chamber of Commerce (ICC) के समक्ष कानून के पंचाट के माध्यम से हल किया जाए। पंचाट निर्णय दोनों पक्षों के लिए अंतिम और बाध्यकारी होगा।",
      ],
    },
  ],
}

const cn: TermsBundle = {
  badge: "企业法律合规",
  pageTitle: "条款与条件",
  firmName: "Stratium Legal — 企业法律服务",
  tagline: "法律不会等待，您的企业也不能。",
  lastUpdated: "最后更新：2026年7月23日 — 版本 2.0",
  disclaimer:
    "本网站内容，包括有关 LGSM、CFF 和《商法典》所规定法律义务的信息、对具体条款的引用以及罚款数额，均仅供参考之用，不构成法律意见。每种情况都需要单独分析。",
  downloadLabel: "下载 PDF",
  downloadUrl: DOWNLOAD_URL,
  sections: [
    {
      title: "1. 定义",
      paragraphs: [
        "就本条款与条件（以下简称“条款”）而言，下列概念具有以下所赋予的含义：",
        "“Stratium Legal”或“本所”：一家专门从事墨西哥企业法律合规的企业法律服务事务所，采用 100% 远程（remote-first）模式运营，数字平台为 https://stratiumlegal.com。本所由合伙人 Lic. Diego Lazcano、Lic. Esteban Santiago Viñas Caballero 和 Lic. Diego Solano García 组成。",
        "“客户”：任何直接或通过其法定代表人、受托人或授权人员，签约、申请或使用 Stratium Legal 所提供法律服务的国内或外国自然人或法人。",
        "“服务”：Stratium Legal 提供的企业法律咨询、顾问、管理和协助服务的集合，组织为 Starter、Cumplimiento Mensual 和 Soft Landing 计划，以及第三条所述的附加服务。",
        "“服务提案”：载明客户所签约的特定服务的范围、交付物、经济条款和期限的具体文件，在报价请求后 24 小时内发送。它构成本条款不可分割的组成部分。",
        "“平台”：位于 https://stratiumlegal.com 的 Stratium Legal 网站，包括联系表单、免费咨询表单、WhatsApp 渠道，以及本所运营的任何客户门户或电子媒介。",
        "“机密信息”：因专业关系而在双方之间共享的所有信息、文件、数据、策略、商业秘密、职业秘密、股权结构、财务信息以及任何其他保密性质的数据。",
        "“双方”：Stratium Legal 与客户，合称。",
        "“营业日”：墨西哥城银行机构正常营业的任何日历日。",
        "“LGSM”：《商事公司通则》（Ley General de Sociedades Mercantiles）。",
        "“CFF”：《联邦税法典》（Código Fiscal de la Federación）。",
        "“商法典”：墨西哥合众国《商法典》。",
      ],
    },
    {
      title: "2. 目的与接受",
      paragraphs: [
        "本条款规范 Stratium Legal 与客户之间在企业法律服务提供、平台使用以及双方之间任何专业互动方面的关系。",
        "通过签约 Stratium Legal 的服务、签署或电子接受服务提案、进行任何付款、使用平台、通过联系或免费咨询表单提交信息，或通过电子邮件或 WhatsApp 与本所沟通，客户即表示其明确且无条件地全面接受本条款。如客户不同意，则应避免签约服务及使用平台。",
        "本条款是对针对每一事项所订立的特定服务提案的补充，但不取代之。如有抵触，以服务提案的规定为准。",
      ],
    },
    {
      title: "3. 服务与计划说明",
      paragraphs: [
        "Stratium Legal 为墨西哥的每一法人提供专门用于遵守 LGSM、CFF 和《商法典》所规定义务的企业法律服务。这些服务涵盖完整的企业生命周期，从公司设立到其持续的年度维护，并组织为以下计划。各计划的经济条款依照第四条所述流程通过个性化报价确定。",
        "3.1 Starter 计划 — 设立",
        "专为希望从第一天起就拥有坚实法律基础的创业者和企业设计。包括：",
        "• 设立商事公司（S.A. de C.V.、S. de R.L. de C.V. 或 LGSM 所规定的其他形式），包括起草设立文书和公司章程。",
        "• 编制初始公司簿册：股份或股权登记簿（LGSM 第 128 条）、股东会会议记录簿（LGSM 第 194 条）和资本变动簿。",
        "• 登记创始股东或合伙人及其各自的出资。",
        "• 起草第一份设立股东会会议记录。",
        "• 完整电子交付所有公司文件，具有完全法律效力，可直接用于审计、银行或公证。",
        "不包括：在 SAT 注册（公司 RFC 登记）、银行开户手续、在 IMPI 注册商标、公证费用、商业公共登记处费用或税务咨询。这些服务可另行签约。",
        "3.2 Cumplimiento Mensual 计划 — 虚拟内部法律顾问",
        "其作用如同一名内部企业律师，却无需相应的成本。通过定期订阅持续覆盖公司的企业和劳动义务。包括：",
        "• 准备并正式举行年度股东或合伙人普通大会（LGSM 第 178、181 条），包括更新所有公司簿册。",
        "• 审查和更新公司的授权书及法定代表人。",
        "• 在商事和民事合同、章程修改、股东协议和公司治理方面提供持续的企业咨询。",
        "• 全面劳动管理：起草个人劳动合同、在 IMSS 办理增减员、编制内部工作规章和行为准则。",
        "• 审查企业税务义务，并与客户的会计师协调，以确保及时合规。",
        "• 优先支持，营业日内最长响应时间为二十四（24）小时。",
        "• 定期法律义务提醒系统：大会、授权书续展、向主管机关申报、合同到期，以及源自 LGSM、CFF 和《商法典》的其他义务。",
        "订阅每期自动续订，除非客户依照第十二条，在下一周期开始前至少提前十五（15）个日历日通知取消。",
        "不包括：在诉讼中代表客户出席司法或行政机关、移民手续、商标注册、就特别交易（并购、重组）出具正式法律意见，或税务审计服务。",
        "3.3 Soft Landing 计划 — 外国公司",
        "专为希望安全、高效并依照墨西哥法律在墨西哥设立的外国公司设计。包括：",
        "• 法律可行性诊断，并就在墨西哥运营的最佳公司架构提出建议。",
        "• 在公证人面前设立墨西哥公司（S.A. de C.V.、S.A.P.I. de C.V. 或其他合适的公司形式）。",
        "• 编制公司簿册并对合伙人或股东进行初始登记。",
        "• 就适用于外国投资者和公司在墨西哥的税收制度提供咨询，与客户的税务顾问或 Stratium Legal 推荐的顾问协调进行。",
        "• 在墨西哥开立企业银行账户过程中提供陪同协助。",
        "• 为在墨西哥境内的法定代表人办理公证授权书。",
        "• 就墨西哥劳动法规和外籍人员的移民要求提供一般性指导。",
        "不包括：直接移民手续（签证、工作许可）、详细税务咨询、对外国公司的审计，或在移民主管机关前的代表。",
        "3.4 附加及专项服务",
        "除上述计划外，Stratium Legal 还提供以下可独立或作为补充签约的服务：",
        "• 企业规范化：为多年未更新簿册、记录或登记的公司重建完整的企业历史。包括依照 LGSM 和 CFF 进行更新。",
        "• 公司变更：合伙人的加入与退出、增资与减资、独任管理人或董事会的变更、章程修改，以及 LGSM 所规定的其他公司行为。",
        "• 股东特别大会：召集通知、会议记录、公司簿册登记，以及在适用情况下的公证和登记。",
        "• 知识产权、并购、尽职调查及专项合同服务。",
        "这些服务的范围、交付物和经济条款将在相应的服务提案中确定，该提案在请求后 24 小时内交付给客户。",
      ],
    },
    {
      title: "4. 签约流程",
      paragraphs: [
        "签约 Stratium Legal 的服务遵循以下流程：",
        "1. 在线报价：客户通过网站表单、电子邮件（info@stratiumlegal.com）或机构 WhatsApp 说明其需求。",
        "2. 24 小时内提案：Stratium Legal 向客户发送载明范围、交付物和确定经济条款的服务提案——没有小字条款、没有隐藏费用、没有事先承诺。",
        "3. 接受与付款：客户接受服务提案，并按所签约计划的条件进行相应付款。",
        "4. 交付文件：Stratium Legal 以电子格式交付具有完全法律效力的文件，自第一天起即可用于审计、银行或公证。",
        "初次咨询完全免费，不为客户产生任何承诺。Stratium Legal 承诺在 24 小时内回复且不发送垃圾信息。",
      ],
    },
    {
      title: "5. 客户的义务",
      paragraphs: [
        "客户承诺：",
        "1. 及时、真实、完整且充分地向 Stratium Legal 提供为妥善提供服务所需的所有信息、文件和要素，包括：合伙人和股东数据、税务信息、股权结构、以往会议记录、现有公司簿册及其他公司文件。",
        "2. 就可能影响服务提供的法律、企业、税务或任何其他性质的状况变化，立即通知 Stratium Legal。",
        "3. 按照所签约计划和服务提案的期限与条件，及时支付约定的费用和开支。",
        "4. 在所委托事项的办理中积极配合 Stratium 法律团队，回应信息请求和所提出的法律建议。",
        "5. 不将 Stratium Legal 制作的服务、法律意见、公司文件或交付物用于非法、欺诈或违反适用法律的目的。",
        "6. 遵守本条款及服务提案中所规定的保密条款。",
        "7. 指定一名授权联系人与 Stratium Legal 进行沟通。",
        "8. 取得签约服务及就所委托法律事项作出决定所需的内部公司授权。",
      ],
    },
    {
      title: "6. Stratium Legal 的义务",
      paragraphs: [
        "Stratium Legal 承诺：",
        "1. 依照 LGSM、CFF、《商法典》及其他适用法律，以企业法律实务所要求的勤勉、专业技能、专业精神和职业道德提供服务。",
        "2. 为客户的事项指派具有适当经验和专长的律师，团队成员包括 Lic. Diego Lazcano（公司、合同与供应链）、Esteban Santiago Viñas Caballero（公司、民事与公证实务）和 Diego Solano García（商事公司与特许经营）。",
        "3. 在报价请求后二十四（24）小时内交付载明范围、交付物和确定经济条款的服务提案。",
        "4. 就所委托事项的进展及时向客户通报。",
        "5. 以电子格式交付所有具有完全法律效力的文件。",
        "6. 依照第十条的规定，对客户的所有机密信息严格保密。",
        "7. 遵守职业道德规范，包括忠诚、独立和职业保密的义务。",
        "8. 遵守每项服务计划所承诺的响应时间（Cumplimiento Mensual 计划为 24 小时）。",
        "9. 及时识别并向客户告知任何实际或潜在的利益冲突。",
      ],
    },
    {
      title: "7. 费用与付款条件",
      paragraphs: [
        "7.1 费用的确定",
        "各计划和服务的费用依照第四条所述流程通过个性化报价确定。Stratium Legal 在请求后二十四（24）小时内向客户发送载明确定经济条款的服务提案，没有小字条款或隐藏费用。",
        "报价费用不含增值税（VAT），增值税将依照现行税法转嫁给客户。费用包含个性化咨询和具有完全法律效力的电子交付。Stratium Legal 保留为新签约更新其费用的权利，但不影响已依据有效服务提案签约并已付款的服务。",
        "7.2 可报销开支",
        "客户将承担合理且有据可查的开支，包括：",
        "• 政府规费及缴款（商业公共登记处、SAT、IMPI、INM、IMSS 等）。",
        "• 公证人和公共经纪人费用。",
        "• 文件的翻译、合法化和附加证明（apostille）服务。",
        "• 快递及文件实物寄送费用（如适用）。",
        "• 经客户事先授权的外部顾问费用。",
        "可报销开支将在发生之前报价并告知客户。没有隐藏费用。",
        "7.3 开票与付款",
        "• Stratium Legal 将依照现行税法开具 CFDI（税务发票）。",
        "• Starter 和 Soft Landing 计划的款项在服务提供之前支付，但服务提案中约定的分阶段付款除外。",
        "• Cumplimiento Mensual 计划的款项在每个周期开始后的五（5）个日历日内支付。",
        "• 款项通过电子转账支付至 Stratium Legal 指定的账户。",
        "• 所有费用均以墨西哥比索（MXN）表示并结算。",
        "7.4 逾期付款",
        "如发生逾期，将按相当于到期日有效的 28 天期 TIIE 两倍的利率，就未清余额按逾期天数计收逾期利息。如逾期超过十五（15）个日历日，Stratium Legal 在至少提前五（5）个营业日通知客户后，可暂停服务。",
      ],
    },
    {
      title: "8. 知识产权",
      paragraphs: [
        "8.1 工作成果的所有权。Stratium Legal 制作的文件、设立文书、公司章程、公司簿册、会议记录、合同、法律意见及其他交付物，在相应费用全额结清后归客户所有。",
        "8.2 本所的知识产权。Stratium Legal 保留对其方法论、模型、模板、格式、判例数据库、分析工具、专业知识（know-how）、品牌、标识和网站内容的所有权。客户不就这些资产取得任何权利。",
        "8.3 使用许可。客户获得一项非独占、不可转让且有限的许可，仅可将交付物用于其制作时所针对的企业目的。",
      ],
    },
    {
      title: "9. 责任限制",
      paragraphs: [
        "9.1 手段义务。Stratium Legal 的义务是手段义务而非结果义务。本所承诺以应有的勤勉、专业技能和专业精神提供服务，但不保证特定结果、有利判决、监管批准或任何特定目标的实现。",
        "9.2 限额。除故意、恶意或重大过失外，Stratium Legal 的累计总责任不超过客户在引起索赔的事件之前十二（12）个月内实际支付的费用金额。",
        "9.3 除外。Stratium Legal 不对以下情形承担责任：",
        "• 间接、附带、后果性、惩罚性或特殊损害，包括利润损失或声誉损害。",
        "• 因客户提供的不完整、不准确或不及时的信息而产生的不利结果。",
        "• 客户作出的与本所建议相悖的决定。",
        "• 服务提供之后的立法、监管或判例变化。",
        "• 第三方的作为或不作为：主管机关、相对方、公证人、经纪人、公共登记处。",
        "• 不可抗力或意外事件。",
        "• 依照 CFF 第 83 条，因签约服务之前的违约而产生的罚款或处罚，其规范化属于服务的对象，但其课处完全取决于税务主管机关。",
      ],
    },
    {
      title: "10. 职业保密与保密义务",
      paragraphs: [
        "10.1 职业保密。Stratium Legal 严格遵守律师—客户保密特权。客户传达的所有信息均属特权且保密。除强制性法律义务外，本所未经明确授权不会向第三方披露；在该等情形下，本所将在法律允许的范围内立即通知客户。",
        "10.2 保密义务。双方承诺对所有机密信息严格保密，未经另一方事先书面授权不予披露。",
        "10.3 例外。下列信息不视为机密信息：a) 在接收方无违约的情况下已属或成为公共领域的信息；b) 接收方在无保密义务的情况下事先已知悉的信息；c) 自第三方合法且无限制取得的信息；d) 接收方独立开发的信息；e) 须依主管机关命令披露的信息。",
        "10.4 期限。保密义务在专业关系存续期间以及服务终止后五（5）年内持续有效，但不影响《商法典》第 38 条所规定的十（10）年文件保存义务。",
      ],
    },
    {
      title: "11. 利益冲突",
      paragraphs: [
        "Stratium Legal 在接受任何专业委托之前将进行利益冲突核查。如存在冲突，本所将立即通知客户，并可采取防范措施；如无法采取，则可拒绝代理。",
      ],
    },
    {
      title: "12. 有效期与终止",
      paragraphs: [
        "12.1 有效期。本条款自接受之时起生效，并在双方之间存在专业关系期间持续有效。对于 Cumplimiento Mensual 计划，订阅每期自动续订。对于 Starter 和 Soft Landing 计划，关系随约定交付物的全部交付而结束。",
        "12.2 客户取消。客户可随时通过书面通知（发送电子邮件至 info@stratiumlegal.com）并至少提前十五（15）个日历日取消服务。如取消 Cumplimiento Mensual 计划，当期不予退款。对于 Starter 或 Soft Landing 计划，客户将承担已发生的费用和已产生的开支。",
        "12.3 Stratium Legal 终止。Stratium Legal 经书面通知后，可在下列情形下终止服务：a) 逾期付款超过十五（15）个日历日；b) 客户提供虚假、不完整或误导性信息；c) 无法化解的利益冲突；d) 要求实施违反法律或职业道德的行为；e) 信任关系无可挽回地恶化；f) 永久妨碍服务提供的不可抗力。",
        "12.4 终止的效果。终止时，Stratium Legal 将以电子格式向客户交付所生成的全部公司文件。保密、职业保密、知识产权和责任限制的义务在终止后继续有效。",
      ],
    },
    {
      title: "13. 平台与网站的使用",
      paragraphs: [
        "网站 https://stratiumlegal.com 以及联系和免费咨询表单为 Stratium Legal 所有。客户和访问者承诺仅将平台用于经授权的目的。禁止：试图访问其他客户的信息或受限区域、进行逆向工程、植入恶意软件或恶意代码、将平台用于服务以外的目的，以及与未经授权的人员共享访问凭证。",
        "本网站内容，包括有关 LGSM、CFF 和《商法典》所规定法律义务的信息、对具体条款的引用以及罚款数额，均仅供参考之用，不构成法律意见。每种情况都需要单独分析。",
      ],
    },
    {
      title: "14. 个人数据保护",
      paragraphs: [
        "对客户及相关自然人的个人数据处理受 Stratium Legal《综合隐私告知》的约束，该告知可在 https://stratiumlegal.com/privacidad 查阅，并构成本条款不可分割的组成部分。如有任何与个人数据有关的事项，客户可联系 privacidad@stratiumlegal.com。",
      ],
    },
    {
      title: "15. 反腐败与道德合规",
      paragraphs: [
        "Stratium Legal 秉持最高的职业道德标准开展活动，并遵守适用的反腐败法律，包括《行政责任通则》以及在适用情况下的《反海外腐败法》（FCPA）和《英国反贿赂法》（UK Bribery Act）。客户承诺不要求实施腐败、贿赂或斡旋受贿的行为。",
      ],
    },
    {
      title: "16. 意外事件与不可抗力",
      paragraphs: [
        "任何一方均不对因意外事件或不可抗力而导致的不履行承担责任。受影响一方将在随后五（5）个营业日内通知另一方，并尽最大努力减轻影响并尽快恢复履行。",
      ],
    },
    {
      title: "17. 反洗钱",
      paragraphs: [
        "Stratium Legal 保留要求提供额外信息以核实客户身份、其资金来源的合法性及其经营性质（KYC）的权利。如信息不足或产生非法经营的迹象，本所可拒绝提供服务或终止专业关系。",
      ],
    },
    {
      title: "18. 非排他性",
      paragraphs: [
        "除非另有明确约定，本关系不具排他性。客户可聘请其他法律专业人士，Stratium Legal 也可向其他客户提供服务，只要不存在利益冲突。",
      ],
    },
    {
      title: "19. 通讯与通知",
      paragraphs: [
        "所有通讯和通知均须以书面形式作出，并在下列情形下视为有效：a) 通过电子邮件发送至双方指定的地址（Stratium Legal 为 info@stratiumlegal.com）；b) 通过 Stratium Legal 的机构 WhatsApp 发送；c) 通过 Stratium Legal 的平台发送；d) 通过高级电子签名或其他保证完整性和真实性的方式发送。",
        "通知自收到之次一营业日起生效。",
      ],
    },
    {
      title: "20. 修改",
      paragraphs: [
        "Stratium Legal 保留随时修改本条款的权利，并通过在平台发布和/或电子邮件，至少提前十五（15）个日历日通知客户。修改生效后继续使用服务即构成默示接受。",
      ],
    },
    {
      title: "21. 一般规定",
      paragraphs: [
        "21.1 完整协议。本条款连同服务提案和《综合隐私告知》构成双方之间的完整协议，并取代任何先前的口头或书面协议。",
        "21.2 条款可分性。如任何条款被宣布无效，其余条款仍具有完全的效力。",
        "21.3 不弃权。未行使任何权利不构成弃权。任何弃权均须以书面形式作出。",
        "21.4 转让。未经 Stratium Legal 书面同意，客户不得转让权利或义务。本所可向可信赖的专业人士转让或分包，同时保持其对客户的责任。",
        "21.5 独立关系。本关系为独立的专业服务关系。本条款中的任何内容均不在双方之间产生合伙、代理、委任、雇佣或劳动关系。",
      ],
    },
    {
      title: "22. 适用法律与争议解决",
      paragraphs: [
        "22.1 适用法律。本条款受墨西哥合众国现行法律管辖，包括 LGSM、CFF、《商法典》及其他适用的商事和公司法律。",
        "22.2 调解。争议将在三十（30）个日历日内通过直接谈判本着善意予以解决。如未能解决，双方可将争议提交墨西哥城一家公认的中心进行调解。",
        "22.3 管辖权。双方明确服从墨西哥城有管辖权法院的管辖，并放弃因现在或将来住所而可能享有的任何其他管辖。",
        "22.4 仲裁（替代方案）。双方亦可在服务提案中约定，争议通过在墨西哥城设立的墨西哥仲裁中心（CAM）或国际商会（ICC）进行法律仲裁解决。仲裁裁决对双方均为终局且具有约束力。",
      ],
    },
  ],
}

export function getTermsFictionalContent(locale: string): TermsBundle {
  if (locale === "es") return es
  if (locale === "in") return ind
  if (locale === "cn") return cn
  return en
}
