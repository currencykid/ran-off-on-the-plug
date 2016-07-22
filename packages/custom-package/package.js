Package.describe({
  name: "custom-package"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',

    'nova:core',
    'base-components-2',
    'nova:posts',
    'nova:users'
  ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/stylesheets/custom.scss'
  ], ['client']);

  api.addFiles([
    //'lib/server/templates.js'
  ], ['server']);

  api.addAssets([
    //'lib/server/emails/customNewPost.handlebars',
    //'lib/server/emails/customEmail.handlebars'
  ], ['server']);

});
