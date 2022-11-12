export var MAP_DATA_OTHER_HELPFUL_DETAIL = {
  label: 'Other helpful details',
  items: [{
    key: 'General enquiry',
    items: [{
      title: 'Game (optional)',
      disabled: false,
      error: false,
      helperText: 'Select the game',
      width: '100%',
      value: 'Game',
      required: false,
      name: 'game',
      data: [{
        label: 'One Piece Odyssey',
        value: 'One Piece Odyssey'
      }, {
        label: 'Dragon Ball: The Breakers',
        value: 'Dragon Ball: The Breakers'
      }, {
        label: 'Digimon Survive',
        value: 'Digimon Survive '
      }, {
        label: '.hack//G.U. Last Recode',
        value: '.hack//G.U. Last Recode'
      }]
    }, {
      title: 'Hardware or console platform (optional)',
      disabled: false,
      error: false,
      helperText: 'Select the platform of your hardware or console',
      width: '100%',
      required: false,
      value: 'Platform',
      name: 'platform',
      data: [{
        label: 'PS5',
        value: 'PS5'
      }, {
        label: 'PS4',
        value: 'PS4'
      }, {
        label: 'NINTENDO SWITCH',
        value: 'NINTENDO SWITCH '
      }, {
        label: 'XBOX One',
        value: 'XBOX One'
      }, {
        label: 'XBOX S/X',
        value: 'XBOX S/X'
      }, {
        label: 'XBOX Series X',
        value: 'XBOX Series X'
      }, {
        label: 'Steam',
        value: 'Steam'
      }]
    }, {
      title: 'Country of platform account (optional)',
      disabled: false,
      error: false,
      helperText: 'Select the country your platform account is from',
      width: '100%',
      value: 'Country of platform account',
      required: false,
      name: 'country',
      data: [{
        label: 'Singapore',
        value: 'Singapore'
      }, {
        label: 'Korea',
        value: 'Korea'
      }, {
        label: 'Japan',
        value: 'Japan '
      }, {
        label: 'Thailand',
        value: 'Thailand'
      }]
    }],
    filesProps: {
      onlyFilesText: 'Only PDF, PNG or JPG. Max. 5 files, 10 MB each.',
      selectFilesText: 'Select a files',
      dropFilesText: 'or drop it here',
      uploadAttachmentText: 'Upload attachment (optional)',
      require: false
    }
  }, {
    key: 'Account and security',
    items: [{
      title: 'Game (optional)',
      disabled: false,
      error: false,
      helperText: 'Select the game ',
      width: '100%',
      value: 'Game',
      required: false,
      name: 'game',
      data: [{
        label: 'One Piece Odyssey',
        value: 'One Piece Odyssey'
      }, {
        label: 'Dragon Ball: The Breakers',
        value: 'Dragon Ball: The Breakers'
      }, {
        label: 'Digimon Survive',
        value: 'Digimon Survive '
      }, {
        label: '.hack//G.U. Last Recode',
        value: '.hack//G.U. Last Recode'
      }]
    }, {
      title: 'Hardware or console platform  (optional)',
      disabled: false,
      error: false,
      helperText: 'Select the platform of your hardware or console',
      width: '100%',
      required: false,
      value: 'Platform',
      name: 'platform',
      data: [{
        label: 'PS5',
        value: 'PS5'
      }, {
        label: 'PS4',
        value: 'PS4'
      }, {
        label: 'NINTENDO SWITCH',
        value: 'NINTENDO SWITCH '
      }, {
        label: 'XBOX One',
        value: 'XBOX One'
      }, {
        label: 'XBOX S/X',
        value: 'XBOX S/X'
      }, {
        label: 'XBOX Series X',
        value: 'XBOX Series X'
      }, {
        label: 'Steam',
        value: 'Steam'
      }]
    }, {
      title: 'Country of platform account (optional)',
      disabled: false,
      error: false,
      helperText: 'Select the country your platform account is from',
      width: '100%',
      value: 'Country of platform account',
      required: false,
      name: 'country',
      data: [{
        label: 'Singapore',
        value: 'Singapore'
      }, {
        label: 'Korea',
        value: 'Korea'
      }, {
        label: 'Japan',
        value: 'Japan '
      }, {
        label: 'Thailand',
        value: 'Thailand'
      }]
    }],
    filesProps: {
      onlyFilesText: 'Only PDF, PNG or JPG. Max. 5 files, 10 MB each.',
      selectFilesText: 'Select a files',
      dropFilesText: 'or drop it here',
      uploadAttachmentText: 'Upload attachment (optional)',
      require: false
    }
  }, {
    key: 'Report bugs or player safety issues',
    items: [{
      title: 'Game',
      disabled: false,
      error: false,
      helperText: 'Select the game',
      width: '100%',
      value: 'Game',
      name: 'game',
      required: true,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Hardware or console platform ',
      disabled: false,
      error: false,
      helperText: 'Select the platform of your hardware or console',
      required: true,
      width: '100%',
      value: 'Platform',
      name: 'platform',
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Country of platform account',
      disabled: false,
      error: false,
      helperText: 'Select the country your platform account is from',
      width: '100%',
      value: 'Country of platform account',
      name: 'country',
      required: true,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }],
    filesProps: {
      onlyFilesText: 'Only PDF, PNG or JPG. Max. 5 files, 10 MB each.',
      selectFilesText: 'Select a files',
      dropFilesText: 'or drop it here',
      uploadAttachmentText: 'Upload attachment (optional)',
      require: false
    }
  }, {
    key: 'Purchases, shipping and refunds',
    items: [{
      title: 'Game',
      disabled: false,
      error: false,
      helperText: 'Select the game',
      width: '100%',
      value: 'Game',
      name: 'game',
      required: true,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Hardware or console platform',
      disabled: false,
      error: false,
      helperText: 'Select the platform of your hardware or console',
      required: true,
      width: '100%',
      value: 'Platform',
      name: 'platform',
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Country of platform account (optional)',
      disabled: false,
      error: false,
      helperText: 'Select the country your platform account is from',
      width: '100%',
      value: 'Country of platform account',
      name: 'country',
      required: false,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      name: 'orderNumber',
      helperText: 'Enter your order number',
      width: '100%',
      required: true,
      label: 'Order number',
      hiddenLabel: true,
      success: false,
      iconPosEnd: true
    }],
    filesProps: {
      onlyFilesText: 'Only PDF, PNG or JPG. Max. 5 files, 10 MB each.',
      selectFilesText: 'Select a files',
      dropFilesText: 'or drop it here',
      uploadAttachmentText: 'Upload attachment (optional)',
      require: false
    }
  }, {
    key: 'Media and content creators',
    items: [{
      title: 'Game',
      disabled: false,
      error: false,
      helperText: 'Select the game',
      width: '100%',
      value: 'Game',
      name: 'game',
      required: true,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Hardware or console platform ',
      disabled: false,
      error: false,
      helperText: 'Select the platform of your hardware or console',
      required: true,
      width: '100%',
      value: 'Platform',
      name: 'platform',
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Country of platform account (optional)',
      disabled: false,
      error: false,
      helperText: 'Select the country your platform account is from',
      width: '100%',
      value: 'Country of platform account',
      name: 'country',
      required: false,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      name: 'orderNumber',
      helperText: 'Enter your order number',
      width: '100%',
      required: false,
      label: 'Order number (optional)',
      hiddenLabel: true,
      success: false,
      iconPosEnd: true
    }],
    filesProps: {
      onlyFilesText: 'Only PDF, PNG or JPG. Max. 5 files, 10 MB each.',
      selectFilesText: 'Select a files',
      dropFilesText: 'or drop it here',
      uploadAttachmentText: 'Upload attachment (optional)',
      require: false
    }
  }, {
    key: 'Give feedback on games',
    items: [{
      title: 'Game',
      disabled: false,
      error: false,
      helperText: 'Select the game',
      width: '100%',
      value: 'Game',
      name: 'game',
      required: true,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Hardware or console platform ',
      disabled: false,
      error: false,
      helperText: 'Select the platform of your hardware or console',
      required: true,
      width: '100%',
      value: 'Platform',
      name: 'platform',
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Country of platform account',
      disabled: false,
      error: false,
      helperText: 'Select the country your platform account is from',
      width: '100%',
      value: 'Country of platform account',
      required: true,
      name: 'country',
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      name: 'orderNumber',
      helperText: 'Enter your order number',
      width: '100%',
      required: false,
      label: 'Order number (optional)',
      hiddenLabel: true,
      success: false,
      iconPosEnd: true
    }],
    filesProps: {
      onlyFilesText: 'Only PDF, PNG or JPG. Max. 5 files, 10 MB each.',
      selectFilesText: 'Select a files',
      dropFilesText: 'or drop it here',
      uploadAttachmentText: 'Upload attachment (optional)',
      require: false
    }
  }, {
    key: 'Request technical support',
    items: [{
      title: 'Game',
      disabled: false,
      error: false,
      helperText: 'Select the game',
      width: '100%',
      value: 'Game',
      name: 'game',
      required: true,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Hardware or console platform ',
      disabled: false,
      error: false,
      helperText: 'Select the platform of your hardware or console',
      required: true,
      width: '100%',
      value: 'Platform',
      name: 'platform',
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      title: 'Country of platform account',
      name: 'country',
      disabled: false,
      error: false,
      helperText: 'Select the country your platform account is from',
      width: '100%',
      value: 'Country of platform account',
      required: true,
      data: [{
        label: 'General enquiry',
        value: 'General enquiry'
      }, {
        label: 'Account and security',
        value: 'Account and security'
      }, {
        label: 'Report bugs or player safety issues',
        value: 'Report bugs or player safety issues '
      }, {
        label: 'Purchases, shipping and refunds',
        value: 'Purchases, shipping and refunds'
      }]
    }, {
      name: 'orderNumber',
      helperText: 'Enter your order number',
      width: '100%',
      required: false,
      label: 'Order number (optional)',
      hiddenLabel: true,
      success: false,
      iconPosEnd: true
    }],
    filesProps: {
      onlyFilesText: 'Only PDF, PNG or JPG. Max. 5 files, 10 MB each.',
      selectFilesText: 'Select a files',
      dropFilesText: 'or drop it here',
      uploadAttachmentText: 'Upload attachment (optional)',
      require: false
    }
  }]
};
export var NUMBER_ITEMS = 10;
export var RESPONSE_TIME_IN_MS = 1000;
export var COUNTRY_NUMBERS = [{
  label: "+93",
  value: "+93",
  country: "Afghanistan"
}, {
  label: "+355",
  value: "+355",
  country: "Albania"
}, {
  label: "+213",
  value: "+213",
  country: "Algeria"
}, {
  label: "+1-684",
  value: "+1-684",
  country: "American Samoa"
}, {
  label: "+376",
  value: "+376",
  country: "Andorra"
}, {
  label: "+244",
  value: "+244",
  country: "Angola"
}, {
  label: "+1-264",
  value: "+1-264",
  country: "Anguilla"
}, {
  label: "+672",
  value: "+672",
  country: "Antarctica"
}, {
  label: "+1-268",
  value: "+1-268",
  country: "Antigua and Barbuda"
}, {
  label: "+54",
  value: "+54",
  country: "Argentina"
}, {
  label: "+374",
  value: "+374",
  country: "Armenia"
}, {
  label: "+297",
  value: "+297",
  country: "Aruba"
}, {
  label: "+61",
  value: "+61",
  country: "Australia"
}, {
  label: "+43",
  value: "+43",
  country: "Austria"
}, {
  label: "+994",
  value: "+994",
  country: "Azerbaijan"
}, {
  label: "+1-242",
  value: "+1-242",
  country: "Bahamas"
}, {
  label: "+973",
  value: "+973",
  country: "Bahrain"
}, {
  label: "+880",
  value: "+880",
  country: "Bangladesh"
}, {
  label: "+1-246",
  value: "+1-246",
  country: "Barbados"
}, {
  label: "+375",
  value: "+375",
  country: "Belarus"
}, {
  label: "+32",
  value: "+32",
  country: "Belgium"
}, {
  label: "+501",
  value: "+501",
  country: "Belize"
}, {
  label: "+229",
  value: "+229",
  country: "Benin"
}, {
  label: "+1-441",
  value: "+1-441",
  country: "Bermuda"
}, {
  label: "+975",
  value: "+975",
  country: "Bhutan"
}, {
  label: "+591",
  value: "+591",
  country: "Bolivia"
}, {
  label: "+387",
  value: "+387",
  country: "Bosnia and Herzegovina"
}, {
  label: "+267",
  value: "+267",
  country: "Botswana"
}, {
  label: "+55",
  value: "+55",
  country: "Brazil"
}, {
  label: "+246",
  value: "+246",
  country: "British Indian Ocean Territory"
}, {
  label: "+1-284",
  value: "+1-284",
  country: "British Virgin Islands"
}, {
  label: "+673",
  value: "+673",
  country: "Brunei"
}, {
  label: "+359",
  value: "+359",
  country: "Bulgaria"
}, {
  label: "+226",
  value: "+226",
  country: "Burkina Faso"
}, {
  label: "+257",
  value: "+257",
  country: "Burundi"
}, {
  label: "+855",
  value: "+855",
  country: "Cambodia"
}, {
  label: "+237",
  value: "+237",
  country: "Cameroon"
}, {
  label: "+1",
  value: "+1",
  country: "Canada"
}, {
  label: "+238",
  value: "+238",
  country: "Cape Verde"
}, {
  label: "+1-345",
  value: "+1-345",
  country: "Cayman Islands"
}, {
  label: "+236",
  value: "+236",
  country: "Central African Republic"
}, {
  label: "+235",
  value: "+235",
  country: "Chad"
}, {
  label: "+56",
  value: "+56",
  country: "Chile"
}, {
  label: "+86",
  value: "+86",
  country: "China"
}, {
  label: "+57",
  value: "+57",
  country: "Colombia"
}, {
  label: "+269",
  value: "+269",
  country: "Comoros"
}, {
  label: "+682",
  value: "+682",
  country: "Cook Islands"
}, {
  label: "+506",
  value: "+506",
  country: "Costa Rica"
}, {
  label: "+385",
  value: "+385",
  country: "Croatia"
}, {
  label: "+53",
  value: "+53",
  country: "Cuba"
}, {
  label: "+599",
  value: "+599",
  country: "Curacao"
}, {
  label: "+357",
  value: "+357",
  country: "Cyprus"
}, {
  label: "+420",
  value: "+420",
  country: "Czech Republic"
}, {
  label: "+243",
  value: "+243",
  country: "Democratic Republic of the Congo"
}, {
  label: "+45",
  value: "+45",
  country: "Denmark"
}, {
  label: "+253",
  value: "+253",
  country: "Djibouti"
}, {
  label: "+1-767",
  value: "+1-767",
  country: "Dominica"
}, {
  label: "+1-829",
  value: "+1-829",
  country: "Dominica"
}, {
  label: "+1-849",
  value: "+1-849",
  country: "Dominica"
}, {
  label: "+1-809",
  value: "+1-809",
  country: "Dominican Republic"
}, {
  label: "+670",
  value: "+670",
  country: "East Timor"
}, {
  label: "+593",
  value: "+593",
  country: "Ecuador"
}, {
  label: "+20",
  value: "+20",
  country: "Egypt"
}, {
  label: "+503",
  value: "+503",
  country: "El Salvador"
}, {
  label: "+240",
  value: "+240",
  country: "Equatorial Guinea"
}, {
  label: "+291",
  value: "+291",
  country: "Eritrea"
}, {
  label: "+372",
  value: "+372",
  country: "Estonia"
}, {
  label: "+251",
  value: "+251",
  country: "Ethiopia"
}, {
  label: "+500",
  value: "+500",
  country: "Falkland Islands"
}, {
  label: "+298",
  value: "+298",
  country: "Faroe Islands"
}, {
  label: "+679",
  value: "+679",
  country: "Fiji"
}, {
  label: "+358",
  value: "+358",
  country: "Finland"
}, {
  label: "+33",
  value: "+33",
  country: "France"
}, {
  label: "+689",
  value: "+689",
  country: "French Polynesia"
}, {
  label: "+241",
  value: "+241",
  country: "Gabon"
}, {
  label: "+220",
  value: "+220",
  country: "Gambia"
}, {
  label: "+995",
  value: "+995",
  country: "Georgia"
}, {
  label: "+49",
  value: "+49",
  country: "Germany"
}, {
  label: "+233",
  value: "+233",
  country: "Ghana"
}, {
  label: "+350",
  value: "+350",
  country: "Gibraltar"
}, {
  label: "+30",
  value: "+30",
  country: "Greece"
}, {
  label: "+299",
  value: "+299",
  country: "Greenland"
}, {
  label: "+1-473",
  value: "+1-473",
  country: "Grenada"
}, {
  label: "+1-671",
  value: "+1-671",
  country: "Guam"
}, {
  label: "+502",
  value: "+502",
  country: "Guatemala"
}, {
  label: "+44-1481",
  value: "+44-1481",
  country: "Guernsey"
}, {
  label: "+224",
  value: "+224",
  country: "Guinea"
}, {
  label: "+245",
  value: "+245",
  country: "Guinea-Bissau"
}, {
  label: "+592",
  value: "+592",
  country: "Guyana"
}, {
  label: "+509",
  value: "+509",
  country: "Haiti"
}, {
  label: "+504",
  value: "+504",
  country: "Honduras"
}, {
  label: "+852",
  value: "+852",
  country: "Hong Kong"
}, {
  label: "+36",
  value: "+36",
  country: "Hungary"
}, {
  label: "+354",
  value: "+354",
  country: "Iceland"
}, {
  label: "+91",
  value: "+91",
  country: "India"
}, {
  label: "+62",
  value: "+62",
  country: "Indonesia"
}, {
  label: "+98",
  value: "+98",
  country: "Iran"
}, {
  label: "+964",
  value: "+964",
  country: "Iraq"
}, {
  label: "+353",
  value: "+353",
  country: "Ireland"
}, {
  label: "+44-1624",
  value: "+44-1624",
  country: "Isle of Man"
}, {
  label: "+972",
  value: "+972",
  country: "Israel"
}, {
  label: "+39",
  value: "+39",
  country: "Italy"
}, {
  label: "+225",
  value: "+225",
  country: "Ivory Coast"
}, {
  label: "+1-876",
  value: "+1-876",
  country: "Jamaica"
}, {
  label: "+81",
  value: "+81",
  country: "Japan"
}, {
  label: "+44-1534",
  value: "+44-1534",
  country: "Jersey"
}, {
  label: "+962",
  value: "+962",
  country: "Jordan"
}, {
  label: "+7",
  value: "+7",
  country: "Kazakhstan"
}, {
  label: "+254",
  value: "+254",
  country: "Kenya"
}, {
  label: "+686",
  value: "+686",
  country: "Kiribati"
}, {
  label: "+383",
  value: "+383",
  country: "Kosovo"
}, {
  label: "+965",
  value: "+965",
  country: "Kuwait"
}, {
  label: "+996",
  value: "+996",
  country: "Kyrgyzstan"
}, {
  label: "+856",
  value: "+856",
  country: "Laos"
}, {
  label: "+371",
  value: "+371",
  country: "Latvia"
}, {
  label: "+961",
  value: "+961",
  country: "Lebanon"
}, {
  label: "+266",
  value: "+266",
  country: "Lesotho"
}, {
  label: "+231",
  value: "+231",
  country: "Liberia"
}, {
  label: "+218",
  value: "+218",
  country: "Libya"
}, {
  label: "+423",
  value: "+423",
  country: "Liechtenstein"
}, {
  label: "+370",
  value: "+370",
  country: "Lithuania"
}, {
  label: "+352",
  value: "+352",
  country: "Luxembourg"
}, {
  label: "+853",
  value: "+853",
  country: "Macau"
}, {
  label: "+389",
  value: "+389",
  country: "Macedonia"
}, {
  label: "+261",
  value: "+261",
  country: "Madagascar"
}, {
  label: "+265",
  value: "+265",
  country: "Malawi"
}, {
  label: "+60",
  value: "+60",
  country: "Malaysia"
}, {
  label: "+960",
  value: "+960",
  country: "Maldives"
}, {
  label: "+223",
  value: "+223",
  country: "Mali"
}, {
  label: "+356",
  value: "+356",
  country: "Malta"
}, {
  label: "+692",
  value: "+692",
  country: "Marshall Islands"
}, {
  label: "+222",
  value: "+222",
  country: "Mauritania"
}, {
  label: "+230",
  value: "+230",
  country: "Mauritius"
}, {
  label: "+262",
  value: "+262",
  country: "Mayotte"
}, {
  label: "+52",
  value: "+52",
  country: "Mexico"
}, {
  label: "+691",
  value: "+691",
  country: "Micronesia"
}, {
  label: "+373",
  value: "+373",
  country: "Moldova"
}, {
  label: "+377",
  value: "+377",
  country: "Monaco"
}, {
  label: "+976",
  value: "+976",
  country: "Mongolia"
}, {
  label: "+382",
  value: "+382",
  country: "Montenegro"
}, {
  label: "+1-664",
  value: "+1-664",
  country: "Montserrat"
}, {
  label: "+212",
  value: "+212",
  country: "Morocco"
}, {
  label: "+258",
  value: "+258",
  country: "Mozambique"
}, {
  label: "+95",
  value: "+95",
  country: "Myanmar"
}, {
  label: "+264",
  value: "+264",
  country: "Namibia"
}, {
  label: "+674",
  value: "+674",
  country: "Nauru"
}, {
  label: "+977",
  value: "+977",
  country: "Nepal"
}, {
  label: "+31",
  value: "+31",
  country: "Netherlands"
}, {
  label: "+599",
  value: "+599",
  country: "Netherlands Antilles"
}, {
  label: "+687",
  value: "+687",
  country: "New Caledonia"
}, {
  label: "+64",
  value: "+64",
  country: "New Zealand"
}, {
  label: "+505",
  value: "+505",
  country: "Nicaragua"
}, {
  label: "+227",
  value: "+227",
  country: "Niger"
}, {
  label: "+234",
  value: "+234",
  country: "Nigeria"
}, {
  label: "+683",
  value: "+683",
  country: "Niue"
}, {
  label: "+850",
  value: "+850",
  country: "North Korea"
}, {
  label: "+1-670",
  value: "+1-670",
  country: "Northern Mariana Islands"
}, {
  label: "+47",
  value: "+47",
  country: "Norway"
}, {
  label: "+968",
  value: "+968",
  country: "Oman"
}, {
  label: "+92",
  value: "+92",
  country: "Pakistan"
}, {
  label: "+680",
  value: "+680",
  country: "Palau"
}, {
  label: "+970",
  value: "+970",
  country: "Palestine"
}, {
  label: "+507",
  value: "+507",
  country: "Panama"
}, {
  label: "+675",
  value: "+675",
  country: "Papua New Guinea"
}, {
  label: "+595",
  value: "+595",
  country: "Paraguay"
}, {
  label: "+51",
  value: "+51",
  country: "Peru"
}, {
  label: "+63",
  value: "+63",
  country: "Philippines"
}, {
  label: "+64",
  value: "+64",
  country: "Pitcairn"
}, {
  label: "+48",
  value: "+48",
  country: "Poland"
}, {
  label: "+351",
  value: "+351",
  country: "Portugal"
}, {
  label: "+1-939",
  value: "+1-939",
  country: "Puerto Rico"
}, {
  label: "+1-787",
  value: "+1-787",
  country: "Puerto Rico"
}, {
  label: "+974",
  value: "+974",
  country: "Qatar"
}, {
  label: "+242",
  value: "+242",
  country: "Republic of the Congo"
}, {
  label: "+262",
  value: "+262",
  country: "Reunion"
}, {
  label: "+40",
  value: "+40",
  country: "Romania"
}, {
  label: "+7",
  value: "+7",
  country: "Russia"
}, {
  label: "+250",
  value: "+250",
  country: "Rwanda"
}, {
  label: "+590",
  value: "+590",
  country: "Saint Barthelemy"
}, {
  label: "+290",
  value: "+290",
  country: "Saint Helena"
}, {
  label: "+1-869",
  value: "+1-869",
  country: "Saint Kitts and Nevis"
}, {
  label: "+1-758",
  value: "+1-758",
  country: "Saint Lucia"
}, {
  label: "+590",
  value: "+590",
  country: "Saint Martin"
}, {
  label: "+508",
  value: "+508",
  country: "Saint Pierre and Miquelon"
}, {
  label: "+1-784",
  value: "+1-784",
  country: "Saint Vincent and the Grenadines"
}, {
  label: "+685",
  value: "+685",
  country: "Samoa"
}, {
  label: "+378",
  value: "+378",
  country: "San Marino"
}, {
  label: "+239",
  value: "+239",
  country: "Sao Tome and Principe"
}, {
  label: "+966",
  value: "+966",
  country: "Saudi Arabia"
}, {
  label: "+221",
  value: "+221",
  country: "Senegal"
}, {
  label: "+381",
  value: "+381",
  country: "Serbia"
}, {
  label: "+248",
  value: "+248",
  country: "Seychelles"
}, {
  label: "+232",
  value: "+232",
  country: "Sierra Leone"
}, {
  label: "+65",
  value: "+65",
  country: "Singapore"
}, {
  label: "+1-721",
  value: "+1-721",
  country: "Sint Maarten"
}, {
  label: "+421",
  value: "+421",
  country: "Slovakia"
}, {
  label: "+386",
  value: "+386",
  country: "Slovenia"
}, {
  label: "+677",
  value: "+677",
  country: "Solomon Islands"
}, {
  label: "+252",
  value: "+252",
  country: "Somalia"
}, {
  label: "+27",
  value: "+27",
  country: "South Africa"
}, {
  label: "+82",
  value: "+82",
  country: "Korea"
}, {
  label: "+211",
  value: "+211",
  country: "South Sudan"
}, {
  label: "+34",
  value: "+34",
  country: "Spain"
}, {
  label: "+94",
  value: "+94",
  country: "Sri Lanka"
}, {
  label: "+249",
  value: "+249",
  country: "Sudan"
}, {
  label: "+597",
  value: "+597",
  country: "Suriname"
}, {
  label: "+47",
  value: "+47",
  country: "Svalbard and Jan Mayen"
}, {
  label: "+268",
  value: "+268",
  country: "Swaziland"
}, {
  label: "+46",
  value: "+46",
  country: "Sweden"
}, {
  label: "+41",
  value: "+41",
  country: "Switzerland"
}, {
  label: "+963",
  value: "+963",
  country: "Syria"
}, {
  label: "+886",
  value: "+886",
  country: "Taiwan"
}, {
  label: "+992",
  value: "+992",
  country: "Tajikistan"
}, {
  label: "+255",
  value: "+255",
  country: "Tanzania"
}, {
  label: "+66",
  value: "+66",
  country: "Thailand"
}, {
  label: "+228",
  value: "+228",
  country: "Togo"
}, {
  label: "+690",
  value: "+690",
  country: "Tokelau"
}, {
  label: "+676",
  value: "+676",
  country: "Tonga"
}, {
  label: "+1-868",
  value: "+1-868",
  country: "Trinidad and Tobago"
}, {
  label: "+216",
  value: "+216",
  country: "Tunisia"
}, {
  label: "+90",
  value: "+90",
  country: "Turkey"
}, {
  label: "+993",
  value: "+993",
  country: "Turkmenistan"
}, {
  label: "+1-649",
  value: "+1-649",
  country: "Turks and Caicos Islands"
}, {
  label: "+688",
  value: "+688",
  country: "Tuvalu"
}, {
  label: "+1-340",
  value: "+1-340",
  country: "U.S. Virgin Islands"
}, {
  label: "+256",
  value: "+256",
  country: "Uganda"
}, {
  label: "+380",
  value: "+380",
  country: "Ukraine"
}, {
  label: "+971",
  value: "+971",
  country: "United Arab Emirates"
}, {
  label: "+44",
  value: "+44",
  country: "United Kingdom"
}, {
  label: "+1",
  value: "+1",
  country: "United States"
}, {
  label: "+598",
  value: "+598",
  country: "Uruguay"
}, {
  label: "+998",
  value: "+998",
  country: "Uzbekistan"
}, {
  label: "+678",
  value: "+678",
  country: "Vanuatu"
}, {
  label: "+379",
  value: "+379",
  country: "Vatican"
}, {
  label: "+58",
  value: "+58",
  country: "Venezuela"
}, {
  label: "+84",
  value: "+84",
  country: "Vietnam"
}, {
  label: "+681",
  value: "+681",
  country: "Wallis and Futuna"
}, {
  label: "+212",
  value: "+212",
  country: "Western Sahara"
}, {
  label: "+967",
  value: "+967",
  country: "Yemen"
}, {
  label: "+260",
  value: "+260",
  country: "Zambia"
}, {
  label: "+263",
  value: "+263",
  country: "Zimbabwe"
}];
export var COUNTRY_LIST = [{
  label: 'Afghanistan',
  value: 'Afghanistan'
}, {
  label: 'Albania',
  value: 'Albania'
}, {
  label: 'Algeria',
  value: 'Algeria'
}, {
  label: 'American Samoa',
  value: 'American Samoa'
}, {
  label: 'Andorra',
  value: 'Andorra'
}, {
  label: 'Angola',
  value: 'Angola'
}, {
  label: 'Anguilla',
  value: 'Anguilla'
}, {
  label: 'Antarctica',
  value: 'Antarctica'
}, {
  label: 'Antigua and Barbuda',
  value: 'Antigua and Barbuda'
}, {
  label: 'Argentina',
  value: 'Argentina'
}, {
  label: 'Armenia',
  value: 'Armenia'
}, {
  label: 'Aruba',
  value: 'Aruba'
}, {
  label: 'Australia',
  value: 'Australia'
}, {
  label: 'Austria',
  value: 'Austria'
}, {
  label: 'Azerbaijan',
  value: 'Azerbaijan'
}, {
  label: 'Bahamas',
  value: 'Bahamas'
}, {
  label: 'Bahrain',
  value: 'Bahrain'
}, {
  label: 'Bangladesh',
  value: 'Bangladesh'
}, {
  label: 'Barbados',
  value: 'Barbados'
}, {
  label: 'Belarus',
  value: 'Belarus'
}, {
  label: 'Belgium',
  value: 'Belgium'
}, {
  label: 'Belize',
  value: 'Belize'
}, {
  label: 'Benin',
  value: 'Benin'
}, {
  label: 'Bermuda',
  value: 'Bermuda'
}, {
  label: 'Bhutan',
  value: 'Bhutan'
}, {
  label: 'Bolivia',
  value: 'Bolivia'
}, {
  label: 'Bosnia and Herzegovina',
  value: 'Bosnia and Herzegovina'
}, {
  label: 'Botswana',
  value: 'Botswana'
}, {
  label: 'Brazil',
  value: 'Brazil'
}, {
  label: 'British Indian Ocean Territory',
  value: 'British Indian Ocean Territory'
}, {
  label: 'British Virgin Islands',
  value: 'British Virgin Islands'
}, {
  label: 'Brunei',
  value: 'Brunei'
}, {
  label: 'Bulgaria',
  value: 'Bulgaria'
}, {
  label: 'Burkina Faso',
  value: 'Burkina Faso'
}, {
  label: 'Burundi',
  value: 'Burundi'
}, {
  label: 'Cambodia',
  value: 'Cambodia'
}, {
  label: 'Cameroon',
  value: 'Cameroon'
}, {
  label: 'Canada',
  value: 'Canada'
}, {
  label: 'Cape Verde',
  value: 'Cape Verde'
}, {
  label: 'Cayman Islands',
  value: 'Cayman Islands'
}, {
  label: 'Central African Republic',
  value: 'Central African Republic'
}, {
  label: 'Chad',
  value: 'Chad'
}, {
  label: 'Chile',
  value: 'Chile'
}, {
  label: 'China',
  value: 'China'
}, {
  label: 'Colombia',
  value: 'Colombia'
}, {
  label: 'Comoros',
  value: 'Comoros'
}, {
  label: 'Cook Islands',
  value: 'Cook Islands'
}, {
  label: 'Costa Rica',
  value: 'Costa Rica'
}, {
  label: 'Croatia',
  value: 'Croatia'
}, {
  label: 'Cuba',
  value: 'Cuba'
}, {
  label: 'Curacao',
  value: 'Curacao'
}, {
  label: 'Cyprus',
  value: 'Cyprus'
}, {
  label: 'Czech Republic',
  value: 'Czech Republic'
}, {
  label: 'Democratic Republic of the Congo',
  value: 'Democratic Republic of the Congo'
}, {
  label: 'Denmark',
  value: 'Denmark'
}, {
  label: 'Djibouti',
  value: 'Djibouti'
}, {
  label: 'Dominica',
  value: 'Dominica'
}, {
  label: 'Dominica',
  value: 'Dominica'
}, {
  label: 'Dominica',
  value: 'Dominica'
}, {
  label: 'Dominican Republic',
  value: 'Dominican Republic'
}, {
  label: 'East Timor',
  value: 'East Timor'
}, {
  label: 'Ecuador',
  value: 'Ecuador'
}, {
  label: 'Egypt',
  value: 'Egypt'
}, {
  label: 'El Salvador',
  value: 'El Salvador'
}, {
  label: 'Equatorial Guinea',
  value: 'Equatorial Guinea'
}, {
  label: 'Eritrea',
  value: 'Eritrea'
}, {
  label: 'Estonia',
  value: 'Estonia'
}, {
  label: 'Ethiopia',
  value: 'Ethiopia'
}, {
  label: 'Falkland Islands',
  value: 'Falkland Islands'
}, {
  label: 'Faroe Islands',
  value: 'Faroe Islands'
}, {
  label: 'Fiji',
  value: 'Fiji'
}, {
  label: 'Finland',
  value: 'Finland'
}, {
  label: 'France',
  value: 'France'
}, {
  label: 'French Polynesia',
  value: 'French Polynesia'
}, {
  label: 'Gabon',
  value: 'Gabon'
}, {
  label: 'Gambia',
  value: 'Gambia'
}, {
  label: 'Georgia',
  value: 'Georgia'
}, {
  label: 'Germany',
  value: 'Germany'
}, {
  label: 'Ghana',
  value: 'Ghana'
}, {
  label: 'Gibraltar',
  value: 'Gibraltar'
}, {
  label: 'Greece',
  value: 'Greece'
}, {
  label: 'Greenland',
  value: 'Greenland'
}, {
  label: 'Grenada',
  value: 'Grenada'
}, {
  label: 'Guam',
  value: 'Guam'
}, {
  label: 'Guatemala',
  value: 'Guatemala'
}, {
  label: 'Guernsey',
  value: 'Guernsey'
}, {
  label: 'Guinea',
  value: 'Guinea'
}, {
  label: 'Guinea-Bissau',
  value: 'Guinea-Bissau'
}, {
  label: 'Guyana',
  value: 'Guyana'
}, {
  label: 'Haiti',
  value: 'Haiti'
}, {
  label: 'Honduras',
  value: 'Honduras'
}, {
  label: 'Hong Kong',
  value: 'Hong Kong'
}, {
  label: 'Hungary',
  value: 'Hungary'
}, {
  label: 'Iceland',
  value: 'Iceland'
}, {
  label: 'India',
  value: 'India'
}, {
  label: 'Indonesia',
  value: 'Indonesia'
}, {
  label: 'Iran',
  value: 'Iran'
}, {
  label: 'Iraq',
  value: 'Iraq'
}, {
  label: 'Ireland',
  value: 'Ireland'
}, {
  label: 'Isle of Man',
  value: 'Isle of Man'
}, {
  label: 'Israel',
  value: 'Israel'
}, {
  label: 'Italy',
  value: 'Italy'
}, {
  label: 'Ivory Coast',
  value: 'Ivory Coast'
}, {
  label: 'Jamaica',
  value: 'Jamaica'
}, {
  label: 'Japan',
  value: 'Japan'
}, {
  label: 'Jersey',
  value: 'Jersey'
}, {
  label: 'Jordan',
  value: 'Jordan'
}, {
  label: 'Kazakhstan',
  value: 'Kazakhstan'
}, {
  label: 'Kenya',
  value: 'Kenya'
}, {
  label: 'Kiribati',
  value: 'Kiribati'
}, {
  label: 'Kosovo',
  value: 'Kosovo'
}, {
  label: 'Kuwait',
  value: 'Kuwait'
}, {
  label: 'Kyrgyzstan',
  value: 'Kyrgyzstan'
}, {
  label: 'Laos',
  value: 'Laos'
}, {
  label: 'Latvia',
  value: 'Latvia'
}, {
  label: 'Lebanon',
  value: 'Lebanon'
}, {
  label: 'Lesotho',
  value: 'Lesotho'
}, {
  label: 'Liberia',
  value: 'Liberia'
}, {
  label: 'Libya',
  value: 'Libya'
}, {
  label: 'Liechtenstein',
  value: 'Liechtenstein'
}, {
  label: 'Lithuania',
  value: 'Lithuania'
}, {
  label: 'Luxembourg',
  value: 'Luxembourg'
}, {
  label: 'Macau',
  value: 'Macau'
}, {
  label: 'Macedonia',
  value: 'Macedonia'
}, {
  label: 'Madagascar',
  value: 'Madagascar'
}, {
  label: 'Malawi',
  value: 'Malawi'
}, {
  label: 'Malaysia',
  value: 'Malaysia'
}, {
  label: 'Maldives',
  value: 'Maldives'
}, {
  label: 'Mali',
  value: 'Mali'
}, {
  label: 'Malta',
  value: 'Malta'
}, {
  label: 'Marshall Islands',
  value: 'Marshall Islands'
}, {
  label: 'Mauritania',
  value: 'Mauritania'
}, {
  label: 'Mauritius',
  value: 'Mauritius'
}, {
  label: 'Mayotte',
  value: 'Mayotte'
}, {
  label: 'Mexico',
  value: 'Mexico'
}, {
  label: 'Micronesia',
  value: 'Micronesia'
}, {
  label: 'Moldova',
  value: 'Moldova'
}, {
  label: 'Monaco',
  value: 'Monaco'
}, {
  label: 'Mongolia',
  value: 'Mongolia'
}, {
  label: 'Montenegro',
  value: 'Montenegro'
}, {
  label: 'Montserrat',
  value: 'Montserrat'
}, {
  label: 'Morocco',
  value: 'Morocco'
}, {
  label: 'Mozambique',
  value: 'Mozambique'
}, {
  label: 'Myanmar',
  value: 'Myanmar'
}, {
  label: 'Namibia',
  value: 'Namibia'
}, {
  label: 'Nauru',
  value: 'Nauru'
}, {
  label: 'Nepal',
  value: 'Nepal'
}, {
  label: 'Netherlands',
  value: 'Netherlands'
}, {
  label: 'Netherlands Antilles',
  value: 'Netherlands Antilles'
}, {
  label: 'New Caledonia',
  value: 'New Caledonia'
}, {
  label: 'New Zealand',
  value: 'New Zealand'
}, {
  label: 'Nicaragua',
  value: 'Nicaragua'
}, {
  label: 'Niger',
  value: 'Niger'
}, {
  label: 'Nigeria',
  value: 'Nigeria'
}, {
  label: 'Niue',
  value: 'Niue'
}, {
  label: 'North Korea',
  value: 'North Korea'
}, {
  label: 'Northern Mariana Islands',
  value: 'Northern Mariana Islands'
}, {
  label: 'Norway',
  value: 'Norway'
}, {
  label: 'Oman',
  value: 'Oman'
}, {
  label: 'Pakistan',
  value: 'Pakistan'
}, {
  label: 'Palau',
  value: 'Palau'
}, {
  label: 'Palestine',
  value: 'Palestine'
}, {
  label: 'Panama',
  value: 'Panama'
}, {
  label: 'Papua New Guinea',
  value: 'Papua New Guinea'
}, {
  label: 'Paraguay',
  value: 'Paraguay'
}, {
  label: 'Peru',
  value: 'Peru'
}, {
  label: 'Philippines',
  value: 'Philippines'
}, {
  label: 'Pitcairn',
  value: 'Pitcairn'
}, {
  label: 'Poland',
  value: 'Poland'
}, {
  label: 'Portugal',
  value: 'Portugal'
}, {
  label: 'Puerto Rico',
  value: 'Puerto Rico'
}, {
  label: 'Puerto Rico',
  value: 'Puerto Rico'
}, {
  label: 'Qatar',
  value: 'Qatar'
}, {
  label: 'Republic of the Congo',
  value: 'Republic of the Congo'
}, {
  label: 'Reunion',
  value: 'Reunion'
}, {
  label: 'Romania',
  value: 'Romania'
}, {
  label: 'Russia',
  value: 'Russia'
}, {
  label: 'Rwanda',
  value: 'Rwanda'
}, {
  label: 'Saint Barthelemy',
  value: 'Saint Barthelemy'
}, {
  label: 'Saint Helena',
  value: 'Saint Helena'
}, {
  label: 'Saint Kitts and Nevis',
  value: 'Saint Kitts and Nevis'
}, {
  label: 'Saint Lucia',
  value: 'Saint Lucia'
}, {
  label: 'Saint Martin',
  value: 'Saint Martin'
}, {
  label: 'Saint Pierre and Miquelon',
  value: 'Saint Pierre and Miquelon'
}, {
  label: 'Saint Vincent and the Grenadines',
  value: 'Saint Vincent and the Grenadines'
}, {
  label: 'Samoa',
  value: 'Samoa'
}, {
  label: 'San Marino',
  value: 'San Marino'
}, {
  label: 'Sao Tome and Principe',
  value: 'Sao Tome and Principe'
}, {
  label: 'Saudi Arabia',
  value: 'Saudi Arabia'
}, {
  label: 'Senegal',
  value: 'Senegal'
}, {
  label: 'Serbia',
  value: 'Serbia'
}, {
  label: 'Seychelles',
  value: 'Seychelles'
}, {
  label: 'Sierra Leone',
  value: 'Sierra Leone'
}, {
  label: 'Singapore',
  value: 'Singapore'
}, {
  label: 'Sint Maarten',
  value: 'Sint Maarten'
}, {
  label: 'Slovakia',
  value: 'Slovakia'
}, {
  label: 'Slovenia',
  value: 'Slovenia'
}, {
  label: 'Solomon Islands',
  value: 'Solomon Islands'
}, {
  label: 'Somalia',
  value: 'Somalia'
}, {
  label: 'South Africa',
  value: 'South Africa'
}, {
  label: 'Korea',
  value: 'Korea'
}, {
  label: 'South Sudan',
  value: 'South Sudan'
}, {
  label: 'Spain',
  value: 'Spain'
}, {
  label: 'Sri Lanka',
  value: 'Sri Lanka'
}, {
  label: 'Sudan',
  value: 'Sudan'
}, {
  label: 'Suriname',
  value: 'Suriname'
}, {
  label: 'Svalbard and Jan Mayen',
  value: 'Svalbard and Jan Mayen'
}, {
  label: 'Swaziland',
  value: 'Swaziland'
}, {
  label: 'Sweden',
  value: 'Sweden'
}, {
  label: 'Switzerland',
  value: 'Switzerland'
}, {
  label: 'Syria',
  value: 'Syria'
}, {
  label: 'Taiwan',
  value: 'Taiwan'
}, {
  label: 'Tajikistan',
  value: 'Tajikistan'
}, {
  label: 'Tanzania',
  value: 'Tanzania'
}, {
  label: 'Thailand',
  value: 'Thailand'
}, {
  label: 'Togo',
  value: 'Togo'
}, {
  label: 'Tokelau',
  value: 'Tokelau'
}, {
  label: 'Tonga',
  value: 'Tonga'
}, {
  label: 'Trinidad and Tobago',
  value: 'Trinidad and Tobago'
}, {
  label: 'Tunisia',
  value: 'Tunisia'
}, {
  label: 'Turkey',
  value: 'Turkey'
}, {
  label: 'Turkmenistan',
  value: 'Turkmenistan'
}, {
  label: 'Turks and Caicos Islands',
  value: 'Turks and Caicos Islands'
}, {
  label: 'Tuvalu',
  value: 'Tuvalu'
}, {
  label: 'U.S. Virgin Islands',
  value: 'U.S. Virgin Islands'
}, {
  label: 'Uganda',
  value: 'Uganda'
}, {
  label: 'Ukraine',
  value: 'Ukraine'
}, {
  label: 'United Arab Emirates',
  value: 'United Arab Emirates'
}, {
  label: 'United Kingdom',
  value: 'United Kingdom'
}, {
  label: 'United States',
  value: 'United States'
}, {
  label: 'Uruguay',
  value: 'Uruguay'
}, {
  label: 'Uzbekistan',
  value: 'Uzbekistan'
}, {
  label: 'Vanuatu',
  value: 'Vanuatu'
}, {
  label: 'Vatican',
  value: 'Vatican'
}, {
  label: 'Venezuela',
  value: 'Venezuela'
}, {
  label: 'Vietnam',
  value: 'Vietnam'
}, {
  label: 'Wallis and Futuna',
  value: 'Wallis and Futuna'
}, {
  label: 'Western Sahara',
  value: 'Western Sahara'
}, {
  label: 'Yemen',
  value: 'Yemen'
}, {
  label: 'Zambia',
  value: 'Zambia'
}, {
  label: 'Zimbabwe',
  value: 'Zimbabwe'
}];