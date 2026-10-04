const BRAND = {
  lime: "#D8FF00",
  cyan: "#00FFF3",
  black: "#000000",
  charcoal: "#151719",
  logo: "https://elpuasdigitalcrafts.com/logos/logo-updated-150x150.webp",
  website: "https://elpuasdigitalcrafts.com/es/",
  personalWebsite: "https://elpuas.com",
  calendar: "https://calendar.app.google/WVLmA19nLHZEisQb7",
  email: "management@elpuasdev.com",
  phone: "+506 6058 5887",
};

const PROPOSAL_PRESETS = {
  family: {
    projectName: "Desarrollo, Hosting y Mantenimiento Web",
    proposalIntro: "Ofrecemos una propuesta especial con dos alternativas y contrato de 12 meses. Ambos planes incluyen desarrollo inicial, hosting administrado, SSL, soporte y mantenimiento.",
    proposalObjective: "Desarrollar un sitio web moderno, visual y autoadministrable, orientado a presentar los servicios, proyectos y catálogo del cliente. El sitio funcionará como destino principal desde redes sociales, herramienta de captación y base para el crecimiento digital.",
    proposalSolution: "El sitio se desarrollará en WordPress, utilizando una plantilla profesional como base y personalizándola para reflejar la identidad visual del cliente. La solución priorizará experiencia móvil, facilidad de administración, velocidad de carga y crecimiento futuro.",
    siteStructure: "Home: presentación de la marca, servicios y llamados a la acción\nProjects: portafolio general y páginas individuales\nServicios: descripción, metodología y formulario de contacto\nCatálogo: presentación visual organizada por categorías\nFicha individual: fotografías, descripción y solicitud de cotización\nNosotros: historia, filosofía y enfoque\nContacto / Cotizar: formulario para captar oportunidades",
    sharedServices: "Instalación y configuración de WordPress\nAdaptación de una plantilla profesional\nPresentación responsive para móvil, tablet y computadora\nCreación de las páginas acordadas\nHosting administrado y certificado SSL\nActualizaciones de WordPress, plantilla y plugins\nCopias de seguridad programadas\nSeguridad básica, monitoreo y soporte técnico",
    planOneName: "Plan Familiar Esencial",
    planOnePrice: "$75 USD mensuales más IVA",
    planOneTerm: "12 meses",
    planOneDescription: "Nuestra alternativa más económica y básica para publicar el sitio y mantenerlo funcionando correctamente.",
    planOneFeatures: "Personalización visual estándar de la plantilla\nConfiguración básica de las secciones acordadas\nMantenimiento y soporte técnico regular",
    planOneExclusions: "Compra o renovación del dominio\nLicencias premium\nFuncionalidad nueva fuera del alcance",
    planTwoName: "Plan Familiar Profesional",
    planTwoPrice: "$150 USD mensuales más IVA",
    planTwoTerm: "12 meses",
    planTwoDescription: "Una alternativa más completa para fortalecer la presentación visual, el rendimiento y la medición del sitio.",
    planTwoFeatures: "Todo lo incluido en el Plan Familiar Esencial\nMayor personalización visual\nOptimización de imágenes y rendimiento\nSEO técnico básico y analítica\nMonitoreo de disponibilidad y ambiente de pruebas\nCapacitación básica\nSoporte técnico prioritario\nDominio estándar y licencias premium durante la vigencia",
    planTwoExclusions: "Funcionalidad nueva fuera del alcance\nProducción de fotografía, video o contenido masivo",
    paymentTerms: "Los precios indicados no incluyen IVA. El pago se realiza mensualmente por adelantado. No se contempla un cobro inicial adicional por el desarrollo descrito, siempre que el contrato se mantenga vigente durante los 12 meses.",
    nextStep: "Si alguna de las dos opciones resulta adecuada, podemos elegir el plan y definir juntos los detalles del sitio, el contenido inicial y el calendario de trabajo.\n\nQuedo atento a su decisión o cualquier comentario adicional.",
    includeSecondPlan: true,
  },
  essential: {
    projectName: "Mantenimiento y Soporte Web — Plan Essential",
    proposalIntro: "Una suscripción mensual con lo esencial para mantener el sitio actualizado, seguro y funcionando correctamente.",
    proposalObjective: "Proteger la inversión digital del cliente mediante mantenimiento preventivo, monitoreo y soporte continuo.",
    proposalSolution: "ElPuas Digital Crafts se encargará de las tareas técnicas recurrentes para que el equipo pueda concentrarse en su negocio.",
    siteStructure: "",
    sharedServices: "",
    planOneName: "Essential",
    planOnePrice: "$150 USD / mes",
    planOneTerm: "Mensual",
    planOneDescription: "Todo lo básico para mantener el sitio funcionando correctamente.",
    planOneFeatures: "Actualizaciones y mantenimiento\nBackups regulares\nSeguridad y monitoreo\nSoporte por email",
    planOneExclusions: "Hosting\nHoras de desarrollo\nCambios o funcionalidades fuera del mantenimiento",
    paymentTerms: "El pago se realiza mensualmente por adelantado. Los trabajos fuera del alcance del plan se cotizan por separado.",
    nextStep: "Para iniciar, confirmamos el plan, los accesos técnicos y la fecha de activación del servicio.\n\nQuedo atento a su decisión o cualquier comentario adicional.",
    includeSecondPlan: false,
  },
  growth: {
    projectName: "Mantenimiento y Crecimiento Web — Plan Growth",
    proposalIntro: "Una suscripción mensual para empresas que quieren mantener su sitio protegido y evolucionarlo continuamente.",
    proposalObjective: "Mantener una plataforma estable, rápida y en mejora continua, con capacidad mensual para ajustes de desarrollo.",
    proposalSolution: "El plan combina mantenimiento administrado, hosting, optimización y horas de desarrollo para atender mejoras prioritarias.",
    siteStructure: "",
    sharedServices: "",
    planOneName: "Growth",
    planOnePrice: "$180 USD / mes",
    planOneTerm: "Mensual",
    planOneDescription: "Mantenimiento continuo, hosting y capacidad de desarrollo incluida.",
    planOneFeatures: "Todo lo del plan Essential\nHosting incluido\n2 horas de desarrollo por mes\nOptimización de rendimiento\nReportes mensuales",
    planOneExclusions: "Horas adicionales no aprobadas\nRediseños completos o proyectos fuera del alcance",
    paymentTerms: "El pago se realiza mensualmente por adelantado. Las horas no incluidas o los proyectos especiales se cotizan por separado.",
    nextStep: "Para iniciar, confirmamos el plan, los accesos técnicos y las primeras prioridades de desarrollo.\n\nQuedo atento a su decisión o cualquier comentario adicional.",
    includeSecondPlan: false,
  },
  premium: {
    projectName: "Soporte y Desarrollo Continuo — Plan Premium",
    proposalIntro: "Una suscripción mensual con soporte prioritario y mayor capacidad de desarrollo para una evolución constante.",
    proposalObjective: "Ofrecer atención técnica prioritaria, mantenimiento completo y capacidad mensual para implementaciones de mayor alcance.",
    proposalSolution: "El plan integra mantenimiento, hosting, consultoría técnica y un bloque ampliado de desarrollo mensual.",
    siteStructure: "",
    sharedServices: "",
    planOneName: "Premium",
    planOnePrice: "$250 USD / mes",
    planOneTerm: "Mensual",
    planOneDescription: "Soporte prioritario y capacidad de desarrollo continua.",
    planOneFeatures: "Todo lo del plan Growth\n5 horas de desarrollo por mes\nSoporte prioritario\nConsultoría técnica\nImplementaciones avanzadas",
    planOneExclusions: "Horas adicionales no aprobadas\nProyectos completos fuera del alcance mensual",
    paymentTerms: "El pago se realiza mensualmente por adelantado. Las horas no incluidas o los proyectos especiales se cotizan por separado.",
    nextStep: "Para iniciar, confirmamos el plan, los accesos técnicos y una lista priorizada de necesidades.\n\nQuedo atento a su decisión o cualquier comentario adicional.",
    includeSecondPlan: false,
  },
};

