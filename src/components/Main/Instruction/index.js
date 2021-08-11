import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CompletionInstruction } from './CompletionInstruction';
const rows = [
  {
    fnb: 'bayernets GmbH',
    partner: 'Stefanie Jacobi',
    email: 'stefanie.jacobi@bayernets.de',
  },
  {
    fnb: 'Ferngas Netzgesellschaft mbh',
    partner: 'Hagen Kropp',
    email: 'hagen.kropp@ferngas.de',
  },
  {
    fnb: 'Fluxys Deutschland GmbH',
    partner: 'Alessandro Brunoni',
    email: 'alessandro.brunoni@fluxys.com',
  },
  {
    fnb: 'Fluxys TENP GmbH',
    partner: 'Alessandro Brunoni',
    email: 'alessandro.brunoni@fluxys.com',
  },
  {
    fnb: 'GASCADE Gastransport GmbH',
    partner: 'Nils Melcher',
    email: 'nils.melcher@gascade.de',
  },
  {
    fnb: 'Gastransport Nord GmbH',
    partner: 'Tammo Dunkhase',
    email: 'tammo.dunkhase@gtg-nord.de',
  },
  {
    fnb: 'Gasunie Deutschland Transport Services GmbH',
    partner: 'Thorsten Brümmer',
    email: 'thorsten.bruemmer@gasunie.de',
  },
  {
    fnb: 'GRTgaz Deutschland GmbH',
    partner: 'Susan Valtin',
    email: 'susan.valtin@grtgaz-deutschland.de',
  },
  {
    fnb: 'Lubmin-Brandov Gastransport GmbH',
    partner: 'Marion Abel',
    email: 'info@lbtg.de',
  },
  {
    fnb: 'NEL Gastransport GmbH',
    partner: 'Nils Melcher',
    email: 'nils.melcher@gascade.de',
  },
  {
    fnb: 'Nowega GmbH',
    partner: 'Martin Jones',
    email: 'm.jones@nowega.de',
  },
  {
    fnb: 'ONTRAS Gastransport GmbH',
    partner: 'René Döring',
    email: 'rene.doering@ontras.com',
  },
  {
    fnb: 'OPAL Gastransport GmbH & Co. KG',
    partner: 'Nils Melcher',
    email: 'nils.melcher@gascade.de',
  },
  {
    fnb: 'Open Grid Europe GmbH',
    partner: 'Thomas Stang',
    email: 'gastransport@oge.net',
  },
  {
    fnb: 'terranets bw GmbH',
    partner: 'Anitha Prasad',
    email: 'anitha.prasad@terranets-bw.de',
  },
  {
    fnb: 'Thyssengas GmbH',
    partner: 'Jan Eisenberg',
    email: 'jan.eisenberg@thyssengas.com',
  },
];

