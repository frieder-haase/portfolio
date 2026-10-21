import type { Metadata } from "next";
import Link from "next/link";
import ScreenshotGallery, { GalleryOpenButton, type Screenshot } from "@/components/ScreenshotGallery";

// Seitentitel und Linkvorschau
export const metadata: Metadata = {
  title: "Ticketsystem für Maßnahme-Direkt",
  description:
    "IHK-Abschlussprojekt: Full-Stack Ticketsystem mit React-Admin-Frontend und Symfony-Backend, live im Einsatz bei maßnahme-direkt.de.",
  alternates: { canonical: "/projekte/ticketsystem" },
  openGraph: {
    url: "/projekte/ticketsystem",
    images: [{ url: "/assets/projekte/Ticketsystem.png", alt: "Ticketsystem für maßnahme-direkt.de" }],
  },
};

// Screenshots für die Galerie
const SCREENSHOTS: Screenshot[] = [
  {
    src: "/assets/ticketsystem/nutzer_login.png",
    area: "nutzer",
    title: "Login - Nutzer",
    description: "Authentifizierung mit Trägernummer, Username und Passwort für das Kundenportal.",
    label: "Login",
    caption: "Nutzer können sich mit den vorhandenen Logindaten von maßnahme-direkt.de anmelden.",
    alt: "Loginformular für die Nutzer",
  },
  {
    src: "/assets/ticketsystem/nutzer_dashboard.png",
    area: "nutzer",
    title: "Dashboard - Nutzer",
    description: "Übersicht mit Filteroptionen, verfügbaren Limits und aktiven Tickets für Bildungsträger.",
    label: "Dashboard",
    caption: "Übersicht über die erstellten Tickets mit Filteroptionen und verfügbaren Limits",
    alt: "Dashboard für die Nutzer",
  },
  {
    src: "/assets/ticketsystem/nutzer_ticketform.png",
    area: "nutzer",
    title: "Ticketerstellung - Nutzer",
    description: "Intuitive Eingabemaske mit Echtzeit-Validierung, Prioritätsauswahl und Datei-Upload bis 8 MB.",
    label: "Ticketerstellung",
    caption: "Erstellformular für die Nutzer mit Prioritätsauswahl und Datei-Upload bis 8 MB",
    alt: "Ticketerstellungs-Formular für die Nutzer",
  },
  {
    src: "/assets/ticketsystem/nutzer_ticket.png",
    area: "nutzer",
    title: "Ticketdetails - Nutzer",
    description: "Detailansicht eines Tickets mit vollständiger Kommunikationshistorie und Möglichkeit zur Antwort.",
    label: "Ticketdetails",
    caption: "Nutzer können ihre erstellten Tickets einsehen und Updates zu dem Anliegen hinzufügen und einsehen.",
    alt: "Ticketdetails für die Nutzer",
  },
  {
    src: "/assets/ticketsystem/nutzer_premium.png",
    area: "nutzer",
    title: "Premium-Upgrade - Nutzer",
    description: "Drei Abonnementstufen mit transparenter Kontingent-Übersicht. Eine Upgrade-Anfrage löst automatisch ein Support-Ticket aus.",
    label: "Premium-Upgrade",
    caption: "Übersicht der Abonnementstufen. Eine Upgrade-Anfrage erstellt automatisch ein kostenfreies Support-Ticket.",
    alt: "Premium-Upgrade-Seite für die Nutzer",
  },
  {
    src: "/assets/ticketsystem/admin_dashboard.png",
    area: "admin",
    title: "Dashboard - Admin",
    description: "KPI-Cards, Suchfelder und Ticketliste mit Uhr-Icons für schnellen Überblick über Bearbeitungszeiten.",
    label: "Dashboard",
    caption: "KPI-Cards, Suchfelder und Ticketliste mit Uhr-Icons, welche einen schnellen Überblick bieten, wie lange das Ticket bereits offen ist.",
    alt: "Dashboard für die Admins",
  },
  {
    src: "/assets/ticketsystem/admin_ticketform.png",
    area: "admin",
    title: "Ticketbearbeitung - Admin",
    description: "Antwort-Editor, Anhänge und chronologischer Verlauf aller Kommunikationen mit dem Kunden.",
    label: "Ticketbearbeitung",
    caption: "Detailseite für die Tickets, wo alle Informationen zu dem Ticket abgerufen werden können. Zudem können hinterlegte Kommentare und Systemnachrichten zu dem Ticket eingesehen werden.",
    alt: "Ticketbearbeitung für die Admins",
  },
  {
    src: "/assets/ticketsystem/admin_userprofile.png",
    area: "admin",
    title: "Benutzerverwaltung - Admin",
    description: "Träger-Übersicht mit Plan-Status, Limits und Kontingent-Verwaltung für alle Kunden.",
    label: "Benutzerverwaltung",
    caption: "Übersicht zu den ausgewählten Träger. Hier können alle Nutzer der Trägernummer, sowie erstellte Tickets eingesehen werden. Zudem können hier die Limits und der Plan-Status eingesehen und bearbeitet werden.",
    alt: "Benutzerverwaltung für die Admins",
  },
  {
    src: "/assets/ticketsystem/admin_tracking.png",
    area: "admin",
    title: "Analytics - Admin",
    description: "Kreisdiagramme und Zeitraum-Filter für detaillierte Auswertungen und Statistiken.",
    label: "Analytics",
    caption: "Kurze Analytics-Seite, welche eine Übersicht über Tickets in dem angegebenen Zeitraum liefert.",
    alt: "Analytics-Übersicht für die Admins",
  },
];