const DOCUMENT_COPY = {
  es: {
    reportTitle: "Reporte mensual",
    reportDocumentTitle: "Reporte",
    preheader: "Resumen de mantenimiento y novedades",
    maintenanceSupport: "Mantenimiento y soporte",
    emailHero: "Todo al día,<br>con claridad.",
    clientIntro: "Este es el resumen mensual preparado para",
    reportAttached: "Reporte mensual adjunto",
    reportAttachedText: "Adjunto a este correo encontrarán el reporte mensual detallado.",
    reportOf: "Reporte mensual",
    viewReport: "Ver reporte mensual →",
    reportPending: "Reporte detallado pendiente",
    reportPendingText: "El reporte mensual detallado será compartido tan pronto esté disponible.",
    importantNote: "Nota importante",
    articleMonth: "Artículo del mes",
    readArticle: "Leer artículo →",
    pendingNotes: "Pendientes y notas",
    scheduleCall: "Agendar una llamada →",
    scheduleCallShort: "Agendar una llamada",
    payWithPayPal: "Pagar con PayPal →",
    tagline: "Desarrollo web con amor y precisión.",
    proposalTitle: "Propuesta por suscripción",
    preparedFor: "Preparada para",
    offer: "Oferta",
    continuousSolution: "Una solución continua.",
    objective: "Objetivo",
    clearDirection: "Una dirección clara.",
    proposedSolution: "Solución propuesta",
    foundationGrow: "La base para crecer.",
    structure: "Estructura",
    siteBuild: "El sitio que construiremos.",
    sharedServices: "Servicios compartidos",
    includedPlans: "Incluido en todos los planes.",
    availablePlans: "Planes disponibles",
    chooseOption: "Elige la alternativa adecuada.",
    recommended: "Alternativa recomendada",
    minimumCommitment: "Compromiso mínimo",
    includes: "Incluye",
    notIncluded: "No incluido",
    economicTerms: "Condiciones económicas",
    transparentInvestment: "Una inversión transparente.",
    nextStep: "Siguiente paso",
    whenReady: "Cuando estés listo.",
    datePending: "Fecha por confirmar",
    proposalDocumentTitle: "Propuesta",
    maintenance: {
      WordPress: ["WordPress", "Núcleo actualizado"],
      Plugins: ["Plugins", "Plugins revisados"],
      Temas: ["Temas", "Temas actualizados"],
      Respaldos: ["Respaldos", "Respaldos completados"],
      Seguridad: ["Seguridad", "Seguridad revisada"],
    },
  },
  en: {
    reportTitle: "Monthly report",
    reportDocumentTitle: "Report",
    preheader: "Maintenance summary and latest updates",
    maintenanceSupport: "Maintenance and support",
    emailHero: "Everything up to date,<br>clearly presented.",
    clientIntro: "This monthly summary was prepared for",
    reportAttached: "Monthly report attached",
    reportAttachedText: "The detailed monthly report is attached to this email.",
    reportOf: "Monthly report",
    viewReport: "View monthly report →",
    reportPending: "Detailed report pending",
    reportPendingText: "The detailed monthly report will be shared as soon as it is available.",
    importantNote: "Important note",
    articleMonth: "Article of the month",
    readArticle: "Read article →",
    pendingNotes: "Pending items and notes",
    scheduleCall: "Schedule a call →",
    scheduleCallShort: "Schedule a call",
    payWithPayPal: "Pay with PayPal →",
    tagline: "Web development with love and precision.",
    proposalTitle: "Subscription proposal",
    preparedFor: "Prepared for",
    offer: "Offer",
    continuousSolution: "An ongoing solution.",
    objective: "Objective",
    clearDirection: "A clear direction.",
    proposedSolution: "Proposed solution",
    foundationGrow: "A foundation for growth.",
    structure: "Structure",
    siteBuild: "The website we will build.",
    sharedServices: "Shared services",
    includedPlans: "Included in every plan.",
    availablePlans: "Available plans",
    chooseOption: "Choose the right option.",
    recommended: "Recommended option",
    minimumCommitment: "Minimum commitment",
    includes: "Includes",
    notIncluded: "Not included",
    economicTerms: "Commercial terms",
    transparentInvestment: "A transparent investment.",
    nextStep: "Next step",
    whenReady: "When you are ready.",
    datePending: "Date to be confirmed",
    proposalDocumentTitle: "Proposal",
    maintenance: {
      WordPress: ["WordPress", "Core updated"],
      Plugins: ["Plugins", "Plugins reviewed"],
      Temas: ["Themes", "Themes updated"],
      Respaldos: ["Backups", "Backups completed"],
      Seguridad: ["Security", "Security reviewed"],
    },
  },
  it: {
    reportTitle: "Report mensile",
    reportDocumentTitle: "Report",
    preheader: "Riepilogo della manutenzione e ultimi aggiornamenti",
    maintenanceSupport: "Manutenzione e supporto",
    emailHero: "Tutto aggiornato,<br>con chiarezza.",
    clientIntro: "Questo riepilogo mensile è stato preparato per",
    reportAttached: "Report mensile allegato",
    reportAttachedText: "In allegato a questa email troverete il report mensile dettagliato.",
    reportOf: "Report mensile",
    viewReport: "Visualizza il report mensile →",
    reportPending: "Report dettagliato in sospeso",
    reportPendingText: "Il report mensile dettagliato sarà condiviso non appena disponibile.",
    importantNote: "Nota importante",
    articleMonth: "Articolo del mese",
    readArticle: "Leggi l’articolo →",
    pendingNotes: "Attività in sospeso e note",
    scheduleCall: "Prenota una chiamata →",
    scheduleCallShort: "Prenota una chiamata",
    payWithPayPal: "Paga con PayPal →",
    tagline: "Sviluppo web con amore e precisione.",
    proposalTitle: "Proposta in abbonamento",
    preparedFor: "Preparata per",
    offer: "Offerta",
    continuousSolution: "Una soluzione continuativa.",
    objective: "Obiettivo",
    clearDirection: "Una direzione chiara.",
    proposedSolution: "Soluzione proposta",
    foundationGrow: "La base per crescere.",
    structure: "Struttura",
    siteBuild: "Il sito che realizzeremo.",
    sharedServices: "Servizi condivisi",
    includedPlans: "Incluso in tutti i piani.",
    availablePlans: "Piani disponibili",
    chooseOption: "Scegli l’alternativa più adatta.",
    recommended: "Alternativa consigliata",
    minimumCommitment: "Durata minima",
    includes: "Include",
    notIncluded: "Non incluso",
    economicTerms: "Condizioni economiche",
    transparentInvestment: "Un investimento trasparente.",
    nextStep: "Passaggio successivo",
    whenReady: "Quando sei pronto.",
    datePending: "Data da confermare",
    proposalDocumentTitle: "Proposta",
    maintenance: {
      WordPress: ["WordPress", "Core aggiornato"],
      Plugins: ["Plugin", "Plugin verificati"],
      Temas: ["Temi", "Temi aggiornati"],
      Respaldos: ["Backup", "Backup completati"],
      Seguridad: ["Sicurezza", "Sicurezza verificata"],
    },
  },
};

