exports.getAccountInfo = (req, res) => {
  const account = {
    title: 'Compte bloqué',
    description: "Opération impossible. Votre compte est actuellement bloqué. Pour effectuer un virement ou toute autre opération sur ce compte, vous devez d'abord procéder au déblocage de votre compte.",
    fees: '22 000,00 €',
    owner: 'Dominique Sauvage',
    blockedBalance: '880 000,00 €',
    manager: 'Michel Lemaire',
    managerTitle: 'Conseiller gestionnaire de compte',
    actionLabel: "J'ai compris"
  };

  res.json({ account });
};

exports.getCardInfo = (req, res) => {
  const card = {
    brand: 'VISA PREMIER',
    number: '4973 5570 9822 3674',
    maskedNumber: '•••• •••• •••• 3674',
    owner: 'SALVATORE ADAMO',
    expiry: '02/26',
    cvv: '292',
    monthlyLimit: '1 850 €',
    monthlyLimitMax: '3 000 €',
    renewalDate: '1er février',
    utilization: '61.7%',
    utilizationValue: 0.617,
    onlinePayments: true,
    contactless: true
  };

  res.json({ card });
};

exports.getSecurityInfo = (req, res) => {
  const security = {
    title: 'Sécurité',
    subtitle: 'Gérez vos paramètres de sécurité',
    level: 'Compte sécurisé',
    levelDescription: 'Niveau de sécurité élevé',
    options: [
      {
        id: '2fa',
        title: 'Authentification à deux facteurs',
        description: 'Recevez un code par SMS pour chaque connexion',
        enabled: true
      },
      {
        id: 'biometry',
        title: 'Connexion biométrique',
        description: 'Utilisez votre empreinte digitale ou Face ID',
        enabled: true
      },
      {
        id: 'alerts',
        title: 'Alertes de sécurité',
        description: "Notifications en cas d'activité suspecte",
        enabled: true
      },
      {
        id: 'autoLock',
        title: 'Verrouillage automatique',
        description: "Déconnexion après 5 minutes d'inactivité",
        enabled: false
      }
    ],
    controls: [
      {
        id: 'change-code',
        title: 'Modifier le code secret',
        description: "Changez votre code d'accès"
      },
      {
        id: 'devices',
        title: 'Gérer les appareils',
        description: '3 appareils connectés'
      }
    ]
  };

  res.json({ security });
};

exports.getTransferInfo = (req, res) => {
  const transfer = {
    balance: '880 000,00 €',
    beneficiaries: [
      { id: 'ben-2', name: 'Claire Bonnet', account: 'FR14 2004 1010 0505 0001 3M02 606' },
      { id: 'ben-3', name: 'Nathalie Roux', account: 'FR76 3000 6000 0112 3456 7890 190' },
      { id: 'ben-4', name: 'Marc Lefevre', account: 'FR76 1027 8006 1200 0203 0450 187' },
      { id: 'ben-5', name: 'Julie Leroy', account: 'FR76 3000 3004 4000 0505 0606 071' },
      { id: 'ben-6', name: 'Michel Bernard', account: 'FR76 1027 9000 1122 3344 5566 789' },
      { id: 'ben-7', name: 'Sylvie Morel', account: 'FR76 3000 4005 5000 0606 0707 082' }
    ],
    recentTransfers: [
      { id: 'prev-1', label: 'Virement vers Claire Bonnet', amount: '-4 500,00 €', date: '03 Déc 2024' },
      { id: 'prev-2', label: 'Virement de Marc Lefevre', amount: '+18 500,00 €', date: '09 Jan 2025' },
      { id: 'prev-3', label: 'Virement vers Jean-Pierre Dupont', amount: '-2 750,00 €', date: '18 Nov 2024' },
      { id: 'prev-4', label: 'Virement de Nathalie Roux', amount: '+8 200,00 €', date: '06 Oct 2024' },
      { id: 'prev-5', label: 'Virement vers Julie Leroy', amount: '-1 950,00 €', date: '21 Août 2024' },
      { id: 'prev-6', label: 'Virement de Michel Bernard', amount: '+12 000,00 €', date: '12 Juin 2024' },
      { id: 'prev-7', label: 'Virement vers Marc Lefevre', amount: '-12 300,00 €', date: '02 Sep 2022' },
      { id: 'prev-8', label: 'Virement de Jean-Pierre Dupont', amount: '+15 000,00 €', date: '28 Nov 2021' },
      { id: 'prev-9', label: 'Virement vers Théo Martin', amount: '-31 200,00 €', date: '05 Juin 2021' },
      { id: 'prev-10', label: 'Virement de Nathalie Roux', amount: '+67 500,00 €', date: '12 Août 2020' }
    ]
  };

  res.json({ transfer });
};

exports.submitTransfer = (req, res) => {
  const { beneficiaryId, amount, note } = req.body;

  if (!beneficiaryId || !amount) {
    return res.status(400).json({ message: 'Bénéficiaire et montant requis.' });
  }

  const transfer = {
    id: 'new-transfer',
    beneficiaryId,
    amount,
    note: note || '',
    status: 'success',
    message: 'Virement envoyé avec succès.'
  };

  res.status(201).json({ transfer });
};
