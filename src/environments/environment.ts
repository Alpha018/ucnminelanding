// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  backendUrl: 'http://localhost:3333',
  mcKey: 'BB5ZLRc5NJxGVC9A6ViKJNbAxZcmiMJEYC',
  recaptchaKey: '6LdQtrwZAAAAANBc3OVR_VuYMMnZhKbQVr8avok_',
  analyticsId: 'UA-175987528-1',
  contentful: {
    space: 'kad98swp6atl',
    accessToken: 'CU0IqzruIntrP2UtVLHwQSCLXtK2_DWQLMbbgDouO4M',
    host: 'preview.contentful.com'
  },
  mcServerBackend: {
    serverId: '5f4b1ccaafcf49a9c840cc43'
  }
};