// Kennzahlen-Kacheln
const KEY_FACTS = [
  { value: "Live", label: "im Produktiveinsatz" },
  { value: "80 h", label: "Projektzeit (IHK)" },
  { value: "< 1 Jahr", label: "bis zur Amortisation" },
  { value: "2.500–3.300 €", label: "Lizenzkosten pro Jahr gespart" },
];

export default function TicketsystemPage() {
  return (
    <main className="container mx-auto px-4 pt-12 pb-24 lg:pt-24">
      <div className="mx-auto max-w-6xl pt-4 pb-16 lg:py-16">
        {/* Header */}
        <div className="reveal mb-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">IHK-Abschlussprojekt</p>
          <h1 className="mb-3 !text-3xl md:!text-5xl">Ticketsystem für Maßnahme-Direkt</h1>
          {/* Einleitung und Button "Screenshots ansehen" */}
          <div className="grid gap-6 lg:grid-cols-4 lg:items-end lg:gap-4">
            <p className="max-w-3xl text-white/70 lg:col-span-3">
              Full-Stack Ticketsystem mit getrennten Nutzer- und Admin-Frontends zur effizienten Verwaltung
              von Support-Anfragen. Von der telefonischen Hotline zum strukturierten digitalen Workflow.
            </p>
            <GalleryOpenButton count={SCREENSHOTS.length} className="w-full" />
          </div>
        </div>

        {/* Kennzahlen */}
        <ul className="reveal mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          {KEY_FACTS.map((fact) => (
            <li key={fact.label} className="rounded border border-primary/30 bg-black/40 p-4">
              <span className="block text-xl font-bold text-primary lg:text-2xl">{fact.value}</span>
              <span className="mt-1 block text-xs text-white/70">{fact.label}</span>
            </li>
          ))}
        </ul>

        {/* Projektkontext */}
        <section 
          className="reveal mb-12 rounded border border-primary/30 bg-black/40 p-8"
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
        >
          <h2 className="mb-4">Die Herausforderung</h2>
          <p className="mb-4 leading-relaxed text-white/85">
            Maßnahme-Direkt ist eine Plattform für die elektronische Maßnahmeabwicklung (
            <a
              href="https://www.arbeitsagentur.de/institutionen/bildungstraeger/elektronische-massnahmeabwicklung"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary underline underline-offset-2 hover:opacity-70"
            >
              EMAW<span className="sr-only"> – Erklärung der Bundesagentur für Arbeit, öffnet in neuem Tab</span>
            </a>
            ), die Bildungsträgern
            die Verwaltung ihrer Maßnahmen über eine standardisierte Schnittstelle zur Bundesagentur für Arbeit ermöglicht.
          </p>
          <p className="leading-relaxed text-white/85">
            <strong className="text-primary">Das Problem:</strong> Support-Anfragen erfolgten ausschließlich telefonisch und per E-Mail.
            Dies führte zu hoher Mitarbeiterbelastung, Unterbrechungen, fehlender Übersicht und keiner zentralen Dokumentation.<br></br>
            <strong className="text-primary">Die Lösung:</strong> Ein maßgeschneidertes Ticketsystem mit intelligenter Kontingent-Verwaltung,
            automatisierten Workflows und getrennten Oberflächen für Kunden und Support-Team.
          </p>
        </section>

        {/* Technologie-Stack */}
        <section 
          className="reveal mb-12"
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
        >
          <h2 className="mb-6">Technologie-Stack</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded border border-primary/30 bg-black/40 p-6">
              <h3 className="mb-3 !text-lg">Backend & Nutzer-Frontend</h3>
              <ul className="space-y-2 text-sm text-white/85">
                <li>• Symfony 6.1.12 (PHP Framework)</li>
                <li>• Doctrine ORM für Datenbank-Abstraction</li>
                <li>• Twig Templating Engine</li>
                <li>• Symfony Mailer mit HTML-Templates</li>
                <li>• VichUploader für Datei-Handling</li>
              </ul>
            </div>
            <div className="rounded border border-primary/30 bg-black/40 p-6">
              <h3 className="mb-3 !text-lg">Admin-Frontend</h3>
              <ul className="space-y-2 text-sm text-white/85">
                <li>• React 19.1.1 mit TypeScript</li>
                <li>• Vite für Dev-Server & Build</li>
                <li>• Tailwind CSS für Styling</li>
                <li>• REST-API-Kommunikation (JSON)</li>
              </ul>
            </div>
            <div className="rounded border border-primary/30 bg-black/40 p-6">
              <h3 className="mb-3 !text-lg">Infrastructure & Tools</h3>
              <ul className="space-y-2 text-sm text-white/85">
                <li>• MySQL (Mehrdatenbank-Setup)</li>
                <li>• Docker (Mailer, DB-Container)</li>
                <li>• Git & WSL (Windows)</li>
                <li>• Cronjobs für Automation</li>
                <li>• PHPUnit für Backend-Tests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="reveal mb-12">
          <h2 className="mb-6">Einblicke in die Benutzeroberflächen</h2>
          <ScreenshotGallery screenshots={SCREENSHOTS} />
        </section>

        {/* Key Features */}
        <section 
          className="reveal mb-12"
          
        >
          <h2 className="mb-6">Kern-Features & UX-Highlights</h2>
          
          {/* Nutzer-Features */}
          <div className="mb-8">
            <h3 className="mb-4 !text-xl text-primary">Für Bildungsträger (Kunden)</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded border border-primary/30 bg-black/40 p-6">
                <h4 className="mb-3 !text-base text-white">Intelligente Ticketerstellung</h4>
                <p className="mb-3 text-sm leading-relaxed text-white/75">
                  Formular mit Echtzeit-Validierung, Prioritätsauswahl und optionalen Anhängen (PDF, JPEG, PNG bis 8 MB).
                  Datei-Upload mit MIME-Type-Prüfung.
                </p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>→ Automatische Deaktivierung erschöpfter Prioritäten</li>
                  <li>→ Visuelle Limitanzeige (Normal/Hoch/Dringend)</li>
                  <li>→ Sofort-Bestätigung per E-Mail</li>
                </ul>
              </div>
              <div className="rounded border border-primary/30 bg-black/40 p-6">
                <h4 className="mb-3 !text-base text-white">Premium-Upgrade-Flow</h4>
                <p className="mb-3 text-sm leading-relaxed text-white/75">
                  Drei Abonnementstufen mit transparenter Kontingent-Übersicht.
                  Upgrade-Request löst automatisch Support-Ticket aus.
                </p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>→ Keine automatische Zahlung, persönliche Beratung</li>
                  <li>→ Kostenfreies Premium-Anfrage-Ticket</li>
                  <li>→ E-Mail an alle Administratoren</li>
                </ul>
              </div>
              <div className="rounded border border-primary/30 bg-black/40 p-6">
                <h4 className="mb-3 !text-base text-white">Ticket-Übersicht & Updates</h4>
                <p className="mb-3 text-sm leading-relaxed text-white/75">
                  Filterbare Liste (Offen/Alle/Geschlossen) mit Status-Badges und chronologischer Sortierung.
                  Kunden können jederzeit Zusatzinformationen und Anhänge nachreichen.
                </p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>→ Detailansicht mit vollständigem Verlauf</li>
                  <li>→ Upload-Funktion für nachträgliche Anhänge</li>
                  <li>→ Anzeige aller Systemkommentare</li>
                </ul>
              </div>
              <div className="rounded border border-primary/30 bg-black/40 p-6">
                <h4 className="mb-3 !text-base text-white">Kontingent-Verwaltung</h4>
                <p className="mb-3 text-sm leading-relaxed text-white/75">
                  Monatliche Tickets basierend auf maßnahme-direkt Plan. Automatisches Reset am Monatsanfang via Cronjob.
                  Individuelle Extra-Limits durch Support möglich.
                </p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>→ Echtzeit-Badge mit verfügbaren Tickets</li>
                  <li>→ Separate Limits pro Priorität (Normal/Hoch/Dringend)</li>
                  <li>→ Bei aufgebrauchten Limits kann der Support, zu den angegebenen Öffnungszeiten, kontaktiert werden</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Admin-Features */}
          <div>
            <h3 className="mb-4 !text-xl text-primary">Für Support-Team (Administratoren)</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded border border-primary/30 bg-black/40 p-6">
                <h4 className="mb-3 !text-base text-white">KPI-Dashboard mit Smart Filters</h4>
                <p className="mb-3 text-sm leading-relaxed text-white/75">
                  Zentrale Übersicht mit 7 anklickbaren Metrikkarten: Gesamt Tickets, Überfällig, Neu, Status-Cards
                  (Offen/In Bearbeitung/Warte auf Antwort/Antwort vom Kunden).
                </p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>→ KPI-Cards als Ein-Klick-Filter</li>
                  <li>→ Überfällige Tickets basierend auf Priorität</li>
                  <li>→ ID- und Titel-Suche mit Echtzeit-Filterung</li>
                </ul>
              </div>
              <div className="rounded border border-primary/30 bg-black/40 p-6">
                <h4 className="mb-3 !text-base text-white">Visuelle Priorisierung</h4>
                <p className="mb-3 text-sm leading-relaxed text-white/75">
                  Uhr-Icons mit Farbcodierung (Grün: &gt;24h, Gelb: 12-24h, Rot: überfällig) neben jedem offenen Ticket.
                  Stern-Icon kennzeichnet Premium-Kunden für bevorzugte Behandlung.
                </p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>→ Sofortige Erkennung kritischer Tickets</li>
                  <li>→ Farbcodierte Prioritätsstufen (Rot/Gelb/Grün)</li>
                  <li>→ Premium-Markierung in gesamter Oberfläche</li>
                </ul>
              </div>
              <div className="rounded border border-primary/30 bg-black/40 p-6">
                <h4 className="mb-3 !text-base text-white">Ticket-Bearbeitung & Workflow</h4>
                <p className="mb-3 text-sm leading-relaxed text-white/75">
                  Take/Release-System verhindert gleichzeitige Bearbeitung. Zeiterfassung (startedAt, usedHours) für
                  Reporting. Antworten werden per Twig-Template als responsive E-Mails versendet.
                </p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>→ Trennung: Nutzerkommentare, Adminkommentare und Adminantworten</li>
                  <li>→ Automatischer Statuswechsel bei Antwort (→ &quot;Warte auf Antwort&quot;)</li>
                  <li>→ Systemnachrichten protokollieren den Verlauf des Tickets</li>
                </ul>
              </div>
              <div className="rounded border border-primary/30 bg-black/40 p-6">
                <h4 className="mb-3 !text-base text-white">Benutzerverwaltung & Analytics</h4>
                <p className="mb-3 text-sm leading-relaxed text-white/75">
                  Übersicht aller Träger mit Plan-Status, Ticket-Limits und Verbrauch. Premium aktivieren/kündigen,
                  Extra-Limits setzen. Archiv mit Zeitraum-Filtern und Diagrammen (Priorität, Kategorie).
                </p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>→ Direkte Plan-Verwaltung im Benutzerprofil</li>
                  <li>→ Kreisdiagramme für Prioritäts- und Kategorieverteilung</li>
                  <li>→ Durchschnittliche Bearbeitungszeit pro Zeitraum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ergebnis & Mehrwert */}
        <section 
          className="reveal mb-12 rounded border border-primary/30 bg-black/40 p-8"
          
        >
          <h2 className="mb-4">Projektergebnis & Business-Mehrwert</h2>
          <div className="space-y-4 text-white/85">
            <div>
              <h3 className="mb-2 !text-base text-primary">Erfolgreiche Integration & Produktiveinsatz</h3>
              <p className="leading-relaxed text-sm">
                Das Ticketsystem wurde erfolgreich in den Live-Betrieb von maßnahme-direkt.de integriert und
                wird aktiv von Bildungsträgern und Support-Team genutzt. Die telefonische Erreichbarkeit konnte
                auf definierte Zeitfenster reduziert werden, Anfragen werden nun strukturiert über Tickets abgewickelt.
              </p>
            </div>
            <div>
              <h3 className="mb-2 !text-base text-primary">Messbare Entlastung des Support-Teams</h3>
              <p className="leading-relaxed text-sm">
                <strong>Vorher:</strong> Mitarbeiter wurden durchgehend telefonisch und per E-Mail kontaktiert, 
                Unterbrechungen der laufenden Arbeit, fehlende Priorisierung, keine zentrale Dokumentation.
                <br />
                <strong>Nachher:</strong> KPI-Dashboard zeigt auf einen Blick kritische Tickets (überfällig, neu),
                visuelle Priorisierung durch Farbcodes und Icons, strukturierte Workflows mit Take/Release-System,
                vollständige Historie für Nachvollziehbarkeit.
              </p>
            </div>
            <div>
              <h3 className="mb-2 !text-base text-primary">Wirtschaftlichkeit</h3>
              <p className="leading-relaxed text-sm">
                <strong>Einmalige Entwicklungskosten:</strong> 3.200€ (80h Projektzeit im Rahmen der IHK-Abschlussarbeit)<br />
                <strong>Eingesparte Lizenzkosten:</strong> 2.500-3.300€ jährlich (Vergleich: Zendesk, Deskpro)<br />
                <strong>Amortisation:</strong> Nach weniger als 1 Jahr<br />
                <strong>Langfristig:</strong> Keine laufenden Lizenzgebühren, volle Kontrolle über Datenschutz,
                individuelle Anpassbarkeit ohne Vendor-Lock-in, Möglichkeit zur Vermarktung an andere EMAW-Plattformen.
              </p>
            </div>
            <div>
              <h3 className="mb-2 !text-base text-primary">Erweiterbarkeit & Zukunftsperspektive</h3>
              <p className="leading-relaxed text-sm">
                Durch die modulare Architektur (REST-API, getrennte Frontends) lässt sich das System flexibel erweitern:
                Statistik-Dashboards mit detaillierten Reports, Wissensdatenbank mit FAQ-System, automatische
                Ticket-Klassifizierung via Machine Learning, Mobile App für iOS/Android, Integration weiterer
                Kommunikationskanäle (Chat, SMS-Benachrichtigungen).
              </p>
            </div>
            <div>
              <h3 className="mb-2 !text-base text-primary">Persönliche Learnings</h3>
              <p className="leading-relaxed text-sm">
                Das Projekt hat meine Fähigkeiten in Full-Stack-Entwicklung erheblich gestärkt: Symfony-Backend mit
                Doctrine ORM und Multi-DB-Setup, React-Frontend mit TypeScript und modernem Tooling (Vite),
                REST-API-Design und JSON-Kommunikation, Docker für isolierte Entwicklungsumgebung, Git für
                Versionskontrolle, PHPUnit für automatisierte Tests. Besonders wertvoll: Verständnis für
                Business-Anforderungen, UX-Design für zwei unterschiedliche Nutzergruppen und eigenverantwortliche
                Planung & Umsetzung von der Konzeption bis zur Auslieferung.
              </p>
            </div>
          </div>
        </section>

        {/* Zurück-Button */}
        <div 
          className="reveal flex justify-center"
          
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded border border-primary px-6 py-3 text-primary transition hover:bg-primary hover:text-black"
          >
            ← Zurück zum Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
