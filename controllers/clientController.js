exports.getAccountInfo = (req, res) => {
  const account = {
    title: 'Compte bloqué',
    description: 'Opération impossible. Votre compte est actuellement bloqué. Pour effectuer un virement ou toute autre opération sur ce compte, vous devez d’abord procéder au déblocage de votre compte.',
    fees: '22 000,00 €',
    owner: 'Dominique Sauvage',
    blockedBalance: '880 000,00 €',
    manager: 'Michel Lemaire',
    managerTitle: 'Conseiller gestionnaire',
    actionLabel: "J'ai compris"
  };

  res.json({ account });
};

exports.getCardInfo = (req, res) => {
  const card = {
    brand: 'VISA',
    number: '4973 5570 9822 3674',
    owner: 'Dominique Sauvage',
    expiry: '02/26',
    cvv: '292',
    monthlyLimit: '1 850 €',
    monthlyLimitMax: '3 000 €',
    renewalDate: '1er février',
    utilization: '61.7%',
    onlinePayments: true,
    contactless: true
  };

  res.json({ card });
};

exports.getSecurityInfo = (req, res) => {
  const security = {
    title: 'Sécurité',
    subtitle: 'Gérez vos paramètres de sécurité',
    level: 'Sécurité renforcée',
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
        description: 'Notifications en cas d’activité suspecte',
        enabled: true
      },
      {
        id: 'autoLock',
        title: 'Verrouillage automatique',
        description: 'Verrouille la connexion après 5 minutes d’inactivité',
        enabled: false
      }
    ],
    controls: [
      {
        id: 'change-code',
        title: 'Modifier le code secret',
        description: 'Changez votre code d’accès'
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
      { id: 'ben-1', name: 'Jean-Pierre Dupont', account: 'FR76 3000 6000 0112 3456 7890 189' },
      { id: 'ben-2', name: 'Claire Bonnet', account: 'FR14 2004 1010 0505 0001 3M02 606' },
      { id: 'ben-3', name: 'Nathalie Roux', account: 'FR76 3000 6000 0112 3456 7890 190' }
    ],
    recentTransfers: [
      { id: 'prev-1', label: 'Virement vers Marc Lefevre', amount: '-12 300,00 €', date: '02 Sep 2021' },
      { id: 'prev-2', label: 'Virement de Jean-Pierre', amount: '+15 000,00 €', date: '28 Nov 2021' }
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
