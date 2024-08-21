const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BT_LOGIN: '.btn'
     },

    MENSAGE: '.toast-message',

    CONFIGS: {
      BT_CONFIG: '[data-test="menu-settings"] > .fas',
      OPC_CONTA: '[href="/contas"]',
      OPC_RESET: '[href="/reset"]',
      OPC_OUT: '[href="/logout"]'
    },

    CONT:{
        NAME: '[data-test="nome"]',
        BT_ADD: '.btn',
    }

    
}


export default locators;