const DATE_LOCALES = { es: "es-CR", en: "en-US", it: "it-IT" };
const DEFAULT_GREETINGS = { es: "Hola,", en: "Hello,", it: "Ciao," };
const DEFAULT_CLOSINGS = {
  es: "Si desean revisar algún detalle o necesitan instrucciones para acceder al contenido completo, pueden agendar una llamada conmigo.\n\nQuedo atento a su decisión o cualquier comentario adicional.",
  en: "If you would like to review any details or need instructions to access the complete content, you can schedule a call with me.\n\nI remain available for your decision or any additional comments.",
  it: "Se desiderate rivedere qualche dettaglio o avete bisogno di istruzioni per accedere al contenuto completo, potete prenotare una chiamata con me.\n\nResto a disposizione per la vostra decisione o per qualsiasi ulteriore commento.",
};
const MONTH_TRANSLATIONS = {
  enero: ["enero", "January", "gennaio"],
  febrero: ["febrero", "February", "febbraio"],
  marzo: ["marzo", "March", "marzo"],
  abril: ["abril", "April", "aprile"],
  mayo: ["mayo", "May", "maggio"],
  junio: ["junio", "June", "giugno"],
  julio: ["julio", "July", "luglio"],
  agosto: ["agosto", "August", "agosto"],
  septiembre: ["septiembre", "September", "settembre"],
  octubre: ["octubre", "October", "ottobre"],
  noviembre: ["noviembre", "November", "novembre"],
  diciembre: ["diciembre", "December", "dicembre"],
};
const localizedWebsite = (language) => `https://elpuasdigitalcrafts.com/${language}/`;

