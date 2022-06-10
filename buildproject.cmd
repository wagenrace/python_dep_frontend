npm run build
git add dist -f
git commit -m "adding dist subtree"
git subtree push --prefix dist origin gh-pages