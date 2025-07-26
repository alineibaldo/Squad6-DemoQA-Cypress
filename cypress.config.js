module.exports = {
  projectId: 'mgwubm',
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar ouvintes de eventos do Node aqui, se necessário
    },
    video: true, // Habilitar gravação de vídeos
    videoCompression: 32, // Compressão de vídeo (opcional)
    videoUploadOnPasses: false, // Não enviar vídeos quando o teste passar
    screenshotOnRunFailure: true, // Habilita screenshots quando o teste falhar
    screenshotsFolder: 'cypress/screenshots', // Defina a pasta onde as screenshots serão salvas
  },
};

