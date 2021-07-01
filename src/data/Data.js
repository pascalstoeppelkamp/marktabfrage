const fields = {
    name: {
        label: "Name",
        published: false,
        type: "Textfield",
        id: "name",
        value:{}
    },
    company: {
        label: "Firma",
        published: false,
        type: "Textfield",
        id: "company",
        value:{}
    },
    street: {
        label: "Straße",
        published: false,
        type: "Textfield",
        id: "street",
        value:{}
    },
    place: {
        label: "PLZ, Ort",
        published: false,
        type: "Textfield",
        id: "place",
        value:{}
    },
    email: {
        label: "E-Mail",
        published: false,
        type: "Textfield",
        id: "email",
        value:{}
    },
    phoneNumber: {
        label: "Telefon",
        published: false,
        type: "Textfield",
        id: "phoneNumber",
        value:{}
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
        ],
        id: "fnb",
        value:{}
    },
    reported: {
        label: "Wasserstoff-/Grüngasprojekt für den NEP Gas 2020–2030 gemeldet?",
        published: false,
        type: "Radiobutton",
        values: ["ja", "nein"],
        id: "reported",
        value:{}
    },
    involved: {
        label: "Beteiligte Unternehmen",
        published: false,
        type: "Textfield",
        id: "involved",
        value:{}
    },
    projectName: {
        label: "Projektname",
        published: true,
        type: "Textfield",
        id: "projectName",
        value:{}
    },
    location: {
        label: "Projektstandort",
        published: false,
        type: "Textfield",
        id: "location",
        value:{}
    },
    district: {
        label: "Kreisname",
        published: true,
        type: "Textfield",
        id: "disctrict",
        value:{}
    },
    projectStreet: {
        label: "Straße",
        published: false,
        type: "Textfield",
        id: "projectStreet",
        value:{}
    },
    projectPlace: {
        label: "PLZ, Ort",
        published: false,
        type: "Textfield",
        id: "projectPlace",
        value:{}
    },
    fnbNetwork: {
        label: "Bestehender Anschlusspunkt an FNB-Netz (optional)",
        published: false,
        type: "Textfield",
        id: "fnbNetwork",
        value:{}
    },
    coordinates: {
        label: "Koordinaten des Projektstandortes (rechts/links)",
        type: "Radiobutton",
        published: false,
        values: ["UTM-Koordinaten", "Gauß-Krüger-Koordinaten"],
        id: "coordinates",
        value:{}
    },
    FeedExit: {
        label: "Einspeisung/Ausspeisung",
        type: "Radiobutton",
        values: ["Einspeisung (Quelle)", "Ausspeisung (Senke)"],
        published: true,
        id: "FeedExit",
        value:{}
    },
    gasType: {
        label: "Gasart",
        type: "Checkbox",
        values: ["Wasserstoff", "Synthetisches Methan", "Biomethan"],
        published: true,
        id: "gasType",
        value:{}
    },
    bar: {
        label: "Benötigter Ausspeisedruck (in [bar] Überdruck)\n(Angaben möglichst konkret oder Bandbreite angeben; bspw. 15–30 [bar])",
        type: "Textfield",
        published: false,
        id: "bar",
        value:{}
    },
    plannedInstallation: {
        label: "Geplante Inbetriebnahme (Monat/Jahr)",
        type: "Textfield",
        published: true,
        id: "plannedInstallation",
        value:{}
    },
    inquiry: {
        label: "Anfrage parallel gestellt bei:",
        type: "Radiobutton",
        published: true,
        values: ["Fernleitungsnetzarbeit", "Drittnetze", "Verteilernetzbetreiber", "Nein"],
        id: "inquiry",
        value:{}
    },
    networkOperator: {
        label: "Gegebenenfalls Name des Netzbetreibers",
        type: "Textfield",
        published: false,
        id: "networkOperator",
        value:{}
    },
    electrolysers: {
        label: "Bei Elektrolyseuren, Angaben zum Stromanschluss/Strombezug:",
        type: "Textfield",
        published: false,
        id: "electrolysers",
        value:{}
    },
    causeReduction: {
        label: "Führt das Wasserstoff-/Grüngasprojekt zu einer Reduzierung des Erdgasbedarfs?",
        type: "Radiobutton",
        values: ["Ja", "Nein"],
        published: false,
        id: "causeReduction",
        value:{}
    },
    agreePublishing: {
        label: "Hiermit stimmen wir einer Veröffentlichung der gekennzeichneten Daten",
        type: "Radiobutton",
        values: ["Ja", "Nein"],
        published: true,
        id: "agreePublishing",
        value:{}
    }
};
export default fields;