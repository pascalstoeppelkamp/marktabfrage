import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const rows = [
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

const styles = {
  text: {
    fontSize: 22,
    fontFamily: 'sans-serif',
    wordWrap: 'break-down',
    lineHeight: 1.7,
    width: '60%',
  },
  ptext: {
    fontSize: 18,
    width: '80%',
    fontFamily: 'sans-serif',
    padding: 10,
  },
  coloredHeader: {
    color: 'rgb(106, 172, 69)',
    fontSize: 20,
    fontFamily: 'sans-serif',
    padding: 40,
  },
  pcoloredHeader: {
    color: 'rgb(106, 172, 69)',
    fontSize: 18,
    width: '80%',
    fontFamily: 'sans-serif',
    padding: 10,
  },
  names: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 1,
    flex: 1,
  },
  h4: {
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
  ph4: {
    fontSize: 18,
    width: '80%',
    fontFamily: 'sans-serif',
    padding: 10,
  },
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneSize: false,
    };
    window.addEventListener('resize', this.update);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.update();
  }

  update = () => {
    this.checkIfPhone(window.innerWidth);
  };

  checkIfPhone = (size) => {
    let { phoneSize } = this.state;
    if (size < 799) {
      phoneSize = true;
    } else {
      phoneSize = false;
    }
    this.setState({ phoneSize });
  };

  render() {
    let { phoneSize } = this.state;
    return (
      <div
        style={
          phoneSize
            ? { margin: 10 }
            : {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }
        }
      >
        <h1 style={{ fontFamily: 'sans-serif' }}>
          Netzentwicklungsplan Gas 2022–2032
        </h1>
        <h4 style={phoneSize ? { ...styles.ph4 } : { ...styles.h4 }}>
          Szenariorahmen – Marktabfrage 2022 für Wasserstoff und andere
          Grüngasprojekte
        </h4>
        <h3
          style={
            phoneSize
              ? { ...styles.pcoloredHeader }
              : { ...styles.coloredHeader }
          }
        >
          Einleitung
        </h3>
        <p style={phoneSize ? { ...styles.ptext } : { ...styles.text }}>
          Bitte füllen Sie für die Meldung von Wasserstoff und anderen
          Grüngasprojekten das Tabellenblatt „Grüngasabfrage 2022“.
          Hilfestellungen für das korrekte Ausfüllen des Formulars können Sie
          dem Tabellenblatt „Anleitung“ entnehmen. Bitte senden Sie das
          ausgefüllte Formular bis spätestens zum 16. April 2021 an den
          zuständigen Fernleitungsnetzbetreiber.
        </p>
        <h3
          style={
            phoneSize
              ? { ...styles.pcoloredHeader }
              : { ...styles.coloredHeader }
          }
        >
          Datenschutz
        </h3>
        <h4 style={phoneSize ? { ...styles.ph4 } : { ...styles.h4 }}>
          Datenschutzvereinbarung der deutschen Fernleitungsnetzbetreiber
        </h4>
        <p style={phoneSize ? { ...styles.ptext } : { ...styles.text }}>
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
        <h3
          style={
            phoneSize
              ? { ...styles.pcoloredHeader }
              : { ...styles.coloredHeader }
          }
        >
          Kontakt des Datenschutzbeauftragten
        </h3>{' '}
        <TableContainer style={{ padding: 0, width: '100%' }}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((item, index) => (
                <TableRow
                  key={index}
                  style={{ padding: 0, display: 'flex', flexDirection: 'row' }}
                >
                  <TableCell align="left" style={styles.names}>
                    <p>{item.name}</p>
                  </TableCell>
                  <TableCell align="left" style={styles.names}>
                    <p>{item.email}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
