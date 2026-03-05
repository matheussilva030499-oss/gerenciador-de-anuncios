// Arquivo de configuração do PM2
// O PM2 usa esse arquivo para saber como rodar a aplicação
module.exports = {
  apps: [
    {
      // Nome do processo que aparece no "pm2 list"
      name: 'gerenciador-anuncios',

      // Arquivo de entrada da aplicação
      script: 'src/index.js',

      // Número de instâncias: "max" usa todos os CPUs disponíveis
      instances: 'max',

      // Modo cluster: distribui as requisições entre as instâncias
      exec_mode: 'cluster',

      // Reinicia automaticamente se a aplicação crashar
      autorestart: true,

      // Reinicia se a aplicação usar mais de 512MB de RAM
      max_memory_restart: '512M',

      // Variáveis de ambiente para produção
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
