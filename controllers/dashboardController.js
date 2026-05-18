exports.getDashboard = (req, res) => {
  const user = req.user;

  const dashboard = {
    client: {
      identifierClient: user.identifierClient,
      name: 'Salvatore Adamo'
    },
    balance: {
      available: '880 000,00 €',
      performance: '+2,4%',
      since: 'depuis 2022'
    },
    blockedAccount: {
      title: 'Compte Bloqué',
      amount: '22 000,00 €',
      subtitle: 'Frais de déblocage',
      balance: '880 000,00 €'
    },
    savings: [
      {
        label: 'Livret A',
        amount: '3 200,00 €',
        target: '22 950 €',
        ratio: '13.9%',
        progress: 0.139
      },
      {
        label: 'PEL',
        amount: '15 800,00 €',
        target: '61 200 €',
        ratio: '25.8%',
        progress: 0.258
      }
    ],
    distribution: {
      total: '2 080 €',
      categories: [
        { label: 'Alimentation', percentage: '22%', color: '#dc1430' },
        { label: 'Transport', percentage: '13%', color: '#ef4444' },
        { label: 'Autres', percentage: '9%', color: '#9ca3af' },
        { label: 'Logement', percentage: '41%', color: '#1f2937' },
        { label: 'Loisirs', percentage: '15%', color: '#4b5563' }
      ]
    },
    quickActions: [
      { id: 'act-1', label: 'Virement', target: 'transfer' },
      { id: 'act-2', label: 'QR Code', target: 'dashboard' },
      { id: 'act-3', label: 'Factures', target: 'dashboard' },
      { id: 'act-4', label: 'Sécurité', target: 'security' }
    ],
    card: {
      brand: 'VISA PREMIER',
      number: '•••• •••• •••• 3674',
      owner: 'SALVATORE ADAMO',
      expiry: '02/26'
    },
    transactions: [
      { id: 'txn-1', merchant: 'Cachet de concert - Paris Olympia', date: '12 Mai 2025', amount: '+145 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-2', merchant: 'Carrefour Market', date: '10 Mai 2025', amount: '-86,42 €', type: 'debit', category: 'shopping' },
      { id: 'txn-3', merchant: 'Droits SACEM - Avril', date: '30 Avr 2025', amount: '+32 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-4', merchant: 'Loyer studio répétition', date: '02 Avr 2025', amount: '-1 200,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-5', merchant: 'Total Energies', date: '18 Mar 2025', amount: '-74,20 €', type: 'debit', category: 'car' },
      { id: 'txn-6', merchant: 'Virement de Marc Lefevre', date: '09 Jan 2025', amount: '+18 500,00 €', type: 'credit', category: 'transfer' },
      { id: 'txn-7', merchant: 'Virement vers Claire Bonnet', date: '03 Déc 2024', amount: '-4 500,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-8', merchant: 'Cachet de concert - Bruxelles', date: '22 Nov 2024', amount: '+98 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-9', merchant: 'Apple Services', date: '21 Nov 2024', amount: '-9,99 €', type: 'debit', category: 'games' },
      { id: 'txn-10', merchant: 'Assurance tournée', date: '14 Oct 2024', amount: '-6 400,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-11', merchant: 'Cachet de concert - Genève', date: '30 Août 2024', amount: '+72 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-12', merchant: 'Starbucks', date: '15 Juin 2024', amount: '-6,40 €', type: 'debit', category: 'coffee' },
      { id: 'txn-13', merchant: 'Location matériel son', date: '28 Mai 2024', amount: '-1 800,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-14', merchant: 'Droits voisins - Semestre 1', date: '09 Avr 2024', amount: '+42 500,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-15', merchant: 'Fnac Paris', date: '08 Oct 2023', amount: '-249,90 €', type: 'debit', category: 'shopping' },
      { id: 'txn-16', merchant: 'Loyer Septembre', date: '05 Sep 2023', amount: '-1 240,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-17', merchant: 'Cachet de concert - Lyon', date: '31 Août 2023', amount: '+56 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-18', merchant: 'Carrefour Market', date: '18 Déc 2022', amount: '-47,82 €', type: 'debit', category: 'shopping' },
      { id: 'txn-19', merchant: 'Cachet de concert - Milan', date: '15 Déc 2022', amount: '+65 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-20', merchant: 'Starbucks', date: '12 Déc 2022', amount: '-5,90 €', type: 'debit', category: 'coffee' },
      { id: 'txn-21', merchant: 'Steam Games', date: '08 Déc 2022', amount: '-29,99 €', type: 'debit', category: 'games' },
      { id: 'txn-22', merchant: 'Total Energies', date: '05 Déc 2022', amount: '-65,00 €', type: 'debit', category: 'car' },
      { id: 'txn-23', merchant: 'Droits SACEM - Année 2022', date: '30 Nov 2022', amount: '+38 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-24', merchant: 'Virement vers Marc Lefevre', date: '02 Sep 2022', amount: '-12 300,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-25', merchant: 'Cachet de concert - Nice', date: '15 Juil 2022', amount: '+78 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-26', merchant: 'Orange Mobile', date: '14 Fév 2022', amount: '-39,99 €', type: 'debit', category: 'transfer' },
      { id: 'txn-27', merchant: 'Cachet de concert - Montréal', date: '12 Août 2021', amount: '+67 500,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-28', merchant: 'Virement vers Théo Martin', date: '05 Juin 2021', amount: '-31 200,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-29', merchant: 'Cachet de concert - Rome', date: '18 Avr 2021', amount: '+125 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-30', merchant: 'Virement vers Claire Bonnet', date: '02 Fév 2021', amount: '-9 800,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-31', merchant: 'Droits catalogue musical', date: '20 Nov 2020', amount: '+53 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-32', merchant: 'Virement vers Julie Leroy', date: '08 Sep 2020', amount: '-17 500,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-33', merchant: 'Cachet de concert - Toulouse', date: '14 Juin 2020', amount: '+84 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-34', merchant: 'Virement vers Sylvie Morel', date: '03 Mai 2020', amount: '-22 400,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-35', merchant: 'Cachet de concert - Marseille', date: '18 Mar 2020', amount: '+91 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-36', merchant: 'Frais équipe technique', date: '16 Mar 2020', amount: '-15 600,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-37', merchant: 'Cachet de concert - Lille', date: '28 Fév 2020', amount: '+69 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-38', merchant: 'Hôtel tournée', date: '26 Fév 2020', amount: '-4 200,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-39', merchant: 'Cachet de concert - Bordeaux', date: '07 Fév 2020', amount: '+58 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-40', merchant: 'Transport musiciens', date: '05 Fév 2020', amount: '-3 200,00 €', type: 'debit', category: 'car' },
      { id: 'txn-41', merchant: 'Cachet de concert - Nantes', date: '24 Jan 2020', amount: '+47 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-42', merchant: 'Restaurant équipe', date: '22 Jan 2020', amount: '-2 800,00 €', type: 'debit', category: 'shopping' },
      { id: 'txn-43', merchant: 'Cachet de concert - Strasbourg', date: '12 Jan 2020', amount: '+36 000,00 €', type: 'credit', category: 'salary' },
      { id: 'txn-44', merchant: 'Frais logistique tournée', date: '10 Jan 2020', amount: '-1 900,00 €', type: 'debit', category: 'transfer' },
      { id: 'txn-45', merchant: 'Ajustement patrimonial', date: '02 Jan 2020', amount: '-258 844,39 €', type: 'debit', category: 'transfer' }
    ]
  };

  res.json({ dashboard });
};
