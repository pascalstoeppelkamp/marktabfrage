import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  text: {
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
  coloredHeader: {
    color: 'rgb(106, 172, 69)',
  },
  names: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 1,
  },
};
export default class index extends Component {
  render() {
    let rows = [
      { name: 'bayernets GmbH', email: 'datenschutz@bayernets.de' },
      {
        name: 'Ferngas Netzgesellschaft GmbH',
        email: 'datenschutz@ferngas.de',
      },
      {
        name: 'Fluxys Deutschland GmbH',
        email: 'datenschutz.deutschland@fluxys.com',
      },
      { name: 'Fluxys TENP GmbH', email: 'datenschutz.deutschland@fluxys.com' },
      { name: 'GASCADE Gastransport GmbH', email: 'datenschutz@gascade.de' },
      { name: 'Gastransport Nord GmbH', email: 'datenschutz@gtg-nord.de' },
      {
        name: 'Gasunie Deutschland Transport Services GmbH',
        email: 'datenschutz@gasunie.de',
      },
      {
        name: 'GRTgaz Deutschland GmbH',
        email: 'datenschutz@grtgaz-deutschland.de',
      },
      { name: 'Lubmin-Brandov Gastransport GmbH', email: 'info@lbtg.de' },
      { name: 'NEL Gastransport GmbH', email: 'datenschutz@gascade.de' },
      { name: 'Nowega GmbH', email: 'datenschutz@nowega.de' },
      {
        name: 'ONTRAS Gastransport GmbH',
        email: 'datenschutzbeauftragter@ontras.com',
      },
      {
        name: 'OPAL Gastransport GmbH & Co. KG',
        email: 'datenschutz@gascade.de',
      },
      { name: 'Open Grid Europe GmbH', email: 'oge-datenschutz@oge.net' },
      { name: 'terranets bw GmbH', email: 'datenschutz@terranets-bw.de' },
      { name: 'Thyssengas GmbH', email: 'datenschutz@thyssengas.com' },
      {},
    ];
    return (
      <div style={{ margin: 10 }}>
        {' '}
        <h1 style={{ fontFamily: 'sans-serif' }}>
          Netzentwicklungsplan Gas 2022–2032{' '}
        </h1>
        <p style={styles.text}>
          <h4>
            Szenariorahmen – Marktabfrage 2022 für Wasserstoff und andere
            Grüngasprojekte
          </h4>
          <h3 style={styles.coloredHeader}>Einleitung</h3>
          Bitte füllen Sie für die Meldung von Wasserstoff und anderen
          Grüngasprojekten das Tabellenblatt „Grüngasabfrage 2022“.
          Hilfestellungen für das korrekte Ausfüllen des Formulars können Sie
          dem Tabellenblatt „Anleitung“ entnehmen. Bitte senden Sie das
          ausgefüllte Formular bis spätestens zum 16. April 2021 an den
          zuständigen Fernleitungsnetzbetreiber.
        </p>
        <p style={styles.text}>
          <h3 style={styles.coloredHeader}>Datenschutz</h3>
          <h4>
            Datenschutzvereinbarung der deutschen Fernleitungsnetzbetreiber
          </h4>
          Wir bitten um Ihre Teilnahme an der Marktabfrage. Die von Ihnen im
          Rahmen der Marktabfrage zur Verfügung gestellten personenbezogenen
          Daten werden ausschließlich von den aufgelisteten Unternehmen
          verarbeitet. Mit der Verarbeitung der personenbezogenen Daten wird das
          berechtigte Interesse verfolgt, Ihre Projekte bei der Planung des
          Szenariorahmens und des Netzentwicklungsplans (NEP) Gas 2022-2032 zu
          berücksichtigen (Art. 6 Abs. 1 S. 1 lit. f der
          Datenschutz-Grundverordnung). Auf Basis der zur Verfügung gestellten
          Daten erfolgt die Ermittlung der notwendigen Netzausbaumaßnahmen zum
          Aufbau einer Wasserstoffinfrastruktur unter Wahrung der
          Systemstabilität und Versorgungssicherheit des Erdgastransportsystems.
        </p>
        <p style={styles.text}>
          <h3 style={styles.coloredHeader}>
            Kontakt des Datenschutzbeauftragten
          </h3>
          {rows.map((item) => (
            <TableRow style={{ padding: 0 }} key={index}>
              <TableCell style={styles.names}>{item.name}</TableCell>
              <TableCell style={styles.names}>{item.email}</TableCell>
            </TableRow>
          ))}
        </p>
      </div>
    );
  }
}
