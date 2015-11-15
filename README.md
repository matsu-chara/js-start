個人的にJS書くときに使うセットをまとめた。
脱gulpのために頑張るのが特徴

# ディレクトリー構成

```
.
├── lib
├── node_modules
├── src
└── test
    ├── fixtures
    └── unit
```

`src/index.js` にes6で書くと、そこから`babel` + `browserify`で`lib/bundle.js`にまとめてくれる。

テストは`mocha`で書いて`test/`以下に置けば`espower-babelify`が`power-assert`を使えるようにしつつes6を変換してくれる。

`test/unit` にはPhantomJSに依存しないテストを置く。

テスト用のHTMLやJSONは`test/fixtures`に置いて

```javascript
  // html
  window.__html__[`test/fixtures/${page}.html];

  // json(拡張子がつかないので注意)
  window.__json__[`test/fixtures/${json}];
```

のようにするとPhantomJS上でロードできる。

# npm scripts

- `npm run build` : `browserify -t [ babelify ]` で`lib/bundle.js`を生成。

- `npm run watch` : `watchify -t [babelify]` でファイル監視を開始。ファイル保存時に`lib/bundle.js`を生成。

- `lint:js` : `src`, `test` 以下に`eslint`を実行。

- `lint:npm` : `npm-check-updates`で`package.json`に書いてあるライブラリーのアップデートを調べる。

- `lint:text` : `textlint`で`README.md`の日本語を検査する。

- `lint` : `lint:*` を`npm-run-all -p`で並列実行。

- `mocha` : PhantomJSに依存しないユニットテストを実行する。

- `karma` : `mocha`のテストを`PhantomJS`上で実行するための`karma start`を実行する。