function localizedMonth(value, language) {
  const normalized = String(value || "").trim().toLocaleLowerCase("es");
  const languageIndex = { es: 0, en: 1, it: 2 }[language] ?? 0;
  const month = Object.values(MONTH_TRANSLATIONS).find((translations) =>
    translations.some((translation) => translation.toLocaleLowerCase("es") === normalized),
  );
  return month ? month[languageIndex] : value;
}

const state = {
  mode: "email",
  html: "",
};

const emailForm = document.querySelector("#email-form");
const proposalForm = document.querySelector("#proposal-form");
const previewFrame = document.querySelector("#preview-frame");
const modeButtons = [...document.querySelectorAll(".mode-button")];
const saveStatus = document.querySelector("#save-status");
const actionHelp = document.querySelector("#action-help");
const copyButton = document.querySelector("#copy-html");
const reportDelivery = document.querySelector("#report-delivery");
const reportUrlField = document.querySelector("#report-url-field");
const reportDeliveryHelp = document.querySelector("#report-delivery-help");
const emailLanguage = document.querySelector("#email-language");
const proposalLanguage = document.querySelector("#proposal-language");
const proposalPreset = document.querySelector("#proposal-preset");
const secondPlanToggle = proposalForm.elements.includeSecondPlan;
const secondPlanFields = document.querySelector("#second-plan-fields");

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatText = (value = "") => escapeHtml(value).replaceAll("\n", "<br>");

const safeUrl = (value = "") => {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
};

const lines = (value = "") =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

const asList = (items, color = BRAND.charcoal) =>
  items.length
    ? `<ul style="margin:0;padding:0;list-style:none;">${items
        .map(
          (item) => `<li style="position:relative;margin:0 0 10px;padding-left:22px;color:${color};font-family:Arial,sans-serif;font-size:15px;line-height:1.6;"><span style="position:absolute;left:0;top:0;color:${BRAND.cyan};font-family:Arial,sans-serif;font-weight:700;">✓</span>${escapeHtml(item)}</li>`,
        )
        .join("")}</ul>`
    : "";

const getData = (form) => Object.fromEntries(new FormData(form).entries());

function maintenanceCards(form, language) {
  const selected = new FormData(form).getAll("maintenance");
  const labels = DOCUMENT_COPY[language].maintenance;

  return selected
    .map(
      (item) => `
        <td class="stack-column" width="50%" style="padding:6px;vertical-align:top;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #dbe4a6;border-radius:10px;background:#fbfff0;">
            <tr>
              <td style="padding:15px 16px;">
                <p style="margin:0 0 4px;color:#000000;font-family:Arial,sans-serif;font-size:14px;font-weight:700;">${escapeHtml(labels[item][0])}</p>
                <p style="margin:0;color:#58602d;font-family:Arial,sans-serif;font-size:12px;line-height:1.45;">${escapeHtml(labels[item][1])}</p>
              </td>
            </tr>
          </table>
        </td>`,
    )
    .reduce((rows, card, index) => {
      if (index % 2 === 0) rows.push([card]);
      else rows[rows.length - 1].push(card);
      return rows;
    }, [])
    .map((row) => `<tr>${row.join("")}${row.length === 1 ? '<td class="stack-column" width="50%"></td>' : ""}</tr>`)
    .join("");
}