const styles = {
  text: {
    fontSize: 18,
    fontFamily: 'sans-serif',
    width: '80%',
    padding: 10,
    wordWrap: 'break-down',
  },
  coloredHeader: {
    color: 'rgb(106, 172, 69)',
    fontSize: 18,
    fontFamily: 'sans-serif',
    width: '80%',
    padding: 10,
  },
  header: {
    backgroundColor: 'rgb(106, 172, 69)',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
  },
  names: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
  },
};
export default class index extends Component {
  render() {
    return (
      <div style={{ margin: 10 }}>
        <h1 style={{ fontFamily: 'sans-serif' }}>Anleitung</h1>
        <h3 style={styles.coloredHeader}>Kurze Erläuterung</h3>
        <p style={styles.text}>
          Dieses Tabellenblatt gibt Hilfestellungen für das korrekte Ausfüllen
          des Formulars zur Marktabfrage. Sollten Sie weiterhin offene Fragen
          haben, wenden Sie sich bitte an die genannten Ansprechpartnerin bzw.
          Ansprechpartner bei den Fernleitungsnetzbetreibern. Bitte senden Sie
          das ausgefüllte Formular bis spätestens zum 16. April 2021 an den
          zuständigen Fernleitungsnetzbetreiber. Bitte keine Anfragen an den FNB
          Gas stellen.
        </p>
        <h3 style={styles.coloredHeader}>
          Ansprechpartnerin bzw. Ansprechpartner
        </h3>
        <TableContainer style={{ padding: 0, width: '100%' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={styles.header}>
                  Fernleitungsnetzbetreiber
                </TableCell>
                <TableCell style={styles.header}>
                  Ansprechpartnerin bzw. Ansprechpartner
                </TableCell>
                <TableCell style={styles.header}>E-Mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((item, index) => (
                <TableRow style={{ padding: 0 }} key={index}>
                  <TableCell key={item.fnb} style={styles.names}>
                    {item.fnb}
                  </TableCell>
                  <TableCell key={item.partner} style={styles.names}>
                    {item.partner}
                  </TableCell>
                  <TableCell key={item.email} style={styles.names}>
                    {item.email}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h3 style={styles.coloredHeader}>
          Allgemeine Hinweise für Projektmeldungen
        </h3>
        <p style={styles.text} wordWrap="break-down">
          Bitte beachten Sie, dass eine Berücksichtigung der in der Marktabfrage
          gemeldeten Wasserstoff-/Grüngasprojekte im Szenariorahmen zum NEP Gas
          2022-2032 nur erfolgt, wenn die dafür erforderlichen Kriterien erfüllt
          sind (https://www.fnb-gas.de /netzentwicklungsplan/szenariorahmen/
          szenariorahmen-2022). Für den NEP Gas 2022–2032 sind letztendlich die
          Festlegungen der BNetzA in der Bestätigung des Szenariorahmens
          ausschlaggebend.
          <br />
          Grundsätzlich handelt es sich bei den Ausfüllfeldern im Formular um
          Pflichtfelder. Für die Verteilernetzbetreiber gelten jeweils die in
          der Anleitung aufgeführten Pflichtfelder. Optionale Felder sind mit
          „(Optional)“ gekennzeichnet. Die zur Veröffentlichung im
          Szenariorahmen/Netzentwicklungsplan Gas notwendigen Daten sind gelb
          gekennzeichnet bzw. gelb hinterlegt. Die explizite Zustimmung zur
          Veröffentlichung ist für eine Berücksichtigung der Anfrage im
          Szenariorahmen/Netzentwicklungsplan erforderlich.
        </p>
        <h3 style={styles.coloredHeader}>
          Allgemeine Hinweise für Meldungen des voraussichtlichen Bedarfs der
          Verteilernetzbetreiber
        </h3>
        <p style={styles.text}>
          Analog zu den in der Kooperationsvereinbarung vereinbarten Regelungen
          zum Kapazitätsbedarf (Langfristprognose) melden die
          Verteilernetzbetreiber den aggregierten, voraussichtlichen
          Kapazitätsbedarf an den Netzkopplungspunkten bzw. den Ausspeisezonen
          für die Jahre 2032, 2040 und 2050. Analog zu den Regelungen in der
          Kooperationsvereinbarung ist der aggregierte, voraussichtliche
          Kapazitätsbedarf im Feld "Projektbeschreibung" zu erläutern und zu
          begründen, um eine Plausibilisierung des Bedarfs zu ermöglichen und um
          Doppelmeldungen zu vermeiden.
        </p>
        <h3 style={styles.coloredHeader}>
          Allgemeine Hinweise für Meldungen des konkreten Bedarfs der
          Verteilernetzbetreiber
        </h3>
        <p style={styles.text}>
          Liegen den Verteilernetzbetreibern konkrete Projektinformationen vor,
          sollten diese Projekte für den Zeitraum 2022-2032 und die Jahre 2040
          und 2050 separat gemeldet werden und nicht in der Meldung des
          voraussichtlichen Bedarfs enthalten sein. Pro konkretem Projekt soll
          ein Formular abgegeben werden, auch wenn es sich um einen
          Netzkopplungspunkt handelt. Ist ein Anschluss eines Wasserstoff- oder
          Grüngasprojektes an das Verteilernetz geplant oder ergibt sich ein
          Wasserstoffbedarf zur Herstellung eines Wasserstoff/Erdgasgemisches
          und kommt es hierbei zu einer Substitution von Erdgas durch Grüne
          Gase, ist dies bei der Meldung der Langfristprognose durch einen
          entsprechend verminderten Erdgasbedarf zu berücksichtigen.
          <br />
          Bitte beachten Sie, dass eine Berücksichtigung der in der Marktabfrage
          gemeldeten Bedarfe im Szenariorahmen zum NEP Gas 2022-2032 nur
          erfolgt, wenn die Angaben zum Bedarf und zum Verteilernetzbetreiber
          veröffentlicht werden können. Die explizite Zustimmung zur
          Veröffentlichung ist für eine Berücksichtigung der Anfrage im
          Szenariorahmen/Netzentwicklungsplan erforderlich.
          <br />
          Für eine Berücksichtigung der gemeldeten Bedarfe im NEP Gas 2022–2032
          sind letztendlich die Festlegungen der BNetzA in der Bestätigung des
          Szenariorahmens ausschlaggebend. Hierzu ist die Vorgehensweise im
          Rahmen des Szenariorahmen-Prozesses zwischen den
          Verteilernetzbetreibern, den Fernleitungsnetzbetreibern und der BNetzA
          abzustimmen.
        </p>
        <h3 style={styles.coloredHeader}>Ausfüllhinweise</h3>
        <TableContainer style={{ padding: 0 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={styles.header}>
                  <p style={{ margin: 5 }}>Feld</p>
                </TableCell>
                <TableCell style={styles.header}>
                  <p style={{ margin: 5 }}>
                    Hinweise für Projektmeldungen (inkl. der konkreten Projekte
                    der Verteilernetzbetreiber)
                  </p>
                </TableCell>
                <TableCell style={styles.header}>
                  <p style={{ margin: 5 }}>
                    Hinweise für Meldungen der Verteilernetzbetreiber
                    (voraussichtlicher Bedarf)
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CompletionInstruction.map((item, index) => (
                <TableRow style={{ padding: 0 }} key={index}>
                  <TableCell style={styles.names}>{item.field}</TableCell>
                  <TableCell style={styles.names}>{item.hintProject}</TableCell>
                  <TableCell style={styles.names}>{item.hintReport}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
