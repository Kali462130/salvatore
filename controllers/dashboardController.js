exports.getDashboard = (req, res) => {
  const user = req.user;

  const dashboard = {
    client: {
      identifierClient: user.identifierClient
    },
    balance: {
      available: '880 000,00 €',
      performance: '+2,4% depuis 2022'
    },
    blockedAccount: {
      title: 'Compte Bloqué',
      amount: '22 000,00 €',
      subtitle: 'Frais de déblocage'
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
        { label: 'Alimentation', percentage: '22%', color: '#ef4444' },
        { label: 'Transport', percentage: '13%', color: '#f97316' },
        { label: 'Logement', percentage: '41%', color: '#111827' },
        { label: 'Loisirs', percentage: '15%', color: '#ef4444' },
        { label: 'Autres', percentage: '9%', color: '#6b7280' }
      ]
    },
    quickActions: [
      { id: 'act-1', label: 'Virement', icon: '🚀' },
      { id: 'act-2', label: 'QR Code', icon: '🔲' },
      { id: 'act-3', label: 'Factures', icon: '📄' },
      { id: 'act-4', label: 'Sécurité', icon: '🛡️' }
    ],
    card: {
      brand: 'VISA',
      number: '•••• 3674',
      owner: 'Dominique Sauvage'
    },
    transactions: [
      {
        id: 'txn-1',
        merchant: 'Carrefour Market',
        date: '18 Déc 2022',
        amount: '-47,82 €',
        type: 'debit'
      },
      {
        id: 'txn-2',
        merchant: 'Salaire Décembre',
        date: '15 Déc 2022',
        amount: '+3 250,00 €',
        type: 'credit'
      },
      {
        id: 'txn-3',
        merchant: 'Starbucks',
        date: '12 Déc 2022',
        amount: '-5,90 €',
        type: 'debit'
      },
      {
        id: 'txn-4',
        merchant: 'Energies',
        date: '08 Déc 2022',
        amount: '-65,00 €',
        type: 'debit'
      },
      {
        id: 'txn-5',
        merchant: 'Virement de Jean-Pierre',
        date: '28 Nov 2021',
        amount: '+15 000,00 €',
        type: 'credit'
      },
      {
        id: 'txn-6',
        merchant: 'Virement vers Marc Lefevre',
        date: '02 Sep 2021',
        amount: '-12 300,00 €',
        type: 'debit'
      },
      {
        id: 'txn-7',
        merchant: 'Virement vers Claire Bonnet',
        date: '02 Fév 2020',
        amount: '-9 800,00 €',
        type: 'debit'
      },
      {
        id: 'txn-8',
        merchant: 'Virement de Nathalie Roux',
        date: '12 Aoû 2020',
        amount: '+67 500,00 €',
        type: 'credit'
      },
      {
        id: 'txn-9',
        merchant: 'Virement vers Théo Martin',
        date: '05 Juin 2020',
        amount: '-31 200,00 €',
        type: 'debit'
      }
    ]
  };

  res.json({ dashboard });
};
