# Building the app
sencha build testing

Make sure phonegap/www is a symlink to build/testing (ln -s build/testing phonegap/www)
cd phonegap
phonegap serve

Connector Phonegap Developer App to the address displayed.

# Run local dev env
sencha fs web -p <PORT> start