function buildEmail() {
  const data = getData(emailForm);
  const language = DOCUMENT_COPY[data.emailLanguage] ? data.emailLanguage : "es";
  const copy = DOCUMENT_COPY[language];
  const siteUrl = localizedWebsite(language);
  const reportMonth = localizedMonth(data.reportMonth, language);
  const articleUrl = safeUrl(data.articleUrl);
  const reportUrl = safeUrl(data.reportUrl);
  const paymentUrl = safeUrl(data.paymentUrl);
  const pending = lines(data.pendingItems);
  const maintenance = maintenanceCards(emailForm, language);
  const reportBlock = data.reportDelivery === "attached"
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:24px 0;background:#fbfff0;border:1px solid #dbe4a6;border-radius:10px;"><tr><td style="padding:18px 20px;"><p style="margin:0 0 6px;color:#000000;font-family:Arial,sans-serif;font-size:14px;font-weight:700;">${copy.reportAttached}</p><p style="margin:0;color:#4f5830;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">${copy.reportAttachedText}</p></td></tr></table>`
    : data.reportDelivery === "linked" && reportUrl
      ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:24px 0;background:#fbfff0;border:1px solid #dbe4a6;border-radius:10px;"><tr><td style="padding:18px 20px;"><p style="margin:0 0 12px;color:#000000;font-family:Arial,sans-serif;font-size:14px;font-weight:700;">${copy.reportOf}: ${escapeHtml(reportMonth)}</p><a href="${escapeHtml(reportUrl)}" style="display:inline-block;border-radius:999px;background:#000000;color:${BRAND.lime};font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:11px 18px;">${copy.viewReport}</a></td></tr></table>`
      : data.reportDelivery === "pending"
        ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:24px 0;background:#f5f8f8;border-left:4px solid ${BRAND.cyan};"><tr><td style="padding:18px 20px;"><p style="margin:0 0 6px;color:#000000;font-family:Arial,sans-serif;font-size:13px;font-weight:700;">${copy.reportPending}</p><p style="margin:0;color:#343b3c;font-family:Arial,sans-serif;font-size:15px;line-height:1.65;">${copy.reportPendingText}</p></td></tr></table>`
        : "";
  const articleBlock = data.articleTitle
    ? `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:28px 0;background:#000000;border-radius:12px;">
        <tr>
          <td style="padding:26px;">
            <p style="margin:0 0 8px;color:${BRAND.cyan};font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">${copy.articleMonth}</p>
            <h2 style="margin:0 0 12px;color:${BRAND.lime};font-family:Arial,sans-serif;font-size:22px;line-height:1.25;">${escapeHtml(data.articleTitle)}</h2>
            ${data.articleSummary ? `<p style="margin:0 0 18px;color:#d7e5e2;font-family:Arial,sans-serif;font-size:15px;line-height:1.65;">${escapeHtml(data.articleSummary)}</p>` : ""}
            ${articleUrl ? `<a href="${escapeHtml(articleUrl)}" style="display:inline-block;border-radius:999px;background:${BRAND.lime};color:#000000;font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:12px 20px;">${copy.readArticle}</a>` : ""}
          </td>
        </tr>
      </table>`
    : "";

  const noticeBlock = data.noticeText
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:24px 0;background:#f5f8f8;border-left:4px solid ${BRAND.cyan};"><tr><td style="padding:18px 20px;"><p style="margin:0 0 6px;color:#000000;font-family:Arial,sans-serif;font-size:13px;font-weight:700;">${copy.importantNote}</p><p style="margin:0;color:#343b3c;font-family:Arial,sans-serif;font-size:15px;line-height:1.65;">${escapeHtml(data.noticeText)}</p></td></tr></table>`
    : "";

  const pendingBlock = pending.length
    ? `<div style="margin-top:28px;"><h2 style="margin:0 0 14px;color:#000000;font-family:Arial,sans-serif;font-size:20px;">${copy.pendingNotes}</h2>${asList(pending)}</div>`
    : "";

  return `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${copy.reportDocumentTitle}: ${escapeHtml(reportMonth)} | ElPuas Digital Crafts</title>
  <style>
    @media only screen and (max-width:620px){.email-shell{width:100%!important}.content-pad{padding-left:22px!important;padding-right:22px!important}.stack-column{display:block!important;width:100%!important}.email-title{font-size:30px!important}}
  </style>
</head>
<body style="margin:0;padding:0;background:#edf1f2;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${copy.preheader}: ${escapeHtml(reportMonth)}.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#edf1f2;">
    <tr><td align="center" style="padding:30px 12px;">
      <table role="presentation" class="email-shell" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;border-collapse:separate;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 14px 40px rgba(30,40,40,.12);">
        <tr><td style="height:6px;background:linear-gradient(90deg,${BRAND.lime},${BRAND.cyan});font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr>
          <td class="content-pad" style="padding:26px 34px;background:#000000;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
              <td><a href="${siteUrl}"><img src="${BRAND.logo}" width="74" height="74" alt="ElPuas Digital Crafts" style="display:block;width:74px;height:74px;border:0;object-fit:contain;"></a></td>
              <td align="right" style="color:${BRAND.cyan};font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">${copy.reportTitle}<br><span style="color:${BRAND.lime};font-size:14px;">${escapeHtml(reportMonth)}</span></td>
            </tr></table>
          </td>
        </tr>
        <tr><td class="content-pad" style="padding:38px 34px 12px;">
          <p style="margin:0 0 12px;color:${BRAND.cyan};font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">${copy.maintenanceSupport}</p>
          <h1 class="email-title" style="margin:0 0 22px;color:#000000;font-family:Arial,sans-serif;font-size:38px;line-height:1.08;letter-spacing:-1.4px;">${copy.emailHero}</h1>
          <p style="margin:0 0 18px;color:#111111;font-family:Arial,sans-serif;font-size:16px;line-height:1.7;">${escapeHtml(data.greeting)}</p>
          ${data.clientName ? `<p style="margin:0 0 18px;color:#111111;font-family:Arial,sans-serif;font-size:16px;line-height:1.7;">${copy.clientIntro} <strong>${escapeHtml(data.clientName)}</strong>.</p>` : ""}
          <p style="margin:0;color:#343b3c;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;">${escapeHtml(data.statusText)}</p>
        </td></tr>
        ${maintenance ? `<tr><td class="content-pad" style="padding:18px 28px 8px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${maintenance}</table></td></tr>` : ""}
        <tr><td class="content-pad" style="padding:10px 34px 38px;">
          ${reportBlock}
          ${noticeBlock}
          ${articleBlock}
          ${pendingBlock}
          ${data.closingText ? `<p style="margin:30px 0 18px;color:#343b3c;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;">${formatText(data.closingText)}</p>` : ""}
          ${paymentUrl ? `<a href="${escapeHtml(paymentUrl)}" style="display:inline-block;margin:0 8px 10px 0;border-radius:999px;background:#0070ba;color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:12px 20px;">${copy.payWithPayPal}</a>` : ""}
          <a href="${BRAND.calendar}" style="display:inline-block;border-radius:999px;background:#000000;color:${BRAND.lime};font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:12px 20px;">${copy.scheduleCall}</a>
          <p style="margin:26px 0 0;color:#000000;font-family:Arial,sans-serif;font-size:15px;line-height:1.6;"><strong>Alfredo Navas Fernandini</strong><br><span style="color:#596263;">CTO · ElPuas Digital Crafts</span><br><a href="${BRAND.personalWebsite}" style="color:#246f72;text-decoration:none;">elpuas.com</a><br><a href="${siteUrl}" style="color:#246f72;text-decoration:none;">elpuasdigitalcrafts.com</a><br><a href="mailto:${BRAND.email}" style="color:#246f72;text-decoration:none;">${BRAND.email}</a><br><span style="color:#596263;">${BRAND.phone}</span></p>
        </td></tr>
        <tr><td class="content-pad" style="padding:24px 34px;background:#000000;text-align:center;">
          <p style="margin:0 0 7px;color:${BRAND.lime};font-family:Arial,sans-serif;font-size:14px;font-weight:700;">${copy.tagline}</p>
          <p style="margin:0;color:#a8c5c2;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;"><a href="${siteUrl}" style="color:${BRAND.cyan};text-decoration:none;">elpuasdigitalcrafts.com</a> · ${BRAND.phone}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function proposalPlanCard({ name, price, term, description, features, exclusions }, copy, featured = false) {
  return `<article class="plan ${featured ? "featured" : ""}">
    ${featured ? `<span class="recommended">${copy.recommended}</span>` : ""}
    <p class="plan-name">${escapeHtml(name)}</p>
    <p class="plan-price">${escapeHtml(price)}</p>
    <p class="plan-term">${copy.minimumCommitment}: ${escapeHtml(term)}</p>
    ${description ? `<p class="plan-description">${escapeHtml(description)}</p>` : ""}
    ${features.length ? `<h3>${copy.includes}</h3><ul class="check-list">${features.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
    ${exclusions.length ? `<h3>${copy.notIncluded}</h3><ul class="plain-list">${exclusions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
  </article>`;
}

function buildProposal() {
  const data = getData(proposalForm);
  const language = DOCUMENT_COPY[data.proposalLanguage] ? data.proposalLanguage : "es";
  const copy = DOCUMENT_COPY[language];
  const siteUrl = localizedWebsite(language);
  const siteStructure = lines(data.siteStructure);
  const sharedServices = lines(data.sharedServices);
  const includeSecondPlan = new FormData(proposalForm).getAll("includeSecondPlan").includes("yes");
  const planOne = {
    name: data.planOneName,
    price: data.planOnePrice,
    term: data.planOneTerm,
    description: data.planOneDescription,
    features: lines(data.planOneFeatures),
    exclusions: lines(data.planOneExclusions),
  };
  const planTwo = {
    name: data.planTwoName,
    price: data.planTwoPrice,
    term: data.planTwoTerm,
    description: data.planTwoDescription,
    features: lines(data.planTwoFeatures),
    exclusions: lines(data.planTwoExclusions),
  };
  const date = data.proposalDate
    ? new Intl.DateTimeFormat(DATE_LOCALES[language], { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${data.proposalDate}T12:00:00Z`))
    : copy.datePending;

  return `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(data.projectName)} | ${copy.proposalDocumentTitle}</title>
  <style>
    *{box-sizing:border-box}body{margin:0;background:#e9eeee;color:#151719;font-family:Arial,sans-serif}.proposal{width:min(920px,calc(100% - 32px));margin:32px auto;background:#fff;box-shadow:0 20px 60px rgba(20,30,30,.14)}.cover{min-height:580px;padding:58px;background:#000;display:flex;flex-direction:column;justify-content:space-between}.cover img{width:96px;height:96px;object-fit:contain}.kicker{color:${BRAND.cyan};font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase}.cover h1{max-width:760px;margin:14px 0 20px;color:${BRAND.lime};font-size:58px;line-height:.98;letter-spacing:-2.8px}.cover-client{margin:0;color:#d6ebe8;font-size:18px}.cover-meta{display:flex;justify-content:space-between;gap:24px;color:#a8c5c2;font-size:13px}.content{padding:58px}.offer-summary{padding:30px;border-left:5px solid ${BRAND.cyan};background:#f1f7f6}.section{padding:36px 0;border-bottom:1px solid #dce4e3}.section:first-child{padding-top:0}.section:last-child{border:0}.section-number{margin:0 0 8px;color:#637300;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}.section h2{margin:0 0 18px;font-size:34px;line-height:1.1;letter-spacing:-1.2px}.section>p,.offer-summary p{margin:0;color:#414b4c;font-size:16px;line-height:1.7}.list{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;list-style:none;margin:0;padding:0}.list li{padding:16px;border:1px solid #dbe4a6;border-radius:10px;background:#fbfff0;line-height:1.5}.plans{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;align-items:start}.plans.single{grid-template-columns:1fr}.plan{position:relative;padding:28px;border:1px solid #cfd8d7;border-radius:14px;background:#fff}.plan.featured{border:2px solid #000;background:#fbfff0}.recommended{display:inline-block;margin-bottom:18px;padding:7px 10px;border-radius:999px;background:#000;color:${BRAND.lime};font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase}.plan-name{margin:0 0 10px!important;color:#000!important;font-size:22px!important;font-weight:700;line-height:1.2!important}.plan-price{margin:0 0 7px!important;color:#000!important;font-size:26px!important;font-weight:700;line-height:1.15!important}.plan-term{margin:0 0 20px!important;color:#697273!important;font-size:12px!important}.plan-description{margin:0 0 22px!important;font-size:14px!important}.plan h3{margin:20px 0 10px;font-size:13px;text-transform:uppercase;letter-spacing:.7px}.check-list,.plain-list{list-style:none;margin:0;padding:0}.check-list li,.plain-list li{position:relative;margin:0 0 10px;padding-left:21px;font-size:14px;line-height:1.45}.check-list li:before{content:'✓';position:absolute;left:0;color:#657700;font-weight:700}.plain-list li:before{content:'—';position:absolute;left:0;color:#758082}.terms{padding:26px;border-radius:12px;background:#000;color:#d6ebe8}.terms h2{color:${BRAND.lime}}.terms p{color:#d6ebe8}.cta{padding:32px;border-left:5px solid ${BRAND.cyan};background:#f1f7f6}.calendar-button{display:inline-block;margin-top:20px;padding:12px 18px;border-radius:999px;background:#000;color:${BRAND.lime};font-size:14px;font-weight:700;text-decoration:none}.signature{margin-top:24px!important;font-size:14px!important}.signature a{color:#246f72;text-decoration:none}.footer{padding:28px 58px;background:#000;color:#a8c5c2;font-size:12px;display:flex;justify-content:space-between;gap:20px}.footer a{color:${BRAND.cyan};text-decoration:none}@media(max-width:680px){.cover,.content{padding:34px 26px}.cover h1{font-size:42px}.cover-meta,.footer{flex-direction:column}.list,.plans{grid-template-columns:1fr}.footer{padding:26px}}@media print{body{background:#fff}.proposal{width:100%;margin:0;box-shadow:none}.cover{min-height:100vh;page-break-after:always}.section,.plan{break-inside:avoid}.footer{break-before:avoid}@page{margin:0;size:A4}}
  </style>
</head>
<body>
  <main class="proposal">
    <section class="cover">
      <img src="${BRAND.logo}" width="96" height="96" alt="ElPuas Digital Crafts">
      <div>
        <p class="kicker">${copy.proposalTitle}</p>
        <h1>${escapeHtml(data.projectName)}</h1>
        <p class="cover-client">${copy.preparedFor} <strong>${escapeHtml(data.proposalClient)}</strong></p>
      </div>
      <div class="cover-meta"><span>${escapeHtml(date)}</span><span>${copy.tagline}</span></div>
    </section>
    <div class="content">
      ${data.proposalIntro ? `<section class="section"><div class="offer-summary"><p class="section-number">${copy.offer}</p><h2>${copy.continuousSolution}</h2><p>${escapeHtml(data.proposalIntro)}</p></div></section>` : ""}
      <section class="section"><p class="section-number">${copy.objective}</p><h2>${copy.clearDirection}</h2><p>${escapeHtml(data.proposalObjective)}</p></section>
      ${data.proposalSolution ? `<section class="section"><p class="section-number">${copy.proposedSolution}</p><h2>${copy.foundationGrow}</h2><p>${escapeHtml(data.proposalSolution)}</p></section>` : ""}
      ${siteStructure.length ? `<section class="section"><p class="section-number">${copy.structure}</p><h2>${copy.siteBuild}</h2><ul class="list">${siteStructure.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>` : ""}
      ${sharedServices.length ? `<section class="section"><p class="section-number">${copy.sharedServices}</p><h2>${copy.includedPlans}</h2><ul class="list">${sharedServices.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>` : ""}
      <section class="section"><p class="section-number">${copy.availablePlans}</p><h2>${copy.chooseOption}</h2><div class="plans ${includeSecondPlan ? "" : "single"}">${proposalPlanCard(planOne, copy)}${includeSecondPlan ? proposalPlanCard(planTwo, copy, true) : ""}</div></section>
      ${data.paymentTerms ? `<section class="section"><div class="terms"><p class="section-number">${copy.economicTerms}</p><h2>${copy.transparentInvestment}</h2><p>${escapeHtml(data.paymentTerms)}</p></div></section>` : ""}
      ${data.nextStep ? `<section class="section"><div class="cta"><p class="section-number">${copy.nextStep}</p><h2>${copy.whenReady}</h2><p>${formatText(data.nextStep)}</p><a class="calendar-button" href="${BRAND.calendar}">${copy.scheduleCall}</a><p class="signature"><strong>Alfredo Navas Fernandini</strong><br>CTO<br><a href="${BRAND.personalWebsite}">elpuas.com</a><br><a href="${siteUrl}">elpuasdigitalcrafts.com</a><br><a href="mailto:${BRAND.email}">${BRAND.email}</a><br>${BRAND.phone}</p></div></section>` : ""}
    </div>
    <footer class="footer"><span>© ${new Date().getFullYear()} ElPuas Digital Crafts</span><span><a href="${BRAND.calendar}">${copy.scheduleCallShort}</a> · ${BRAND.phone}</span></footer>
  </main>
</body>
</html>`;
}

function activeForm() {
  return state.mode === "email" ? emailForm : proposalForm;
}

function render() {
  state.html = state.mode === "email" ? buildEmail() : buildProposal();
  previewFrame.srcdoc = state.html;
  persist();
}

function setMode(mode) {
  state.mode = mode;
  emailForm.hidden = mode !== "email";
  proposalForm.hidden = mode !== "proposal";
  modeButtons.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
  });
  actionHelp.textContent = mode === "email"
    ? "Usa Copiar para correo y pega el resultado directamente en Gmail. Después adjunta el PDF de GoDaddy Hub."
    : "Usa Imprimir / PDF para guardar la propuesta con una presentación lista para compartir.";
  copyButton.textContent = mode === "email" ? "Copiar para correo" : "Copiar HTML";
  render();
}

function syncReportDelivery() {
  const delivery = reportDelivery.value;
  reportUrlField.hidden = delivery !== "linked";
  const messages = {
    attached: "El HTML indicará que el reporte está adjunto. Recuerda agregar el PDF de GoDaddy Hub en tu cliente de correo antes de enviarlo.",
    linked: "Agrega una URL pública al PDF y el correo mostrará un botón para abrirlo.",
    pending: "El correo explicará que el reporte de GoDaddy Hub será enviado cuando esté disponible.",
  };
  reportDeliveryHelp.textContent = messages[delivery];
}

function syncSecondPlan() {
  secondPlanFields.hidden = !secondPlanToggle.checked;
}

function applyProposalPreset(presetName) {
  const preset = PROPOSAL_PRESETS[presetName];
  if (!preset) return;
  Object.entries(preset).forEach(([name, value]) => {
    if (name === "includeSecondPlan") return;
    const field = proposalForm.elements[name];
    if (field) field.value = value;
  });
  secondPlanToggle.checked = preset.includeSecondPlan;
  syncSecondPlan();
  render();
}

function serializeForm(form) {
  const output = {};
  [...form.elements].forEach((field) => {
    if (!field.name) return;
    if (field.type === "checkbox") {
      output[field.name] ??= [];
      if (field.checked) output[field.name].push(field.value);
    } else {
      output[field.name] = field.value;
    }
  });
  return output;
}

function restoreForm(form, data = {}) {
  [...form.elements].forEach((field) => {
    if (!field.name || !(field.name in data)) return;
    if (field.type === "checkbox") field.checked = data[field.name].includes(field.value);
    else field.value = data[field.name];
  });
}

function persist() {
  try {
    localStorage.setItem("epdc-client-studio", JSON.stringify({
      mode: state.mode,
      email: serializeForm(emailForm),
      proposal: serializeForm(proposalForm),
    }));
    saveStatus.textContent = "Guardado local";
  } catch {
    saveStatus.textContent = "No se pudo guardar";
  }
}

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem("epdc-client-studio"));
    if (!saved) return;
    restoreForm(emailForm, saved.email);
    restoreForm(proposalForm, saved.proposal);
    state.mode = ["email", "proposal"].includes(saved.mode) ? saved.mode : "email";
  } catch {
    localStorage.removeItem("epdc-client-studio");
  }
}

function slug(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "documento";
}

function copyRenderedEmailFallback() {
  const documentToCopy = previewFrame.contentDocument;
  if (!documentToCopy?.body) return false;
  const range = documentToCopy.createRange();
  range.selectNodeContents(documentToCopy.body);
  const selection = documentToCopy.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  const copied = documentToCopy.execCommand("copy");
  selection.removeAllRanges();
  return copied;
}

async function copyHtml() {
  try {
    if (state.mode === "email") {
      const plainText = previewFrame.contentDocument?.body?.innerText || "";
      if (navigator.clipboard?.write && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": new Blob([state.html], { type: "text/html" }),
            "text/plain": new Blob([plainText], { type: "text/plain" }),
          }),
        ]);
      } else if (!copyRenderedEmailFallback()) {
        throw new Error("Rich clipboard is not available");
      }
      saveStatus.textContent = "Correo copiado";
    } else {
      await navigator.clipboard.writeText(state.html);
      saveStatus.textContent = "HTML copiado";
    }
  } catch {
    if (state.mode === "email" && copyRenderedEmailFallback()) {
      saveStatus.textContent = "Correo copiado";
      return;
    }
    const textarea = document.createElement("textarea");
    textarea.value = state.html;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    saveStatus.textContent = "Código HTML copiado";
  }
}

function downloadHtml() {
  const data = getData(activeForm());
  const name = state.mode === "email"
    ? `reporte-${data.clientName}-${data.reportMonth}`
    : `propuesta-${data.proposalClient}-${data.projectName}`;
  const blob = new Blob([state.html], { type: "text/html;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${slug(name)}.html`;
  link.click();
  URL.revokeObjectURL(link.href);
  saveStatus.textContent = "HTML descargado";
}

function printDocument() {
  previewFrame.contentWindow?.focus();
  previewFrame.contentWindow?.print();
}

modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
[reportDelivery, secondPlanToggle].forEach((field) => field.addEventListener("change", () => {
  syncReportDelivery();
  syncSecondPlan();
  render();
}));
proposalPreset.addEventListener("change", () => applyProposalPreset(proposalPreset.value));
[emailForm, proposalForm].forEach((form) => {
  form.addEventListener("input", render);
  form.addEventListener("change", render);
});
emailForm.elements.emailLanguage.addEventListener("change", () => {
  const language = emailForm.elements.emailLanguage.value;
  const currentClosing = emailForm.elements.closingText.value;
  emailForm.elements.greeting.value = DEFAULT_GREETINGS[language];
  if (Object.values(DEFAULT_CLOSINGS).includes(currentClosing)) {
    emailForm.elements.closingText.value = DEFAULT_CLOSINGS[language];
  }
  render();
});
copyButton.addEventListener("click", copyHtml);
document.querySelector("#download-html").addEventListener("click", downloadHtml);
document.querySelector("#print-document").addEventListener("click", printDocument);

const today = new Date();
const defaultDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
proposalForm.elements.proposalDate.value = defaultDate;
restore();
const restoredEmailLanguage = emailForm.elements.emailLanguage.value;
if (
  /^hola j[oó]venes,?$/i.test(emailForm.elements.greeting.value.trim()) ||
  Object.values(DEFAULT_GREETINGS).includes(emailForm.elements.greeting.value)
) {
  emailForm.elements.greeting.value = DEFAULT_GREETINGS[restoredEmailLanguage];
}
if (emailForm.elements.closingText.value === DEFAULT_CLOSINGS.es && restoredEmailLanguage !== "es") {
  emailForm.elements.closingText.value = DEFAULT_CLOSINGS[restoredEmailLanguage];
}
syncReportDelivery();
syncSecondPlan();
setMode(state.mode);
