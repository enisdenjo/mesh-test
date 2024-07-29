import { YamlConfig } from '@graphql-mesh/types';

const config: YamlConfig.Config = {
  sources: [
    {
      name: 'TestGraph',
      handler: {
        graphql: {
          endpoint: 'https://spacex-production.up.railway.app/',
        },
      },
    },
  ],
  additionalEnvelopPlugins: './src/config/plugins.ts',
};

export default config;
