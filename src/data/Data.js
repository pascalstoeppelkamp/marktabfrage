const fields = {
    name: {
        label: "Name",
        published: false,
        type: "Textfield"
    },
    company: {
        label: "Firma",
        published: false,
        type: "Textfield"
    },
    street: {
        label: "Straße",
        published: false,
        type: "Textfield"
    },
    place: {
        label: "PLZ, Ort",
        published: false,
        type: "Textfield"
    },
    email: {
        label: "E-Mail",
        published: false,
        type: "Textfield"
    },
    phoneNumber: {
        label: "Telefon",
        published: false,
        type: "Textfield"
    },
    fnb: {
        label: "Fernleitungsnetzbetreiber (FNB)",
        published: true,
        type: "Select",
        values: [
            "bayernets GmbH",
            "Ferngas Netzgesellschaft mbh",
            "Fluxys Deutschland GmbH",
            "Fluxys TENP GmbH",
            "GASCADE Gastransport GmbH",
            "Gastransport Nord GmbH",
            "Gasunie Deutschland Transport Services GmbH",
            "GRTgaz Deutschland GmbH",
            "Lubmin - Brandov Gastransport GmbH",
            "NEL Gastransport GmbH",
            "Nowega GmbH",
            "ONTRAS Gastransport GmbH",
            "OPAL Gastransport GmbH & Co.KG",
            "Open Grid Europe GmbH",
            "terranets bw GmbH",
            "Thyssengas GmbH"
        ]
    },
    reported: {
        label: "Wasserstoff-/Grüngasprojekt für den NEP Gas 2020–2030 gemeldet?",
        published: false,
        type: "Radiobutton",
        values: ["ja", "nein"]
    },
    involved: {
        label: "Beteiligte Unternehmen",
        published: false,
        type: "Textfield"
    },
    projectName: {
        label: "Projektname",
        published: true,
        type: "Textfield"
    },
    location: {
        label: "Projektstandort",
        published: false,
        type: "Textfield"
    },
    district: {
        label: "Kreisname",
        published: true,
        type: "Textfield"
    },
    projectStreet: {
        label: "Straße",
        published: false,
        type: "Textfield"
    },
    projectPlace: {
        label: "PLZ, Ort",
        published: false,
        type: "Textfield"
    },
    fnbNetwork: {
        label: "Bestehender Anschlusspunkt an FNB-Netz (optional)",
        published: false,
        type: "Textfield"
    },
    coordinates: {
        label: "Koordinaten des Projektstandortes (rechts/links)",
        type: "Radiobutton",
        published: false,
        values : ["UTM-Koordinaten","Gauß-Krüger-Koordinaten"]
    },
    FeedExit: {
        label: "Einspeisung/Ausspeisung",
        type: "Radiobutton",
        values: ["Einspeisung (Quelle)", "Ausspeisung (Senke)"],
        published: true
    },
    gasType: {
        label: "Gasart",
        type: "Checkbox",
        values: ["Wasserstoff", "Synthetisches Methan", "Biomethan"],
        published: true
    },
    bar: {
        label: "Benötigter Ausspeisedruck (in [bar] Überdruck)\n(Angaben möglichst konkret oder Bandbreite angeben; bspw. 15–30 [bar])",
        type: "Textfield",
        published: false
    },
    plannedInstallation: {
        label: "Geplante Inbetriebnahme (Monat/Jahr)",
        type: "Textfield",
        published: true
    },
    inquiry: {
        label: "Anfrage parallel gestellt bei:",
        type: "Radiobutton",
        published: true,
        values: ["Fernleitungsnetzarbeit", "Drittnetze", "Verteilernetzbetreiber", "Nein"]
    },
    networkOperator: {
        label: "Gegebenenfalls Name des Netzbetreibers",
        type: "Textfield",
        published: false
    },
    electrolysers: {
        label: "Bei Elektrolyseuren, Angaben zum Stromanschluss/Strombezug:",
        type: "Textfield",
        published: false
    },
    causeReduction: {
        label: "Führt das Wasserstoff-/Grüngasprojekt zu einer Reduzierung des Erdgasbedarfs?",
        type: "Radiobutton",
        values: ["Ja", "Nein"],
        published: false
    },
    agreePublishing: {
        label: "Hiermit stimmen wir einer Veröffentlichung der gekennzeichneten Daten",
        type: "Radiobutton",
        values: ["Ja", "Nein"],
        published: true
    }
};
export default fields;