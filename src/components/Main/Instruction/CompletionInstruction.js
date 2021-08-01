export const CompletionInstruction = [
  {
    field: 'Ansprechpartner*in',
    hintReport:
      'Angabe der Kontaktdaten des/der Hauptansprechpartners*in des Verteilernetzbetreibers.',
    hintProject: 'Angabe der Kontaktdaten des/der Hauptansprechpartners*in. ',
  },
  {
    field: 'Fernleitungsnetzbetreiber (FNB)',
    hintReport:
      'Name des Fernleitungsnetzbetreibers, an den dieser Antrag für das Wasserstoff-/Grüngasprojekt gemeldet wird; die Fernleitungsnetzbetreiber prüfen anschließend die Zuordnung.',
    hintProject:
      'Name des Fernleitungsnetzbetreibers, an den dieser Antrag für das Wasserstoff-/Grüngasprojekt gemeldet wird; die Fernleitungsnetzbetreiber prüfen anschließend die Zuordnung.',
  },
  {
    field: 'ID',
    hintReport:
      'Von den Fernleitungsnetzbetreibern wird eine eindeutige ID vergeben, welche für die interne Weiterverarbeitung genutzt wird.',
    hintProject:
      'Von den Fernleitungsnetzbetreibern wird eine eindeutige ID vergeben, welche für die interne Weiterverarbeitung genutzt wird.',
  },
  {
    field: 'Wasserstoff-/Grüngasprojekt für den NEP Gas 2020-2030 gemeldet?',
    hintReport:
      'Bitte kreuzen Sie hier an, ob das Wasserstoff-/Grüngasprojekt bereits im NEP Gas 2020–2030 gemeldet worden ist.',
    hintProject:
      'Bitte kreuzen Sie hier an, ob das Wasserstoff-/Grüngasprojekt bereits im NEP Gas 2020–2030 gemeldet worden ist.',
  },
  {
    field: 'Beteiligte Unternehmen',
    hintReport: 'Keine Angabe erforderlich.',
    hintProject:
      'Nennung der am Wasserstoff-/Grüngasprojekt beteiligten Unternehmen.',
  },
  {
    field: 'Projektname',
    hintReport: 'Keine Angabe erforderlich.',
    hintProject: 'Name des Wasserstoff-/Grüngasprojekts.',
  },
  {
    field: 'Projektstandort',
    hintReport: 'Keine Angabe erforderlich.',
    hintProject:
      'Standort des gemeldeten Wasserstoff-/Grüngasprojekts. Bei Verteilernetzbetreibern wird, sofern es sich um einen neu zu errichtenden Netzkopplungspunkt handelt, ein bilateraler Austausch zwischen Verteilernetzbetreiber und Fernleitungsnetzbetreiber herbeigeführt.',
  },
  {
    field: 'Kreisname',
    hintReport: 'Keine Angabe erforderlich.',
    hintProject:
      'Name des Land- bzw. Stadtkreises des geplanten Standortes des Wasserstoff-/Grüngasprojektes.',
  },
  {
    field: 'Straße, PLZ, Ort',
    hintReport: 'Keine Angabe erforderlich.',
    hintProject:
      'Konkrete Adresse des geplanten Standortes des Wasserstoff-/Grüngasprojektes; sollte noch keine Adresse bekannt sein, tragen Sie bitte „unbekannt“ ein.',
  },
  {
    field: 'Bestehender Anschlusspunkt an FNB-Netz',
    hintReport: 'Angabe des Netzkopplungspunktes bzw. der Ausspeisezone.',
    hintProject:
      'Name, des Anschlusspunktes (Stationsname) an das Netz der Fernleitungsnetzbetreiber, wenn ein solcher bereits existiert bzw. erforderlich ist (optionales Datenfeld). Bei einem Verteilernetzbetreiber ist der entsprechende bestehende Netzkopplungspunkt anzugeben.',
  },
  {
    field: 'Koordinaten des Projektstandortes',
    hintReport: 'Keine Angabe erforderlich.',
    hintProject:
      'Wählen Sie die Art der Koordinatensystems und geben Sie im Folgenden die konkreten Koordinaten des geplanten Wasserstoff-/Grüngasprojektes an, z.B. UTM-Koordinaten "Z: 33U E: 393940.615 N: 5821835.644" oder Gauß-Krüger-Koordinaten "49° 29′ 13,6″ N 8° 27′ 58,6″ E".',
  },
  {
    field: 'Einspeisung/Ausspeisung',
    hintReport:
      'Auswahl, ob es sich beim Wasserstoff-/Grüngasprojekt um eine Einspeisung in das Gasnetz (Quelle, z. B. geplanter Elektrolyseur) und/oder um eine Ausspeisung aus dem Gasnetz (Senke, z. B. Wasserstoffbedarf der Industrie, Gewerbe, Haushalt) handelt.',
    hintProject:
      'Auswahl, ob es sich beim Wasserstoff-/Grüngasprojekt um eine Einspeisung in das Gasnetz (Quelle, z. B. geplanter Elektrolyseur) und/oder um eine Ausspeisung aus dem Gasnetz (Senke, z. B. Wasserstoffbedarf der Industrie) handelt.',
  },
  {
    field: 'Gasart',
    hintReport:
      'Angabe der Gasart sofern möglich (Wasserstoff und/oder Synthetisches Methan und/oder Biomethan); Hinweis: Wasserstoff muss mindestens der 5. Gasfamilie (Gruppe A) entsprechen.',
    hintProject:
      'Angabe der Gasart (Wasserstoff und/oder Synthetisches Methan und/oder Biomethan); Hinweis: Wasserstoff muss mindestens der 5. Gasfamilie (Gruppe A) entsprechen.',
  },
  {
    field:
      'Benötigter Ausspeisedruck (in [bar] Überdruck)(Angaben bitte mit Bandbreite; bspw. 15–30 [bar])',
    hintReport:
      'Der Ausspeisedruck wird rein informatorisch abgefragt, bitte geben Sie diesen möglichst konkret an oder arbeiten mit einer Bandbreite.',
    hintProject:
      'Der Ausspeisedruck wird rein informatorisch abgefragt, bitte geben Sie diesen möglichst konkret an oder arbeiten mit einer Bandbreite.',
  },
  {
    field: 'Geplante Inbetriebnahme (Monat/Jahr)',
    hintReport: 'Keine Angabe erforderlich.',
    hintProject:
      'Angabe der geplanten Inbetriebnahme des Wasserstoff-/Grüngasprojektes im Format MM/JJJJ.',
  },
  {
    field:
      'Anfrage parallel gestellt bei: Gegebenenfalls Name des Netzbetreibers',
    hintReport:
      'Falls das Wasserstoff-/Grüngasprojekt bei mehreren Netzbetreibern gemeldet wurde, wählen Sie bitte die Art aus und geben den Namen des weiteren Netzbetreibers an; unter Drittnetze werden privatwirtschaftlich betriebene Wasserstoffleitungen verstanden. ',
    hintProject:
      'Falls das Wasserstoff-/Grüngasprojekt bei mehreren Netzbetreibern gemeldet wurde, wählen Sie bitte die Art aus und geben den Namen des weiteren Netzbetreibers an; unter Drittnetze werden privatwirtschaftlich betriebene Wasserstoffleitungen verstanden. Anfragen sollten bei dem Netzbetreiber gestellt werden, an dessen Netz sie unmittelbar angeschlossen sind.',
  },
  {
    field: 'Bei Elektrolyseuren, Angaben zum Stromanschluss/Strombezug',
    hintReport: 'Keine Angabe erforderlich.',
    hintProject:
      'Angabe zur Stromerzeugung (z. B. Windkraft) und zum Stromanschluss (zuständiger Stromnetzbetreiber).',
  },
  {
    field:
      'Führt das Wasserstoff-/Grüngasprojekt zu einer Reduzierung des Erdgasbedarfs?',
    hintReport:
      'Angabe, ob das gemeldete Wasserstoff-/Grüngasprojekt zu einem verminderten Erdgasbedarf führt.',
    hintProject:
      'Angabe, ob das gemeldete Wasserstoff-/Grüngasprojekt, z. B. bei Verteilernetzbetreibern oder Industriekunden, zu einem verminderten Erdgasbedarf führt.',
  },
  {
    field:
      'Hiermit stimmen wir einer Veröffentlichung* der gekennzeichneten Daten',
    hintReport:
      'Die Zustimmung zur Veröffentlichung ist für eine Berücksichtigung der Anfrage im Szenariorahmen/Netzentwicklungsplan erforderlich. ',
    hintProject:
      'Die Zustimmung zur Veröffentlichung ist für eine Berücksichtigung der Anfrage im Szenariorahmen/Netzentwicklungsplan erforderlich. ',
  },
  {
    field:
      'Ausführliche Projektbeschreibung inkl. Beschreibung des Projektstatus:',
    hintReport:
      'Beschreibung des gemeldeten Bedarfs, u. a. Status des Bedarfs (wie konkret ist der jeweilige Bedarf?), Sektoren (Industrie, Wärmemarkt, Stromerzeugung), Beimischung über bestehenden Netzkopplungspunkt, reiner Wasserstoff über neue Netzkopplung, Konzepte/Strategie',
    hintProject:
      'Beschreibung des aktuellen Projektstands bzw. des Projektstatus, bitte beachten Sie, dass diese Beschreibung veröffentlicht werden kann. Beispiele für Projektbeschreibungen können dem Szenariorahmen zum NEP Gas 2020-2030 entnommen werden (https://www.fnb-gas.de/media/2019_08_16_nep-gas-2020-2030_szenariorahmen_final.pdf).',
  },
];
